# Gallery Profile (10-gallery-profile)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "10-gallery-profile" page:

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

category: public

### SCREEN OVERVIEW
The Gallery Profile page displays gallery information including logo, location, opening hours, and exhibitions (current and past). Users can view gallery details, find location/hours, and explore exhibitions hosted by the gallery.

Purpose:
- Display gallery branding and information
- Provide practical details (address, hours, website)
- Showcase current exhibitions
- List past exhibitions for discovery
- Enable navigation to maps and external website
- Support discovery of gallery-related artworks

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Vertical scroll page
- Top: Navigation bar (60pt height)
- Header section with gallery info
- Opening hours section
- Current exhibitions section
- Past exhibitions section (optional)
- Background: Background Primary

**TOP HEADER BAR (GLOBAL - Pages 06-10, 15-22):**
- Fixed top position
- Height: 44pt + safe area inset
- Background: Transparent or Surface color with blur
- Left: Search icon (24pt, tappable 44x44pt) → Navigate to Search (PAGE 15)
- Center: bside logo (proportional, centered)
- Right: Notification bell (24pt, tappable 44x44pt, red dot badge if unread) → Navigate to Notifications (PAGE 22)
- Badge: Red dot (8pt diameter, #FF3B30, top-right of bell)

**BOTTOM NAVIGATION BAR (GLOBAL - Pages 06-10, 15-22):**
- Fixed bottom position with floating style
- Height: 56pt + safe area inset
- Background: #FFFFFF (light) / #1C1C1E (dark)
- Border radius: 24pt (floating pill effect)
- Horizontal margins: 16pt, Bottom margin: 8pt above safe area
- Shadow: Elevation-2 (0 4px 12px rgba(0,0,0,0.12))
- 3 items evenly spaced: Home | Camera | My Page
- Each item: Icon (24pt) + Label (Caption 11pt)
- Active state: Icon + Label in Primary color (#1C1C1E or #007AFF), bold
- Inactive state: Icon + Label in Text Tertiary
- Tap target: Full item area (minimum 56pt height)

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Back button (chevron left icon 24pt), 44pt touch target
  - Center: Gallery name (Heading 2, 18pt Semibold) - shows on scroll past header
  - Right: Share icon (24pt), 44pt touch target

**HEADER SECTION:**
- Background: Background Secondary (#F9F9F9 light, #1C1C1E dark)
- Padding: 32pt horizontal, 40pt top, 32pt bottom
- Content (vertical stack, centered):

  *Gallery Logo:*
  - Size: 80pt square or maintain aspect ratio if rectangular, max 80pt height
  - Centered

  *Gallery Name (16pt margin-top):*
  - Text: Display Medium (28pt Semibold), Text Primary, centered

  *Location (12pt margin-top):*
  - Text: Body Medium (15pt Regular), Text Secondary, centered
  - Format: "Seoul, Korea"

  *Address (8pt margin-top):*
  - Text: Body Small (13pt Regular), Text Secondary, centered, tappable
  - Format: "123 Art Street, Gangnam-gu"
  - Tap: Open in Maps app with gallery location

  *Website Link (8pt margin-top):*
  - Text: Body Small (13pt Regular), Accent Blue, centered, tappable
  - Format: "www.galleryname.com"
  - Tap: Open in browser

**OPENING HOURS SECTION:**
- Padding: 24pt horizontal, 24pt top
- Section header: "Hours" (Heading 3, 16pt Semibold, Text Primary)
- Hours list (16pt margin-top):
  - Vertical list, 8pt gaps between rows
  - Each row (horizontal layout):
    - Day: Body Medium (15pt Regular), Text Primary, left-aligned, 80pt width
    - Hours: Body Medium (15pt Regular), Text Secondary, right-aligned
    - Format: "Monday        10:00 AM - 6:00 PM"
  - Today's hours: Text Primary with Semibold weight (both day and hours)
  - Closed days: "Closed" text in Text Tertiary
- Divider: 24pt margin-top, 1pt border color, full-width

**CURRENT EXHIBITIONS SECTION:**
- Padding: 24pt horizontal, 24pt top
- Section header: "Current Exhibitions" (Heading 3, 16pt Semibold, Text Primary)
- Exhibition cards (16pt margin-top):
  - Vertical list, 16pt gaps between cards
  - Each card:
    - Background: Surface color
    - Border radius: 12pt
    - Padding: 0pt (image edge-to-edge at top)
    - Shadow: Elevation-1
    - Layout:
      - Exhibition image: Full-width, 180pt height, cover fit, border-radius 12pt on top corners
      - Content padding: 16pt
      - Exhibition name: Heading 2 (18pt Semibold), Text Primary
      - Dates: Caption (12pt Regular), Text Tertiary, 4pt margin-top
        - Format: "March 15 - April 30, 2026"
      - Artists: Body Small (13pt Regular), Text Secondary, 4pt margin-top
        - Format: "Featuring [Artist 1], [Artist 2]"
        - Max 2 artists shown, "+ N more" if more artists
  - Tap card: Navigate to Exhibition Detail (future) or Collection Detail (PAGE 7)
- Empty state (if no current exhibitions):
  - Icon: Calendar icon (64pt, Text Tertiary), centered
  - Message: "No current exhibitions" (Body Large, Text Secondary), centered
- Divider: 24pt margin-top

**PAST EXHIBITIONS SECTION (optional):**
- Padding: 24pt horizontal, 24pt top
- Section header: "Past Exhibitions" (Heading 3, 16pt Semibold, Text Primary)
- Exhibition cards (16pt margin-top):
  - Vertical list, compact style
  - Each card:
    - Background: Transparent or Surface color
    - Border: 1pt border color (no shadow)
    - Border radius: 12pt
    - Padding: 16pt
    - Layout:
      - Exhibition name: Body Medium (15pt Semibold), Text Primary
      - Dates: Caption (12pt Regular), Text Tertiary, 4pt margin-top
    - 12pt gaps between cards
  - Tap card: Navigate to Exhibition Detail or Collection Detail
- Bottom padding: 32pt

### KEY FEATURES
- Gallery branding with logo
- Practical information (address, hours, website)
- Today's hours highlighted (bold)
- Address tappable (opens Maps)
- Website link tappable (opens browser)
- Current exhibitions with full image cards
- Past exhibitions in compact list format
- Empty states if no exhibitions
- Share gallery profile
- Loading states: Skeleton cards
- Dark mode support
- Smooth scroll performance

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | Return to previous screen |
| Share Gallery | Tap share icon | Open system share sheet with gallery profile URL |
| Open in Maps | Tap address | Open Maps app with gallery location pinned |
| Open Website | Tap website link | Open gallery website in browser |
| View Current Exhibition | Tap current exhibition card | Navigate to Exhibition Detail or Collection Detail (PAGE 7) |
| View Past Exhibition | Tap past exhibition card | Navigate to Exhibition Detail or Collection Detail |

### BRANDING ELEMENTS
- Gallery branding prominent (logo, name)
- Practical information accessible (hours, address, website)
- Today's hours highlighted for user convenience
- Current exhibitions showcased with imagery (visual-first)
- Past exhibitions in compact format (information-dense)
- Generous spacing: 24pt sections per 8pt grid
- Typography hierarchy: Display Medium (28pt) → Heading 3 (16pt) → Body Medium (15pt)
- Elevation-1 shadows on current exhibition cards (emphasis)
- Accent Blue for links (website)
- Dark mode support

---
