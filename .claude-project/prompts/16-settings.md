# Settings (16-settings)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "16-settings" page:

---

bside.art - Mobile Application for Art Discovery & Curation.
**IMPORTANT: Present this design in a MOBILE DEVICE FRAME/MOCKUP (iPhone frame)**
**Display: Show the interface inside a mobile phone mockup container - NOT as a responsive web page**
**Viewport: 375x812pt (iPhone 13 Pro) - Fixed mobile viewport, non-responsive**
**Frame: Include device bezels, notch/dynamic island, and rounded corners in the presentation**

Style: Minimal and Elegant with understated luxury, featuring #1C1C1E primary (Dark Charcoal) and #007AFF secondary (iOS Blue) colors.

**Design Inspiration:**
- Nike SNKRS for minimalist product-focused navigation, smooth transitions, refined tone
- HYPE by Hypebeast for content-driven UI, calm balanced tone, subtle visual accents
- Vivino for object scanning functionality (artwork recognition), information overlay patterns
- Pinterest for visual-first interface, smooth image search/discovery, masonry layouts
- Spotify for playlist organization (collections), curation features, easy content discovery
- Instagram for social features, feed patterns, profile layouts

**The Four Pillars:**
- Camera/Recognition = Vivino (scan artwork → get info, overlay results, manual fallback)
- Feed/Discovery = Pinterest + Instagram (visual-first cards, social feed, infinite scroll)
- Curation/Collections = Spotify (organize captured artworks into collections like playlists)
- Profile/Social = Instagram (follower system, profile tabs, clean user profiles)

**Colors:**
- Primary: #1C1C1E (Dark Charcoal) - For primary buttons, key UI elements, brand presence (sophisticated, lets artwork stand out)
- Accent Blue: #007AFF (iOS Blue) - For links, selected states, informational elements
- Success Green: #34C759 (iOS Green) - Success states
- Error Red: #FF3B30 (iOS Red) - Error states
- Warning Orange: #FF9500 (iOS Orange) - Warning states
- Featured Purple: #AF52DE (iOS Purple) - Use sparingly for featured content
- Background Primary (Light): #FFFFFF
- Background Secondary (Light): #F9F9F9
- Background Primary (Dark): #000000 (True Black for OLED)
- Background Secondary (Dark): #1C1C1E
- Text Primary (Light): rgba(0,0,0,0.87)
- Text Secondary (Light): rgba(0,0,0,0.60)
- Text Tertiary (Light): rgba(0,0,0,0.38)
- Text Primary (Dark): rgba(255,255,255,0.92)
- Text Secondary (Dark): rgba(255,255,255,0.60)
- Text Tertiary (Dark): rgba(255,255,255,0.38)

**Typography:**
- Font Family: SF Pro (iOS) / Roboto (Android) - System native fonts
- Display Large: 32pt Bold - Hero headlines
- Display Medium: 28pt Semibold - Page titles
- Heading 1: 20pt Semibold - Artwork titles
- Heading 2: 18pt Semibold - Artist names, section headers
- Body Large: 17pt Regular - Primary content
- Body Medium: 15pt Regular - Secondary content
- Body Small: 13pt Regular - Metadata
- Caption: 12pt Regular - Timestamps, tertiary info

**Spacing:**
- Base Unit: 8pt grid system
- Card Padding: 16-24pt
- Section Padding: 24-32pt
- Between Cards: 16pt
- Screen Margins: 16pt (mobile), 24pt (tablet)

**Styling:**
- Card Radius: 16pt
- Button Radius: 12pt
- Input Radius: 12pt
- Shadow Elevation-1: 0 2px 8px rgba(0,0,0,0.08)
- Shadow Elevation-2: 0 4px 16px rgba(0,0,0,0.12)
- Shadow Elevation-3: 0 8px 24px rgba(0,0,0,0.16)
- Transition: 300-400ms ease-in-out
- Icons: SF Symbols (iOS) / Material Icons (Android)

**Component Standards:**
- Artwork Card: 16pt radius, Elevation-1 shadow, full-width image with aspect ratio, 12pt content padding
- Collection Card: 16pt radius, 16pt padding, horizontal scrollable carousel (200x240pt thumbnails, 12pt spacing)
- Primary Button: #1C1C1E background, white text, 48pt height, 12pt radius
- Secondary Button: Transparent with border, 48pt height
- Icon Button: 44x44pt minimum touch target
- FAB (Camera): 64x64pt circular, white background
- Bottom Sheet: 16pt top radius, 36x5pt handle, rgba(0,0,0,0.50) backdrop

---

category: user

### SCREEN OVERVIEW
The Settings page provides account management options organized in grouped lists similar to iOS Settings. Users can change account details (username, password), manage notifications, view about information, and perform account actions like logout or delete.

Purpose:
- Manage account settings (username, password, visibility)
- Configure notification preferences
- Access about/legal information (Privacy Policy, Terms, Help)
- Logout or delete account
- Require password confirmation for sensitive actions

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen scrollable page
- Top: Navigation bar (60pt height)
- Content: Grouped list (iOS Settings style)
- Background: Background Primary

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Back button (chevron left icon 24pt + "Back" text), 44pt touch target
  - Center: "Settings" (Heading 2, 18pt Semibold, Text Primary)
  - Right: Empty
- Tap back: Return to My Page (PAGE 15)

**SETTINGS GROUPS:**
- Vertical scroll, 24pt gaps between groups
- Each group: White cards on gray background (or dark equivalent)

**GROUP 1: ACCOUNT SETTINGS (requires password confirmation):**
- Header: "Account Settings" (Caption, 11pt Semibold, Text Tertiary, uppercase), 16pt horizontal padding, 8pt margin-bottom
- Card: Background Surface, border radius 12pt, 16pt horizontal padding
- Items (list rows, 48pt height each, 0.5pt border-bottom except last):

  *Change Username:*
  - Layout (horizontal): Label "Username" (Body Medium, 15pt Regular, Text Primary) left, Chevron right icon (16pt, Text Tertiary) right
  - Tap: Navigate to edit screen (modal or new page), input field for new username, check duplicate, save

  *Change Password (email accounts only):*
  - Layout: Label "Password" left, Chevron right
  - Tap: Navigate to change password screen (current password, new password, confirm)

  *Account Visibility:*
  - Layout: Label "Private Account" left, Toggle switch (right)
  - Default: Off (Public)
  - Tap: Toggle Private/Public, show confirmation if switching to Private ("Your profile will be hidden from search. Only approved followers can see your content.")

  *Allow Search Engines:*
  - Layout: Label "Allow profile in search engines" left, Toggle switch
  - Default: On
  - Tap: Toggle on/off

  *Delete Account:*
  - Layout: Label "Delete Account" (Error Red) left, Chevron right
  - Tap: Navigate to confirmation screen (password input, warning text, final confirmation), on confirm: delete account, logout

**GROUP 2: NOTIFICATION SETTINGS:**
- Header: "Notifications" (Caption, 11pt Semibold, Text Tertiary, uppercase), 16pt horizontal padding, 8pt margin-bottom
- Card: Background Surface, border radius 12pt, 16pt horizontal padding
- Items:

  *New Followers:*
  - Layout: Label "New Followers" left, Toggle switch right
  - Default: On
  - Tap: Toggle on/off, save preference

  *Accepted Follow Requests:*
  - Layout: Label "Accepted Follow Requests" left, Toggle switch
  - Default: On

  *Artwork Comments (future):*
  - Layout: Label "Artwork Comments" left, Toggle switch
  - Default: On

  *Platform Announcements:*
  - Layout: Label "Platform Announcements" left, Toggle switch
  - Default: On

**GROUP 3: ABOUT:**
- Header: "About" (Caption, 11pt Semibold, Text Tertiary, uppercase), 16pt horizontal padding, 8pt margin-bottom
- Card: Background Surface, border radius 12pt, 16pt horizontal padding
- Items:

  *Privacy Policy:*
  - Layout: Label "Privacy Policy" left, Chevron right
  - Tap: Open webview with Privacy Policy document

  *Terms of Service:*
  - Layout: Label "Terms of Service" left, Chevron right
  - Tap: Open webview with Terms document

  *Help & Support:*
  - Layout: Label "Help & Support" left, Chevron right
  - Tap: Open FAQ or contact form

  *App Version:*
  - Layout: Label "App Version" left, Version text "1.0.0" (Caption, Text Tertiary) right
  - No tap action (display only)

**GROUP 4: ACCOUNT ACTIONS:**
- Header: Empty (no header)
- Card: Background Surface, border radius 12pt, 16pt horizontal padding
- Items:

  *Logout:*
  - Layout: Label "Logout" (Error Red) centered
  - Tap: Show confirmation dialog "Are you sure you want to logout?", if confirmed: logout, navigate to Login (PAGE 2)

**PASSWORD CONFIRMATION MODAL (for Account Settings access):**
- Presented as modal/bottom sheet when user taps any Account Settings item
- Background: Surface with backdrop (rgba(0,0,0,0.50))
- Border radius: 16pt (top corners for sheet, 12pt for modal)
- Padding: 24pt
- Content:

  *Title:*
  - Text: "Enter your password to continue" (Heading 2, 18pt Semibold, Text Primary), centered

  *Password Input (16pt margin-top):*
  - Input: 48pt height, 12pt border radius, 16pt padding, secure entry
  - Placeholder: "Your password"
  - Eye toggle icon (24pt) for show/hide

  *Buttons (24pt margin-top):*
  - Primary button: "Confirm" (full-width, 48pt height)
  - Secondary button: "Cancel" (full-width, 48pt height, 12pt margin-top)
  - Tap Confirm: Validate password, if correct: dismiss modal, allow access to Account Settings; if incorrect: show error "Incorrect password"
  - Tap Cancel: Dismiss modal

### KEY FEATURES
- Grouped list follows iOS Settings pattern
- Password confirmation required for Account Settings (security)
- Toggle switches for binary settings (Private Account, Notifications)
- Account visibility toggle with confirmation dialog
- Delete account with strong confirmation (password + warning + final confirm)
- Notification preferences for multiple event types
- Legal documents in webview (Privacy Policy, Terms)
- Help & Support link
- App version display (read-only)
- Logout with confirmation dialog
- Dark mode support
- Smooth animations: Toggle switches, modal presentations
- Safe area insets

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | Return to My Page (PAGE 15) |
| Change Username | Tap "Username" row | Show password confirmation modal, if confirmed: navigate to username edit screen, check duplicate, save new username, show success toast |
| Change Password | Tap "Password" row (email accounts) | Show password confirmation modal, if confirmed: navigate to change password screen (current, new, confirm), validate, save, show success toast |
| Toggle Private Account | Tap toggle switch | If switching to Private: show confirmation dialog, if confirmed: toggle on, save preference; if switching to Public: toggle off, save |
| Toggle Search Engines | Tap toggle switch | Toggle on/off, save preference |
| Delete Account | Tap "Delete Account" row | Show password confirmation modal, if confirmed: navigate to delete confirmation screen (warning text, password re-entry, "Delete My Account" button in Error Red), on final confirm: delete account, logout, navigate to Login (PAGE 2) |
| Toggle Notification | Tap notification toggle switch | Toggle on/off, save preference to backend |
| View Privacy Policy | Tap "Privacy Policy" row | Open webview with Privacy Policy document, close button returns to Settings |
| View Terms | Tap "Terms of Service" row | Open webview with Terms document |
| Open Help | Tap "Help & Support" row | Open FAQ page or contact form (webview or native) |
| Logout | Tap "Logout" row | Show confirmation dialog "Are you sure you want to logout?", if confirmed: clear session, navigate to Login (PAGE 2) |
| Confirm Password | Tap "Confirm" in password modal | Validate password, if correct: dismiss modal, allow access; if incorrect: show error message "Incorrect password" |
| Cancel Password Modal | Tap "Cancel" in modal | Dismiss modal, no action |

### BRANDING ELEMENTS
- iOS Settings style grouped lists (familiar, organized)
- Password confirmation for sensitive actions (security best practice)
- Toggle switches for binary options (modern, clear)
- Confirmation dialogs for destructive actions (logout, delete, private account)
- Error Red for destructive actions (Delete Account, Logout)
- Webviews for legal documents (in-app, no external browser)
- App version display (transparency)
- Typography: Heading 2 (18pt) for title → Body Medium (15pt) for labels → Caption (11pt) for headers
- Surface color cards on Background Primary (iOS pattern)
- Border-bottom between rows (0.5pt border color)
- Generous padding: 16pt horizontal, 24pt gaps between groups
- Dark mode support
- Smooth animations: Toggle switches, modal presentations

---
