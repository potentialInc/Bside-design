# Art Feed (Home) (04-feed)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "04-feed" page:

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
The Art Feed is the main home screen after login, displaying a vertical scrolling feed of collection cards from the user and followed profiles, interspersed with platform curated collections. This is the primary discovery and engagement hub combining social, personal, and editorial content in a visual-first layout inspired by Pinterest and Instagram.

Purpose:
- Display user's own capture collections (highest priority)
- Show followed users' collections chronologically
- Intersperse platform collections for discovery
- Provide user recommendations
- Enable quick access to search and navigation
- Support pull-to-refresh and infinite scroll

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen vertical scroll feed
- Top navigation bar (fixed): 60pt height including safe area
- Feed content area: Edge-to-edge cards with 16pt horizontal margins between cards
- Bottom tab bar navigation (fixed): 56pt height + safe area
- Background: Background Primary (#FFFFFF light, #000000 dark)

**TOP NAVIGATION BAR:**
- Height: 60pt (includes safe area top inset)
- Background: Background Primary with 0.5pt bottom border (border color)
- Content layout (horizontal):
  - Left: Empty (balance)
  - Center: "bside" logo or "Home" text (Heading 2, 18pt Semibold, Text Primary)
  - Right: Search icon (24pt, tappable, 16pt margin-right)
- Logo/text: Centered, vertically aligned
- Search icon tap: Navigate to Search Main (PAGE 13)

**FEED CONTENT AREA:**
- Vertical scroll, starts 60pt from top (below nav bar)
- Pull-to-refresh: Standard iOS/Android pull-to-refresh at top (spinner, "Release to refresh")
- Card sequence:
  1. User's own collections (if any) - highest priority
  2. Followed users' collections (chronological, newest first)
  3. Platform collection card every 5-7 items
  4. User recommendation card every 10-15 items
- Infinite scroll: Load next 10 cards when scrolled to within 200pt of bottom
- Card spacing: 16pt vertical gap between cards

**COLLECTION CARD (Primary repeating component):**
- Width: Screen width minus 32pt horizontal margins (16pt each side)
- Background: Surface color (#FFFFFF light, #1C1C1E dark)
- Border radius: 16pt
- Shadow: Elevation-1 (0 2px 8px rgba(0,0,0,0.08))
- Padding: 16pt
- Structure (top to bottom):

  *Card Header (horizontal layout):*
  - Avatar: 40pt circular, left-aligned
  - Username: Heading 2 (18pt Semibold), Text Primary, 12pt margin-left from avatar
  - Timestamp: Caption (12pt Regular), Text Tertiary, 8pt margin-left from username, "2h ago" format
  - Spacer (flex)
  - More button (three dots icon): 24pt, Text Secondary, right-aligned, 44x44pt touch target

  *Collection Info (16pt margin-top from header):*
  - Collection title: Heading 2 (18pt Semibold), Text Primary, max 2 lines with ellipsis
  - Location + Exhibition: Body Small (13pt Regular), Text Secondary, 8pt margin-top
    - Format: "📍 [Location] • [Exhibition Name]" (location pin emoji + location + bullet + exhibition)
  - Gallery tag (if applicable): Body Small (13pt Regular), Accent Blue, 4pt margin-top
    - Format: "[Gallery Name]" tappable, navigates to Gallery Profile

  *Artwork Carousel (16pt margin-top from info):*
  - Horizontal scroll container (snap to item)
  - Thumbnail size: 200x240pt each
  - Gap between thumbnails: 12pt
  - Border radius on thumbnails: 12pt
  - Each thumbnail: Artwork image (cover fit)
  - Page indicator dots below carousel: 8pt margin-top, centered
    - Dot size: 6pt circular, 8pt spacing between dots
    - Active dot: Primary color (#1C1C1E), inactive: Text Tertiary
  - Scroll behavior: Horizontal scroll with momentum, snap to nearest item center

  *Card Footer (16pt margin-top from carousel):*
  - Horizontal layout:
    - Left: Avatar stack (overlapping avatars of friends who captured)
      - Avatars: 24pt circular each, overlap 8pt (z-index increasing left to right)
      - Max 4 avatars shown, "+N" text if more
    - Engagement text: Body Small (13pt Regular), Text Secondary, 8pt margin-left
      - Format: "27 friends were there" or "X artworks captured"
    - Spacer (flex)
    - Capture count badge: Body Small (13pt Regular), Text Secondary, right-aligned
      - Format: "124 captures"

- Tap behaviors:
  - Tap card header/username: Navigate to User Profile (PAGE 15 if others, My Page if self)
  - Tap more button: Open bottom sheet with actions (Report, Hide, Copy Link)
  - Tap collection title/info: Navigate to Collection Detail (PAGE 5)
  - Tap artwork thumbnail: Navigate to Artwork Detail (PAGE 6)
  - Tap gallery tag: Navigate to Gallery Profile (PAGE 8)

**PLATFORM COLLECTION CARD (every 5-7 items):**
- Same structure as Collection Card but with:
  - Header: bside logo icon (40pt) instead of avatar + "bside" username + "Featured" badge
  - Collection titles: "This Week's Most Captured", "Trending Artists", "Featured Exhibitions"
  - No timestamp or more button
  - Footer: Total capture count across all users

**USER RECOMMENDATION CARD (every 10-15 items):**
- Width: Screen width minus 32pt horizontal margins
- Background: Surface color
- Border radius: 16pt
- Padding: 16pt
- Header: "You might also like" (Heading 2, 18pt Semibold), Text Primary
- Horizontal scroll container: 3-5 user cards (144pt width each, 12pt gaps)
- Each user card:
  - Avatar: 64pt circular, centered
  - Username: Body Medium (15pt Regular), Text Primary, centered, 8pt margin-top
  - Bio: Caption (12pt Regular), Text Tertiary, centered, 1 line max, 4pt margin-top
  - Follow button: Secondary button (transparent, 1pt border), 36pt height, 8pt radius, 12pt margin-top
    - Text: "Follow" (Body Small, 13pt Semibold)
  - Tap user card: Navigate to User Profile (PAGE 15)
  - Tap Follow: Call API, update button to "Following" state

**EMPTY STATE (if no feed content):**
- Centered container: 240pt from top
- Icon: Camera icon (64pt, Text Tertiary)
- Heading: "Welcome to bside!" (Heading 1, 20pt Semibold), Text Primary, centered, 16pt margin-top
- Message: "Start capturing artworks or follow others." (Body Large, 17pt Regular), Text Secondary, centered, 8pt margin-top, max-width 280pt
- CTA buttons (vertical stack, 16pt gaps, 24pt margin-top):
  - Primary button: "Open Camera" (navigates to Camera View PAGE 9)
  - Secondary button: "Explore" (navigates to Search Main PAGE 13)

**BOTTOM TAB BAR:**
- Height: 56pt + safe area bottom inset
- Background: Background Primary with 0.5pt top border (border color)
- 5 tabs (evenly distributed):
  1. Home (house icon, "Home" label): Active state (Accent Blue #007AFF), inactive (Text Secondary)
  2. Search (magnifying glass icon, "Search" label): Navigate to PAGE 13
  3. Camera (camera icon, "Camera" label): Navigate to PAGE 9 (or floating FAB alternative)
  4. Notifications (bell icon, "Notifications" label): Navigate to PAGE 20, badge count if unread
  5. Profile (person icon, "Profile" label): Navigate to My Page (PAGE 15)
- Each tab: Icon (24pt) + Label (Caption, 12pt), vertical stack, 44pt touch target
- Active tab: Accent Blue color, inactive: Text Secondary
- Smooth transition animation on tap (200ms ease)

### KEY FEATURES
- Pull-to-refresh at top (reload feed)
- Infinite scroll (load more at bottom)
- Horizontal carousel per collection card (swipe artworks)
- Page indicator dots show carousel position
- Platform collections interspersed every 5-7 items for discovery
- User recommendations every 10-15 items to grow network
- Avatar stacks show friend engagement (social proof)
- Quick actions via more button (bottom sheet)
- Empty state with clear CTAs if no content
- Loading state: Skeleton cards (shimmer animation) while fetching
- Tab bar navigation for quick access to main features
- Badge count on Notifications tab if unread
- Dark mode support with true black (#000000) background
- Smooth scroll performance (optimized image loading, lazy load off-screen cards)
- Card press animation: Scale to 0.98, shadow increase (150ms)

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Pull to Refresh | Pull down from top | Show spinner, reload feed data, dismiss spinner on complete |
| Infinite Scroll | Scroll to within 200pt of bottom | Load next 10 cards, append to feed |
| Tap Collection Card | Tap card body (not header/footer) | Navigate to Collection Detail (PAGE 5) with collection ID |
| Tap Artwork Thumbnail | Tap artwork in carousel | Navigate to Artwork Detail (PAGE 6) with artwork ID |
| Tap Username/Avatar | Tap in card header | Navigate to User Profile (PAGE 15) or My Page if own collection |
| Tap More Button | Tap three dots icon | Open bottom sheet with actions: Report, Hide Collection, Copy Link |
| Tap Gallery Tag | Tap gallery name link | Navigate to Gallery Profile (PAGE 8) with gallery ID |
| Tap Search Icon | Tap search icon in top nav | Navigate to Search Main (PAGE 13) |
| Tap Follow Button | Tap Follow in user recommendation card | Call follow API, update button to "Following", remove from recommendations |
| Tap User Recommendation | Tap user card | Navigate to User Profile (PAGE 15) with user ID |
| Scroll Carousel | Swipe horizontally on artwork carousel | Smooth scroll, snap to item, update page indicator dots |
| Tap Tab Bar Item | Tap any tab bar icon | Navigate to respective screen (Search, Camera, Notifications, Profile) |
| Tap Camera FAB | Tap floating camera button (alternative to tab) | Navigate to Camera View (PAGE 9) |

### BRANDING ELEMENTS
- Visual-first design per Pinterest + Instagram inspiration
- Collection cards as primary content unit (Spotify playlist inspiration)
- Horizontal artwork carousels for smooth browsing
- Minimal navigation (top bar + bottom tabs) keeps focus on content
- Artwork as hero: Large 200x240pt thumbnails in carousels
- Social proof: Friend avatar stacks, engagement text ("27 friends were there")
- Platform collections interspersed for editorial curation
- User recommendations for network growth
- Generous white space: 16pt margins, 16pt gaps between cards
- Elevation-1 shadow on cards for subtle depth
- Smooth animations: Pull-to-refresh, infinite scroll, carousel snapping
- Typography hierarchy: Heading 2 (18pt) for titles → Body Small (13pt) for metadata
- Dark mode: True black (#000000) background for OLED efficiency
- Accent Blue (#007AFF) for interactive elements (active tab, links)
- 8pt grid spacing throughout

---
