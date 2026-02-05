# bside.art - Design Guide for Designer

**Project:** bside.art (MVP v2.0)
**Designer:** TBD
**Timeline:** March 31, 2026 (10 weeks)
**Platform:** Mobile Application (iOS 15.0+, Android API 29+)
**Tech Stack:** React Native 0.81.5, Expo ^54.0.27

---

## Design Philosophy

**Core Inspiration (Must Study):**

1. **Nike SNKRS** - Minimalist product-focused navigation, smooth transitions, refined tone, clean cohesive visual language
2. **HYPE by Hypebeast** - Content-driven UI, calm balanced tone, subtle emojis as visual accents, clear information hierarchy
3. **Vivino** - Object scanning functionality (wine bottles → artworks), recognition result displays, information overlay patterns
4. **Pinterest** - Visual-first interface, smooth image search/discovery, masonry/grid layouts for content
5. **Spotify** - Playlist organization, curation features, easy content discovery, personalization patterns
6. **Instagram** - Social features, feed patterns, profile layouts

**The Four Pillars:**

- **Camera/Recognition** = Vivino (scan object → get info, overlay results, manual fallback)
- **Feed/Discovery** = Pinterest + Instagram (visual-first cards, social feed, infinite scroll)
- **Curation/Collections** = Spotify (organize captured artworks into collections like playlists)
- **Profile/Social** = Instagram (follower system, profile tabs, clean user profiles)

**Brand Personality:**
- Minimal and Elegant (artwork as hero)
- Composed and Calm (sophisticated, not playful)
- Joyful with subtle delight moments
- Strong Presence (confident, premium feel)
- Understated Luxury (premium department store, not street market)

---

## Page Count: 20 Total Screens

**Common Pages (3 screens):**
1-3: Splash, Login, Sign Up

**Art Feed Module (5 screens):**
4-8: Main Feed, Collection Detail, Artwork Detail, Artist Profile, Gallery Profile

**Camera Module (4 screens):**
9-12: Camera View, Recognition Success, Recognition Failure, Manual Input

**Search Module (2 screens):**
13-14: Search Main, Search Results

**My Page Module (5 screens):**
15-19: Profile (Home/Captures/Collections tabs), Settings, Edit Profile, Follower List, Following List

**Notifications (1 screen):**
20: Notification List

---

## Design System Quick Reference

### Colors

**Primary (Brand):** #1C1C1E (Dark Charcoal - sophisticated, lets artwork stand out)
- Use for: Primary buttons, key UI elements, brand presence

**Accent Blue (Interactive):** #007AFF (iOS Blue)
- Use for: Links, selected states, informational elements

**Success Green:** #34C759 (iOS Green)
**Error Red:** #FF3B30 (iOS Red)
**Warning Orange:** #FF9500 (iOS Orange)
**Featured Purple:** #AF52DE (iOS Purple) - Use sparingly

**Light Mode:**
- Background Primary: #FFFFFF
- Background Secondary: #F9F9F9
- Text Primary: rgba(0,0,0,0.87)
- Text Secondary: rgba(0,0,0,0.60)
- Text Tertiary: rgba(0,0,0,0.38)

**Dark Mode:**
- Background Primary: #000000 (True Black for OLED)
- Background Secondary: #1C1C1E
- Text Primary: rgba(255,255,255,0.92)
- Text Secondary: rgba(255,255,255,0.60)
- Text Tertiary: rgba(255,255,255,0.38)

### Typography

**Font:** SF Pro (iOS) / Roboto (Android) - System native fonts

**Scale:**
- Display Large: 32pt Bold (Hero headlines)
- Display Medium: 28pt Semibold (Page titles)
- Heading 1: 20pt Semibold (Artwork titles)
- Heading 2: 18pt Semibold (Artist names, section headers)
- Body Large: 17pt Regular (Primary content)
- Body Medium: 15pt Regular (Secondary content)
- Body Small: 13pt Regular (Metadata)
- Caption: 12pt Regular (Timestamps, tertiary info)

### Spacing

- Base: 8pt grid system
- Card padding: 16-24pt
- Section padding: 24-32pt
- Between cards: 16pt
- Screen margins: 16pt (mobile), 24pt (tablet)

### Key Components

**Artwork Card (Reusable):**
- Border radius: 16pt
- Shadow: Elevation-1 (0 2px 8px rgba(0,0,0,0.08))
- Image: Full-width, maintain aspect ratio
- Content padding: 12pt below image
- Elements: Image, Title (20pt Semibold), Artist (15pt Regular), Metadata (13pt), Capture count badge

**Collection Card (Reusable):**
- Border radius: 16pt
- Padding: 16pt
- Header: User avatar (40pt) + Username + Timestamp + More button
- Collection title + Location/Exhibition info
- Horizontal scrollable artwork carousel (200x240pt thumbnails, 12pt spacing)
- Footer: Engagement info ("27 friends were there")

**Buttons:**
- Primary: #1C1C1E background, white text, 48pt height, 12pt radius
- Secondary: Transparent with border, 48pt height
- Icon Button: 44x44pt minimum touch target
- FAB (Camera): 64x64pt circular, white background, camera icon

**Bottom Sheet:**
- Border radius: 16pt on top corners
- Handle: 36x5pt rounded rectangle, 12pt from top
- Backdrop: rgba(0,0,0,0.50)
- Swipe down to dismiss

---

## Page-by-Page Design Brief

### COMMON PAGES

**PAGE 1: Splash Screen**
Full-screen brand experience: bside logo (centered) | Optional artwork background (blurred)
- Minimal, elegant entry point
- Auto-transition to Login (2 seconds) or direct to Home if authenticated
- Support status bar styling

**PAGE 2: Login**
Split layout or centered form: Social login buttons (Apple, Google) | Email option below
- Apple Sign-In button (black, standard Apple design)
- Google Sign-In button (white with Google logo)
- Email login option (tertiary button or link): "Sign in with email"
- Email inputs (if selected): Email field (48pt) + Password field (48pt, eye toggle)
- "Forgot password?" link (if email login)
- Clean, minimal, artwork-focused hero image in background (optional)

**PAGE 3: Sign Up**
Similar layout to Login: Social sign-up options | Email registration form
- Social authentication (Apple/Google) - primary options
- Email sign-up flow:
  - Email input → Send verification code
  - Code input with timer (countdown)
  - Password input (show complexity requirements: min 8 chars, 1 uppercase, 1 number)
  - Password confirmation
  - Terms & Privacy Policy checkboxes
- Welcome message after sign-up → Navigate to Profile Setup popup or directly to Home

---

### ART FEED MODULE

**PAGE 4: Art Feed (Home)**
Tab bar navigation | Vertical scroll feed: Collection cards (own + followed users) | Platform collection cards interspersed
- Top: Search icon (right header), bside logo or "Home" title (center)
- Feed content:
  - User's own capture collections (if any, top priority)
  - Followed users' collections (chronological)
  - Platform collections every 5-7 items: "This Week's Most Captured", "Trending Artists", "Featured Exhibitions"
  - User recommendations every 10-15 items: "You might also like" (horizontal scroll of user cards)
- Collection Card structure:
  - Header: Avatar + Username + Timestamp + More button (three dots)
  - Collection title + Location/Exhibition name + Gallery tag (if applicable)
  - Horizontal carousel: Artwork thumbnails (200x240pt, 12pt gaps, page indicator dots)
  - Footer: Engagement ("27 friends were there" + avatar stack), Capture count
- Pull-to-refresh at top
- Infinite scroll (load more on scroll)
- Empty state (if no content): "Welcome to Bside! Start capturing artworks or follow others." + Camera/Explore CTA

**PAGE 5: Collection Detail**
Nav bar (back button, title, share button) | Hero section | Artwork grid below
- Hero section:
  - Collection title (Display Medium, 28pt)
  - Creator info: Avatar + Username
  - Location + Date + Exhibition name (if applicable)
  - Stats: X artworks, Y friends visited
  - Gallery tag (if applicable)
- Artwork grid: 2-column masonry (mobile), 3-column (tablet)
  - Each artwork: Image + Title + Artist (overlay or below)
  - Tap artwork → Navigate to Artwork Detail
- Edit button (if own collection): Edit collection name, reorder artworks, delete artworks
- Share button (top-right): Share collection via system share sheet

**PAGE 6: Artwork Detail**
Full-bleed hero image (parallax scroll) | Content sections below
- Hero section:
  - Full-width artwork image (edge-to-edge, maintain aspect ratio)
  - Overlay: Back button (top-left), More button (top-right), Capture count badge (bottom-right, blur background)
  - Parallax effect: Image scrolls slower (0.5x) than content below
- Content sections (scrollable, 16pt horizontal padding):
  - **Artwork Info:** Title (Heading 1, 20pt), Artist Name (tappable, 15pt), Year + Medium (13pt), Dimensions
  - **Engagement Stats:** Capture count ("1,424 captures")
  - **Exhibition Context (if applicable):** Section header "In Exhibition" → Exhibition card (name, gallery, dates, tappable)
  - **About Artist:** Avatar + Name + Bio (max 3 lines, "Read more") + Follow button
  - **Related Artworks:** Horizontal carousel (5-7 thumbnails, 160x200pt)
  - **Related Artists:** Horizontal carousel (3-5 artist cards: avatar + name + follow button)
  - **Related Exhibitions:** List of 2-3 exhibition cards
- Bottom action bar (sticky, blur background): "Add to Collection" button + Share icon

**PAGE 7: Artist Profile**
Profile header | Bio section | Artworks grid | Exhibitions list
- Header:
  - Avatar (96pt circular, centered)
  - Artist name (Display Medium, 28pt, centered)
  - Birth year + Location (Body Medium, 15pt, "b. 1985, Based in Seoul, Korea")
  - Social links (Instagram, website icons, 24pt, tappable)
  - Follow button (if not following) or "Following" button
  - Stats row: Captures | Artworks | Exhibitions (centered, 24pt gaps)
- Bio section:
  - Section header: "About" (Heading 3, 16pt)
  - Bio text (Body Large, 17pt, max 5 lines, "Read more" to expand)
- Artworks section:
  - Section header: "Artworks" (Heading 3) + Sort/Filter icon (top-right)
  - 2-column grid (mobile), 3-column (tablet), masonry layout
  - Each artwork: Image + Title (overlay/below) + Capture count badge
  - Paginate: Load 12-20 initially, load more on scroll
- Exhibitions section:
  - Section header: "Exhibitions" (Heading 3)
  - Tabs: Upcoming | Past (segmented control)
  - List of exhibition cards (compact): Name + Gallery + Dates

**PAGE 8: Gallery Profile**
Header | Opening hours | Current exhibitions | Past exhibitions
- Header:
  - Gallery logo (80pt, centered)
  - Gallery name (Display Medium, 28pt)
  - Location (Body Medium, 15pt, "Seoul, Korea")
  - Address (Body Small, 13pt, tappable → maps)
  - Website link (Body Small, 13pt, blue, tappable)
- Opening Hours section:
  - Section header: "Hours" (Heading 3)
  - List of days + hours (Body Medium, 15pt)
  - Today's hours highlighted (bold or different color)
- Current Exhibitions section:
  - Section header: "Current Exhibitions" (Heading 3)
  - Full exhibition cards: Image + Name + Dates + Artists
  - Tap → Exhibition detail
- Past Exhibitions section (optional):
  - Section header: "Past Exhibitions"
  - Compact cards: Text-only or small image

---

### CAMERA MODULE

**PAGE 9: Camera View**
Full-screen camera preview | Top overlay (location/check-in) | Bottom controls
- Camera feed: Edge-to-edge (0pt margins), live camera preview (60fps minimum)
- Top overlay (swipeable drawer, blur + scrim background):
  - Location info: "Seoul, Korea"
  - Check-in prompt (if within 500m of exhibition): "Are you at Frieze London 2025? [Yes] [No]" (compact buttons)
  - Dismiss or confirm check-in (once per session)
- Center guide: Subtle dashed frame indicating artwork placement zone
  - Guidance text (if artwork not centered): "Place the artwork in the center of the camera to 'Capture'" (Body Small, white, scrim background)
- Bottom controls (24pt from bottom, safe area):
  - **Upload button (left):** Icon button (40pt), gallery icon, opens photo picker
  - **Capture button (center, FAB):** 64pt circular, white background, filled camera icon
  - **Flash/Settings (right, optional):** Icon button (40pt), flash icon
- Capture animation: Brief screen flash (white, 100ms) + haptic feedback → Recognition result sheet

**PAGE 10: Recognition Result - Success**
Bottom sheet over camera: Header | Artwork image | Artwork details | Action buttons
- Header: Title "Artwork Recognized" (Heading 2, 18pt) + Close button (top-right)
- Captured image: Full-width corrected artwork image (16:10 aspect ratio)
- Artwork details:
  - Title (Heading 1, 20pt)
  - Artist name (Body Medium, 15pt, tappable → Artist profile)
  - Year, Medium (Body Small, 13pt)
  - Capture date & location (Caption, 12pt)
- Action buttons:
  - "Add to Collection" (Primary button, full-width) → Save to Capture Collection, navigate to My Page or Feed
  - "View Details" (Tertiary button) → Open Artwork Detail screen
- Animation: Sheet slides up from bottom (300ms), image fades in (400ms)

**PAGE 11: Recognition Result - Failure**
Bottom sheet over camera: Header | Processing message | Suggested artworks | Manual options
- Header: Title "Processing Artwork" (Heading 2, 18pt) + Close button
- Captured image with overlay: "We are processing this artwork for you" (Body Medium, white text, centered, scrim background)
- Suggested artworks (optional, if location/exhibition known):
  - "Could it be one of these?" section
  - Horizontal scroll of 2-3 artwork cards (inferred from location)
  - Tap to manually select correct artwork
- Manual input option:
  - "Can't find it? Enter artwork info manually" (Tertiary button or link)
  - Opens Manual Input screen (PAGE 12)
- Request platform collection:
  - "Request platform to add this artwork" (Secondary button) → Submit for admin review

**PAGE 12: Manual Artwork Input**
Form screen: Nav bar | Input fields | Submit button
- Nav bar: Back button + Title "Enter Artwork Info"
- Input fields (48pt height, 8pt vertical gaps):
  - Artist name (text input, required)
  - Artwork title (text input, required)
  - Year (text input or number picker, optional)
  - Medium (text input, optional)
- Captured image preview (thumbnail, top of form)
- Submit button (Primary, full-width, bottom): "Save to Collection"
- On submit: Save to Capture Collection with manual data, navigate to My Page

---

### SEARCH MODULE

**PAGE 13: Search Main**
Search bar (top) | Recent searches | Auto-complete suggestions (on typing)
- Search bar:
  - Magnifying glass icon (leading)
  - Placeholder: "Search artists, artworks, users..." (Body Large, Text Tertiary)
  - Clear button (trailing X icon, appears on typing)
  - Border radius: 12pt, background: #F2F2F2 (light) or #2C2C2E (dark)
  - Height: 40pt, margin: 16pt from edges
- Recent searches (if search bar empty):
  - Section header: "Recent" (Heading 3, 16pt)
  - List of last 10-15 search terms
  - Each item: Clock icon (16pt, left) + Search term (Body Large) + X button (right to remove)
  - Tap term → Re-run search
  - "Clear Search History" button (bottom, tertiary, destructive color)
- Auto-complete suggestions (if typing):
  - Dropdown below search bar (overlays content)
  - Background: Surface with shadow (elevation-2)
  - Max 5-7 suggestions
  - Each suggestion: Type icon (artist/artwork/user) + Text (matching part bolded) + Category label (Caption, "Artist", "Artwork", "User")
  - Tap suggestion → Navigate to Search Results

**PAGE 14: Search Results**
Nav bar (back, search query) | Tab filters (All, Artworks, Artists, Profiles) | Results grid/list
- Nav bar: Back button + Search query text (editable) + Filter icon (optional)
- Tab filters: Horizontal segmented control
  - Tabs: All (default) | Artworks | Artists | Profiles
  - Active tab underlined (Primary color, 2pt)
- Results by type:
  - **Artworks:** 2-column grid (mobile), 3-4 (tablet), masonry or uniform (square crop)
    - Each card: Image + Title + Artist (overlay/below) + Capture count badge
    - Tap → Artwork Detail
  - **Artists:** List layout
    - Each item: Avatar (56pt, circular) + Name (Body Medium, Semibold) + Bio (Caption, 1 line) + Follow button (right)
    - Tap artist → Artist Profile
  - **Profiles (Users):** List layout
    - Each item: Avatar (48pt) + Username (Body Medium, Semibold) + Bio snippet (Caption, 1 line) + Follow button
    - Tap user → User Profile
- Empty state (no results):
  - Icon: Magnifying glass (64pt, Text Tertiary)
  - Message: "No results found for '[query]'" (Heading 2)
  - Suggestion: "Try searching with different keywords" (Body Large, Text Tertiary)
- Loading state: Skeleton cards (shimmer animation)

---

### MY PAGE MODULE

**PAGE 15: My Page (Profile)**
Profile header | Tab menu (Home, Captures, Collections) | Tab content area
- Profile header:
  - Background: Optional gradient or solid color
  - Avatar (96pt, circular, centered)
  - Username (Display Medium, 28pt, centered)
  - Bio (Body Large, 17pt, centered, max 3 lines)
  - Edit Profile button (if own profile, secondary, compact) or Follow button (if other user)
  - Stats row (centered, 24pt gaps): Captures count | Followers count (tappable) | Following count (tappable)
  - Settings icon (top-right, gear icon, if own profile)
- Tab menu (below header):
  - Three tabs: Home | Captures | Collections
  - Active tab: Underline indicator (2pt, Primary color)
  - Tab labels: Label Large (15pt, Medium)
- Tab content area (scrollable):

  **Tab 1: Home**
  - Curated highlights: Featured collections or pinned artworks
  - User customizable: Pin favorite collections/artworks
  - Edit button (top-right, own profile): Enter edit mode (pin/unpin items)
  - Empty state: "Customize your highlights by pinning favorite collections or artworks" + "Pin from Captures" CTA

  **Tab 2: Captures**
  - List view (default): Linear list of artwork items
    - Each item: Thumbnail (80x80pt) + Title + Artist + Date captured + Chevron
  - Grid view (toggle): 2-column grid (mobile), 3-column (tablet)
    - Masonry or uniform grid, artwork thumbnails only
  - Sort/Filter bar (top): Sort dropdown (Date, Artist, Artwork, Capture count) + Filter icon
  - Search within captures (optional): Search bar at top
  - Tap artwork → Artwork Detail

  **Tab 3: Collections**
  - Vertical list of collection cards (compact)
  - Each card: Cover image (16:9 or 4:3) + Collection name + Artwork count + Date/Exhibition info + Visibility badge (Private/Public)
  - Grouping dropdown (top): By Year (default) | By Exhibition | By Artist
  - Tap collection → Collection Detail
  - Long-press → Actions: Edit, Delete, Share, Change visibility
  - Empty state: "No collections yet. Start capturing artworks at exhibitions." + "Go to Camera" CTA

**PAGE 16: Settings**
Grouped list (iOS Settings style): Account Settings | Notification Settings | About | Account Actions
- Nav bar: Back button + Title "Settings"
- **Account Settings section (requires password confirmation):**
  - Change Username (navigate to edit screen)
  - Change Password (email accounts only)
  - Account Visibility (Private/Public toggle)
  - Allow profile in search engines (toggle)
  - Delete Account (destructive, navigate to confirmation screen)
- **Notification Settings section:**
  - New Followers (toggle)
  - Accepted Follow Requests (toggle)
  - Artwork Comments (toggle, future feature)
  - Platform Announcements (toggle)
- **About section:**
  - Privacy Policy (opens webview)
  - Terms of Service (opens webview)
  - Help & Support (opens FAQ or contact form)
  - App Version (display only)
- **Account Actions section:**
  - Logout (tap → confirmation dialog)
- Password confirmation modal (for Account Settings access):
  - Title: "Enter your password to continue" (Heading 2)
  - Password input (secure entry, 48pt)
  - Confirm button (Primary) + Cancel button (Secondary)

**PAGE 17: Edit Profile**
Nav bar | Form fields | Save button
- Nav bar: Cancel button (left) + Title "Edit Profile" + Save button (right, primary action)
- Form fields (16pt horizontal padding):
  - Profile photo: Avatar (96pt) + "Change Photo" button (opens photo picker)
  - Username input (48pt, with duplicate check feedback)
  - Bio textarea (multi-line, max 200 chars, char counter)
- Save button: Saves changes, navigates back to Profile
- Cancel: Discard changes, navigate back

**PAGE 18: Follower List**
Nav bar | User list | Search
- Nav bar: Back button + Title "Followers"
- Search bar (top): Search followers by username
- User list: Vertical list of user cards
  - Each card: Avatar (48pt) + Username + Bio snippet + Follow/Following button (if not yourself)
  - Tap user → Navigate to User Profile
- Empty state (if no followers): "No followers yet"

**PAGE 19: Following List**
Nav bar | User list | Search
- Nav bar: Back button + Title "Following"
- Search bar (top): Search following by username
- User list: Vertical list of user cards
  - Each card: Avatar (48pt) + Username + Bio snippet + "Following" button (tap to unfollow with confirmation)
  - Tap user → Navigate to User Profile
- Empty state (if not following anyone): "Not following anyone yet. Discover users to follow." + Search/Explore CTA

---

### NOTIFICATIONS MODULE

**PAGE 20: Notification List**
Nav bar | Notification items (grouped or chronological)
- Nav bar: Title "Notifications"
- Notification items (vertical list):
  - **New Follow notification:**
    - Avatar (40pt) + "[Username] started following you" (Body Medium) + Timestamp (Caption)
    - Buttons: "Accept" (Primary, compact) + "Reject" (Secondary, compact) (if private account)
    - Tap notification → Navigate to User Profile
  - **Follow Request Accepted notification:**
    - Avatar + "[Username] accepted your follow request" + Timestamp
    - Tap → Navigate to User Profile
  - **Platform Announcement notification:**
    - bside logo icon (40pt) + Announcement text + Timestamp
    - Tap → Open announcement detail or webview
- Read/Unread indicator: Bold text for unread, normal for read
- Swipe to delete notification (optional)
- Empty state (no notifications): "No new notifications"

---

## Critical Design Rules

1. **Artwork is ALWAYS the Hero** - Artworks are the primary content. UI elements support but never overpower artwork imagery. Use generous white/negative space, subtle backgrounds, blur, and gradients to create hierarchy.

2. **Minimal Yet Meaningful** - Every element serves a clear purpose. Clean, uncluttered interfaces. Strategic use of visual accents (icons, animations, text). Avoid unnecessary decoration.

3. **Smooth & Engaging** - Fluid transitions (300-400ms ease-in-out), spring physics for buttons, contextual animations. All interactions feel natural and responsive.

4. **Understated Elegance** - Sophisticated color palette (neutral-forward with refined accents), premium typography and spacing, calm and balanced overall tone. Inspired by Nike SNKRS and HYPE.

5. **Consistent Component Usage** - Use design system components everywhere (buttons, cards, inputs from style guideline). Maintain consistency in colors, typography, spacing across all screens.

6. **Touch Targets & Accessibility** - Minimum 44x44pt for all interactive elements. Text contrast ratio ≥4.5:1 (WCAG AA). Support dynamic type and dark mode.

7. **Camera as Primary Entry Point** - Camera tab is core feature. Make capture button prominent (64pt FAB), recognition results immediate and clear. Fallback to manual input always available.

8. **Location-Based Context** - Use GPS + time to suggest check-in at exhibitions/galleries (500m radius). Check-in info shown persistently in camera session. Auto-tag captures with exhibition data.

9. **Loading & Empty States** - Show skeleton loading (shimmer animation) for all async content. Provide friendly, encouraging empty states with clear CTAs. Never leave users with blank screens.

10. **Dark Mode as First-Class Citizen** - Design both light and dark mode simultaneously. Use true black (#000000) for dark mode (OLED efficiency). Ensure all colors, shadows, and overlays work in both modes.

---

## Component Patterns

### Artwork Card (Reusable - Feed, Search, Collections)
```
┌─────────────────────────────┐
│                             │
│    [Artwork Image]          │ ← Full-width, maintain aspect ratio
│    (4:5 or original)        │   Border radius: 16pt top corners
│  [Capture Count Badge]      │ ← Top-right, blur background, 11pt text
│                             │
├─────────────────────────────┤
│  [Artwork Title]            │ ← Heading 1 (20pt Semibold), max 2 lines
│  [Artist Name]              │ ← Body Medium (15pt Regular), tappable, Text Secondary
│  [Year, Medium]             │ ← Body Small (13pt), Text Tertiary
└─────────────────────────────┘
```
- Width: Full-width in list, 280pt in grid
- Padding: 0pt for image, 12pt for content area below
- Shadow: Elevation-1
- States: Press scales to 0.98, shadow increases
- Usage: Art Feed, Search Results, Collection Detail, Artist Profile

### Collection Card (Reusable - Feed, My Page)
```
┌─────────────────────────────────────────┐
│ [Avatar] [Username]      [Timestamp] [•••] │ ← Header: 16pt padding
├─────────────────────────────────────────┤
│ [Collection Name] 📍 [Location]          │ ← Title + Location
│ [Exhibition Name] [Gallery Tag]          │ ← Metadata
├─────────────────────────────────────────┤
│ ← [Art1] [Art2] [Art3] [Art4] →        │ ← Horizontal scroll carousel
│    200x240pt thumbnails, 12pt gaps      │   Page indicator dots below
├─────────────────────────────────────────┤
│ [Avatar Stack] "27 friends were there"  │ ← Footer: Engagement info
└─────────────────────────────────────────┘
```
- Border radius: 16pt
- Padding: 16pt
- Shadow: Elevation-1
- Carousel: Horizontal scroll, snap to item
- Usage: Art Feed, My Page Collections tab

### Bottom Sheet (Reusable - Recognition Results, Filters, Actions)
```
┌─────────────────────────────────────────┐
│           ───────                       │ ← Handle (36x5pt, 12pt from top)
│                                         │
│  [Title]                          [×]   │ ← Header: Centered title + Close button
├─────────────────────────────────────────┤
│                                         │
│  [Content Area]                         │ ← Scrollable, 16pt padding
│  [Artwork image, text, buttons, etc.]  │
│                                         │
├─────────────────────────────────────────┤
│  [Primary Action Button]                │ ← Footer: Full-width button (optional)
└─────────────────────────────────────────┘
```
- Border radius: 16pt on top corners
- Shadow: Elevation-3
- Backdrop: rgba(0,0,0,0.50)
- Behavior: Swipe down to dismiss, tap backdrop to dismiss (if not modal)
- Animation: Slide up from bottom (300ms ease-out)

### Floating Action Button (FAB - Camera Capture)
```
        ┌───────┐
        │   📷  │  ← Filled camera icon (28pt)
        └───────┘
```
- Size: 64x64pt (circular)
- Background: #FFFFFF (light mode) or #2C2C2E (dark mode)
- Icon: Filled camera, #1C1C1E or #FFFFFF
- Shadow: Elevation-3
- Position: Bottom center, 24pt from edges + safe area
- States: Press scales to 0.95, shadow increases
- Usage: Camera View (primary capture action)

---

## Deliverables Checklist

**Week 1-2: Research & Wireframes**
- [ ] Study reference apps: Nike SNKRS, HYPE by Hypebeast, Vivino, Pinterest, Spotify, Instagram
- [ ] Collect reference images and screenshots
- [ ] Create mood board (color palette, typography, UI patterns)
- [ ] Low-fidelity wireframes for all 20 screens
- [ ] User flow diagrams (capture → recognition → collection → feed)
- [ ] Review with PM and stakeholders

**Week 3-5: High-Fidelity Mockups (Priority Screens)**
- [ ] High-fidelity mockups for key screens (priority order below):
  - Camera View (PAGE 9) - Core feature
  - Recognition Success (PAGE 10) - Core feature
  - Recognition Failure (PAGE 11) - Core feature
  - Art Feed Main (PAGE 4) - Entry point
  - Artwork Detail (PAGE 6) - Key content page
  - My Page Profile (PAGE 15) - User identity
  - Search Main (PAGE 13) - Discovery
  - Login (PAGE 2) - Entry point
  - Sign Up (PAGE 3) - Entry point
  - Collection Detail (PAGE 5)
- [ ] Design system documentation (colors, typography, spacing tokens)
- [ ] Component library creation in Figma (buttons, cards, inputs, sheets)

**Week 6-8: Remaining Screens & Variants**
- [ ] Complete all remaining screens (11 screens):
  - Manual Input (PAGE 12)
  - Search Results (PAGE 14)
  - Artist Profile (PAGE 7)
  - Gallery Profile (PAGE 8)
  - Settings (PAGE 16)
  - Edit Profile (PAGE 17)
  - Follower/Following Lists (PAGE 18-19)
  - Notification List (PAGE 20)
  - Splash (PAGE 1)
- [ ] Dark mode variants for all 20 screens
- [ ] Responsive designs (mobile portrait, tablet landscape)
- [ ] Empty states for all relevant screens
- [ ] Error states (network error, API failure, invalid input)
- [ ] Loading states (skeleton screens, spinners)

**Week 9: Interactive Prototype & Polish**
- [ ] Interactive Figma prototype (key flows):
  - Onboarding: Splash → Login → Sign Up → Home
  - Capture flow: Camera → Capture → Recognition → Artwork Detail → Add to Collection
  - Discovery flow: Search → Results → Artwork Detail → Artist Profile
  - Social flow: Feed → Collection Detail → User Profile → Follow
- [ ] Annotate animations and transitions (timing, easing, effects)
- [ ] Micro-interactions (button presses, swipes, gestures)
- [ ] Design QA: Consistency check, accessibility audit, responsive behavior

**Week 10: Finalization & Handoff**
- [ ] Final design review with PM and stakeholders
- [ ] Developer handoff session (walkthrough all screens and flows)
- [ ] Export assets:
  - Icons (SVG, outlined and filled variants, 24x24pt base)
  - Images (PNG, @1x/@2x/@3x for iOS, mdpi-xxxhdpi for Android)
  - Logo and brand assets
- [ ] Handoff documentation:
  - Design system guide (colors, typography, spacing, components)
  - Component library in Figma (organized, documented, with variants)
  - Interactive prototype links
  - Developer notes (API integration points, animation specs, edge cases)
- [ ] Set up design support channel (Slack/Teams for quick questions)

**Final Delivery:**
- [ ] Figma file with all 20 screens (light + dark mode)
- [ ] Component library (buttons, cards, inputs, sheets, modals, etc.)
- [ ] Design system guide (reference document)
- [ ] Icon set (SVG exports, organized by category)
- [ ] Image assets (optimized PNGs, correct resolutions)
- [ ] Interactive prototype link (Figma shareable link)
- [ ] Developer handoff notes (technical specs, animations, edge cases)

---

## Priority Order

Design screens in this order to maximize impact and enable parallel development:

1. **Camera View (PAGE 9)** - Core feature, critical for MVP, enables AI integration testing
2. **Recognition Success (PAGE 10)** - Immediate feedback, validates core functionality
3. **Recognition Failure (PAGE 11)** - Fallback flow, ensures smooth UX even on AI failure
4. **Art Feed Main (PAGE 4)** - Main entry point after login, defines overall app feel
5. **Artwork Detail (PAGE 6)** - Most important content page, showcases artwork as hero
6. **My Page Profile (PAGE 15)** - User identity and collection management
7. **Login (PAGE 2) + Sign Up (PAGE 3)** - Entry point for new users
8. **Collection Detail (PAGE 5)** - Secondary content page, important for social features
9. **Search Main (PAGE 13) + Search Results (PAGE 14)** - Discovery feature
10. **Artist Profile (PAGE 7)** - Content enrichment, connects artworks to artists
11. **Settings (PAGE 16)** - Account management, necessary for privacy controls
12. **Notification List (PAGE 20)** - Social engagement notifications
13. **Gallery Profile (PAGE 8) + Manual Input (PAGE 12) + Edit Profile (PAGE 17) + Follower/Following Lists (PAGE 18-19) + Splash (PAGE 1)** - Lower priority, can be designed in parallel or after core screens

---

## Success Criteria

Your design succeeds if:

✅ **Camera/Recognition feels like Vivino** - Scan artwork → instant recognition → clear results → easy manual fallback
✅ **Feed feels like Pinterest + Instagram** - Visual-first cards, infinite scroll, engaging social content, artwork as hero
✅ **Collections feel like Spotify playlists** - Easy to organize, curate, and share captured artworks
✅ **Profile feels like Instagram** - Clean tabs, follower system, personal curation, easy to navigate
✅ **Platform feels Minimal & Elegant** - Understated luxury, sophisticated, calm, not playful or busy
✅ **All 20 screens designed** - Complete coverage of MVP scope
✅ **Component library complete** - Reusable, documented, consistent across all screens
✅ **Responsive at all breakpoints** - Mobile portrait (primary), tablet landscape, foldables
✅ **Dark mode fully supported** - All screens designed for both light and dark mode
✅ **Accessibility standards met** - WCAG AA minimum (contrast, touch targets, labels)

---

## Design Tips

1. **Consistency First** - Use design system components everywhere. Don't reinvent buttons, cards, or inputs. Reference the [bside Design Style Guideline](bside_design_style_guideline.md) for all component specs.

2. **Accessibility** - 4.5:1 contrast ratio minimum for text. 44x44pt minimum touch targets. Provide accessible labels for screen readers.

3. **Performance** - Optimize images (use thumbnails in lists/carousels, full-res only on detail screens). Use SVG icons. Lazy load images.

4. **Responsive** - Mobile-first approach (design for iPhone 12-15 size first). Adapt to tablets with 2-column layouts. Test on small screens (iPhone SE) and large tablets (iPad Pro).

5. **States Matter** - Design loading states (skeleton screens), empty states (friendly messages), error states (helpful guidance), and success states (confirmation feedback) for every screen.

6. **Real Content** - Use realistic text and artwork images, not Lorem Ipsum or placeholder boxes. Helps stakeholders visualize final product.

7. **Whitespace is Your Friend** - Generous spacing (8pt grid system). Don't cramp elements. Let artwork breathe.

8. **Hierarchy** - Clear visual importance. Use typography scale (32pt → 28pt → 20pt → 17pt) and color (Primary → Secondary → Tertiary) to guide user's eye.

9. **Feedback** - User always knows what's happening. Button press animations, loading spinners, success confirmations, error messages. Never leave user guessing.

10. **Polish** - Subtle animations (300-400ms), consistent shadows (elevation-1 to -4), rounded corners (12-16pt), blur effects for premium feel. Details matter.

---

## Reference Links

**Design Style Guideline (Companion Document):**
`bside_design_style_guideline.md` - Complete design system, components, accessibility standards

**PRD (Product Requirements Document):**
`bside_art_PRD_updated_260130.md` - Full technical specifications, user flows, API details

**Reference Apps to Study:**
- Nike SNKRS: Minimalist navigation, smooth transitions, product-focused
- HYPE by Hypebeast: Content-driven, calm tone, subtle visual accents
- Vivino: Object scanning, recognition results, information overlays
- Pinterest: Visual search, masonry grids, artwork-first
- Spotify: Playlist curation, personalization, easy discovery
- Instagram: Social features, profile layouts, feed patterns

---

**Priority Order Summary:**
1. Camera (recognition is core)
2. Feed (entry point)
3. Artwork Detail (content showcase)
4. Profile (user identity)
5. Search (discovery)
6. Everything else (supporting features)

Good luck! Focus on making artwork the hero, keeping the UI minimal and elegant, and ensuring smooth, engaging interactions throughout. 🎨🚀

---

**Document Version:** 1.0
**Created:** February 2, 2026
**Next Review:** After Week 2 wireframes complete
