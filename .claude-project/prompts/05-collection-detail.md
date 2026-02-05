# Collection Detail (05-collection-detail)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "05-collection-detail" page:

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
The Collection Detail page displays a single collection with its hero section (title, creator, location, exhibition context) and a masonry grid of all artworks in the collection. Users can view collection metadata, explore individual artworks, and perform actions like editing (if owner) or sharing.

Purpose:
- Display full collection information with context
- Show all artworks in collection as masonry grid
- Provide creator and location/exhibition details
- Enable editing for collection owners
- Allow sharing of collection
- Navigate to individual artwork details

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Vertical scroll page
- Top: Navigation bar (60pt height, fixed)
- Hero section (non-scrolling or parallax effect)
- Artwork grid (scrollable)
- Background: Background Primary

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border, or transparent with blur (if parallax)
- Layout (horizontal):
  - Left: Back button (chevron left icon 24pt + "Back" text Body Medium 15pt), tappable 44pt target
  - Center: Collection title (Heading 2, 18pt Semibold) - only visible when scrolled past hero
  - Right: Share icon (24pt), tappable 44pt target
- Tap back: Navigate back to previous screen (Feed or My Page)
- Tap share: Open system share sheet with collection URL

**HERO SECTION:**
- Background: Background Secondary (#F9F9F9 light, #1C1C1E dark) or gradient
- Padding: 24pt horizontal, 32pt top, 24pt bottom
- Optional: Parallax scroll (hero content scrolls at 0.7x speed of page scroll)
- Content (vertical stack):

  *Collection Title:*
  - Text: Display Medium (28pt Semibold), Text Primary
  - Max 3 lines with ellipsis

  *Creator Info (16pt margin-top):*
  - Horizontal layout:
    - Avatar: 48pt circular
    - Username: Heading 2 (18pt Semibold), Text Primary, 12pt margin-left
    - Follow button (if not owner): Secondary button (transparent, 1pt border), 32pt height, 8pt radius, right-aligned
      - Text: "Follow" or "Following" (Body Small, 13pt Semibold)

  *Location & Date (12pt margin-top):*
  - Icon + text: 📍 location pin emoji + location text (Body Medium, 15pt Regular, Text Secondary)
  - Date: Caption (12pt Regular), Text Tertiary, 4pt margin-top, format "Captured on March 15, 2026"

  *Exhibition Info (if applicable, 8pt margin-top):*
  - Exhibition name: Body Medium (15pt Regular), Text Primary
  - Gallery tag: Body Small (13pt Regular), Accent Blue, tappable, 4pt margin-top
    - Tap: Navigate to Gallery Profile (PAGE 8)

  *Stats Row (16pt margin-top):*
  - Horizontal layout (evenly spaced):
    - Stat 1: "12 artworks" (Body Medium 15pt Semibold, Text Primary) over "Artworks" label (Caption 12pt, Text Tertiary)
    - Stat 2: "27 friends visited" (Body Medium Semibold) over "Friends" label
  - Centered, 24pt gaps between stats

  *Edit Button (if owner, 16pt margin-top):*
  - Secondary button: Transparent with 1pt border, 44pt height, 12pt radius
  - Icon + text: Pencil icon (20pt) + "Edit Collection" (Body Medium, 15pt Semibold)
  - Tap: Enter edit mode (edit title, reorder artworks, delete artworks)

**ARTWORK GRID:**
- Container padding: 16pt horizontal
- Grid layout: 2-column masonry (mobile), 3-column (tablet)
- Gap between columns: 12pt
- Gap between rows: 12pt
- Each artwork card:
  - Image: Full-width within column, maintain aspect ratio, cover fit
  - Border radius: 12pt
  - Overlay gradient at bottom (subtle, rgba(0,0,0,0.30))
  - Text overlay (bottom 12pt padding):
    - Artwork title: Body Medium (15pt Semibold), white text, max 1 line ellipsis
    - Artist name: Body Small (13pt Regular), white text with 80% opacity, 4pt margin-top
  - Capture count badge (top-right corner):
    - Background: Blur background (rgba(255,255,255,0.90) light, rgba(0,0,0,0.80) dark)
    - Text: Caption (11pt Semibold), Text Primary
    - Padding: 6pt horizontal, 4pt vertical
    - Border radius: 8pt
    - Position: 8pt from top-right edges
- Tap artwork card: Navigate to Artwork Detail (PAGE 6) with artwork ID
- Loading: Skeleton cards (shimmer animation) while loading images
- Empty state (no artworks):
  - Icon: Image icon (64pt, Text Tertiary), centered
  - Message: "No artworks in this collection yet" (Body Large, Text Secondary)

**EDIT MODE (if owner taps Edit button):**
- Nav bar changes:
  - Left: "Cancel" text button (Accent Blue)
  - Right: "Done" text button (Accent Blue)
- Hero section:
  - Collection title becomes editable input (same styling)
  - "Save" button appears if title changed
- Artwork grid:
  - Each card gains delete button (X icon, top-left, 32pt, Error Red background circle)
  - Long-press and drag to reorder (haptic feedback on drag start)
  - Drag animation: Card lifts with shadow increase, other cards shift to make space
- Tap Cancel: Discard changes, exit edit mode
- Tap Done: Save changes (title, order, deletions), exit edit mode

### KEY FEATURES
- Masonry grid layout adapts to artwork aspect ratios (no cropping)
- Parallax hero section for depth (optional)
- Edit mode for collection owners (reorder, delete, rename)
- Follow button for other users' collections
- Stats show artwork count and friend engagement
- Exhibition/gallery context linked (tappable)
- Share functionality via system share sheet
- Capture count badges on each artwork
- Text overlay with gradient for readability
- Loading state: Skeleton cards with shimmer
- Empty state with friendly message
- Image lazy loading (only load visible images)
- Smooth scroll performance
- Dark mode support
- Edit mode drag-and-drop with haptic feedback

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | Return to previous screen (Feed or My Page) |
| Share Collection | Tap share icon | Open system share sheet with collection URL and preview image |
| Follow User | Tap Follow button in hero | Call follow API, update button to "Following" state |
| Navigate to Gallery | Tap gallery tag | Navigate to Gallery Profile (PAGE 8) with gallery ID |
| View Artwork | Tap artwork card in grid | Navigate to Artwork Detail (PAGE 6) with artwork ID |
| Enter Edit Mode | Tap "Edit Collection" button (owner only) | Enable edit mode, show delete buttons, allow reordering |
| Edit Title | Tap title in edit mode | Title becomes editable, keyboard appears, save button enabled |
| Reorder Artworks | Long-press and drag artwork in edit mode | Lift card, allow dragging, update order on drop, haptic feedback |
| Delete Artwork | Tap X button on artwork in edit mode | Show confirmation dialog, delete on confirm, remove from grid |
| Save Edits | Tap "Done" in edit mode | Save changes to API, exit edit mode, show success toast |
| Cancel Edits | Tap "Cancel" in edit mode | Discard changes, exit edit mode, revert to original state |
| Scroll | Vertical scroll gesture | Smooth scroll, parallax hero section (optional), lazy load images |

### BRANDING ELEMENTS
- Artwork as hero: Large images in masonry grid, no unnecessary cropping
- Masonry layout per Pinterest inspiration (visual-first)
- Generous spacing: 12pt gaps, 16pt margins per 8pt grid
- Capture count badges provide social proof
- Exhibition context preserves discovery aspect (gallery links)
- Edit mode follows iOS patterns (Cancel/Done buttons)
- Elevation-1 shadow on cards (subtle depth)
- Text overlays with gradients (readability without obscuring artwork)
- Smooth animations: Parallax scroll, drag-and-drop in edit mode
- Typography hierarchy: Display Medium (28pt) for title → Heading 2 (18pt) → Body Medium (15pt)
- Dark mode: True black background, adjusted overlays
- Accent Blue for interactive elements (Follow, links)
- 8pt grid spacing throughout

---
