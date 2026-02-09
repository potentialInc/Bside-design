# Follower List (20-follower-list)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "20-follower-list" page:

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
The Follower List page displays all users who follow the current user. Users can search followers by username, view their profiles, and manage follow relationships (if own profile).

Purpose:
- Display list of followers
- Enable searching followers by username
- Navigate to follower profiles
- Show follow status (Following, Follow back)
- Provide quick access to follower profiles

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen page
- Top: Navigation bar (60pt height)
- Search bar: Fixed below nav (optional)
- User list: Vertical scrollable list
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
  - Center: "Followers" (Heading 2, 18pt Semibold, Text Primary)
  - Right: Empty
- Tap back: Return to My Page (PAGE 15)

**SEARCH BAR (optional):**
- Position: Below nav bar, fixed
- Padding: 16pt horizontal, 12pt vertical
- Background: Background Primary
- Search input:
  - Height: 40pt, border radius: 12pt
  - Background: #F2F2F2 (light) or #2C2C2E (dark)
  - Padding: 12pt horizontal
  - Icon: Magnifying glass (20pt, Text Secondary) leading
  - Placeholder: "Search followers..." (Body Large, Text Tertiary)
  - Clear button: X icon (20pt, Text Secondary) trailing, appears when typing
- Functionality: Filter list in real-time as typing (by username)

**USER LIST:**
- Padding: 16pt horizontal (if not full-width), 0pt top
- Vertical list of user items
- Each item:
  - Height: 72pt
  - Padding: 12pt horizontal
  - Border-bottom: 0.5pt border color (last item: no border)
  - Layout (horizontal):
    - Avatar: 48pt circular, left
    - Content (12pt margin-left, flex):
      - Username: Body Medium (15pt Semibold), Text Primary
      - Bio: Caption (12pt Regular), Text Tertiary, 4pt margin-top, max 1 line ellipsis
    - Follow button (right, 12pt margin-left):
      - If following: Secondary button (transparent, 1pt border), 32pt height, 80pt width, "Following" text
      - If not following: Primary button (#1C1C1E background, white text), 32pt height, 80pt width, "Follow" text
      - If self: Hide button
      - Tap: Toggle follow state, call API
- Tap user (not button): Navigate to User Profile (PAGE 15) with user ID
- Infinite scroll: Load more on bottom reached (if many followers)

**EMPTY STATE (if no followers):**
- Position: Centered in list area
- Content (vertical stack, centered):
  - Icon: Person icon (64pt, Text Tertiary)
  - Message: "No followers yet" (Heading 2, 18pt Semibold, Text Primary), 16pt margin-top

**LOADING STATE:**
- Skeleton rows: 5 shimmer placeholder rows

### KEY FEATURES
- List of all followers
- Search bar filters in real-time
- Follow/Following buttons (if not self)
- Navigate to follower profiles
- Infinite scroll for many followers
- Empty state if no followers
- Loading state: Skeleton rows
- Follow state persists
- Dark mode support
- Smooth scroll performance

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | Return to My Page (PAGE 15) |
| Search Followers | Type in search bar | Filter list in real-time by username (case-insensitive) |
| Clear Search | Tap X in search bar | Clear text, show full list |
| View Follower Profile | Tap user item (not button) | Navigate to User Profile (PAGE 15) with user ID |
| Follow/Unfollow | Tap Follow/Following button | Call follow API, toggle button state (Follow ↔ Following) |
| Infinite Scroll | Scroll to bottom | Load next page of followers (20-50 users), append to list |

### BRANDING ELEMENTS
- Instagram-inspired follower list (familiar pattern)
- Search bar for filtering (user convenience)
- Follow buttons inline (social engagement)
- Avatar + username + bio pattern (consistent with other lists)
- Empty state friendly message
- Typography: Heading 2 (18pt) for title → Body Medium (15pt) for usernames
- Skeleton loading (modern UX)
- Accent Blue for search bar focus
- Primary button for Follow, Secondary for Following
- Border-bottom separators (0.5pt border color)
- Generous spacing: 12pt padding per 8pt grid
- Dark mode support

---
