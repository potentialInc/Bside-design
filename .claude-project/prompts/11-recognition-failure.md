# Recognition Result - Failure (11-recognition-failure)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "11-recognition-failure" page:

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
The Recognition Failure bottom sheet appears when the AI cannot immediately identify the captured artwork. It provides processing feedback, suggests possible matches based on location/exhibition context, and offers manual input as fallback.

Purpose:
- Communicate processing status (AI still working)
- Suggest possible artwork matches if available
- Provide manual input option as fallback
- Enable requesting platform to add artwork
- Maintain user confidence despite recognition failure
- Ensure smooth experience with clear next steps

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Bottom sheet overlay over Camera View (PAGE 9)
- Sheet slides up from bottom (300ms ease-out animation)
- Backdrop: rgba(0,0,0,0.50), tap to dismiss (optional)
- Background: Surface color (#FFFFFF light, #1C1C1E dark)
- Border radius: 16pt on top corners only
- Max height: 80% of screen height
- Scrollable content if exceeds max height

**SHEET HANDLE:**
- Position: Top center, 12pt from top edge
- Size: 36x5pt rounded rectangle
- Background: Text Tertiary
- Swipe down to dismiss sheet

**HEADER:**
- Padding: 16pt horizontal, 16pt top
- Layout (horizontal):
  - Title: "Processing Artwork" (Heading 2, 18pt Semibold, Warning Orange #FF9500)
  - Spacer (flex)
  - Close button: X icon (24pt, Text Secondary), 44pt touch target
- Tap close: Dismiss sheet, return to Camera View

**CAPTURED IMAGE WITH OVERLAY:**
- Position: 16pt margin-top from header
- Padding: 0pt (edge-to-edge within sheet)
- Image: Captured artwork photo (full-width, maintain aspect ratio)
- Max height: 280pt
- Overlay (centered on image):
  - Background: Scrim (rgba(0,0,0,0.60))
  - Text: "We are processing this artwork for you" (Body Medium, 15pt Regular, white text, centered)
  - Padding: 16pt horizontal, 12pt vertical
  - Border radius: 8pt
  - Optional: Spinner animation (white, 24pt) above text

**SUGGESTED ARTWORKS (if location/exhibition known):**
- Padding: 16pt horizontal, 16pt top
- Section header: "Could it be one of these?" (Heading 3, 16pt Semibold, Text Primary)
- Horizontal scroll carousel (16pt margin-top):
  - 2-3 artwork cards per location/exhibition context
  - Card size: 160pt width
  - Gap: 12pt
  - Each card:
    - Image: 160x200pt, border radius 12pt, cover fit
    - Title: Body Medium (15pt Semibold), Text Primary, centered, 8pt margin-top, max 1 line ellipsis
    - Artist: Body Small (13pt Regular), Text Secondary, centered, 4pt margin-top
  - Tap card: Assume this is correct artwork, open Recognition Success sheet (PAGE 10) with selected artwork data
- Empty (if no suggestions): Hide this section

**MANUAL INPUT OPTION:**
- Padding: 16pt horizontal, 24pt top
- Content (vertical stack, centered):

  *Icon:*
  - Icon: Pencil/edit icon (48pt, Text Tertiary)
  - Centered

  *Message (12pt margin-top):*
  - Text: "Can't find it?" (Body Large, 17pt Semibold, Text Primary, centered)

  *Manual Input Button (12pt margin-top):*
  - Background: Transparent, Accent Blue text
  - Height: 48pt
  - Text: "Enter Artwork Info Manually" (Body Medium, 15pt Semibold)
  - Full-width
  - Tap: Dismiss sheet, navigate to Manual Artwork Input (PAGE 12)

**REQUEST PLATFORM OPTION:**
- Padding: 16pt horizontal, 16pt top, 24pt bottom (+ safe area)
- Content:

  *Request Button (Secondary):*
  - Background: Transparent with 1pt border (border color)
  - Height: 48pt
  - Border radius: 12pt
  - Text: "Request Platform to Add This Artwork" (Body Medium, 15pt Semibold, Text Primary)
  - Full-width
  - Tap: Submit captured image + metadata to platform for admin review, show success toast "Request submitted. We'll review and add this artwork soon!", dismiss sheet

### KEY FEATURES
- Processing indicator (orange title, spinner, overlay message)
- Captured image displayed (user sees what was captured)
- Suggested artworks if location/exhibition context available (smart fallback)
- Manual input option always available (user not blocked)
- Request platform to add artwork (crowdsourcing)
- Horizontal scroll for suggestions (easy browsing)
- Tap suggestion to select as correct artwork
- Clear messaging ("Could it be one of these?", "Can't find it?")
- Swipe down to dismiss
- Close button for explicit dismissal
- Loading state: Spinner on image overlay
- Dark mode support
- Safe area insets

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Select Suggested Artwork | Tap artwork card in suggestions | Assume this is correct artwork, dismiss current sheet, open Recognition Success sheet (PAGE 10) with selected artwork data |
| Enter Manual Input | Tap "Enter Artwork Info Manually" | Dismiss sheet, navigate to Manual Artwork Input (PAGE 12) with captured image |
| Request Platform Add | Tap "Request Platform to Add This Artwork" | Submit captured image + metadata to admin queue, show success toast, dismiss sheet, return to Camera View |
| Dismiss Sheet | Swipe down, tap backdrop, or tap X | Animate sheet down, return to Camera View (PAGE 9) |
| Scroll Content | Vertical scroll if content exceeds max height | Smooth scroll within sheet |

### BRANDING ELEMENTS
- Processing feedback (orange title, spinner) manages user expectations
- Suggested artworks provide smart fallback (location-based context per design philosophy)
- Manual input ensures user never blocked (Vivino fallback inspiration)
- Request platform option enables crowdsourcing (community-driven)
- Horizontal carousel for suggestions (easy browsing, Pinterest-like)
- Clear messaging ("Could it be one of these?") guides user
- Icon + text pattern ("Can't find it?") friendly and helpful
- Typography hierarchy: Heading 2 (18pt) → Body Large (17pt) → Body Medium (15pt)
- Warning Orange (#FF9500) for processing state (not error, just in progress)
- Accent Blue for manual input CTA
- Generous padding: 16pt margins per 8pt grid
- Smooth animations: Sheet slide up, image fade in
- Dark mode support

---
