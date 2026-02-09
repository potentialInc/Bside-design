# Artwork Detail (08-artwork-detail)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "08-artwork-detail" page:

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
The Artwork Detail page provides comprehensive information about a single artwork with a full-bleed hero image, metadata, artist bio, exhibition context, and related content. This is a content-rich page with parallax scrolling hero image and multiple sections for engagement and discovery.

Purpose:
- Showcase artwork as hero with full-bleed image
- Provide artwork metadata (title, artist, year, medium, dimensions)
- Display engagement metrics (capture count)
- Show exhibition context if applicable
- Present artist information with follow option
- Suggest related artworks, artists, and exhibitions
- Enable adding to collection and sharing

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Vertical scroll page with parallax hero image
- Hero image at top (full-bleed, edge-to-edge)
- Content sections below (scrollable with 16pt horizontal padding)
- Bottom action bar (sticky, blur background)
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

**HERO IMAGE SECTION:**
- Image: Full-width, edge-to-edge, maintain aspect ratio (no cropping)
- Height: Flexible based on aspect ratio, min 300pt, max 600pt
- Parallax effect: Image scrolls at 0.5x speed of content below (slower scroll creates depth)
- Image loading: Blur-up progressive loading (low-res blur → high-res)
- Overlay elements:
  - Back button (top-left): 44x44pt touch target, 16pt from edges + safe area
    - Icon: Chevron left (24pt white icon) with blur background circle (rgba(0,0,0,0.60), 40pt diameter)
  - More button (top-right): 44x44pt touch target, 16pt from edges + safe area
    - Icon: Three dots (24pt white icon) with blur background circle (rgba(0,0,0,0.60), 40pt diameter)
    - Tap: Open bottom sheet (Share, Report, Copy Link)
  - Capture count badge (bottom-right of image): 8pt from bottom-right edges
    - Background: Blur background (rgba(255,255,255,0.90) light, rgba(0,0,0,0.80) dark)
    - Text: "1,424 captures" (Body Small, 13pt Semibold)
    - Padding: 10pt horizontal, 6pt vertical
    - Border radius: 12pt
- Tap image: Enter full-screen view with zoom/pinch support

**CONTENT SECTIONS (below hero, scrollable):**
- Background: Background Primary
- Horizontal padding: 16pt each side
- Top padding: 24pt from hero image bottom

*Section 1: Artwork Info*
- Artwork title:
  - Text: Heading 1 (20pt Semibold), Text Primary
  - Max 3 lines with ellipsis
- Artist name (8pt margin-top):
  - Text: Body Medium (15pt Regular), Text Secondary, tappable
  - Tap: Navigate to Artist Profile (PAGE 9)
  - Underline on press for feedback
- Metadata (8pt margin-top):
  - Text: Body Small (13pt Regular), Text Tertiary
  - Format: "1985 • Oil on canvas • 120 x 90 cm"
  - Bullet-separated list (year, medium, dimensions)
- Divider: 24pt margin-top, 1pt border color, full-width

*Section 2: Engagement Stats (24pt margin-top from divider)*
- Capture count:
  - Icon: Bookmark icon (24pt, Text Secondary) + count text
  - Text: "1,424 captures" (Body Medium, 15pt Semibold, Text Primary)
- Divider: 24pt margin-top

*Section 3: Exhibition Context (if applicable, 24pt margin-top)*
- Section header: "In Exhibition" (Heading 2, 18pt Semibold, Text Primary)
- Exhibition card (16pt margin-top):
  - Background: Surface color (#FFFFFF light, #1C1C1E dark)
  - Border: 1pt border color
  - Border radius: 12pt
  - Padding: 16pt
  - Layout:
    - Exhibition name: Heading 3 (16pt Semibold), Text Primary
    - Gallery name: Body Medium (15pt Regular), Accent Blue, tappable, 4pt margin-top
    - Dates: Caption (12pt Regular), Text Tertiary, 4pt margin-top
      - Format: "March 15 - April 30, 2026"
  - Tap card: Navigate to Exhibition Detail (future feature) or Gallery Profile (PAGE 10)
- Divider: 24pt margin-top

*Section 4: About Artist (24pt margin-top)*
- Section header: "About the Artist" (Heading 2, 18pt Semibold, Text Primary)
- Artist card (16pt margin-top):
  - Horizontal layout:
    - Avatar: 64pt circular, left
    - Content (12pt margin-left from avatar):
      - Artist name: Heading 3 (16pt Semibold), Text Primary
      - Birth year + location: Caption (12pt Regular), Text Tertiary, 4pt margin-top
        - Format: "b. 1985, Based in Seoul, Korea"
  - Bio text (12pt margin-top from artist card):
    - Text: Body Large (17pt Regular), Text Primary
    - Max 3 lines with "Read more" link (Accent Blue) if longer
    - Tap "Read more": Expand to full bio
  - Follow button (16pt margin-top):
    - Secondary button: Transparent with 1pt border, 44pt height, 12pt radius, full-width
    - Text: "Follow Artist" or "Following" (Body Medium, 15pt Semibold)
- Divider: 24pt margin-top

*Section 5: Related Artworks (24pt margin-top)*
- Section header: "Related Artworks" (Heading 2, 18pt Semibold, Text Primary)
- Horizontal scroll carousel (16pt margin-top):
  - Thumbnail size: 160x200pt each
  - Gap: 12pt
  - Border radius: 12pt
  - Each thumbnail: Image (cover fit) + capture count badge (top-right, same style as hero)
  - 5-7 thumbnails total
  - Scroll with momentum, no snap
- Tap thumbnail: Navigate to that Artwork Detail (replace current)
- Divider: 24pt margin-top

*Section 6: Related Artists (24pt margin-top)*
- Section header: "Related Artists" (Heading 2, 18pt Semibold, Text Primary)
- Horizontal scroll carousel (16pt margin-top):
  - Card size: 120pt width
  - Gap: 12pt
  - Each card (vertical stack, centered):
    - Avatar: 64pt circular
    - Artist name: Body Medium (15pt Semibold), Text Primary, centered, 8pt margin-top, max 1 line ellipsis
    - Follow button: Secondary button (transparent, 1pt border), 32pt height, 8pt radius, 12pt margin-top
      - Text: "Follow" or "Following" (Body Small, 13pt Semibold)
  - 3-5 artist cards total
- Tap artist card: Navigate to Artist Profile (PAGE 9)
- Tap follow: Call API, update button state
- Divider: 24pt margin-top

*Section 7: Related Exhibitions (24pt margin-top)*
- Section header: "Related Exhibitions" (Heading 2, 18pt Semibold, Text Primary)
- Vertical list (16pt margin-top):
  - 2-3 exhibition cards (compact)
  - Each card:
    - Background: Surface color
    - Border: 1pt border color
    - Border radius: 12pt
    - Padding: 16pt
    - Layout:
      - Exhibition name: Heading 3 (16pt Semibold), Text Primary
      - Gallery name: Body Small (13pt Regular), Text Secondary, 4pt margin-top
      - Dates: Caption (12pt Regular), Text Tertiary, 4pt margin-top
    - 12pt gap between cards
  - Tap card: Navigate to Exhibition Detail or Gallery Profile
- Bottom padding: 80pt (space for sticky action bar)

**BOTTOM ACTION BAR (sticky):**
- Position: Fixed at bottom, spans full width
- Height: 64pt + safe area bottom inset
- Background: Blur background (rgba(255,255,255,0.94) light, rgba(0,0,0,0.94) dark) with backdrop-filter blur
- Border-top: 0.5pt border color
- Padding: 12pt horizontal
- Layout (horizontal):
  - Add to Collection button (primary):
    - Background: #1C1C1E, white text
    - Height: 48pt
    - Border radius: 12pt
    - Text: "Add to Collection" (Body Medium, 15pt Semibold)
    - Icon: Plus icon (20pt) left of text
    - Flex: 1 (takes remaining space)
  - Share icon button (right, 12pt margin-left):
    - Transparent background, Text Primary icon
    - Size: 48x48pt
    - Icon: Share icon (24pt)
    - Border radius: 12pt
    - Border: 1pt border color
- Tap "Add to Collection": Open bottom sheet with collection picker (user's collections list, create new option)
- Tap Share: Open system share sheet with artwork URL and image

### KEY FEATURES
- Full-bleed hero image with parallax scroll (0.5x speed)
- Comprehensive artwork metadata (title, artist, year, medium, dimensions)
- Engagement metric (capture count) prominently displayed
- Exhibition context if artwork is part of exhibition
- Artist bio with follow functionality
- Related content carousels (artworks, artists, exhibitions)
- "Read more" expansion for long artist bio
- Sticky bottom action bar (always accessible)
- Add to Collection from any scroll position
- Share artwork via system share sheet
- Progressive image loading (blur-up)
- Full-screen image view with pinch-to-zoom
- More button (top-right) for additional actions (Report, Copy Link)
- Dark mode support with adjusted overlays
- Smooth scroll performance with lazy loading
- Loading states: Skeleton sections while fetching data

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button (top-left) | Return to previous screen (Feed, Collection Detail, or Search) |
| View Full Image | Tap hero image | Enter full-screen mode, enable pinch-to-zoom, swipe down to dismiss |
| Open More Menu | Tap more button (top-right) | Open bottom sheet with Share, Report, Copy Link actions |
| Navigate to Artist | Tap artist name | Navigate to Artist Profile (PAGE 9) with artist ID |
| Expand Bio | Tap "Read more" in artist bio | Expand text to show full bio, "Read more" becomes "Show less" |
| Follow Artist | Tap "Follow Artist" button | Call follow API, update to "Following" state |
| Navigate to Gallery | Tap gallery name in exhibition card | Navigate to Gallery Profile (PAGE 10) with gallery ID |
| View Related Artwork | Tap related artwork thumbnail | Navigate to that Artwork Detail (replace current page) |
| View Related Artist | Tap related artist card | Navigate to Artist Profile (PAGE 9) with artist ID |
| Follow Related Artist | Tap Follow in related artist card | Call follow API, update button state |
| View Related Exhibition | Tap exhibition card | Navigate to Exhibition Detail or Gallery Profile |
| Add to Collection | Tap "Add to Collection" button | Open bottom sheet: Select existing collection or create new, save artwork, show success toast |
| Share Artwork | Tap share icon | Open system share sheet with artwork URL, title, and image |
| Scroll | Vertical scroll gesture | Smooth scroll, parallax hero image, lazy load related content |

### BRANDING ELEMENTS
- Artwork as hero: Full-bleed image per design philosophy (artwork always hero)
- Parallax scroll creates depth and engagement (smooth, 0.5x speed)
- Capture count badge with blur background (premium feel)
- Generous white space: 16pt margins, 24pt section gaps per 8pt grid
- Exhibition context preserves discovery (linked to gallery)
- Related content carousels for discovery (Pinterest/Instagram inspiration)
- Sticky action bar ensures always-accessible actions
- Blur backgrounds for overlays (buttons, action bar) create understated luxury
- Elevation-1 shadows on cards (subtle depth)
- Typography hierarchy: Heading 1 (20pt) for artwork title → Heading 2 (18pt) for sections → Body Large (17pt) for bio
- Smooth animations: Parallax scroll, progressive image loading, button press (scale 0.98)
- Dark mode: True black background, adjusted blur overlays
- Accent Blue for interactive text (artist name, links)
- 8pt grid spacing throughout

---
