# Artist Profile (07-artist-profile)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "07-artist-profile" page:

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
The Artist Profile page showcases an artist's complete portfolio with profile header, biography, artworks grid, and exhibitions list. Users can learn about the artist, follow them, explore their artworks, and discover exhibitions featuring their work.

Purpose:
- Display artist information and biography
- Showcase artist's portfolio as masonry grid
- List artist's exhibitions (upcoming and past)
- Enable following artist for updates
- Provide artist's social links and location
- Show engagement metrics (captures, artworks, exhibitions)

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Vertical scroll page
- Top: Navigation bar (60pt height, fixed or transparent with blur)
- Profile header section
- Bio section
- Artworks section with grid
- Exhibitions section with tabs
- Background: Background Primary

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Transparent with blur (becomes opaque white/black on scroll)
- Layout (horizontal):
  - Left: Back button (chevron left icon 24pt), 44pt touch target
  - Center: Artist name (Heading 2, 18pt Semibold) - only visible when scrolled past header
  - Right: Share icon (24pt), 44pt touch target
- Tap share: Open system share sheet with artist profile URL

**PROFILE HEADER:**
- Background: Background Secondary (#F9F9F9 light, #1C1C1E dark) or gradient
- Padding: 24pt horizontal, 32pt top, 32pt bottom
- Content (vertical stack, centered):

  *Avatar:*
  - Size: 96pt circular, centered
  - Border: Optional 2pt white border with shadow

  *Artist Name (16pt margin-top):*
  - Text: Display Medium (28pt Semibold), Text Primary, centered

  *Birth Year + Location (8pt margin-top):*
  - Text: Body Medium (15pt Regular), Text Secondary, centered
  - Format: "b. 1985, Based in Seoul, Korea"

  *Social Links (12pt margin-top):*
  - Horizontal row, centered, 24pt gaps
  - Instagram icon (24pt, tappable) + Website icon (24pt, tappable)
  - Icons: Text Secondary, tap opens in browser/app

  *Follow Button (16pt margin-top):*
  - Primary button if not following: #1C1C1E background, white text, 48pt height, 12pt radius, 180pt width
  - Secondary button if following: Transparent with 1pt border, 48pt height, 12pt radius, 180pt width
  - Text: "Follow" or "Following" (Body Medium, 15pt Semibold)

  *Stats Row (24pt margin-top):*
  - Horizontal layout, evenly spaced, centered
  - 3 stats (24pt gaps):
    - Captures: Number (Heading 1, 20pt Bold) over "Captures" label (Caption, 12pt, Text Tertiary)
    - Artworks: Number over "Artworks" label
    - Exhibitions: Number over "Exhibitions" label

**BIO SECTION:**
- Padding: 24pt horizontal, 24pt top
- Section header: "About" (Heading 3, 16pt Semibold, Text Primary)
- Bio text (12pt margin-top):
  - Text: Body Large (17pt Regular), Text Primary
  - Max 5 lines with "Read more" link (Accent Blue) if longer
  - Tap "Read more": Expand to full bio, link becomes "Show less"
- Divider: 24pt margin-top, 1pt border color, full-width

**ARTWORKS SECTION:**
- Padding: 24pt horizontal, 24pt top
- Section header (horizontal layout):
  - Left: "Artworks" (Heading 3, 16pt Semibold, Text Primary)
  - Right: Sort/Filter icon (24pt, Text Secondary), 44pt touch target
    - Tap: Open bottom sheet with sort options (Date, Capture Count, Name)
- Artwork grid (16pt margin-top):
  - Layout: 2-column masonry (mobile), 3-column (tablet)
  - Gap: 12pt between columns and rows
  - Each artwork card:
    - Image: Full-width within column, maintain aspect ratio, cover fit
    - Border radius: 12pt
    - Text overlay at bottom (gradient background):
      - Title: Body Medium (15pt Semibold), white text, max 1 line ellipsis, 12pt padding
    - Capture count badge (top-right):
      - Same style as previous pages (blur background, Caption 11pt)
  - Paginate: Load 12-20 initially, load more on scroll (infinite scroll)
  - Tap artwork: Navigate to Artwork Detail (PAGE 6)
- Divider: 24pt margin-top

**EXHIBITIONS SECTION:**
- Padding: 24pt horizontal, 24pt top
- Section header: "Exhibitions" (Heading 3, 16pt Semibold, Text Primary)
- Segmented control (12pt margin-top):
  - 2 tabs: "Upcoming" | "Past"
  - Tab width: Equal (50% each), full-width control
  - Height: 36pt
  - Background: Background Secondary (#F9F9F9 light, #1C1C1E dark)
  - Active tab: Primary color background (#1C1C1E), white text
  - Inactive tab: Transparent, Text Secondary
  - Border radius: 8pt
  - Animation: Slide active indicator (200ms ease)
- Exhibition list (16pt margin-top):
  - Vertical list of exhibition cards (compact)
  - Each card:
    - Background: Surface color
    - Border: 1pt border color
    - Border radius: 12pt
    - Padding: 16pt
    - Layout:
      - Exhibition name: Heading 3 (16pt Semibold), Text Primary
      - Gallery name: Body Small (13pt Regular), Text Secondary, 4pt margin-top
      - Dates: Caption (12pt Regular), Text Tertiary, 4pt margin-top
        - Format: "March 15 - April 30, 2026"
    - 12pt gap between cards
  - Tap card: Navigate to Exhibition Detail or Gallery Profile (PAGE 8)
- Empty state (if no exhibitions):
  - Icon: Calendar icon (64pt, Text Tertiary), centered
  - Message: "No upcoming exhibitions" or "No past exhibitions" (Body Large, Text Secondary), centered

### KEY FEATURES
- Comprehensive artist profile with stats
- Social links (Instagram, website) open externally
- Follow/unfollow functionality with state persistence
- Bio expansion ("Read more" / "Show less")
- Masonry artwork grid adapts to aspect ratios
- Sort/filter artworks (by date, capture count, name)
- Infinite scroll on artworks (load more)
- Exhibitions tabbed view (Upcoming vs Past)
- Share artist profile via system sheet
- Loading states: Skeleton cards for artworks and exhibitions
- Empty states for exhibitions if none exist
- Dark mode support
- Smooth scroll performance with lazy loading
- Image optimization (thumbnails in grid)

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | Return to previous screen |
| Share Profile | Tap share icon | Open system share sheet with artist profile URL |
| Follow/Unfollow | Tap Follow/Following button | Call follow API, toggle button state |
| Open Social Link | Tap Instagram/Website icon | Open URL in browser or native app |
| Expand Bio | Tap "Read more" | Expand bio to full text, link becomes "Show less" |
| Sort Artworks | Tap sort/filter icon | Open bottom sheet with sort options, apply selected sort |
| View Artwork | Tap artwork card | Navigate to Artwork Detail (PAGE 6) with artwork ID |
| Switch Exhibition Tab | Tap "Upcoming" or "Past" tab | Switch tab content, animate indicator slide |
| View Exhibition | Tap exhibition card | Navigate to Exhibition Detail or Gallery Profile (PAGE 8) |
| Infinite Scroll Artworks | Scroll to bottom of artworks grid | Load next 12-20 artworks, append to grid |

### BRANDING ELEMENTS
- Artist as focus: Large avatar, prominent name per design philosophy
- Stats row provides engagement context (captures, artworks, exhibitions)
- Social proof: Capture counts on artworks
- Masonry grid preserves artwork integrity (no cropping)
- Exhibition context per bside philosophy (art + curation)
- Follow button prominent for social engagement
- Generous spacing: 24pt sections, 12pt gaps per 8pt grid
- Typography hierarchy: Display Medium (28pt) → Heading 3 (16pt) → Body Large (17pt)
- Segmented control follows iOS patterns
- Dark mode: True black background
- Accent Blue for interactive elements
- Smooth animations: Tab switching, bio expansion

---
