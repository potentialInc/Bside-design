# Edit Profile (17-edit-profile)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "17-edit-profile" page:

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
The Edit Profile page allows users to modify their profile information including profile photo, username, and bio. Changes are saved via nav bar action, with validation and feedback.

Purpose:
- Edit profile photo (upload new photo)
- Change username (with duplicate check)
- Edit bio (max 200 characters)
- Save changes to profile
- Provide real-time character count and validation

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen form page
- Top: Navigation bar with save action (60pt height)
- Form content: Scrollable
- Background: Background Primary
- Keyboard-aware: Scroll to focused field

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Cancel button (text "Cancel", Accent Blue), 44pt touch target
  - Center: "Edit Profile" (Heading 2, 18pt Semibold, Text Primary)
  - Right: Save button (text "Save", Accent Blue, enabled if changes made, disabled otherwise), 44pt touch target
- Tap Cancel: Show confirmation if changes made ("Discard changes?"), return to My Page (PAGE 15)
- Tap Save: Validate fields, save to API, show success toast, return to My Page

**FORM CONTENT:**
- Padding: 24pt horizontal, 32pt top
- Vertical stack, 24pt gaps between fields

**PROFILE PHOTO:**
- Avatar: 96pt circular, centered
- "Change Photo" button (12pt margin-top):
  - Text button: "Change Photo" (Body Medium, 15pt Semibold, Accent Blue), centered
  - Tap: Open action sheet with options: "Take Photo", "Choose from Library", "Remove Photo"
    - Take Photo: Open camera, capture photo, crop to square, update avatar preview
    - Choose from Library: Open photo picker, select photo, crop to square, update preview
    - Remove Photo: Set to default avatar (initials or placeholder)

**USERNAME:**
- Label: "Username" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
- Input: 48pt height, 12pt border radius, 16pt padding
- Placeholder: "Enter username"
- Border: 1pt border color (default), 2pt Accent Blue (focus), 2pt Error Red (error)
- Font: Body Large (17pt Regular)
- Validation: Real-time duplicate check (debounced 500ms)
  - If duplicate: Show error message "Username already taken" (Body Small, Error Red, 4pt margin-top)
  - If available: Show success checkmark icon (16pt, Success Green, right side of input)
- Max length: 30 characters

**BIO:**
- Label: "Bio" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
- Textarea: Min 120pt height, 12pt border radius, 16pt padding
- Placeholder: "Tell others about yourself"
- Border: 1pt border color (default), 2pt Accent Blue (focus)
- Font: Body Large (17pt Regular)
- Max length: 200 characters
- Character counter: "0 / 200" (Caption, 12pt Regular, Text Tertiary), 4pt margin-top, right-aligned
  - Updates in real-time as typing
  - Error Red when approaching limit (190+)

### KEY FEATURES
- Cancel and Save actions in nav bar (iOS pattern)
- Profile photo change via action sheet (Take Photo, Choose from Library, Remove)
- Username duplicate check with real-time feedback
- Bio character counter (max 200 characters)
- Save button disabled until changes made
- Validation before save
- Success toast on save: "Profile updated"
- Confirmation dialog if canceling with unsaved changes
- Image cropping for profile photo (square aspect ratio)
- Loading state on Save button (spinner)
- Dark mode support
- Keyboard management (dismiss on tap outside, scroll to focused field)
- Safe area insets

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Cancel | Tap "Cancel" button | If changes made: show confirmation "Discard changes?", if confirmed or no changes: return to My Page (PAGE 15) |
| Save | Tap "Save" button | Validate username (not duplicate), validate bio (≤200 chars), save to API, show success toast "Profile updated", return to My Page |
| Change Photo | Tap "Change Photo" button | Open action sheet with options: "Take Photo", "Choose from Library", "Remove Photo" |
| Take Photo | Select "Take Photo" in action sheet | Open camera, capture photo, show crop screen (square crop), update avatar preview |
| Choose from Library | Select "Choose from Library" in action sheet | Open photo picker, select photo, show crop screen (square crop), update avatar preview |
| Remove Photo | Select "Remove Photo" in action sheet | Set avatar to default (initials or placeholder), update preview |
| Type Username | Type in username field | Check for duplicate (debounced 500ms), show error if duplicate or success checkmark if available |
| Type Bio | Type in bio textarea | Update character counter, highlight in Error Red if > 190 characters |
| Dismiss Keyboard | Tap outside input fields | Hide keyboard |

### BRANDING ELEMENTS
- Cancel/Save in nav bar follows iOS patterns
- Action sheet for photo change (modern, clear options)
- Real-time username validation (user-friendly)
- Character counter for bio (transparency, prevents errors)
- Success checkmark on available username (positive feedback)
- Error messages inline (Error Red)
- Save button disabled until changes (prevents accidental submissions)
- Confirmation dialog on cancel (prevents lost work)
- Image cropping for profile photo (consistency)
- Success toast on save (feedback)
- Typography: Heading 2 (18pt) for title → Body Large (17pt) for inputs → Caption (12pt) for counter
- Accent Blue for interactive elements (Save, Change Photo, focus states)
- Error Red for validation errors
- Success Green for checkmark
- 8pt grid spacing: 16pt padding, 24pt gaps
- Dark mode support

---
