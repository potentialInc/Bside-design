# Bside.art - Navigation Routing Updates

## Status: In Progress

### Completed Updates ✅

**Authentication Pages:**
- `02-login.html` - Added demo login functionality (demo@demo.com / 1234)
  - Login success → `06-feed.html`
  - Signup success → `05-profile-setup.html`
  - Forgot password link → `04-password-recovery.html`

**Main App Navigation:**
- `06-feed.html` - Bottom nav + Top header fully configured
  - Bottom: Home → `06-feed.html`, Camera → `12-camera-view.html`, Profile → `19-my-page-profile.html`
  - Top header: Search → `17-search-main.html`, Notifications → `24-notification-list.html`

- `19-my-page-profile.html` - All navigation links updated
  - Bottom: Home, Search, Camera, Profile
  - Settings icon → `20-settings.html`

**Detail Pages:**
- `09-artwork-detail.html` - Back button → `06-feed.html`
- `11-gallery-profile.html` - Back button → `06-feed.html`

---

### Pending Updates (To Complete)

**Artist Profile (10-artist-profile.html):**
- Back button → `06-feed.html`
- Follower/Following buttons → `22-follower-list.html`, `23-following-list.html`

**Collection Detail (08-collection-detail.html):**
- Back button → `06-feed.html`
- Artwork cards → `09-artwork-detail.html`

**Art Feed (07-art-feed.html):**
- Add bottom navigation (Home, Camera, Profile)
- Add top header (Search, Logo, Notifications)
- Artwork cards → `09-artwork-detail.html`

**Camera Flow:**
- `12-camera-view.html` - Close → `06-feed.html`, Success → `14-recognition-success.html`
- `13-camera-view-2.html` - Close → `06-feed.html`
- `14-recognition-success.html` - View Details → `09-artwork-detail.html`, Done → `06-feed.html`
- `15-recognition-failure.html` - Retry → `12-camera-view.html`, Manual Input → `16-manual-artwork-input.html`
- `16-manual-artwork-input.html` - Cancel → `06-feed.html`, Submit → `09-artwork-detail.html`

**Search Flow:**
- `17-search-main.html` - Close/Back → `06-feed.html`
- `18-search-results.html` - Back → `17-search-main.html`, Results → various detail pages

**Settings & Profile:**
- `20-settings.html` - Back → `19-my-page-profile.html`, Logout → `02-login.html`
- `21-edit-profile.html` - Back/Cancel → `19-my-page-profile.html`
- `22-follower-list.html` - Back → `19-my-page-profile.html`, Users → `10-artist-profile.html`
- `23-following-list.html` - Back → `19-my-page-profile.html`, Users → `10-artist-profile.html`

**Notifications:**
- `24-notification-list.html` - Close → `06-feed.html`, Items → various detail pages

---

## Navigation Patterns

### Bottom Navigation (3-item floating nav)
Appears on: Feed, Art Feed, My Page Profile

```html
<a href="./06-feed.html"><!-- Home icon --></a>
<a href="./12-camera-view.html"><!-- Camera icon (center, floating) --></a>
<a href="./19-my-page-profile.html"><!-- User/Profile icon --></a>
```

### Top Header
Appears on: Most main pages

```html
<a href="./17-search-main.html"><!-- Search icon (left) --></a>
<h1>bside</h1><!-- Logo (center) -->
<a href="./24-notification-list.html"><!-- Notifications bell (right) --></a>
```

### Back Buttons
Detail pages should return to their parent:
- Detail pages → Feed (`06-feed.html`)
- Search results → Search main (`17-search-main.html`)
- Settings/Profile pages → My Page (`19-my-page-profile.html`)
- Camera flow → Previous step or Feed

---

## Demo Account
- **Email:** demo@demo.com
- **Password:** 1234
- **Works on:** Login page (`02-login.html`)

---

## Testing Checklist

- [ ] Login flow (demo account → feed)
- [ ] Bottom navigation (home, camera, profile) on all main pages
- [ ] Top header (search, notifications) on all main pages
- [ ] Back buttons on all detail pages
- [ ] Camera flow navigation
- [ ] Search flow navigation
- [ ] Settings and profile navigation
- [ ] Cross-page links (artwork cards, user profiles, etc.)
