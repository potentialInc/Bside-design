# Search Results (16-search-results)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "16-search-results" page:

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
The Search Results page displays results for a user's search query, organized by tabs (All, Artworks, Artists, Profiles). Users can filter results by type, view masonry grids for artworks, and list layouts for artists/users.

Purpose:
- Display search results across multiple types
- Filter by category (All, Artworks, Artists, Profiles)
- Enable browsing results as grid (artworks) or list (artists/users)
- Navigate to entity details (artwork, artist, user profile)
- Handle empty states and loading states
- Support follow actions on artists/users

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen page
- Top: Navigation bar with editable search query (60pt height)
- Tab filters: Horizontal segmented control (48pt height)
- Results area: Scrollable grid or list based on active tab
- Background: Background Primary

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Back button (chevron left icon 24pt), 44pt touch target
  - Center: Search query text (Body Large, 17pt Semibold, Text Primary), tappable to edit
    - Tap: Open search bar in edit mode (inline or modal), allow editing query
  - Right: Filter icon (24pt, optional for future), 44pt touch target
- Tap back: Return to Search Main (PAGE 13)
- Tap query text: Enable editing query, show keyboard

**TAB FILTERS:**
- Position: Below nav bar, fixed (doesn't scroll with content)
- Height: 48pt
- Background: Background Primary
- Padding: 0pt horizontal (full-width tabs), 12pt vertical
- Horizontal segmented control:
  - 4 tabs: All (default) | Artworks | Artists | Profiles
  - Tab width: Equal distribution (25% each)
  - Text: Body Medium (15pt Semibold) for active, (15pt Regular) for inactive
  - Active tab: Text Primary, 2pt underline (Accent Blue), 2pt from bottom
  - Inactive tabs: Text Secondary
  - Tap tab: Switch content, animate underline slide (200ms ease)
- Border-bottom: 0.5pt border color

**RESULTS AREA (scrollable content):**
- Padding: 16pt horizontal (for grid/list), 16pt top

**TAB 1: ALL RESULTS (mixed layout):**
- Vertical scroll, sections for each type with results
- Section order: Artworks → Artists → Profiles
- Each section:
  - Section header: Heading 3 (16pt Semibold, Text Primary), "Artworks (24)" showing count
  - Content: First 3-4 results in list/grid, "See All" link (Body Medium, Accent Blue) if more
  - 24pt margin-bottom between sections

**TAB 2: ARTWORKS (grid layout):**
- Grid: 2-column masonry (mobile), 3-column (tablet)
- Gap: 12pt between columns and rows
- Each artwork card:
  - Image: Full-width within column, maintain aspect ratio, cover fit
  - Border radius: 12pt
  - Text overlay at bottom (gradient rgba(0,0,0,0.30)):
    - Title: Body Medium (15pt Semibold), white, max 1 line ellipsis, 12pt padding
    - Artist: Body Small (13pt Regular), white 80% opacity, 4pt margin-top
  - Capture count badge (top-right):
    - Blur background (rgba(255,255,255,0.90) light, rgba(0,0,0,0.80) dark)
    - Text: Caption (11pt Semibold)
    - Padding: 6pt horizontal, 4pt vertical, 8pt border radius, 8pt from edges
- Tap card: Navigate to Artwork Detail (PAGE 6)
- Infinite scroll: Load more on bottom reached

**TAB 3: ARTISTS (list layout):**
- Vertical list of artist items
- Each item:
  - Height: 80pt
  - Padding: 12pt horizontal
  - Border-bottom: 0.5pt border color (last item: no border)
  - Layout (horizontal):
    - Avatar: 56pt circular, left
    - Content (12pt margin-left, flex):
      - Name: Body Medium (15pt Semibold), Text Primary
      - Bio: Caption (12pt Regular), Text Tertiary, 4pt margin-top, max 1 line ellipsis
    - Follow button (right, 12pt margin-left):
      - Secondary button: Transparent with 1pt border, 32pt height, 8pt radius, 80pt width
      - Text: "Follow" or "Following" (Body Small, 13pt Semibold)
      - Tap: Call follow API, toggle state
- Tap artist (not button): Navigate to Artist Profile (PAGE 7)
- Infinite scroll: Load more

**TAB 4: PROFILES (USERS) (list layout):**
- Vertical list of user items
- Each item:
  - Height: 72pt
  - Padding: 12pt horizontal
  - Border-bottom: 0.5pt border color
  - Layout (horizontal):
    - Avatar: 48pt circular, left
    - Content (12pt margin-left, flex):
      - Username: Body Medium (15pt Semibold), Text Primary
      - Bio: Caption (12pt Regular), Text Tertiary, 4pt margin-top, max 1 line ellipsis
    - Follow button (right, 12pt margin-left):
      - Same style as Artists tab
- Tap user (not button): Navigate to User Profile (PAGE 15)
- Infinite scroll: Load more

**EMPTY STATE (if no results for query):**
- Position: Centered in results area
- Content (vertical stack, centered):
  - Icon: Magnifying glass (64pt, Text Tertiary)
  - Heading: "No results found for '[query]'" (Heading 2, 18pt Semibold, Text Primary), 16pt margin-top
  - Suggestion: "Try searching with different keywords" (Body Large, 17pt Regular, Text Secondary), 8pt margin-top, max-width 280pt

**LOADING STATE (while fetching results):**
- Skeleton cards: Shimmer animation on placeholder cards
- Artworks: 6 skeleton cards in grid
- Artists/Profiles: 5 skeleton rows in list

### KEY FEATURES
- Tab filters for result types (All, Artworks, Artists, Profiles)
- Mixed layout in "All" tab (sections for each type)
- Masonry grid for artworks (no cropping, aspect ratios preserved)
- List layout for artists and users (with follow buttons)
- Capture count badges on artworks (social proof)
- Follow/unfollow directly from results
- Editable search query in nav bar (tap to edit)
- Empty state with helpful message
- Loading states: Skeleton cards with shimmer
- Infinite scroll on all tabs
- Text overlays on artwork cards (gradient for readability)
- Dark mode support
- Smooth tab switching animation (underline slide 200ms)
- "See All" links in "All" tab to switch to specific tab

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | Return to Search Main (PAGE 13) |
| Edit Query | Tap query text in nav bar | Enable editing, show keyboard, allow re-submitting search |
| Switch Tab | Tap tab (All, Artworks, Artists, Profiles) | Switch results content, animate underline slide, scroll to top |
| View Artwork | Tap artwork card | Navigate to Artwork Detail (PAGE 6) with artwork ID |
| View Artist | Tap artist item (not button) | Navigate to Artist Profile (PAGE 7) with artist ID |
| View User | Tap user item (not button) | Navigate to User Profile (PAGE 15) with user ID |
| Follow/Unfollow | Tap Follow/Following button | Call follow API, toggle button state (Follow ↔ Following) |
| See All | Tap "See All" link in All tab | Switch to specific tab (Artworks, Artists, or Profiles) |
| Infinite Scroll | Scroll to bottom | Load next page of results (10-20 items), append to list/grid |

### BRANDING ELEMENTS
- Tab filters per Pinterest/Instagram patterns (organized discovery)
- Masonry grid for artworks (visual-first, no cropping per design philosophy)
- Capture count badges (social proof)
- List layouts for artists/users (profile focus)
- Follow buttons inline (social engagement)
- Text overlays with gradients (readability on artwork images)
- "See All" links in All tab (clear navigation)
- Empty state with helpful suggestion (friendly, not frustrating)
- Skeleton loading (modern, smooth UX)
- Typography: Heading 3 (16pt) for sections → Body Medium (15pt) for content
- Accent Blue underline for active tab
- Generous spacing: 12pt gaps, 16pt margins per 8pt grid
- Smooth animations: Tab underline slide (200ms), skeleton shimmer
- Dark mode support

---
