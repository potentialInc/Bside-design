# Manual Artwork Input (14-manual-artwork-input)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "14-manual-artwork-input" page:

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
The Manual Artwork Input page provides a form for users to manually enter artwork details when AI recognition fails. Users input artist name, artwork title, year, and medium, with the captured image preview at the top.

Purpose:
- Enable manual artwork entry as fallback
- Collect essential artwork metadata
- Show captured image preview for reference
- Validate required fields before submission
- Save manually entered artwork to collection
- Ensure users can always capture artworks

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen form page
- Top: Navigation bar (60pt height)
- Form content: Scrollable
- Bottom: Submit button (sticky or in scroll)
- Background: Background Primary
- Keyboard-aware: Scroll to focused field

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Back button (chevron left icon 24pt + "Back" text), 44pt touch target
  - Center: "Enter Artwork Info" (Heading 2, 18pt Semibold, Text Primary)
  - Right: Empty (balance)
- Tap back: Dismiss form, return to Camera View (warn if fields filled)

**CAPTURED IMAGE PREVIEW:**
- Position: Top of form, 16pt margin-top from nav bar
- Padding: 16pt horizontal
- Image container:
  - Thumbnail: 120x150pt, border radius 12pt, cover fit
  - Centered horizontally
  - Border: 1pt border color
  - Shadow: Elevation-1
- 24pt margin-bottom from image to form fields

**FORM FIELDS:**
- Padding: 16pt horizontal
- Vertical stack, 16pt gaps between fields
- Keyboard type: Appropriate for each field

  *Artist Name (Required):*
  - Label: "Artist Name *" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Enter artist name"
  - Border: 1pt border color (default), 2pt Accent Blue (focus), 2pt Error Red (error)
  - Font: Body Large (17pt Regular)
  - Validation: Required (show error if empty on submit)
  - Error message: "Artist name is required" (Body Small, 13pt Regular, Error Red, 4pt margin-top)

  *Artwork Title (Required):*
  - Label: "Artwork Title *" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Enter artwork title"
  - Border: 1pt border color (default), 2pt Accent Blue (focus), 2pt Error Red (error)
  - Font: Body Large (17pt Regular)
  - Validation: Required (show error if empty on submit)
  - Error message: "Artwork title is required" (Body Small, Error Red, 4pt margin-top)

  *Year (Optional):*
  - Label: "Year" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Enter year (e.g., 1985)"
  - Keyboard: Numeric
  - Border: 1pt border color (default), 2pt Accent Blue (focus)
  - Font: Body Large (17pt Regular)
  - Validation: Optional, but must be 4-digit number if entered
  - Error message: "Please enter a valid year" (Body Small, Error Red, 4pt margin-top)

  *Medium (Optional):*
  - Label: "Medium" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Enter medium (e.g., Oil on canvas)"
  - Border: 1pt border color (default), 2pt Accent Blue (focus)
  - Font: Body Large (17pt Regular)
  - Validation: Optional

**SUBMIT BUTTON:**
- Position: Bottom of form, 24pt margin-top from last field
- Padding: 16pt horizontal, 24pt bottom (+ safe area)
- Button:
  - Background: #1C1C1E (enabled), 50% opacity (disabled)
  - Height: 48pt
  - Border radius: 12pt
  - Text: "Save to Collection" (Body Medium, 15pt Semibold, white)
  - Full-width
  - Disabled: If artist name or artwork title empty
  - Loading state: Spinner (white, 20pt) replaces text on submit
- Tap: Validate all fields, create artwork entry with manual data, save to "Captured Artworks" collection, show success toast, navigate to My Page (Captures tab)

### KEY FEATURES
- Captured image preview at top (user sees what was captured)
- Required fields marked with asterisk (artist name, artwork title)
- Optional fields (year, medium) for additional context
- Real-time validation on required fields
- Inline error messages below each field (Error Red)
- Submit button disabled until required fields filled
- Keyboard types appropriate for each field (text, numeric)
- Loading state on submit button
- Success toast on save: "Artwork saved to Captures"
- Navigate to My Page after save (user sees new capture)
- Warning dialog if user tries to go back with filled fields
- Dark mode support
- Keyboard management (dismiss on tap outside, scroll to focused field)
- Safe area insets

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | If fields filled, show confirmation dialog "Discard changes?", if confirmed or fields empty, return to Camera View (PAGE 9) |
| Focus Field | Tap input field | Show keyboard, scroll field to visible area, highlight border with Accent Blue |
| Submit Form | Tap "Save to Collection" button | Validate required fields, if valid: create artwork entry with manual data, save to Captures collection, show success toast "Artwork saved to Captures", navigate to My Page (PAGE 15, Captures tab); if invalid: show inline error messages |
| Dismiss Keyboard | Tap outside input fields | Hide keyboard |
| Validate Year | Type in year field | If 4 digits, validate as year (1000-current year), if invalid show error |

### BRANDING ELEMENTS
- Manual input as fallback ensures users never blocked (Vivino inspiration)
- Required fields clearly marked (asterisk, validation)
- Captured image preview provides context
- Generous input heights (48pt) per design system
- Typography: Body Small (13pt) for labels → Body Large (17pt) for inputs
- Error Red (#FF3B30) for validation messages
- Accent Blue (#007AFF) for focus states
- Submit button disabled state prevents errors
- Success toast confirms save
- Navigate to My Page to show result (user confidence)
- 8pt grid spacing throughout (16pt gaps, 16pt margins)
- Dark mode support
- Keyboard-aware scrolling (UX polish)

---
