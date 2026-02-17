/**
 * Routing Fix Script for Bside-design
 * Processes all HTML files and injects proper navigation routing
 */
const fs = require('fs');
const path = require('path');

// Routing map: file -> { backTarget, bottomNav (true/false), customRoutes }
const ROUTING_MAP = {
  'index.html': {
    autoRedirect: './01-welcome.html',
  },
  '01-welcome.html': {
    routes: {
      'Get Started': './02-login.html',
      'Sign Up': './03-signup.html',
      'Log In': './02-login.html',
      'Login': './02-login.html',
    },
  },
  '02-login.html': {
    formTarget: './06-feed.html',
    routes: {
      'Forgot password': './04-password-recovery.html',
      'Sign Up': './03-signup.html',
      'Sign up': './03-signup.html',
      'Create Account': './03-signup.html',
    },
  },
  '03-signup.html': {
    routes: {
      'Continue with Email': './03-signup-step1.html',
      'Log In': './02-login.html',
      'Login': './02-login.html',
      'Sign In': './02-login.html',
      'Sign in': './02-login.html',
    },
    socialTarget: './05-profile-setup.html',
  },
  '03-signup-step1.html': {
    backTarget: './03-signup.html',
    formTarget: './03-signup-step2.html',
    routes: {
      'Sign In': './02-login.html',
      'Sign in': './02-login.html',
      'Log In': './02-login.html',
    },
  },
  '03-signup-step2.html': {
    backTarget: './03-signup-step1.html',
    formTarget: './03-signup-step3.html',
    routes: {
      'Sign In': './02-login.html',
      'Sign in': './02-login.html',
      'Log In': './02-login.html',
    },
  },
  '03-signup-step3.html': {
    backTarget: './03-signup-step2.html',
    formTarget: './05-profile-setup.html',
    routes: {
      'Sign In': './02-login.html',
      'Sign in': './02-login.html',
      'Log In': './02-login.html',
    },
  },
  '04-password-recovery.html': {
    backTarget: './02-login.html',
    formTarget: './04-password-recovery-code.html',
    routes: {
      'Sign In': './02-login.html',
      'Sign in': './02-login.html',
      'Log In': './02-login.html',
      'Login': './02-login.html',
    },
  },
  '04-password-recovery-code.html': {
    backTarget: './04-password-recovery.html',
    formTarget: './04-password-recovery-new-password.html',
    routes: {
      'Sign In': './02-login.html',
      'Sign in': './02-login.html',
    },
  },
  '04-password-recovery-new-password.html': {
    backTarget: './04-password-recovery-code.html',
    formTarget: './04-password-recovery-success.html',
    routes: {
      'Sign In': './02-login.html',
      'Sign in': './02-login.html',
    },
  },
  '04-password-recovery-success.html': {
    routes: {
      'Back to Login': './02-login.html',
      'Sign In': './02-login.html',
      'Log In': './02-login.html',
      'Login': './02-login.html',
    },
  },
  '05-profile-setup.html': {
    formTarget: './06-feed.html',
    routes: {
      'Skip': './06-feed.html',
      'Complete': './06-feed.html',
      'Done': './06-feed.html',
      'Get Started': './06-feed.html',
    },
  },
  '06-feed.html': {
    bottomNav: true,
    activeTab: 'home',
    routes: {},
    topNavRoutes: {
      'search': './17-search-main.html',
      'notification': './24-notification-list.html',
      'bell': './24-notification-list.html',
    },
    contentRoutes: {
      'collection': './08-collection-detail.html',
      'artwork': './09-artwork-detail.html',
    },
  },
  '07-art-feed.html': {
    bottomNav: true,
    activeTab: 'home',
    topNavRoutes: {
      'search': './17-search-main.html',
      'notification': './24-notification-list.html',
      'bell': './24-notification-list.html',
    },
    contentRoutes: {
      'collection': './08-collection-detail.html',
      'artwork': './09-artwork-detail.html',
    },
  },
  '08-collection-detail.html': {
    backTarget: './06-feed.html',
    bottomNav: true,
    activeTab: 'home',
    contentRoutes: {
      'artwork': './09-artwork-detail.html',
    },
  },
  '09-artwork-detail.html': {
    backTarget: './06-feed.html',
    routes: {
      'artist': './10-artist-profile.html',
    },
  },
  '10-artist-profile.html': {
    backTarget: './06-feed.html',
    contentRoutes: {
      'artwork': './09-artwork-detail.html',
    },
  },
  '11-gallery-profile.html': {
    backTarget: './06-feed.html',
  },
  '12-camera-view.html': {
    closeTarget: './06-feed.html',
    bottomNav: true,
    activeTab: 'camera',
    routes: {
      'capture': './13-camera-view-2.html',
    },
  },
  '13-camera-view-2.html': {
    closeTarget: './12-camera-view.html',
    routes: {
      'capture': './14-recognition-success.html',
    },
  },
  '14-recognition-success.html': {
    closeTarget: './12-camera-view.html',
    routes: {
      'View': './09-artwork-detail.html',
      'Done': './06-feed.html',
    },
  },
  '15-recognition-failure.html': {
    closeTarget: './12-camera-view.html',
    routes: {
      'Try Again': './12-camera-view.html',
      'Retry': './12-camera-view.html',
      'Manual': './16-manual-artwork-input.html',
      'Enter Manually': './16-manual-artwork-input.html',
      'manual': './16-manual-artwork-input.html',
    },
  },
  '16-manual-artwork-input.html': {
    backTarget: './12-camera-view.html',
    formTarget: './06-feed.html',
    routes: {
      'Submit': './06-feed.html',
      'Save': './06-feed.html',
    },
  },
  '17-search-main.html': {
    backTarget: './06-feed.html',
    bottomNav: true,
    activeTab: 'search',
    routes: {
      'Clear Search History': './17-search-clear-modal.html',
    },
  },
  '17-search-suggestions.html': {
    backTarget: './17-search-main.html',
    suggestionTarget: './18-search-results.html',
  },
  '17-search-empty.html': {
    backTarget: './17-search-main.html',
    bottomNav: true,
    activeTab: 'search',
  },
  '17-search-clear-modal.html': {
    routes: {
      'Clear All': './17-search-empty.html',
      'Cancel': './17-search-main.html',
    },
  },
  '18-search-results.html': {
    backTarget: './17-search-main.html',
    bottomNav: true,
    activeTab: 'search',
    contentRoutes: {
      'artwork': './09-artwork-detail.html',
      'artist': './10-artist-profile.html',
      'user': './19-my-page-profile.html',
      'gallery': './11-gallery-profile.html',
    },
  },
  '19-my-page-profile.html': {
    bottomNav: true,
    activeTab: 'profile',
    routes: {
      'Settings': './20-settings.html',
      'Edit Profile': './21-edit-profile.html',
    },
  },
  '20-settings.html': {
    backTarget: './19-my-page-profile.html',
    routes: {
      'Log Out': './01-welcome.html',
      'Logout': './01-welcome.html',
      'Sign Out': './01-welcome.html',
    },
  },
  '21-edit-profile.html': {
    backTarget: './19-my-page-profile.html',
    formTarget: './19-my-page-profile.html',
    routes: {
      'Cancel': './19-my-page-profile.html',
      'Save': './19-my-page-profile.html',
    },
  },
  '22-follower-list.html': {
    backTarget: './19-my-page-profile.html',
  },
  '23-following-list.html': {
    backTarget: './19-my-page-profile.html',
  },
  '24-notification-list.html': {
    backTarget: './06-feed.html',
    bottomNav: true,
    activeTab: 'notifications',
  },
};

const BOTTOM_NAV_LINKS = {
  home: './06-feed.html',
  search: './17-search-main.html',
  camera: './12-camera-view.html',
  profile: './19-my-page-profile.html',
  notifications: './24-notification-list.html',
};

// Bottom nav script to inject
function getBottomNavScript(activeTab) {
  return `
<script>
(function() {
  // Bottom Navigation Routing
  var bottomNav = document.querySelector('[class*="bottom-"] [class*="flex"]') ||
                  document.querySelector('.fixed.bottom-0') ||
                  document.querySelector('[class*="absolute"][class*="bottom-"]');

  // Find all navigation-like containers at the bottom
  var allElements = document.querySelectorAll('a, button');
  var navMap = ${JSON.stringify(BOTTOM_NAV_LINKS)};
  var activeTab = '${activeTab}';

  allElements.forEach(function(el) {
    var text = (el.textContent || '').trim().toLowerCase();
    var iconEl = el.querySelector('[data-lucide], iconify-icon, [class*="icon"], svg');
    var iconName = '';
    if (iconEl) {
      iconName = (iconEl.getAttribute('data-lucide') || iconEl.getAttribute('icon') || '').toLowerCase();
    }

    // Match bottom nav items by icon or text
    if (iconName.includes('home') || iconName.includes('house') || text === 'home' || text === 'feed') {
      if (el.tagName === 'A') el.href = navMap.home;
      else el.onclick = function() { location.href = navMap.home; };
    }
    if (iconName.includes('search') || iconName.includes('magnif') || text === 'search') {
      if (el.closest('[class*="bottom"]') || el.closest('nav')) {
        if (el.tagName === 'A') el.href = navMap.search;
        else el.onclick = function() { location.href = navMap.search; };
      }
    }
    if (iconName.includes('camera') || text === 'camera' || text === 'scan') {
      if (el.tagName === 'A') el.href = navMap.camera;
      else el.onclick = function() { location.href = navMap.camera; };
    }
    if (iconName.includes('user') || iconName.includes('person') || text === 'profile' || text === 'my page') {
      if (el.closest('[class*="bottom"]') || el.closest('nav')) {
        if (el.tagName === 'A') el.href = navMap.profile;
        else el.onclick = function() { location.href = navMap.profile; };
      }
    }
    if (iconName.includes('bell') || iconName.includes('notification') || text === 'notifications') {
      if (el.closest('[class*="bottom"]') || el.closest('nav')) {
        if (el.tagName === 'A') el.href = navMap.notifications;
        else el.onclick = function() { location.href = navMap.notifications; };
      }
    }
  });
})();
</script>`;
}

function getRoutingScript(config) {
  const parts = [];

  // Back button routing
  if (config.backTarget) {
    parts.push(`
  // Back button
  var backBtns = document.querySelectorAll('[data-lucide="chevron-left"], [data-lucide="arrow-left"], [class*="back"], iconify-icon[icon*="arrow-left"], iconify-icon[icon*="alt-arrow-left"]');
  backBtns.forEach(function(icon) {
    var btn = icon.closest('button') || icon.closest('a') || icon.parentElement;
    if (btn) {
      btn.style.cursor = 'pointer';
      btn.onclick = function(e) { e.preventDefault(); location.href = '${config.backTarget}'; };
    }
  });`);
  }

  // Close button routing
  if (config.closeTarget) {
    parts.push(`
  // Close button
  var closeBtns = document.querySelectorAll('[data-lucide="x"], [data-lucide="x-circle"], iconify-icon[icon*="close"], iconify-icon[icon*="x-mark"]');
  closeBtns.forEach(function(icon) {
    var btn = icon.closest('button') || icon.closest('a') || icon.parentElement;
    if (btn) {
      btn.style.cursor = 'pointer';
      btn.onclick = function(e) { e.preventDefault(); location.href = '${config.closeTarget}'; };
    }
  });`);
  }

  // Auto redirect
  if (config.autoRedirect) {
    parts.push(`
  // Auto redirect after delay
  setTimeout(function() { location.href = '${config.autoRedirect}'; }, 2500);`);
  }

  // Form target
  if (config.formTarget) {
    parts.push(`
  // Form submission
  var forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    if (!form.getAttribute('onsubmit')) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        location.href = '${config.formTarget}';
      });
    }
  });
  // Primary/Submit buttons (not in forms)
  var submitBtns = document.querySelectorAll('button[type="submit"], button:not([type])');
  submitBtns.forEach(function(btn) {
    var text = (btn.textContent || '').trim().toLowerCase();
    if (['continue', 'next', 'submit', 'done', 'complete', 'save', 'sign up', 'create account', 'reset password', 'verify', 'confirm'].includes(text) ||
        text.includes('continue') || text.includes('next') || text.includes('submit') || text.includes('complete') || text.includes('get started')) {
      if (!btn.closest('form') && !btn.onclick) {
        btn.onclick = function(e) { e.preventDefault(); location.href = '${config.formTarget}'; };
      }
    }
  });`);
  }

  // Suggestion targets
  if (config.suggestionTarget) {
    parts.push(`
  // Suggestion items → search results
  var suggestionItems = document.querySelectorAll('[class*="cursor-pointer"][class*="items-center"]');
  suggestionItems.forEach(function(item) {
    if (!item.onclick) {
      item.onclick = function() { location.href = '${config.suggestionTarget}'; };
    }
  });`);
  }

  // Named routes
  if (config.routes && Object.keys(config.routes).length > 0) {
    const routeEntries = Object.entries(config.routes).map(([text, target]) =>
      `    '${text.toLowerCase()}': '${target}'`
    ).join(',\n');

    parts.push(`
  // Named routes
  var routeMap = {
${routeEntries}
  };
  var clickables = document.querySelectorAll('a[href="#"], a:not([href]), button');
  clickables.forEach(function(el) {
    var text = (el.textContent || '').trim();
    Object.keys(routeMap).forEach(function(key) {
      if (text.toLowerCase().includes(key)) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') {
          el.href = routeMap[key];
        } else if (!el.onclick) {
          el.onclick = function(e) { e.preventDefault(); location.href = routeMap[key]; };
        }
      }
    });
  });`);
  }

  // Top nav routes
  if (config.topNavRoutes) {
    parts.push(`
  // Top nav icon routes
  var topIcons = document.querySelectorAll('[data-lucide], iconify-icon');
  topIcons.forEach(function(icon) {
    var name = (icon.getAttribute('data-lucide') || icon.getAttribute('icon') || '').toLowerCase();
    ${Object.entries(config.topNavRoutes).map(([match, target]) => `
    if (name.includes('${match}')) {
      var btn = icon.closest('a') || icon.closest('button') || icon.parentElement;
      if (btn && !btn.closest('[class*="bottom"]')) {
        btn.style.cursor = 'pointer';
        if (btn.tagName === 'A') btn.href = '${target}';
        else btn.onclick = function() { location.href = '${target}'; };
      }
    }`).join('')}
  });`);
  }

  if (parts.length === 0) return '';

  return `
<script>
(function() {${parts.join('\n')}
})();
</script>`;
}

function processFile(filePath, fileName) {
  const config = ROUTING_MAP[fileName];
  if (!config) {
    console.log(`  SKIP: No routing config for ${fileName}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Remove any existing routing scripts we may have added before
  content = content.replace(/\n<!-- ROUTING START -->[\s\S]*?<!-- ROUTING END -->/g, '');

  // Build routing script
  let routingBlock = '';

  const mainScript = getRoutingScript(config);
  const navScript = config.bottomNav ? getBottomNavScript(config.activeTab || 'home') : '';

  if (mainScript || navScript) {
    routingBlock = `\n<!-- ROUTING START -->${mainScript}${navScript}\n<!-- ROUTING END -->`;
  }

  if (routingBlock) {
    // Insert before closing </body> tag
    if (content.includes('</body>')) {
      content = content.replace('</body>', `${routingBlock}\n</body>`);
    } else {
      content += routingBlock;
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  FIXED: ${fileName}`);
  } else {
    console.log(`  SKIP: No routes needed for ${fileName}`);
  }
}

function processDirectory(dirPath, label) {
  console.log(`\nProcessing ${label}: ${dirPath}`);

  if (!fs.existsSync(dirPath)) {
    console.log(`  Directory not found: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));
  console.log(`  Found ${files.length} HTML files`);

  files.forEach(file => {
    processFile(path.join(dirPath, file), file);
  });
}

// Process all three directories
const baseDir = __dirname;
processDirectory(baseDir, 'Root');
processDirectory(path.join(baseDir, 'generated-screens'), 'Generated Screens');
processDirectory(path.join(baseDir, '.playwright-mcp', 'site-files'), 'Playwright Site Files');

console.log('\nDone! All routing fixed.');
