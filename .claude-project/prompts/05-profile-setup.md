# Profile Setup (05-profile-setup)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "05-profile-setup" page:

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
- Primary: #1C1C1E (Dark Charcoal) - For primary buttons, key UI elements, brand presence
- Accent Blue: #007AFF (iOS Blue) - For links, selected states, informational elements
- Success Green: #34C759 (iOS Green) - Success states
- Error Red: #FF3B30 (iOS Red) - Error states
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
- Font Family: SF Pro (iOS) / Roboto (Android)
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
- Screen Margins: 16pt

**Styling:**
- Card Radius: 16pt
- Button Radius: 12pt
- Input Radius: 12pt
- Shadow Elevation-1: 0 2px 8px rgba(0,0,0,0.08)
- Shadow Elevation-2: 0 4px 12px rgba(0,0,0,0.12)
- Shadow Elevation-3: 0 8px 24px rgba(0,0,0,0.16)
- Transition: 300-400ms ease-in-out
- Icons: SF Symbols (iOS) / Material Icons (Android)

---

category: auth

### SCREEN OVERVIEW
The Profile Setup Screen appears as a modal or full-screen prompt immediately after first login (both social and email sign-up). It welcomes new users and guides them through customizing their profile by adding a photo, choosing a username (with real-time duplicate checking), and optionally writing a bio. The screen can be completed immediately or skipped for later, with defaults provided. This creates a friendly onboarding experience while collecting essential profile information.

Purpose:
- Welcome new users to bside with warm, friendly prompt
- Collect essential profile information (photo, username, bio)
- Provide auto-generated username with duplicate checking
- Allow users to skip setup and complete later (defaults provided)
- Create smooth transition into main app experience

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Modal or full-screen prompt presentation
- Centered content, max-width 400pt
- Background: #FFFFFF (light) or #000000 (dark)
- Vertical padding: 32pt from top, 24pt from bottom safe area
- Close button (X) top-right if modal (dismissible)

**WELCOME HEADER (TOP):**
- Title: "Welcome to bside!" (Display Medium 28pt, #1C1C1E, centered)
- Subtitle: "Set up your profile to get started" (Body Large, Text Secondary, centered, 12pt below title)
- Optional celebratory icon or illustration (64pt, centered, above title)

**PROFILE PHOTO SELECTOR:**
- Circular avatar placeholder (96pt diameter, centered)
- Default: Gray placeholder with camera icon (32pt, Text Tertiary)
- "Add Photo" button below avatar (Tertiary style, compact, 32pt height, centered)
- Tap opens photo picker (camera or library options)
- Optional: If skipped, default avatar provided
- Margin: 32pt below subtitle

**USERNAME INPUT:**
- Label: "Username" (Caption, Text Secondary, left-aligned, 8pt above field)
- Text input field: 48pt height, 12pt radius, Background Secondary (#F9F9F9)
- Pre-filled with auto-generated username (e.g., "user_12345")
- Placeholder: "Choose your username"
- Leading icon: @ symbol (16pt, Text Tertiary)
- Real-time duplicate checking:
  - Available: Green checkmark icon (16pt, right of input) + "Available" (Caption, Success Green)
  - Taken: Red X icon + "Username already taken" (Caption, Error Red)
  - Checking: Spinner (16pt, right of input)
- Margin: 24pt from photo section

**BIO TEXT AREA (OPTIONAL):**
- Label: "Bio (optional)" (Caption, Text Secondary, left-aligned, 8pt above field)
- Multi-line text input: Min 80pt height, auto-expand, max 200 chars, 12pt radius
- Background: Background Secondary (#F9F9F9)
- Placeholder: "Tell us a bit about yourself..."
- Character counter: "0 / 200" (Caption, Text Tertiary, bottom-right of field)
- Margin: 16pt from username field

**COMPLETE BUTTON:**
- Text: "Complete" (Body Large Semibold, white)
- 48pt height, 12pt radius, #1C1C1E background
- Full-width, 24pt margin from bio field
- Enabled when username is available (not necessarily filled if auto-generated accepted)
- Loading state: Spinner
- Action: Save profile, enter Art Feed (PAGE 06)

**SKIP BUTTON:**
- Text: "Skip for now" (Body Medium, #007AFF)
- Tertiary button style (text-only, no background)
- Full-width, 16pt below Complete button
- Action: Enter Art Feed with defaults (auto-generated username, default avatar, no bio)
- User can edit profile later from My Page

### KEY FEATURES
- Triggered after first login (both social and email sign-up)
- Can be presented as modal (with X to dismiss) or full-screen
- Profile photo optional (default avatar provided if skipped)
- Username with real-time duplicate checking (API call on typing debounce 500ms)
- Auto-generated default username pre-filled (e.g., "user_12345", "art_lover_789")
- Bio optional with 200 character limit and counter
- "Complete" button saves profile and enters app
- "Skip for now" button enters app with defaults (can edit later from My Page)
- Close button (X, top-right) if modal presentation (same as Skip behavior)
- Validation: Only username availability required, all else optional
- Loading state on Complete button during profile save
- Success toast after save: "Profile created!" (Success Green)
- Smooth transition to Art Feed after completion or skip
- Dark mode support

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Add Photo | Tap "Add Photo" button or avatar placeholder | Open photo picker (camera or library), on select update avatar preview |
| Check Username | Type in username field (debounce 500ms) | API call to check availability, show checkmark or error |
| Update Character Count | Type in bio field | Update counter "N / 200", prevent typing beyond limit |
| Complete Setup | Tap "Complete" button | API call to save profile (photo, username, bio), on success navigate to Art Feed (PAGE 06) |
| Skip Setup | Tap "Skip for now" button | Navigate to Art Feed with defaults (auto-generated username, default avatar, no bio) |
| Dismiss Modal | Tap X (top-right) if modal | Same as Skip - enter Art Feed with defaults |

### BRANDING ELEMENTS
- Minimal and elegant layout (welcoming, not overwhelming)
- Friendly tone with "Welcome to bside!" greeting
- Understated luxury with clean, centered form
- Calm and composed (not pushy - skip option clearly visible)
- Primary button (#1C1C1E) for Complete action
- Secondary Blue (#007AFF) for Skip option
- Success Green (#34C759) for positive validation (username available)
- Error Red (#FF3B30) for negative validation (username taken)
- Real-time validation provides immediate feedback (green checkmark encourages completion)
- Optional elements clearly labeled ("optional") to reduce pressure
- Auto-generated username reduces friction (users can accept default easily)
- Skip option respects user choice (can complete later from My Page)
- Smooth transition to main app maintains flow
- Dark mode with true black (#000000) for OLED efficiency
- Typography hierarchy: Display Medium for title, Body Large for buttons, Caption for labels/counters

---
