# bside.art - Design Guide for Designer

**Project:** bside.art (MVP v3.1)
**Designer:** TBD
**Timeline:** March 31, 2026 (10 weeks)
**Platform:** Mobile Application (iOS 15.0+, Android API 29+)
**Tech Stack:** React Native 0.81.5, Expo ^54.0.27

---

## Changelog

### v3.1 (February 9, 2026)
**Updated from v2.0 to align with PRD v3.1 (February 6, 2026)**

**Major Changes:**
- **Navigation Restructure**: Changed from 4-item bottom tab bar to 3-item bottom floating nav (Home, Camera, My Page) with Search moved to persistent top header
- **Page Count Update**: 20 → 22 total screens (added Splash Screen and Profile Setup)
- **Authentication Flow Enhancement**: Complete 5-screen auth flow (Splash, Login, Sign Up, Password Recovery, Profile Setup)
- **Global Navigation Component**: Added new component patterns for Bottom Nav (3-item) and Top Header (Search, Logo, Notifications)
- **Check-in UX Clarification**: Camera check-in appears as top overlay/drawer (not full modal)
- **My Page Enhancement**: Added Edit Profile button to self-view profile section

### v2.0 (February 2, 2026)
- Initial complete design guide with 20 screens
- Design philosophy and component patterns established
- Full page-by-page design brief

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

## Page Count: 22 Total Screens

**Authentication Pages (5 screens):**
1-5: Splash, Login, Sign Up, Password Recovery, Profile Setup

**Art Feed Module (5 screens):**
6-10: Main Feed, Collection Detail, Artwork Detail, Artist Profile, Gallery Profile

**Camera Module (4 screens):**
11-14: Camera View, Recognition Success, Recognition Failure, Manual Input

**Search Module (2 screens):**
15-16: Search Main, Search Results

**My Page Module (5 screens):**
17-21: Profile (Home/Captures/Collections tabs), Settings, Edit Profile, Follower List, Following List

**Notifications (1 screen):**
22: Notification List

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

**Global Navigation - Bottom Nav Bar (NEW):**
- Height: 56pt + safe area inset
- Background: #FFFFFF (light) / #1C1C1E (dark)
- 3 items: Home | Camera | My Page
- Each item: Icon (24pt) + Label (Caption 11pt)
- Active state: Primary color (#1C1C1E or #007AFF)
- Inactive state: Text Tertiary
- Position: Fixed bottom, floating style with 16pt horizontal margins and 8pt bottom margin
- Border radius: 24pt
- Shadow: Elevation-2 for floating effect

**Global Navigation - Top Header Bar (NEW):**
- Height: 44pt + safe area inset
- Background: Transparent or #FFFFFF (light) / #000000 (dark) depending on context
- Left: Search icon (24pt, tappable 44x44pt)
- Center: bside logo (auto height, proportional)
- Right: Notification bell icon (24pt, tappable 44x44pt, with red dot badge if unread)
- Position: Fixed top
- Appears on: Art Feed, My Page, Artwork Feed, Artwork Detail

---

## Page-by-Page Design Brief

### AUTHENTICATION PAGES

**PAGE 1: Splash Screen**
Full-screen brand experience: bside logo (centered) | Optional artwork background (blurred)
- Minimal, elegant entry point
- Auto-check for auth token on load
- If valid token → Navigate to Art Feed (Home)
- If no valid token → Navigate to Login (after 2-second brand display)
- Support status bar styling
- Loading indicator (subtle spinner or animation below logo)

**PAGE 2: Login**
Centered form with social-first layout: Social login buttons (Apple, Google) | Email option below
- Apple Sign-In button (black, standard Apple design, 48pt height)
- Google Sign-In button (white with Google logo, 48pt height)
- Divider: "or" (centered, 24pt spacing)
- Email login section (collapsible or always visible):
  - Email field (48pt height, mail icon)
  - Password field (48pt height, lock icon, eye toggle)
  - "Forgot password?" link (Body Small, right-aligned, Accent Blue)
- Login button (Primary, full-width, 48pt)
- "Don't have an account? Sign Up" link (bottom, centered, Body Medium)
- Error messages inline below fields (Error Red)
- Clean, minimal, optional artwork-focused hero image in background (blurred, low opacity)

**PAGE 3: Sign Up**
Similar layout to Login: Social sign-up options | Email registration flow
- Social authentication (Apple/Google) - primary options (same styling as Login)
- Divider: "or"
- Email sign-up flow (multi-step inline):
  - **Step 1:** Email input + "Send Code" button
  - **Step 2:** Verification code input (6-digit, with countdown timer: "Resend in 1:30")
  - **Step 3:** Password input (show complexity requirements below: "Min 8 chars, 1 uppercase, 1 number")
  - **Step 4:** Confirm password input (with match indicator)
  - Terms & Privacy Policy checkboxes (Caption, with links)
- "Create Account" button (Primary, full-width, 48pt, enabled only when all requirements met)
- "Already have an account? Log In" link (bottom, centered)
- Success → Navigate to Home (Art Feed) → Show Profile Setup prompt (PAGE 5)

**PAGE 4: Password Recovery**
Centered form: Email input | Verification | Password reset
- Title: "Reset Password" (Display Medium, 28pt, centered)
- **Step 1:** Email input field (48pt) + "Send Reset Code" button (Primary, full-width)
- **Step 2:** Verification code input (6-digit, with countdown timer)
- **Step 3:** New Password field (48pt, with complexity requirements)
- **Step 4:** Confirm New Password field (48pt, with match indicator)
- "Reset Password" button (Primary, full-width, 48pt)
- Success message: "Password reset successfully. Please log in." (Success Green)
- Navigate to Login (PAGE 2) after success
- "Back to Login" link (top-left, Accent Blue)

**PAGE 5: Profile Setup (First-Time Post-Signup)**
Modal or full-screen prompt: Welcome message | Profile customization | Skip option
- Trigger: Appears after first login (both social and email sign-up)
- Title: "Welcome to bside!" (Display Medium, 28pt, centered)
- Subtitle: "Set up your profile to get started" (Body Large, centered, Text Secondary)
- Profile photo selector:
  - Circular avatar placeholder (96pt)
  - "Add Photo" button (opens photo picker, optional)
  - Default avatar provided if skipped
- Username input (48pt, with real-time duplicate check):
  - Auto-generated default username pre-filled (e.g., "user_12345")
  - Validation feedback inline (green checkmark if available, red X if taken)
- Bio text area (multi-line, max 200 chars, optional):
  - Placeholder: "Tell us a bit about yourself..."
  - Character counter: "0 / 200" (bottom-right)
- "Complete" button (Primary, full-width, 48pt) → Save profile, enter Home (Art Feed)
- "Skip for now" button (Tertiary, full-width, below Complete) → Enter Home with defaults, can edit later from My Page
- Dismissible with X (top-right) if user prefers to skip

---

### ART FEED MODULE

**PAGE 6: Art Feed (Home)**
Global Top Header | Vertical scroll feed: Collection cards (own + followed users) | Platform collection cards interspersed | Bottom Nav
- **Top Header (Global Navigation):**
  - Left: Search icon (44x44pt tap target) → Navigate to Search (PAGE 15)
  - Center: bside logo (proportional height)
  - Right: Notification bell icon (44x44pt tap target, red dot if unread) → Navigate to Notifications (PAGE 22)
- **Feed content:**
  - User's own capture collections (if any, top priority)
  - Followed users' collections (chronological)
  - Platform collections every 5-7 items: "This Week's Most Captured", "Trending Artists", "Featured Exhibitions"
  - User recommendations every 10-15 items: "You might also like" (horizontal scroll of user cards)
- **Collection Card structure** (see Component Patterns section for detailed specs)
- Pull-to-refresh at top
- Infinite scroll (load more on scroll)
- Empty state (if no content): "Welcome to Bside! Start capturing artworks or follow others." + Camera/Explore CTA
- **Bottom Nav (Global Navigation):** 3-item nav bar (Home active, Camera, My Page)

**PAGE 7: Collection Detail**
Top Header | Nav bar (back button, title, share button) | Hero section | Artwork grid below | Bottom Nav
- **Top Header:** Same as PAGE 6
- **Nav bar:**
  - Back button (left, chevron + "Back")
  - Collection title (center, Heading 2, 18pt)
  - Share button (right, share icon, 44x44pt tap target)
- **Hero section:**
  - Collection title (Display Medium, 28pt)
  - Creator info: Avatar (48pt) + Username (Body Large, tappable → My Page)
  - Location + Date + Exhibition name (if applicable) (Body Small, Text Secondary)
  - Stats: X artworks, Y friends visited (Body Small)
  - Gallery tag (if applicable, pill style, 24pt height, Accent Blue background)
- **Artwork grid:** 2-column masonry (mobile), 3-column (tablet)
  - Each artwork: Image + Title (Heading 1, 20pt, below) + Artist (Body Medium, 15pt, tappable)
  - Tap artwork → Navigate to Artwork Detail (PAGE 8)
- **Edit button** (if own collection, secondary, compact, top-right): Edit collection name, reorder artworks, delete artworks
- **Bottom Nav:** Same as PAGE 6

**PAGE 8: Artwork Detail**
Full-bleed hero image (parallax scroll) | Content sections below | Dynamic background | Bottom Nav
- **Hero section:**
  - Full-width artwork image (edge-to-edge, maintain aspect ratio, fills screen top)
  - Overlay: Back button (top-left, 44x44pt, white with scrim), More button (top-right, 44x44pt), Capture count badge (bottom-right, blur background, "1,424 captures", Caption, white text)
  - Parallax effect: Image scrolls slower (0.5x) than content below
- **Dynamic Background (NEW - PRD v3.1):**
  - Area behind content sections uses faded/lighter version of artwork's dominant color (similar to Instagram/Facebook story backgrounds)
  - Ensures text readability while creating visual cohesion with artwork
  - Gradient from dominant color to background color
- **Content sections** (scrollable, 16pt horizontal padding, over dynamic background):
  - **Artwork Info:** Title (Heading 1, 20pt), Artist Name (tappable, Body Large, 17pt, Accent Blue), Year + Medium (Body Small, 13pt, Text Secondary), Dimensions (if available)
  - **Engagement Stats:** Capture count ("1,424 captures", Body Medium, with camera icon)
  - **Exhibition Context (if applicable):** Section header "In Exhibition" (Heading 3, 16pt) → Exhibition card (name, gallery, dates, tappable → navigate to Artwork Feed for that exhibition)
  - **About Artist:** Section header "About Artist" (Heading 3) → Avatar (56pt) + Name (Heading 2, tappable → Artist Profile PAGE 9) + Bio (Body Large, max 3 lines, "Read more" to expand) + Follow button (Secondary, compact)
  - **Related Artworks:** Section header "Related Artworks" (Heading 3) → Horizontal carousel (5-7 thumbnails, 160x200pt, 12pt gaps)
  - **Related Artists:** Section header "Related Artists" (Heading 3) → Horizontal carousel (3-5 artist cards: avatar 64pt + name + follow button)
  - **Related Exhibitions:** Section header "Related Exhibitions" (Heading 3) → List of 2-3 exhibition cards (compact: name + gallery + dates)
- **Bottom action bar** (sticky, blur background, 80pt height + safe area):
  - "Add to Collection" button (Primary, flexible width, 48pt height) + Share icon (44x44pt tap target)
- **Bottom Nav:** Same as PAGE 6

**PAGE 9: Artist Profile**
Top Header | Profile header | Bio section | Artworks grid | Exhibitions list | Bottom Nav
- **Top Header:** Same as PAGE 6
- **Profile header:**
  - Avatar (96pt circular, centered)
  - Artist name (Display Medium, 28pt, centered)
  - Birth year + Location (Body Medium, 15pt, centered, "b. 1985, Based in Seoul, Korea")
  - Social links (Instagram, website icons, 24pt, tappable, horizontal row)
  - Follow button (if not following, Secondary, 48pt height, centered) or "Following" button (if following, with checkmark)
  - Stats row: Captures | Artworks | Exhibitions (centered, 24pt gaps, Body Small)
- **Bio section:**
  - Section header: "About" (Heading 3, 16pt)
  - Bio text (Body Large, 17pt, max 5 lines, "Read more" to expand)
- **Artworks section:**
  - Section header: "Artworks" (Heading 3) + Sort/Filter icon (top-right, 44x44pt)
  - 2-column grid (mobile), 3-column (tablet), masonry layout
  - Each artwork: Image + Title (overlay or below, Heading 4, 18pt) + Capture count badge (top-right)
  - Paginate: Load 12-20 initially, load more on scroll
- **Exhibitions section:**
  - Section header: "Exhibitions" (Heading 3)
  - Tabs: Upcoming | Past (segmented control, 32pt height)
  - List of exhibition cards (compact): Name + Gallery + Dates (Body Medium)
- **Bottom Nav:** Same as PAGE 6

**PAGE 10: Gallery Profile**
Top Header | Header | Opening hours | Current exhibitions | Past exhibitions | Bottom Nav
- **Top Header:** Same as PAGE 6
- **Profile header:**
  - Gallery logo (80pt, centered)
  - Gallery name (Display Medium, 28pt, centered)
  - Location (Body Medium, 15pt, centered, "Seoul, Korea")
  - Address (Body Small, 13pt, centered, tappable → open in maps)
  - Website link (Body Small, 13pt, centered, Accent Blue, tappable)
- **Opening Hours section:**
  - Section header: "Hours" (Heading 3, 16pt)
  - List of days + hours (Body Medium, 15pt, 8pt vertical gaps)
  - Today's hours highlighted (Accent Blue or bold)
- **Current Exhibitions section:**
  - Section header: "Current Exhibitions" (Heading 3)
  - Full exhibition cards: Image (16:9 aspect, border radius 16pt) + Name (Heading 2, 18pt) + Dates (Body Small, Text Secondary) + Artists (Body Small, "Featuring X artists")
  - Tap → Navigate to Artwork Feed for that exhibition
- **Past Exhibitions section (optional):**
  - Section header: "Past Exhibitions" (Heading 3)
  - Compact cards: Text-only or small image (64x64pt) + Name + Dates
- **Bottom Nav:** Same as PAGE 6

---

### CAMERA MODULE

**PAGE 11: Camera View**
Full-screen camera preview | Top overlay (location/check-in) | Bottom controls | No Top Header | No Bottom Nav
- **Camera feed:** Edge-to-edge (0pt margins), live camera preview (60fps minimum)
- **Top overlay (NEW - v3.1: check-in as drawer/overlay, not modal):**
  - Swipeable drawer from top (blur + scrim background, rgba(0,0,0,0.60))
  - Location info: "Seoul, Korea" (Body Medium, white text)
  - **Check-in suggestions (if within 500m of exhibition):**
    - Prompt style: "Are you at Frieze London 2025?" (Body Medium, white)
    - Buttons: "Yes" (compact, 32pt height, white background) + "No" (text-only, white)
    - Close (X) icon to dismiss (top-right of overlay, 44x44pt)
  - **Multiple events:** Display all as stacked cards, each with "Yes" + X dismiss
  - **No events:** Default location (city/area name) displayed without buttons
  - **After check-in confirmation:** Display event name + location (similar to Art Feed collection header style)
- **Center guide:** Subtle dashed frame indicating artwork placement zone
  - Guidance text (if artwork not centered): "Place the artwork in the center of the camera to 'Capture'" (Body Small, white, scrim background, fade in/out)
- **Bottom controls (24pt from bottom, safe area):**
  - **Upload button (left):** Icon button (40pt), gallery icon, opens photo picker
  - **Capture button (center, FAB):** 64pt circular, white background, filled camera icon (28pt)
  - **Flash/Settings (right, optional):** Icon button (40pt), flash icon
- **Capture animation:** Brief screen flash (white, 100ms) + haptic feedback → Navigate to Recognition result sheet (PAGE 12 or 13)
- **Close button (top-left):** X icon (44x44pt, white with scrim) → Exit camera, return to previous screen

**PAGE 12: Recognition Result - Success**
Bottom sheet over camera preview: Header | Artwork image | Artwork details | Action buttons
- **Bottom sheet** (slides up from bottom, 16pt top corners border radius):
  - **Header:** Title "Artwork Recognized" (Heading 2, 18pt, centered) + Close button (top-right, X icon, 44x44pt)
  - **Captured image:** Full-width corrected artwork image (16:10 aspect ratio, border radius 12pt, 16pt horizontal margins)
  - **Artwork details:**
    - Title (Heading 1, 20pt, 16pt horizontal padding)
    - Artist name (Body Medium, 15pt, tappable → Artist profile, Accent Blue)
    - Year, Medium (Body Small, 13pt, Text Secondary)
    - Capture date & location (Caption, 12pt, Text Tertiary)
  - **Action buttons (bottom, 16pt padding):**
    - "Add to Collection" (Primary button, full-width, 48pt height) → Save to Capture Collection, navigate to My Page (PAGE 17) or Art Feed (PAGE 6)
    - "View Details" (Tertiary button, full-width, 48pt height) → Open Artwork Detail screen (PAGE 8)
- **Animation:** Sheet slides up from bottom (300ms ease-out), image fades in (400ms)
- **Backdrop:** Camera preview visible behind, darkened (rgba(0,0,0,0.50)), tap to dismiss (close sheet, return to camera)

**PAGE 13: Recognition Result - Failure**
Bottom sheet over camera preview: Header | Processing message | Suggested artworks | Manual options
- **Bottom sheet** (same styling as PAGE 12):
  - **Header:** Title "Processing Artwork" (Heading 2, 18pt, centered) + Close button (top-right)
  - **Captured image with overlay:**
    - Image: Same full-width style as success
    - Overlay message: "We are processing this artwork for you" (Body Medium, white text, centered, scrim background rgba(0,0,0,0.70))
    - Loading indicator (spinner, below text)
  - **Suggested artworks (optional, if location/exhibition known):**
    - Section header: "Could it be one of these?" (Heading 3, 16pt, 16pt padding)
    - Horizontal scroll of 2-3 artwork cards (120x150pt thumbnails, 12pt gaps)
    - Each card: Image + Title (Caption, 12pt, below, max 1 line, ellipsis)
    - Tap to manually select correct artwork → Navigate to Artwork Detail (PAGE 8) or save to collection
  - **Manual input option (bottom, 16pt padding):**
    - "Can't find it? Enter artwork info manually" (Tertiary button or link, Accent Blue, centered)
    - Opens Manual Input screen (PAGE 14)
  - **Request platform collection:**
    - "Request platform to add this artwork" (Secondary button, full-width, 48pt height, below manual input)
    - Submit for admin review (show success toast: "Request submitted. We'll notify you when added.")
- **Backdrop:** Same as PAGE 12

**PAGE 14: Manual Artwork Input**
Top Header | Nav bar | Form screen: Input fields | Submit button
- **Nav bar:** Back button (left, chevron + "Back") + Title "Enter Artwork Info" (center, Heading 2)
- **Captured image preview:** Thumbnail (100x100pt, top of form, border radius 12pt, 16pt margins)
- **Input fields (vertical stack, 16pt horizontal padding, 16pt vertical gaps):**
  - Artist name (text input, 48pt height, required, placeholder: "Artist name")
  - Artwork title (text input, 48pt height, required, placeholder: "Artwork title")
  - Year (text input or number picker, 48pt height, optional, placeholder: "Year (e.g., 2023)")
  - Medium (text input, 48pt height, optional, placeholder: "Medium (e.g., Oil on canvas)")
- **Field validation:**
  - Required fields: Red asterisk (*), inline error message if empty on submit ("This field is required")
  - Optional fields: No asterisk
- **Submit button (bottom, sticky, 16pt padding):**
  - "Save to Collection" (Primary, full-width, 48pt height)
  - On submit: Save to Capture Collection with manual data, show success toast ("Artwork added to your collection"), navigate to My Page (PAGE 17) or Art Feed (PAGE 6)
- **Cancel option:** Back button (nav bar) or swipe-down gesture (if presented as modal)

---

### SEARCH MODULE

**PAGE 15: Search Main**
Top Header (Search replaces back button) | Search bar (focused) | Recent searches | Auto-complete suggestions (on typing)
- **Top Header (modified):**
  - Left: Back button (44x44pt, chevron only, no label) → Navigate back to previous screen
  - Center: Search bar (expanded, full-width minus margins)
  - Right: Cancel button (text, "Cancel", Accent Blue) → Exit search, navigate back
- **Search bar (auto-focused on page load):**
  - Magnifying glass icon (leading, 20pt)
  - Placeholder: "Search artists, artworks, users..." (Body Large, Text Tertiary)
  - Clear button (trailing X icon, 20pt, appears on typing)
  - Border radius: 12pt
  - Background: #F2F2F2 (light) or #2C2C2E (dark)
  - Height: 40pt
  - Margin: 12pt from top, 16pt horizontal
- **Recent searches (if search bar empty and no focus):**
  - Section header: "Recent" (Heading 3, 16pt, 16pt horizontal padding)
  - List of last 10-15 search terms (vertical stack, 16pt horizontal padding)
  - Each item: Clock icon (16pt, left, Text Secondary) + Search term (Body Large) + X button (right, 44x44pt tap target, to remove)
  - Tap term → Re-run search, navigate to Search Results (PAGE 16)
  - "Clear Search History" button (bottom, tertiary, destructive color, centered)
- **Auto-complete suggestions (if typing):**
  - Dropdown below search bar (overlays content, slides down with typing)
  - Background: Surface (#FFFFFF or #1C1C1E) with shadow (Elevation-2)
  - Max 5-7 suggestions (vertical list, 16pt horizontal padding, 12pt vertical padding per item)
  - Each suggestion:
    - Type icon (left, 20pt, Magnifying glass or Avatar or Image icon): Artist / Artwork / User
    - Text (Body Large, matching part bolded): Suggestion text
    - Category label (right, Caption, Text Tertiary): "Artist", "Artwork", "User"
  - Tap suggestion → Navigate to Search Results (PAGE 16) or directly to detail page if only one result

**PAGE 16: Search Results**
Top Header | Nav bar (back, search query) | Tab filters (All, Artworks, Artists, Profiles) | Results grid/list
- **Top Header:** Same as PAGE 15 (with search bar, can be edited to refine search)
- **Nav bar:**
  - Back button (left, chevron + "Back") → Navigate back to Search Main (PAGE 15)
  - Search query text (center, Heading 2, editable, tap to edit in search bar above)
  - Filter icon (optional, right, 44x44pt, reserved for future filters like date range, location, etc.)
- **Tab filters:** Horizontal segmented control (below nav bar, 48pt height, 16pt horizontal padding)
  - Tabs: All (default) | Artworks | Artists | Profiles
  - Active tab: Underlined (Primary color #007AFF, 2pt thickness, bottom of tab)
  - Inactive tab: Text Secondary
- **Results by type:**
  - **All tab:** Mixed results, grouped by type (Artworks section → Artists section → Profiles section), each section with header (Heading 3)
  - **Artworks tab:** 2-column grid (mobile), 3-4 (tablet), masonry or uniform (square crop)
    - Each card: Image (full-width, border radius 12pt) + Title (Caption, 12pt, below, max 2 lines) + Artist (Caption, Text Secondary, max 1 line) + Capture count badge (top-right of image, blur background)
    - Tap → Navigate to Artwork Detail (PAGE 8)
  - **Artists tab:** List layout (vertical, 16pt horizontal padding, 12pt vertical gaps)
    - Each item: Avatar (56pt, circular, left) + Name (Body Medium, Semibold) + Bio (Caption, 1 line, ellipsis, Text Secondary) + Follow button (right, compact, 32pt height, Secondary or "Following" if already following)
    - Tap artist → Navigate to Artist Profile (PAGE 9)
  - **Profiles (Users) tab:** List layout (same as Artists)
    - Each item: Avatar (48pt, circular, left) + Username (Body Medium, Semibold) + Bio snippet (Caption, 1 line, Text Secondary) + Follow button (right)
    - Tap user → Navigate to User Profile / My Page (PAGE 17, other user view)
- **Empty state (no results):**
  - Icon: Magnifying glass (64pt, Text Tertiary, centered)
  - Message: "No results found for '[query]'" (Heading 2, centered)
  - Suggestion: "Try searching with different keywords" (Body Large, Text Tertiary, centered)
- **Loading state:** Skeleton cards (shimmer animation, 3-5 placeholder cards)

---

### MY PAGE MODULE

**PAGE 17: My Page (Profile)**
Top Header | Profile header | Tab menu (Home, Captures, Collections) | Tab content area | Bottom Nav
- **Top Header:** Same as PAGE 6
- **Profile header:**
  - Background: Optional gradient or solid color (#F9F9F9 light, #1C1C1E dark)
  - Settings icon (top-right, gear icon, 44x44pt, **self-view only**) → Navigate to Settings (PAGE 18)
  - Avatar (96pt, circular, centered)
  - Username (Display Medium, 28pt, centered, with verified badge if applicable)
  - Bio (Body Large, 17pt, centered, max 3 lines, Text Secondary)
  - **Self-view:** Edit Profile button (Secondary, compact, 40pt height, 120pt width, centered) → Navigate to Edit Profile (PAGE 19)
  - **Other user view:** Follow button (Primary, compact, 40pt height, 120pt width, centered) + Message button (Secondary, icon-only, 40x40pt, right of Follow)
  - Stats row (centered, 24pt gaps, 16pt below buttons):
    - Captures count (Body Medium, bold, with label "Captures" below in Caption)
    - Followers count (tappable, Body Medium, bold, with label) → Navigate to Follower List (PAGE 20)
    - Following count (tappable, Body Medium, bold, with label) → Navigate to Following List (PAGE 21)
- **Tab menu (below header, sticky):**
  - Three tabs: Home | Captures | Collections
  - **Self-view:** All three tabs visible
  - **Other user view:** Only Home and Collections tabs visible (Captures tab hidden)
  - Active tab: Underline indicator (2pt, Primary color, bottom of tab)
  - Tab labels: Label Large (15pt, Medium weight)
  - Tab height: 48pt
  - Background: #FFFFFF (light) or #000000 (dark)
- **Tab content area (scrollable):**

  **Tab 1: Home**
  - Curated highlights: Featured collections or pinned artworks (user-customizable)
  - Grid or masonry layout (2-column mobile, 3-column tablet)
  - Each item: Artwork image (border radius 16pt) or Collection card (compact, with cover image)
  - **Self-view:** Edit button (top-right, pencil icon, 44x44pt) → Enter edit mode (pin/unpin items, reorder)
  - Empty state: "Customize your highlights by pinning favorite collections or artworks" + "Pin from Captures" CTA button (Primary, centered)

  **Tab 2: Captures (SELF-VIEW ONLY)**
  - **Note:** This tab is NOT visible to other users viewing your profile
  - View toggle (top-right): List view | Grid view (icon buttons, 44x44pt each)
  - **List view (default):** Linear list of artwork items (vertical, 16pt horizontal padding)
    - Each item: Thumbnail (80x80pt, border radius 12pt, left) + Title (Body Medium, Semibold) + Artist (Body Small, Text Secondary) + Date captured (Caption, Text Tertiary) + Chevron (right)
    - Tap → Navigate to Artwork Detail (PAGE 8)
  - **Grid view:** 2-column grid (mobile), 3-column (tablet)
    - Masonry or uniform grid, artwork thumbnails only (border radius 12pt)
    - Tap → Navigate to Artwork Detail (PAGE 8)
  - **Sort/Filter bar (top, below view toggle):**
    - Sort dropdown (Body Medium, chevron down): Date | Artist | Artwork | Capture count
    - Filter icon (44x44pt, right) → Future: Filter by exhibition, date range, artist
  - **Search within captures (optional):** Search bar at top (40pt height, 12pt border radius, magnifying glass icon)
  - Empty state: "No artworks captured yet. Start using the Camera to capture artworks." + "Go to Camera" CTA (Primary)

  **Tab 3: Collections**
  - Vertical list of collection cards (compact, 16pt horizontal padding, 16pt vertical gaps)
  - Each card:
    - Cover image (16:9 or 4:3 aspect ratio, border radius 16pt top, 200pt height)
    - Collection name (Heading 2, 18pt, 12pt padding)
    - Artwork count + Date/Exhibition info (Body Small, Text Secondary, "24 artworks • Jan 15, 2026")
    - Visibility badge (if self-view, pill style, 24pt height, "Private" or "Public", top-right of card)
  - **Grouping dropdown (top):** By Year (default) | By Exhibition | By Artist (Body Medium, chevron down)
  - Tap collection → Navigate to Collection Detail (PAGE 7)
  - **Long-press (self-view only):** Action sheet: Edit | Delete | Share | Change visibility
  - Empty state: "No collections yet. Start capturing artworks at exhibitions." + "Go to Camera" CTA (Primary)
- **Bottom Nav:** Same as PAGE 6 (My Page active)

**PAGE 18: Settings**
Top Header | Grouped list (iOS Settings style): Account Settings | Notification Settings | About | Account Actions
- **Top Header:** Back button (left, chevron + "Settings") + Title "Settings" (center, Heading 2)
- **Grouped list (sections with headers, 16pt horizontal padding):**

  **Account Settings section (requires password confirmation):**
  - Section header: "Account" (Heading 3, 16pt, Text Secondary)
  - Change Username (list item, chevron right) → Navigate to edit screen
  - Change Password (list item, chevron right, email accounts only) → Navigate to password change screen
  - Account Visibility (list item, toggle switch right): Private / Public
  - Allow profile in search engines (list item, toggle switch right): On / Off
  - Delete Account (list item, destructive color text, chevron right) → Navigate to confirmation screen

  **Notification Settings section:**
  - Section header: "Notifications" (Heading 3, 16pt, Text Secondary)
  - New Followers (list item, toggle switch right): On / Off
  - Accepted Follow Requests (list item, toggle switch right): On / Off
  - Artwork Comments (list item, toggle switch right, future feature): On / Off
  - Platform Announcements (list item, toggle switch right): On / Off

  **About section:**
  - Section header: "About" (Heading 3, 16pt, Text Secondary)
  - Privacy Policy (list item, chevron right) → Opens webview
  - Terms of Service (list item, chevron right) → Opens webview
  - Help & Support (list item, chevron right) → Opens FAQ or contact form
  - App Version (list item, display only, right-aligned, Text Tertiary): "v1.0.0"

  **Account Actions section:**
  - Section header: "Account Actions" (Heading 3, 16pt, Text Secondary)
  - Logout (list item, destructive color text, centered) → Tap: Confirmation dialog ("Are you sure you want to log out?", Cancel / Logout buttons)

- **Password confirmation modal (for Account Settings access):**
  - Appears as bottom sheet when tapping any Account Settings item
  - Title: "Enter your password to continue" (Heading 2, centered)
  - Password input (48pt height, secure entry, lock icon)
  - Confirm button (Primary, full-width, 48pt height) + Cancel button (Secondary, full-width, below)

**PAGE 19: Edit Profile**
Nav bar | Form fields | Save button
- **Nav bar:**
  - Cancel button (left, text, "Cancel", Accent Blue) → Discard changes, navigate back to My Page (PAGE 17)
  - Title: "Edit Profile" (center, Heading 2, 18pt)
  - Save button (right, text, "Save", Accent Blue, primary action) → Save changes, navigate back to My Page
- **Form fields (vertical stack, 16pt horizontal padding, 16pt vertical gaps):**
  - **Profile photo section:**
    - Avatar (96pt, circular, centered)
    - "Change Photo" button (Tertiary, compact, 32pt height, below avatar) → Opens photo picker (camera or library)
  - **Username input:**
    - Text input (48pt height, border radius 12pt)
    - Placeholder: Current username pre-filled
    - Duplicate check feedback (real-time):
      - Available: Green checkmark icon (right of input) + "Available" (Caption, Success Green)
      - Taken: Red X icon + "Username already taken" (Caption, Error Red)
  - **Bio textarea:**
    - Multi-line text input (min 120pt height, auto-expand, max 200 chars)
    - Placeholder: Current bio pre-filled
    - Character counter: "145 / 200" (bottom-right, Caption, Text Tertiary)
- **Save button behavior:**
  - Enabled only when changes are made and valid (username available, under char limit)
  - On save: API call to update profile, show success toast ("Profile updated"), navigate back
  - On error: Inline error message (Error Red, below field)

**PAGE 20: Follower List**
Nav bar | Search bar | User list
- **Nav bar:** Back button (left, chevron + "Followers") + Title "Followers" (center, Heading 2)
- **Search bar (optional, top):** Search followers by username (40pt height, 12pt border radius, magnifying glass icon, placeholder: "Search followers...")
- **User list (vertical, 16pt horizontal padding, 12pt vertical gaps):**
  - Each user card:
    - Avatar (48pt, circular, left)
    - Username (Body Medium, Semibold)
    - Bio snippet (Caption, 1 line, ellipsis, Text Secondary, below username)
    - Follow button (right, if not yourself, compact, 32pt height):
      - "Follow" (Secondary) if not following
      - "Following" (Secondary with checkmark) if following → Tap to unfollow with confirmation dialog
  - Tap user card → Navigate to User Profile / My Page (PAGE 17, other user view)
- **Empty state (if no followers):** "No followers yet" (centered, Heading 3, Text Secondary) + Optional illustration

**PAGE 21: Following List**
Nav bar | Search bar | User list
- **Nav bar:** Back button (left, chevron + "Following") + Title "Following" (center, Heading 2)
- **Search bar (optional, top):** Search following by username (same styling as PAGE 20)
- **User list (vertical, same styling as PAGE 20):**
  - Each user card:
    - Avatar + Username + Bio snippet (same as PAGE 20)
    - "Following" button (right, compact, 32pt height, Secondary with checkmark) → Tap: Confirmation dialog ("Unfollow [Username]?", Cancel / Unfollow buttons)
  - Tap user card → Navigate to User Profile / My Page (PAGE 17, other user view)
- **Empty state (if not following anyone):**
  - Message: "Not following anyone yet. Discover users to follow." (centered, Heading 3, Text Secondary)
  - CTA: "Explore" or "Search" button (Primary, centered) → Navigate to Search (PAGE 15) or Art Feed (PAGE 6)

---

### NOTIFICATIONS MODULE

**PAGE 22: Notification List**
Top Header | Nav bar | Notification items (grouped or chronological)
- **Top Header:** Same as PAGE 6 (Notification bell icon active/highlighted)
- **Nav bar:** Back button (left, chevron + "Notifications") + Title "Notifications" (center, Heading 2)
- **Notification items (vertical list, 16pt horizontal padding, 12pt vertical gaps):**

  **New Follow notification:**
  - Avatar (40pt, circular, left) + "[Username] started following you" (Body Medium) + Timestamp (Caption, Text Tertiary, right)
  - **If private account:** Buttons below: "Accept" (Primary, compact, 32pt height, 80pt width) + "Reject" (Secondary, compact, 32pt height, 80pt width)
  - Tap notification → Navigate to User Profile / My Page (PAGE 17, other user view)
  - Read/Unread indicator: Bold text for unread, normal for read, blue dot (8pt) left of avatar if unread

  **Follow Request Accepted notification:**
  - Avatar (40pt) + "[Username] accepted your follow request" (Body Medium) + Timestamp (Caption, Text Tertiary, right)
  - Tap → Navigate to User Profile / My Page (PAGE 17)
  - Read/Unread indicator: Same as above

  **Platform Announcement notification:**
  - bside logo icon (40pt, circular, left) + Announcement text (Body Medium, max 2 lines, ellipsis) + Timestamp (Caption, Text Tertiary, right)
  - Tap → Open announcement detail (modal or webview with full text)
  - Read/Unread indicator: Same as above

- **Swipe to delete notification (optional):** Swipe left on item → "Delete" button (destructive color) → Remove from list
- **Empty state (no notifications):** "No new notifications" (centered, Heading 3, Text Secondary) + Optional illustration (bell icon, 64pt, Text Tertiary)

---

## Critical Design Rules

1. **Artwork is ALWAYS the Hero** - Artworks are the primary content. UI elements support but never overpower artwork imagery. Use generous white/negative space, subtle backgrounds, blur, and gradients to create hierarchy.

2. **Minimal Yet Meaningful** - Every element serves a clear purpose. Clean, uncluttered interfaces. Strategic use of visual accents (icons, animations, text). Avoid unnecessary decoration.

3. **Smooth & Engaging** - Fluid transitions (300-400ms ease-in-out), spring physics for buttons, contextual animations. All interactions feel natural and responsive.

4. **Understated Elegance** - Sophisticated color palette (neutral-forward with refined accents), premium typography and spacing, calm and balanced overall tone. Inspired by Nike SNKRS and HYPE.

5. **Consistent Component Usage** - Use design system components everywhere (buttons, cards, inputs from style guideline). Maintain consistency in colors, typography, spacing across all screens.

6. **Touch Targets & Accessibility** - Minimum 44x44pt for all interactive elements. Text contrast ratio ≥4.5:1 (WCAG AA). Support dynamic type and dark mode.

7. **Camera as Primary Entry Point** - Camera tab is core feature. Make capture button prominent (64pt FAB), recognition results immediate and clear. Fallback to manual input always available.

8. **Location-Based Context** - Use GPS + time to suggest check-in at exhibitions/galleries (500m radius). Check-in info shown as top overlay/drawer (not modal). Auto-tag captures with exhibition data.

9. **Loading & Empty States** - Show skeleton loading (shimmer animation) for all async content. Provide friendly, encouraging empty states with clear CTAs. Never leave users with blank screens.

10. **Dark Mode as First-Class Citizen** - Design both light and dark mode simultaneously. Use true black (#000000) for dark mode (OLED efficiency). Ensure all colors, shadows, and overlays work in both modes.

11. **Global Navigation Consistency (NEW - v3.1)** - Bottom Nav (3-item) and Top Header are global components. Use consistently across all main screens. Bottom Nav floats with rounded corners and shadow for premium feel.

12. **Search Accessibility (NEW - v3.1)** - Search moved from bottom nav to persistent top header. Always accessible from main screens. Icon-based in header, expands to full search UI on tap.

13. **Authentication Flow Clarity (NEW - v3.1)** - Complete 5-screen auth flow (Splash, Login, Sign Up, Password Recovery, Profile Setup). Social login primary, email secondary. Profile Setup skippable but encouraged.

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

### Bottom Navigation Bar (NEW - Global Component, v3.1)
```
┌─────────────────────────────────────────┐
│  [🏠]        [📷]        [👤]          │ ← Icons (24pt) with labels below
│  Home       Camera      My Page         │ ← Labels (Caption 11pt)
└─────────────────────────────────────────┘
```
- Height: 56pt + safe area inset
- Background: #FFFFFF (light) / #1C1C1E (dark)
- Position: Fixed bottom, floating style with margins
- Horizontal margins: 16pt
- Bottom margin: 8pt (above safe area)
- Border radius: 24pt (creates floating pill effect)
- Shadow: Elevation-2 (0 4px 12px rgba(0,0,0,0.12))
- 3 items evenly spaced: Home | Camera | My Page
- Active state: Icon + Label in Primary color (#1C1C1E or #007AFF), bold weight
- Inactive state: Icon + Label in Text Tertiary (rgba(0,0,0,0.38) or rgba(255,255,255,0.38))
- Tap target: Full item area (minimum 56pt height)
- Usage: Art Feed, My Page, Artwork Feed, Artwork Detail (global persistent navigation)

### Top Header Navigation Bar (NEW - Global Component, v3.1)
```
┌─────────────────────────────────────────┐
│  [🔍]        [bside logo]        [🔔]  │ ← Search | Logo | Notifications
└─────────────────────────────────────────┘
```
- Height: 44pt + safe area inset
- Background: Transparent (default) or Surface color (#FFFFFF / #000000) with blur
- Position: Fixed top
- Left: Search icon (24pt, tappable 44x44pt) → Navigate to Search (PAGE 15)
- Center: bside logo (auto height, proportional width, centered)
- Right: Notification bell icon (24pt, tappable 44x44pt, with red dot badge if unread notifications) → Navigate to Notifications (PAGE 22)
- Badge: Red dot (8pt diameter, top-right of bell icon, #FF3B30)
- Usage: Art Feed, My Page, Artwork Feed, Artwork Detail (persistent across main screens)

### Check-in Overlay/Drawer (NEW - Camera Component, v3.1)
```
┌─────────────────────────────────────────┐
│  [Location: Seoul, Korea]          [×]  │ ← Location + Close button
│  "Are you at Frieze London 2025?"       │ ← Check-in prompt
│  [Yes] [No]                             │ ← Action buttons
└─────────────────────────────────────────┘
```
- Position: Top overlay in Camera View, swipeable drawer
- Background: Blur (UIBlurEffect) + scrim (rgba(0,0,0,0.60))
- Border radius: 16pt bottom corners
- Padding: 16pt
- Location text: Body Medium, white
- Check-in prompt: Body Medium, white
- Action buttons: Compact (32pt height, 80pt width), white background, Primary text, 8pt gaps
- Close button: X icon (44x44pt tap target, white, top-right)
- Animation: Slide down from top (300ms ease-out)
- Behavior: Swipe up to dismiss, tap X to dismiss, tap Yes to confirm check-in
- After check-in: Display event name + location (persistent in top zone, same styling as Art Feed collection headers)
- Usage: Camera View only (PAGE 11)

---

## Deliverables Checklist

**Week 1-2: Research & Wireframes**
- [ ] Study reference apps: Nike SNKRS, HYPE by Hypebeast, Vivino, Pinterest, Spotify, Instagram
- [ ] Collect reference images and screenshots
- [ ] Create mood board (color palette, typography, UI patterns)
- [ ] Low-fidelity wireframes for all 22 screens (updated from 20)
- [ ] User flow diagrams (updated with new auth flow: Splash → Login/Sign Up → Profile Setup → Home)
- [ ] Review with PM and stakeholders

**Week 3-5: High-Fidelity Mockups (Priority Screens)**
- [ ] High-fidelity mockups for key screens (priority order below):
  - Camera View (PAGE 11) - Core feature
  - Recognition Success (PAGE 12) - Core feature
  - Recognition Failure (PAGE 13) - Core feature
  - Art Feed Main (PAGE 6) - Entry point
  - Artwork Detail (PAGE 8) - Key content page
  - My Page Profile (PAGE 17) - User identity
  - Search Main (PAGE 15) - Discovery
  - Splash (PAGE 1) - Entry point
  - Login (PAGE 2) - Entry point
  - Sign Up (PAGE 3) - Entry point
  - Password Recovery (PAGE 4) - Auth flow
  - Profile Setup (PAGE 5) - Auth flow completion
  - Collection Detail (PAGE 7)
- [ ] Design system documentation (colors, typography, spacing tokens)
- [ ] Component library creation in Figma (buttons, cards, inputs, sheets, global navigation components)

**Week 6-8: Remaining Screens & Variants**
- [ ] Complete all remaining screens (9 screens):
  - Manual Input (PAGE 14)
  - Search Results (PAGE 16)
  - Artist Profile (PAGE 9)
  - Gallery Profile (PAGE 10)
  - Settings (PAGE 18)
  - Edit Profile (PAGE 19)
  - Follower/Following Lists (PAGE 20-21)
  - Notification List (PAGE 22)
- [ ] Dark mode variants for all 22 screens
- [ ] Responsive designs (mobile portrait, tablet landscape)
- [ ] Empty states for all relevant screens
- [ ] Error states (network error, API failure, invalid input)
- [ ] Loading states (skeleton screens, spinners)

**Week 9: Interactive Prototype & Polish**
- [ ] Interactive Figma prototype (key flows):
  - Onboarding: Splash → Login → Sign Up → Profile Setup → Home
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
- [ ] Figma file with all 22 screens (light + dark mode)
- [ ] Component library (buttons, cards, inputs, sheets, modals, global navigation)
- [ ] Design system guide (reference document)
- [ ] Icon set (SVG exports, organized by category)
- [ ] Image assets (optimized PNGs, correct resolutions)
- [ ] Interactive prototype link (Figma shareable link)
- [ ] Developer handoff notes (technical specs, animations, edge cases)

---

## Priority Order

Design screens in this order to maximize impact and enable parallel development:

1. **Splash Screen (PAGE 1)** - Entry point, sets brand tone, enables auth flow testing
2. **Login (PAGE 2) + Sign Up (PAGE 3)** - Entry point for new users, critical for user onboarding
3. **Profile Setup (PAGE 5)** - Completes auth flow, first-time user experience
4. **Camera View (PAGE 11)** - Core feature, critical for MVP, enables AI integration testing
5. **Recognition Success (PAGE 12)** - Immediate feedback, validates core functionality
6. **Recognition Failure (PAGE 13)** - Fallback flow, ensures smooth UX even on AI failure
7. **Art Feed Main (PAGE 6)** - Main entry point after login, defines overall app feel
8. **Artwork Detail (PAGE 8)** - Most important content page, showcases artwork as hero
9. **My Page Profile (PAGE 17)** - User identity and collection management
10. **Collection Detail (PAGE 7)** - Secondary content page, important for social features
11. **Search Main (PAGE 15) + Search Results (PAGE 16)** - Discovery feature
12. **Artist Profile (PAGE 9)** - Content enrichment, connects artworks to artists
13. **Password Recovery (PAGE 4)** - Auth flow edge case, necessary for password reset
14. **Settings (PAGE 18)** - Account management, necessary for privacy controls
15. **Notification List (PAGE 22)** - Social engagement notifications
16. **Gallery Profile (PAGE 10) + Manual Input (PAGE 14) + Edit Profile (PAGE 19) + Follower/Following Lists (PAGE 20-21)** - Lower priority, can be designed in parallel or after core screens

---

## Success Criteria

Your design succeeds if:

✅ **Camera/Recognition feels like Vivino** - Scan artwork → instant recognition → clear results → easy manual fallback
✅ **Feed feels like Pinterest + Instagram** - Visual-first cards, infinite scroll, engaging social content, artwork as hero
✅ **Collections feel like Spotify playlists** - Easy to organize, curate, and share captured artworks
✅ **Profile feels like Instagram** - Clean tabs, follower system, personal curation, easy to navigate
✅ **Platform feels Minimal & Elegant** - Understated luxury, sophisticated, calm, not playful or busy
✅ **All 22 screens designed** - Complete coverage of MVP scope (updated from 20)
✅ **Component library complete** - Reusable, documented, consistent across all screens
✅ **Responsive at all breakpoints** - Mobile portrait (primary), tablet landscape, foldables
✅ **Dark mode fully supported** - All screens designed for both light and dark mode
✅ **Accessibility standards met** - WCAG AA minimum (contrast, touch targets, labels)
✅ **Global Navigation consistent** - Bottom Nav (3-item) and Top Header used correctly across all main screens
✅ **Authentication flow complete** - 5-screen auth flow (Splash, Login, Sign Up, Password Recovery, Profile Setup) properly designed
✅ **Check-in UX correct** - Camera check-in appears as top overlay/drawer, not full modal

---

## Design Tips

1. **Consistency First** - Use design system components everywhere. Don't reinvent buttons, cards, or inputs. Reference this Design Guide for all component specs.

2. **Accessibility** - 4.5:1 contrast ratio minimum for text. 44x44pt minimum touch targets. Provide accessible labels for screen readers.

3. **Performance** - Optimize images (use thumbnails in lists/carousels, full-res only on detail screens). Use SVG icons. Lazy load images.

4. **Responsive** - Mobile-first approach (design for iPhone 12-15 size first). Adapt to tablets with 2-column layouts. Test on small screens (iPhone SE) and large tablets (iPad Pro).

5. **States Matter** - Design loading states (skeleton screens), empty states (friendly messages), error states (helpful guidance), and success states (confirmation feedback) for every screen.

6. **Real Content** - Use realistic text and artwork images, not Lorem Ipsum or placeholder boxes. Helps stakeholders visualize final product.

7. **Whitespace is Your Friend** - Generous spacing (8pt grid system). Don't cramp elements. Let artwork breathe.

8. **Hierarchy** - Clear visual importance. Use typography scale (32pt → 28pt → 20pt → 17pt) and color (Primary → Secondary → Tertiary) to guide user's eye.

9. **Feedback** - User always knows what's happening. Button press animations, loading spinners, success confirmations, error messages. Never leave user guessing.

10. **Polish** - Subtle animations (300-400ms), consistent shadows (elevation-1 to -4), rounded corners (12-16pt), blur effects for premium feel. Details matter.

11. **Global Navigation** - Bottom Nav (3-item floating) and Top Header are global components. Use them consistently. Don't reinvent navigation on each screen.

12. **Check-in UX** - Camera check-in is an overlay/drawer, not a full modal. Users should still see camera preview behind the check-in prompt.

---

## Reference Links

**PRD (Product Requirements Document):**
`bside_art_PRD_updated_260130.md` - Full technical specifications, user flows, API details (PRD v3.1, February 6, 2026)

**Reference Apps to Study:**
- Nike SNKRS: Minimalist navigation, smooth transitions, product-focused
- HYPE by Hypebeast: Content-driven, calm tone, subtle visual accents
- Vivino: Object scanning, recognition results, information overlays
- Pinterest: Visual search, masonry grids, artwork-first
- Spotify: Playlist curation, personalization, easy discovery
- Instagram: Social features, profile layouts, feed patterns

---

**Priority Order Summary:**
1. Splash + Auth screens (entry point, user onboarding)
2. Camera (recognition is core)
3. Feed (main experience)
4. Artwork Detail (content showcase)
5. Profile (user identity)
6. Search (discovery)
7. Everything else (supporting features)

Good luck! Focus on making artwork the hero, keeping the UI minimal and elegant, and ensuring smooth, engaging interactions throughout. Remember the new 3-item Bottom Nav and persistent Top Header are key to the navigation restructure. 🎨🚀

---

**Document Version:** 3.1
**Created:** February 2, 2026
**Updated:** February 9, 2026
**Next Review:** After Week 2 wireframes complete
