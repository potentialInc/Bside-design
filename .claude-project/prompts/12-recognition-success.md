# Recognition Result - Success (12-recognition-success)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "12-recognition-success" page:

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
The Recognition Success bottom sheet appears after capturing an artwork and successfully identifying it. It displays the corrected artwork image, comprehensive metadata, and actions to add to collection or view full details.

Purpose:
- Confirm successful artwork recognition
- Display recognized artwork image and metadata
- Provide immediate feedback after capture
- Enable adding artwork to collection
- Allow viewing full artwork details
- Celebrate successful capture

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
- Background: Text Tertiary (rgba(0,0,0,0.38) light, rgba(255,255,255,0.38) dark)
- Swipe down to dismiss sheet

**HEADER:**
- Padding: 16pt horizontal, 16pt top
- Layout (horizontal):
  - Title: "Artwork Recognized" (Heading 2, 18pt Semibold, Success Green #34C759)
  - Spacer (flex)
  - Close button: X icon (24pt, Text Secondary), 44pt touch target
- Tap close: Dismiss sheet, return to Camera View

**CAPTURED IMAGE:**
- Position: 16pt margin-top from header
- Padding: 0pt (edge-to-edge within sheet)
- Image: Corrected artwork photo (perspective correction applied by recognition)
- Aspect ratio: 16:10 (standard artwork ratio) or original if available
- Max height: 320pt
- Border radius: 0pt (edge-to-edge)
- Animation: Fade in (400ms) after sheet appears
- Loading: Show shimmer placeholder while image loads

**ARTWORK DETAILS:**
- Padding: 16pt horizontal, 16pt top
- Content (vertical stack):

  *Artwork Title:*
  - Text: Heading 1 (20pt Semibold), Text Primary
  - Max 2 lines with ellipsis

  *Artist Name (8pt margin-top):*
  - Text: Body Medium (15pt Regular), Text Secondary, tappable (underline on press)
  - Tap: Dismiss sheet, navigate to Artist Profile (PAGE 7)

  *Metadata (8pt margin-top):*
  - Text: Body Small (13pt Regular), Text Tertiary
  - Format: "1985 • Oil on canvas"
  - Bullet-separated (year, medium)

  *Capture Info (12pt margin-top):*
  - Icon + text: 📍 location pin emoji + location (Body Small, 13pt Regular, Text Secondary)
  - Date: Caption (12pt Regular), Text Tertiary, 4pt margin-top
    - Format: "Captured on March 15, 2026"

**ACTION BUTTONS:**
- Padding: 16pt horizontal, 24pt top, 24pt bottom (+ safe area)
- Vertical stack, 12pt gap

  *Add to Collection Button (Primary):*
  - Background: #1C1C1E, white text
  - Height: 48pt
  - Border radius: 12pt
  - Text: "Add to Collection" (Body Medium, 15pt Semibold)
  - Icon: Plus icon (20pt) left of text
  - Full-width
  - Tap: Open collection picker bottom sheet (overlay current sheet or replace), select collection, save, show success toast, navigate to My Page or Feed

  *View Details Button (Tertiary):*
  - Background: Transparent, Accent Blue text
  - Height: 48pt
  - Text: "View Details" (Body Medium, 15pt Semibold)
  - Full-width
  - Tap: Dismiss sheet, navigate to Artwork Detail (PAGE 6)

### KEY FEATURES
- Bottom sheet presentation (slides up from bottom)
- Success indicator (green title "Artwork Recognized")
- Corrected artwork image (perspective correction from AI)
- Comprehensive metadata (title, artist, year, medium)
- Capture location and date recorded
- Artist name tappable (quick navigation)
- Two primary actions: Add to Collection (main CTA), View Details (secondary)
- Swipe down to dismiss (handle at top)
- Backdrop tap to dismiss (optional)
- Close button (X) for explicit dismissal
- Image fade-in animation for polish
- Loading state for image (shimmer)
- Dark mode support
- Safe area insets

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Add to Collection | Tap "Add to Collection" button | Open collection picker (bottom sheet or modal), user selects existing collection or creates new, save artwork, show success toast "Added to [Collection Name]", navigate to My Page (Captures tab) or Feed |
| View Details | Tap "View Details" button | Dismiss sheet, navigate to Artwork Detail (PAGE 6) with artwork ID |
| Navigate to Artist | Tap artist name | Dismiss sheet, navigate to Artist Profile (PAGE 7) with artist ID |
| Dismiss Sheet | Swipe down on handle, tap backdrop, or tap X button | Animate sheet down (300ms), return to Camera View (PAGE 9) |
| Scroll Content | Vertical scroll if content exceeds max height | Smooth scroll within sheet |

### BRANDING ELEMENTS
- Success feedback (green title, success green #34C759) provides positive reinforcement
- Corrected artwork image showcases AI capability (Vivino inspiration)
- Bottom sheet follows iOS/Android patterns (handle, swipe to dismiss)
- Capture date/location preserves context
- "Add to Collection" as primary action (collection curation is core feature per Spotify inspiration)
- "View Details" offers deeper exploration
- Image fade-in animation creates premium feel
- Typography hierarchy: Heading 1 (20pt) for title → Body Medium (15pt) → Body Small (13pt)
- Generous padding: 16pt margins per 8pt grid
- Elevation-3 shadow on sheet for depth
- Dark mode support with true black
- Smooth animations: Slide up (300ms), fade in (400ms)

---
