# Following List (19-following-list)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "19-following-list" page:

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
The Following List page displays all users the current user follows. Similar to Follower List, users can search, view profiles, and manage following relationships.

Purpose:
- Display list of users being followed
- Enable searching by username
- Navigate to user profiles
- Unfollow users (with confirmation)
- Provide quick access to followed profiles

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen page
- Top: Navigation bar (60pt height)
- Search bar: Fixed below nav (optional)
- User list: Vertical scrollable list
- Background: Background Primary

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Back button (chevron left icon 24pt), 44pt touch target
  - Center: "Following" (Heading 2, 18pt Semibold, Text Primary)
  - Right: Empty
- Tap back: Return to My Page (PAGE 15)

**SEARCH BAR (optional):**
- Same as Follower List (PAGE 18)
- Placeholder: "Search following..." (Body Large, Text Tertiary)

**USER LIST:**
- Same layout as Follower List
- Each item:
  - Height: 72pt
  - Padding: 12pt horizontal
  - Border-bottom: 0.5pt border color
  - Layout (horizontal):
    - Avatar: 48pt circular, left
    - Content (12pt margin-left, flex):
      - Username: Body Medium (15pt Semibold), Text Primary
      - Bio: Caption (12pt Regular), Text Tertiary, 4pt margin-top, max 1 line ellipsis
    - Following button (right, 12pt margin-left):
      - Secondary button: Transparent with 1pt border, 32pt height, 80pt width
      - Text: "Following" (Body Small, 13pt Semibold)
      - Tap: Show confirmation dialog "Unfollow [Username]?", if confirmed: call unfollow API, remove from list
- Tap user (not button): Navigate to User Profile (PAGE 15) with user ID

**EMPTY STATE (if not following anyone):**
- Position: Centered in list area
- Content (vertical stack, centered):
  - Icon: Person icon (64pt, Text Tertiary)
  - Message: "Not following anyone yet" (Heading 2, 18pt Semibold, Text Primary), 16pt margin-top
  - Suggestion: "Discover users to follow" (Body Large, Text Secondary), 8pt margin-top
  - CTA: "Search" or "Explore" button (Secondary, 48pt height), 16pt margin-top
    - Tap: Navigate to Search Main (PAGE 13) or Feed (PAGE 4)

**LOADING STATE:**
- Skeleton rows: 5 shimmer placeholder rows

### KEY FEATURES
- List of all followed users
- Search bar filters in real-time
- Following button shows "Following" state
- Unfollow with confirmation dialog
- Navigate to user profiles
- Infinite scroll for many followed users
- Empty state with discovery CTA
- Loading state: Skeleton rows
- Dark mode support
- Smooth scroll performance

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | Return to My Page (PAGE 15) |
| Search Following | Type in search bar | Filter list in real-time by username (case-insensitive) |
| Clear Search | Tap X in search bar | Clear text, show full list |
| View User Profile | Tap user item (not button) | Navigate to User Profile (PAGE 15) with user ID |
| Unfollow | Tap "Following" button | Show confirmation dialog "Unfollow [Username]?", if confirmed: call unfollow API, remove user from list with animation |
| Infinite Scroll | Scroll to bottom | Load next page of followed users (20-50 users), append to list |
| Discover Users | Tap "Search" or "Explore" in empty state | Navigate to Search Main (PAGE 13) or Feed (PAGE 4) |

### BRANDING ELEMENTS
- Instagram-inspired following list (familiar pattern)
- Search bar for filtering (user convenience)
- Unfollow confirmation prevents accidents
- Empty state with discovery CTA (encourages engagement)
- Typography: Heading 2 (18pt) → Body Medium (15pt)
- Secondary button for "Following" (consistent with other pages)
- Border-bottom separators (0.5pt border color)
- Skeleton loading (modern UX)
- Generous spacing: 12pt padding per 8pt grid
- Dark mode support

---
