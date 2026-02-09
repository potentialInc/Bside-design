# My Page (Profile) (17-my-page-profile)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "17-my-page-profile" page:

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
My Page is the user's personal profile with three tabs: Home (curated highlights), Captures (all captured artworks), and Collections (organized collections). Users can manage their profile, view stats, and organize their artwork captures.

Purpose:
- Display user's profile (avatar, username, bio, stats)
- Provide three views: Home (highlights), Captures (artworks), Collections (curated sets)
- Enable profile editing and settings access
- Show follower/following counts (tappable)
- Support customization (pin favorites in Home tab)
- Navigate to settings and other user profiles

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen page
- Profile header (fixed or scrolls with content)
- Tab menu: Home | Captures | Collections (fixed below header)
- Tab content area (scrollable)
- Bottom tab bar navigation (if using tab bar pattern)
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

**PROFILE HEADER:**
- Background: Optional gradient or solid Background Secondary
- Padding: 24pt horizontal, 32pt top (+ safe area), 24pt bottom
- Content (vertical stack, centered):

  *Avatar:*
  - Size: 96pt circular, centered
  - Border: Optional 2pt white border with shadow
  - Tap: Open full-size avatar view or edit option

  *Username (16pt margin-top):*
  - Text: Display Medium (28pt Semibold), Text Primary, centered

  *Bio (8pt margin-top):*
  - Text: Body Large (17pt Regular), Text Secondary, centered, max 3 lines with "Read more"
  - Tap "Read more": Expand to full bio

  *Edit Profile Button (16pt margin-top):*
  - Secondary button: Transparent with 1pt border, 36pt height, 8pt radius, 160pt width
  - Text: "Edit Profile" (Body Small, 13pt Semibold)
  - Tap: Navigate to Edit Profile (PAGE 21)

  *Stats Row (20pt margin-top):*
  - Horizontal layout, evenly spaced, centered
  - 3 stats (24pt gaps):
    - Captures: Number (Heading 1, 20pt Bold) over "Captures" label (Caption, 12pt, Text Tertiary)
    - Followers: Number over "Followers" label, tappable
    - Following: Number over "Following" label, tappable
  - Tap Followers: Navigate to Follower List (PAGE 20)
  - Tap Following: Navigate to Following List (PAGE 21)

  *Settings Icon (top-right of header):*
  - Position: Absolute top-right, 16pt from edges (+ safe area)
  - Icon: Gear icon (24pt, Text Secondary), 44pt touch target
  - Tap: Navigate to Settings (PAGE 20)

**TAB MENU:**
- Position: Below profile header, fixed (doesn't scroll)
- Height: 48pt
- Background: Background Primary
- Border-bottom: 0.5pt border color
- 3 tabs: Home | Captures | Collections
- Layout:
  - Tab width: Equal (33.33% each)
  - Text: Label Large (15pt Medium) for active, (15pt Regular) for inactive
  - Active tab: Text Primary, 2pt underline (Primary color #1C1C1E), 2pt from bottom
  - Inactive tabs: Text Secondary
  - Tap tab: Switch content, animate underline slide (200ms ease)

**TAB CONTENT AREA (scrollable):**

**TAB 1: HOME (curated highlights):**
- Padding: 16pt horizontal, 16pt top
- Content: Pinned collections or artworks (user-customizable)
- Grid/List: Flexible (2-column grid or vertical list of cards)
- Edit mode (tap edit button in top-right):
  - Edit button: Text button "Edit" (Accent Blue), top-right, 44pt touch target
  - In edit mode: Each item gains pin/unpin toggle, items can be reordered (drag)
  - Save button: "Done" (Accent Blue) replaces Edit button
- Empty state:
  - Icon: Star icon (64pt, Text Tertiary), centered
  - Message: "Customize your highlights by pinning favorite collections or artworks" (Body Large, Text Secondary), centered, 16pt margin-top
  - CTA: "Pin from Captures" button (Secondary, 48pt height), 16pt margin-top
    - Tap: Switch to Captures tab

**TAB 2: CAPTURES (all artworks):**
- Padding: 16pt horizontal, 16pt top
- View toggle (top-right): List/Grid icon (24pt, Text Secondary), 44pt touch target
  - Tap: Toggle between list and grid views
- Sort/Filter bar (below view toggle):
  - Dropdown: "Sort by: Date" (Body Medium, 15pt Regular, Text Primary)
  - Options: Date, Artist, Artwork, Capture count
  - Filter icon (optional): Future feature

*List View (default):*
- Vertical list of artwork items
- Each item:
  - Height: 80pt
  - Padding: 12pt
  - Border-bottom: 0.5pt border color
  - Layout (horizontal):
    - Thumbnail: 80x80pt, border radius 8pt, cover fit, left
    - Content (12pt margin-left, flex):
      - Title: Body Medium (15pt Semibold), Text Primary, max 1 line ellipsis
      - Artist: Body Small (13pt Regular), Text Secondary, 4pt margin-top
      - Date: Caption (12pt Regular), Text Tertiary, 4pt margin-top, "Captured on Mar 15, 2026"
    - Chevron right icon (16pt, Text Tertiary), right
- Tap item: Navigate to Artwork Detail (PAGE 8)

*Grid View:*
- 2-column masonry (mobile), 3-column (tablet)
- Gap: 12pt
- Each card: Same as artwork cards in other pages (image, title/artist overlay, capture badge)

- Empty state:
  - Icon: Camera icon (64pt, Text Tertiary), centered
  - Message: "No captures yet" (Heading 2, 18pt Semibold, Text Primary), centered, 16pt margin-top
  - Suggestion: "Start capturing artworks at exhibitions" (Body Large, Text Secondary), centered, 8pt margin-top
  - CTA: "Go to Camera" button (Primary, 48pt height), 16pt margin-top
    - Tap: Navigate to Camera View (PAGE 11)

**TAB 3: COLLECTIONS (organized collections):**
- Padding: 16pt horizontal, 16pt top
- Grouping dropdown (top-right):
  - Text: "Group by: Year" (Body Medium, 15pt Regular, Text Primary)
  - Options: By Year (default), By Exhibition, By Artist
- Vertical list of collection cards (compact):
  - Each card:
    - Background: Surface color
    - Border radius: 12pt
    - Padding: 0pt (image at top, content below)
    - Shadow: Elevation-1
    - Layout:
      - Cover image: Full-width, 120pt height (16:9 or 4:3), cover fit, border-radius 12pt top corners
      - Content padding: 16pt
      - Collection name: Heading 2 (18pt Semibold), Text Primary
      - Artwork count + Date: Body Small (13pt Regular), Text Secondary, 4pt margin-top
        - Format: "12 artworks • March 2026"
      - Exhibition info (if applicable): Caption (12pt Regular), Text Tertiary, 4pt margin-top
      - Visibility badge: "Private" or "Public" (Caption, 11pt Semibold), 8pt margin-top
        - Background: Background Secondary, Text Secondary, 6pt padding horizontal, 4pt vertical, 6pt border radius
    - 16pt gap between cards
- Tap card: Navigate to Collection Detail (PAGE 7)
- Long-press card: Open action sheet (Edit, Delete, Share, Change Visibility)

- Empty state:
  - Icon: Folder icon (64pt, Text Tertiary), centered
  - Message: "No collections yet" (Heading 2, 18pt Semibold, Text Primary), centered, 16pt margin-top
  - Suggestion: "Start capturing artworks at exhibitions" (Body Large, Text Secondary), centered, 8pt margin-top
  - CTA: "Go to Camera" button (Primary, 48pt height), 16pt margin-top

### KEY FEATURES
- Profile header with avatar, username, bio, stats
- Edit Profile and Settings easily accessible
- Stats (Captures, Followers, Following) tappable for navigation
- Three tab views: Home (highlights), Captures (artworks), Collections (curated)
- Home tab customizable (pin/unpin, reorder)
- Captures tab: Toggle list/grid view, sort by multiple fields
- Collections tab: Group by Year/Exhibition/Artist
- Long-press actions on collections (Edit, Delete, Share, Visibility)
- Empty states for all tabs with clear CTAs
- Loading states: Skeleton cards
- Dark mode support
- Smooth tab switching animation
- Visibility badges on collections (Private/Public)

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Edit Profile | Tap "Edit Profile" button | Navigate to Edit Profile (PAGE 21) |
| View Settings | Tap gear icon (top-right) | Navigate to Settings (PAGE 20) |
| View Followers | Tap Followers stat | Navigate to Follower List (PAGE 20) |
| View Following | Tap Following stat | Navigate to Following List (PAGE 21) |
| Switch Tab | Tap Home, Captures, or Collections tab | Switch content, animate underline slide |
| Edit Home Highlights | Tap "Edit" in Home tab | Enter edit mode: pin/unpin, reorder, tap "Done" to save |
| Toggle Captures View | Tap list/grid icon in Captures tab | Toggle between list and grid views |
| Sort Captures | Tap sort dropdown | Open dropdown with sort options, apply selected sort |
| View Artwork | Tap artwork item in Captures | Navigate to Artwork Detail (PAGE 8) |
| View Collection | Tap collection card in Collections | Navigate to Collection Detail (PAGE 7) |
| Collection Actions | Long-press collection card | Open action sheet: Edit, Delete, Share, Change Visibility |
| Group Collections | Tap grouping dropdown | Open dropdown with grouping options, apply selected grouping |
| Go to Camera | Tap "Go to Camera" in empty states | Navigate to Camera View (PAGE 11) |
| Pin from Captures | Tap "Pin from Captures" in Home empty state | Switch to Captures tab |

### BRANDING ELEMENTS
- Instagram-inspired profile layout (avatar, stats, bio)
- Three tabs organize content (Home for curation, Captures for archive, Collections for organization)
- Stats row provides engagement context (Captures, Followers, Following)
- Home tab customization per design philosophy (user control, curation like Spotify)
- List/Grid toggle in Captures per Pinterest patterns
- Grouping in Collections for organization (By Year, Exhibition, Artist)
- Visibility badges (Private/Public) for privacy control
- Long-press actions follow iOS/Android patterns
- Empty states with clear CTAs (friendly, actionable)
- Typography: Display Medium (28pt) for username → Heading 2 (18pt) → Body Large (17pt)
- Tab underline in Primary color (#1C1C1E)
- Generous spacing: 16pt margins, 12pt gaps per 8pt grid
- Smooth animations: Tab switching, edit mode
- Dark mode support

---
