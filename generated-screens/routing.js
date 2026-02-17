/**
 * bside.art - Comprehensive Navigation Routing
 * Auto-detects current page and wires up all navigation links.
 * Place this file in the same directory as HTML files.
 */
(function () {
  'use strict';

  // Current page filename
  var path = window.location.pathname;
  var currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  // ─── NAVIGATION MAP ───────────────────────────────────────────────
  // Back button targets per page
  var backTargets = {
    '03-signup.html': './01-welcome.html',
    '03-signup-step1.html': './03-signup.html',
    '03-signup-step2.html': './03-signup-step1.html',
    '03-signup-step3.html': './03-signup-step2.html',
    '04-password-recovery.html': './02-login.html',
    '04-password-recovery-code.html': './04-password-recovery.html',
    '04-password-recovery-new-password.html': './04-password-recovery-code.html',
    '04-password-recovery-success.html': './02-login.html',
    '07-art-feed.html': './06-feed.html',
    '08-collection-detail.html': './06-feed.html',
    '09-artwork-detail.html': './06-feed.html',
    '10-artist-profile.html': './09-artwork-detail.html',
    '11-gallery-profile.html': './06-feed.html',
    '12-camera-view.html': './06-feed.html',
    '13-camera-view-2.html': './12-camera-view.html',
    '14-recognition-success.html': './12-camera-view.html',
    '15-recognition-failure.html': './12-camera-view.html',
    '16-manual-artwork-input.html': './12-camera-view.html',
    '17-search-main.html': './06-feed.html',
    '17-search-empty.html': './17-search-main.html',
    '17-search-suggestions.html': './17-search-main.html',
    '17-search-clear-modal.html': './17-search-main.html',
    '18-search-results.html': './17-search-main.html',
    '18-search-results2.html': './17-search-main.html',
    '19-my-page-profile.html': './06-feed.html',
    '20-settings.html': './19-my-page-profile.html',
    '21-edit-profile.html': './19-my-page-profile.html',
    '22-follower-list.html': './19-my-page-profile.html',
    '23-following-list.html': './19-my-page-profile.html',
    '24-notification-list.html': './06-feed.html'
  };

  // Form submission targets per page
  var formTargets = {
    '02-login.html': './06-feed.html',
    '03-signup-step1.html': './03-signup-step2.html',
    '03-signup-step2.html': './03-signup-step3.html',
    '03-signup-step3.html': './05-profile-setup.html',
    '04-password-recovery.html': './04-password-recovery-code.html',
    '04-password-recovery-code.html': './04-password-recovery-new-password.html',
    '04-password-recovery-new-password.html': './04-password-recovery-success.html',
    '05-profile-setup.html': './06-feed.html',
    '16-manual-artwork-input.html': './06-feed.html',
    '21-edit-profile.html': './19-my-page-profile.html'
  };

  // Pages that should have bottom navigation
  var bottomNavPages = [
    '06-feed.html', '07-art-feed.html', '08-collection-detail.html',
    '12-camera-view.html', '13-camera-view-2.html',
    '14-recognition-success.html', '15-recognition-failure.html',
    '17-search-main.html', '17-search-empty.html', '17-search-suggestions.html',
    '18-search-results.html', '18-search-results2.html',
    '19-my-page-profile.html', '24-notification-list.html'
  ];

  // Named link routes (text → target)
  var namedRoutes = {
    'get started': './03-signup.html',
    'sign up': './03-signup.html',
    'create account': './03-signup.html',
    'log in': './02-login.html',
    'login': './02-login.html',
    'sign in': './02-login.html',
    'forgot password': './04-password-recovery.html',
    'continue with email': './03-signup-step1.html'
  };

  // Bottom nav map
  var bottomNavMap = {
    home: './06-feed.html',
    camera: './12-camera-view.html',
    profile: './19-my-page-profile.html'
  };

  // Top nav icon routes
  var topNavMap = {
    bell: './24-notification-list.html',
    notification: './24-notification-list.html',
    search: './17-search-main.html'
  };

  // ─── HELPERS ──────────────────────────────────────────────────────
  function navigateTo(url) {
    window.location.href = url;
  }

  function getIconName(el) {
    return (el.getAttribute('data-lucide') || el.getAttribute('icon') || '').toLowerCase();
  }

  function getElementText(el) {
    return (el.textContent || '').trim().toLowerCase();
  }

  // ─── 1. BACK BUTTON ROUTING ──────────────────────────────────────
  var backTarget = backTargets[currentPage];
  if (backTarget) {
    // Find back buttons by icon
    var backIcons = document.querySelectorAll(
      '[data-lucide="chevron-left"], [data-lucide="arrow-left"], ' +
      'iconify-icon[icon*="arrow-left"], iconify-icon[icon*="alt-arrow-left"], ' +
      'iconify-icon[icon*="chevron-left"]'
    );
    backIcons.forEach(function (icon) {
      var btn = icon.closest('a') || icon.closest('button');
      if (btn) {
        btn.style.cursor = 'pointer';
        if (btn.tagName === 'A') {
          btn.href = backTarget;
        } else {
          btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            navigateTo(backTarget);
          });
        }
      }
    });

    // Also find text-based back buttons (including "Back to X" patterns)
    document.querySelectorAll('a, button').forEach(function (el) {
      var text = getElementText(el);
      if (text === 'back' || text === '← back' || text.indexOf('back to') === 0) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = backTarget;
        else el.addEventListener('click', function (e) { e.preventDefault(); navigateTo(backTarget); });
      }
    });

    // Also find back buttons using raw SVG chevron-left icons (path d="m15 18-6-6 6-6" or similar)
    document.querySelectorAll('svg').forEach(function (svg) {
      var path = svg.querySelector('path');
      if (path) {
        var d = path.getAttribute('d') || '';
        // Common chevron-left/arrow-left SVG path patterns
        if (d.includes('m15 18-6-6 6-6') || d.includes('15 18-6-6 6-6') ||
            d.includes('M15 18l-6-6 6-6') || d.includes('m 15 18 -6 -6 6 -6')) {
          var btn = svg.closest('a') || svg.closest('button');
          if (btn) {
            btn.style.cursor = 'pointer';
            if (btn.tagName === 'A') btn.href = backTarget;
            else btn.addEventListener('click', function (e) { e.preventDefault(); navigateTo(backTarget); });
          }
        }
      }
    });
  }

  // ─── 2. CLOSE BUTTON ROUTING (X icons) ───────────────────────────
  var closeTarget = backTargets[currentPage] || './06-feed.html';
  var closeIcons = document.querySelectorAll(
    'iconify-icon[icon*="close-circle"], iconify-icon[icon*="close-square"]'
  );
  // Only route top-level close buttons (not card delete buttons)
  document.querySelectorAll('[data-lucide="x"], iconify-icon[icon="lucide:x"]').forEach(function (icon) {
    var btn = icon.closest('a') || icon.closest('button');
    if (btn && !btn.closest('.masonry-item') && !btn.closest('[class*="popup"]') && !btn.closest('[class*="modal"]')) {
      // Only if the button is in nav/header area (top ~120px)
      var rect = btn.getBoundingClientRect();
      if (rect.top < 150) {
        btn.style.cursor = 'pointer';
        if (btn.tagName === 'A') btn.href = closeTarget;
        else btn.addEventListener('click', function () { navigateTo(closeTarget); });
      }
    }
  });

  // ─── 3. FORM SUBMISSION ROUTING ───────────────────────────────────
  var formTarget = formTargets[currentPage];
  if (formTarget) {
    document.querySelectorAll('form').forEach(function (form) {
      // Always override form submission to navigate to target
      // Use .onsubmit property (not setAttribute) to reliably override compiled handlers
      form.onsubmit = function (e) {
        e.preventDefault();
        navigateTo(formTarget);
        return false;
      };
    });

    // Handle ALL submit buttons inside forms + submit-like buttons outside
    document.querySelectorAll('button').forEach(function (btn) {
      var text = getElementText(btn);
      var isSubmitType = btn.type === 'submit' || (btn.closest('form') && btn.type !== 'button');
      var submitTexts = ['continue', 'next', 'submit', 'done', 'complete', 'save',
        'send verification code', 'send reset code', 'send code', 'send',
        'verify', 'confirm', 'reset password', 'create password',
        'skip for now', 'skip'];
      var isSubmitText = false;
      for (var i = 0; i < submitTexts.length; i++) {
        if (text.includes(submitTexts[i])) { isSubmitText = true; break; }
      }

      if (isSubmitType || isSubmitText) {
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          navigateTo(formTarget);
        });
      }
    });
  }

  // ─── 4. NAMED LINK ROUTING ────────────────────────────────────────
  document.querySelectorAll('a[href="#"], a:not([href])').forEach(function (el) {
    var text = getElementText(el);
    Object.keys(namedRoutes).forEach(function (key) {
      if (text.includes(key)) {
        el.href = namedRoutes[key];
        el.style.cursor = 'pointer';
      }
    });
  });
  // Also for buttons
  document.querySelectorAll('button').forEach(function (el) {
    if (el.onclick) return;
    var text = getElementText(el);
    Object.keys(namedRoutes).forEach(function (key) {
      if (text === key || text.includes(key)) {
        // Don't override form submit buttons
        if (el.closest('form') && (key === 'sign in' || key === 'login')) return;
        el.style.cursor = 'pointer';
        el.addEventListener('click', function (e) { e.preventDefault(); navigateTo(namedRoutes[key]); });
      }
    });
  });

  // ─── 5. TOP NAV ICON ROUTING (bell, search) ──────────────────────
  document.querySelectorAll('[data-lucide], iconify-icon').forEach(function (icon) {
    var name = getIconName(icon);
    Object.keys(topNavMap).forEach(function (key) {
      if (name.includes(key)) {
        var btn = icon.closest('a') || icon.closest('button') || icon.parentElement;
        if (btn && !btn.closest('nav[class*="bottom"]') && !btn.closest('[class*="bottom-"]')) {
          btn.style.cursor = 'pointer';
          if (btn.tagName === 'A') {
            btn.href = topNavMap[key];
          } else if (!btn.onclick) {
            btn.addEventListener('click', function () { navigateTo(topNavMap[key]); });
          }
        }
      }
    });
  });

  // ─── 6. BOTTOM NAVIGATION ROUTING ────────────────────────────────
  if (bottomNavPages.indexOf(currentPage) !== -1) {
    var navEl = document.querySelector('nav');
    if (navEl) {
      navEl.querySelectorAll('a').forEach(function (a) {
        var icon = a.querySelector('[data-lucide], iconify-icon');
        if (icon) {
          var name = getIconName(icon);
          if (name.includes('home') || name.includes('house')) {
            a.href = bottomNavMap.home;
          } else if (name.includes('aperture') || name.includes('camera') || name.includes('scan')) {
            a.href = bottomNavMap.camera;
          } else if (name.includes('user') || name.includes('person')) {
            a.href = bottomNavMap.profile;
          }
        }
      });
    }

    // Also catch bottom nav links by their container position
    document.querySelectorAll('[class*="bottom-"] a, [class*="absolute"][class*="bottom"] a').forEach(function (a) {
      var icon = a.querySelector('[data-lucide], iconify-icon');
      if (icon) {
        var name = getIconName(icon);
        if (name.includes('home') || name.includes('house')) a.href = bottomNavMap.home;
        else if (name.includes('aperture') || name.includes('camera') || name.includes('scan')) a.href = bottomNavMap.camera;
        else if (name.includes('user') || name.includes('person')) a.href = bottomNavMap.profile;
        else if (name.includes('search') || name.includes('magnif')) a.href = './17-search-main.html';
      }
    });
  }

  // ─── 7. CONTENT CARD ROUTING ──────────────────────────────────────
  // Artwork cards → artwork detail
  if (['06-feed.html', '07-art-feed.html', '08-collection-detail.html',
    '10-artist-profile.html', '18-search-results.html', '18-search-results2.html',
    '19-my-page-profile.html'].indexOf(currentPage) !== -1) {

    document.querySelectorAll('.masonry-item, [onclick="handleCardClick()"]').forEach(function (item) {
      if (!item.getAttribute('onclick') || item.getAttribute('onclick') === 'handleCardClick()') {
        item.style.cursor = 'pointer';
        item.setAttribute('onclick', "if(!document.body.classList.contains('edit-mode')){window.location.href='./09-artwork-detail.html';}");
      }
    });
  }

  // Feed article cards → artwork detail
  if (currentPage === '06-feed.html' || currentPage === '07-art-feed.html') {
    document.querySelectorAll('article').forEach(function (article) {
      article.style.cursor = 'pointer';
      article.addEventListener('click', function () {
        navigateTo('./09-artwork-detail.html');
      });
    });
  }

  // ─── 8. PAGE-SPECIFIC ROUTING ─────────────────────────────────────

  // 01-welcome.html - "Get Started" button
  if (currentPage === '01-welcome.html') {
    document.querySelectorAll('button').forEach(function (btn) {
      var text = getElementText(btn);
      if (text.includes('get started')) {
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function () { navigateTo('./03-signup.html'); });
      }
    });
  }

  // 03-signup.html - Social sign-in buttons
  if (currentPage === '03-signup.html') {
    document.querySelectorAll('button').forEach(function (btn) {
      var text = getElementText(btn);
      if (text.includes('sign in with apple') || text.includes('sign in with google')) {
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function () { navigateTo('./03-signup-step1.html'); });
      }
    });
  }

  // 04-password-recovery-code.html - Auto-navigate when all 6 digits entered
  if (currentPage === '04-password-recovery-code.html') {
    var codeInputs = document.querySelectorAll('input[maxlength="1"]');
    if (codeInputs.length >= 6) {
      codeInputs.forEach(function (input, index) {
        input.addEventListener('input', function () {
          if (input.value.length === 1 && index === codeInputs.length - 1) {
            // Last digit entered - check if all fields are filled
            var allFilled = true;
            codeInputs.forEach(function (inp) {
              if (!inp.value) allFilled = false;
            });
            if (allFilled) {
              setTimeout(function () { navigateTo('./04-password-recovery-new-password.html'); }, 500);
            }
          }
        });
      });
    }
  }

  // 04-password-recovery-success.html - Auto redirect
  if (currentPage === '04-password-recovery-success.html') {
    setTimeout(function () { navigateTo('./02-login.html'); }, 3000);
  }

  // 05-profile-setup.html - Skip/Complete buttons
  if (currentPage === '05-profile-setup.html') {
    document.querySelectorAll('a, button').forEach(function (el) {
      var text = getElementText(el);
      if (text.includes('skip') || text.includes('complete') || text.includes('done')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './06-feed.html';
        else el.addEventListener('click', function () { navigateTo('./06-feed.html'); });
      }
    });
  }

  // 09-artwork-detail.html - About Artist section → artist profile
  if (currentPage === '09-artwork-detail.html') {
    document.querySelectorAll('.cursor-pointer, [class*="cursor-pointer"]').forEach(function (el) {
      var text = getElementText(el);
      if (text.includes('about artist')) {
        el.addEventListener('click', function () { navigateTo('./10-artist-profile.html'); });
      }
    });
    // Artist name link in About Artist card
    document.querySelectorAll('h3').forEach(function (h3) {
      var text = getElementText(h3);
      if (text === 'chansong kim' || text.includes('kim')) {
        var card = h3.closest('[class*="rounded"]');
        if (card) {
          card.style.cursor = 'pointer';
          card.addEventListener('click', function () { navigateTo('./10-artist-profile.html'); });
        }
      }
    });
    // Related Exhibitions → gallery profile
    document.querySelectorAll('[class*="cursor-pointer"]').forEach(function (el) {
      var text = getElementText(el);
      if (text.includes('exhibition') || text.includes('tic tac toe')) {
        el.addEventListener('click', function () { navigateTo('./11-gallery-profile.html'); });
      }
    });
  }

  // 12-camera-view.html - Shutter button
  if (currentPage === '12-camera-view.html') {
    document.querySelectorAll('button').forEach(function (btn) {
      var text = getElementText(btn);
      var icon = btn.querySelector('[data-lucide], iconify-icon');
      var iconName = icon ? getIconName(icon) : '';
      if (iconName.includes('circle') || btn.classList.contains('shutter') ||
        (btn.offsetWidth > 50 && btn.offsetWidth < 100 && btn.offsetHeight > 50 && btn.offsetHeight < 100)) {
        // Large circular button = shutter
        var style = window.getComputedStyle(btn);
        if (style.borderRadius && parseInt(style.borderRadius) > 20) {
          btn.addEventListener('click', function () { navigateTo('./13-camera-view-2.html'); });
        }
      }
    });
  }

  // 13-camera-view-2.html - Shutter button
  if (currentPage === '13-camera-view-2.html') {
    document.querySelectorAll('button').forEach(function (btn) {
      var icon = btn.querySelector('[data-lucide], iconify-icon');
      var iconName = icon ? getIconName(icon) : '';
      if (iconName.includes('circle')) {
        btn.addEventListener('click', function () { navigateTo('./14-recognition-success.html'); });
      }
      var style = window.getComputedStyle(btn);
      if (style.borderRadius && parseInt(style.borderRadius) > 20 && btn.offsetWidth > 50) {
        btn.addEventListener('click', function () { navigateTo('./14-recognition-success.html'); });
      }
    });
  }

  // 14-recognition-success.html - View artwork
  if (currentPage === '14-recognition-success.html') {
    document.querySelectorAll('button, a').forEach(function (el) {
      var text = getElementText(el);
      if (text.includes('view') || text.includes('detail') || text.includes('artwork')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './09-artwork-detail.html';
        else el.addEventListener('click', function () { navigateTo('./09-artwork-detail.html'); });
      }
    });
  }

  // 15-recognition-failure.html - Manual input / Retry
  if (currentPage === '15-recognition-failure.html') {
    document.querySelectorAll('button, a').forEach(function (el) {
      var text = getElementText(el);
      if (text.includes('manual') || text.includes('enter')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './16-manual-artwork-input.html';
        else el.addEventListener('click', function () { navigateTo('./16-manual-artwork-input.html'); });
      }
      if (text.includes('retry') || text.includes('try again') || text.includes('scan again')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './12-camera-view.html';
        else el.addEventListener('click', function () { navigateTo('./12-camera-view.html'); });
      }
    });
  }

  // 17-search-clear-modal.html - Clear / Cancel buttons
  if (currentPage === '17-search-clear-modal.html') {
    document.querySelectorAll('button, a').forEach(function (el) {
      var text = getElementText(el);
      if (text.includes('clear')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './17-search-empty.html';
        else el.addEventListener('click', function () { navigateTo('./17-search-empty.html'); });
      }
      if (text.includes('cancel')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './17-search-main.html';
        else el.addEventListener('click', function () { navigateTo('./17-search-main.html'); });
      }
    });
  }

  // 17-search-main.html - Search input → suggestions; Clear history
  if (currentPage === '17-search-main.html') {
    document.querySelectorAll('button, a').forEach(function (el) {
      var text = getElementText(el);
      if (text.includes('clear') && (text.includes('history') || text.includes('all'))) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './17-search-clear-modal.html';
        else el.addEventListener('click', function () { navigateTo('./17-search-clear-modal.html'); });
      }
    });
    // Suggestion items → search results
    document.querySelectorAll('[class*="cursor-pointer"]').forEach(function (el) {
      if (!el.onclick && el.querySelector('img')) {
        el.addEventListener('click', function () { navigateTo('./18-search-results.html'); });
      }
    });
  }

  // Search results - Result items → detail pages
  if (currentPage === '18-search-results.html' || currentPage === '18-search-results2.html') {
    document.querySelectorAll('[class*="cursor-pointer"]').forEach(function (el) {
      if (!el.onclick) {
        var text = getElementText(el);
        if (text.includes('artist') || el.querySelector('img[alt*="artist"]')) {
          el.addEventListener('click', function () { navigateTo('./10-artist-profile.html'); });
        } else {
          el.addEventListener('click', function () { navigateTo('./09-artwork-detail.html'); });
        }
      }
    });
  }

  // 19-my-page-profile.html - Settings, Edit Profile, Followers, Following
  if (currentPage === '19-my-page-profile.html') {
    document.querySelectorAll('a, button').forEach(function (el) {
      var text = getElementText(el);
      var icon = el.querySelector('[data-lucide], iconify-icon');
      var iconName = icon ? getIconName(icon) : '';

      if (iconName.includes('settings') || iconName.includes('gear') || iconName.includes('cog')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './20-settings.html';
        else el.addEventListener('click', function () { navigateTo('./20-settings.html'); });
      }
      if (text.includes('edit profile')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './21-edit-profile.html';
        else el.addEventListener('click', function () { navigateTo('./21-edit-profile.html'); });
      }
      if (text.includes('follower') && !text.includes('following')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './22-follower-list.html';
        else el.addEventListener('click', function () { navigateTo('./22-follower-list.html'); });
      }
      if (text.includes('following')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './23-following-list.html';
        else el.addEventListener('click', function () { navigateTo('./23-following-list.html'); });
      }
    });
  }

  // 20-settings.html - Logout
  if (currentPage === '20-settings.html') {
    document.querySelectorAll('a, button').forEach(function (el) {
      var text = getElementText(el);
      if (text.includes('log out') || text.includes('logout') || text.includes('sign out')) {
        el.style.cursor = 'pointer';
        if (el.tagName === 'A') el.href = './01-welcome.html';
        else el.addEventListener('click', function () { navigateTo('./01-welcome.html'); });
      }
    });
  }

  // ─── 9. FIX REMAINING href="#" ────────────────────────────────────
  // Convert remaining `href="#"` to contextual defaults
  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    var text = getElementText(a);
    var icon = a.querySelector('[data-lucide], iconify-icon');
    var iconName = icon ? getIconName(icon) : '';

    // Try to match by text or icon
    if (iconName.includes('bell') || iconName.includes('notification')) {
      a.href = './24-notification-list.html';
    } else if (iconName.includes('search')) {
      a.href = './17-search-main.html';
    } else if (iconName.includes('home') || iconName.includes('house')) {
      a.href = './06-feed.html';
    } else if (iconName.includes('user') || iconName.includes('person')) {
      a.href = './19-my-page-profile.html';
    } else if (iconName.includes('camera') || iconName.includes('aperture')) {
      a.href = './12-camera-view.html';
    } else if (text.includes('privacy') || text.includes('terms')) {
      // Keep as # - no target page exists
      a.href = 'javascript:void(0)';
    } else if (text.includes('website') || text.includes('www.')) {
      // External link placeholder
      a.href = 'javascript:void(0)';
    }
  });

  // ─── 10. LOGO ROUTING ────────────────────────────────────────────
  // Logo images/text that should go to feed
  document.querySelectorAll('img[alt*="bside"], img[alt*="logo"]').forEach(function (img) {
    var parent = img.closest('a');
    if (parent) {
      parent.href = './06-feed.html';
    } else if (!img.closest('main') || img.closest('header')) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function () { navigateTo('./06-feed.html'); });
    }
  });

})();
