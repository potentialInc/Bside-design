---
project_name: "bside.art"
total_pages: 20
design_system:
  type: "Mobile Application"
  style: "Minimal and Elegant, Understated Luxury"
  industry: "Art Discovery & Curation"
  primary_color: "#1C1C1E"
  secondary_color: "#007AFF"
  font: "SF Pro (iOS) / Roboto (Android)"
  icons: "SF Symbols (iOS) / Material Icons (Android)"
---

# bside.art - AURA.build Design Prompts

## Design System

bside.art - Mobile Application for Art Discovery & Curation.
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

## Page: 01-splash
name: Splash Screen
category: public

### SCREEN OVERVIEW
The Splash Screen serves as the elegant entry point to bside.art. It displays the brand logo centered on screen with an optional blurred artwork background, creating an immersive first impression. The screen auto-transitions after 2 seconds to either Login (if not authenticated) or Home (if authenticated), while properly handling status bar styling for both light and dark modes.

Purpose:
- Create minimal, elegant brand introduction
- Handle authentication state checking
- Provide smooth transition to main app
- Set visual tone for the application

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen layout (edge-to-edge)
- Centered content positioning (vertical and horizontal)
- Status bar styled appropriately (light or dark icons based on background)

**BACKGROUND:**
- Option 1: Solid background using primary color (#1C1C1E) in light mode, true black (#000000) in dark mode
- Option 2: Blurred artwork image background with 40pt blur radius, scrim overlay (rgba(0,0,0,0.40) to maintain contrast)
- Background animation: Subtle fade-in (600ms) on load

**BRAND LOGO:**
- Position: Centered (both vertically and horizontally)
- Logo size: 120pt width (maintain aspect ratio)
- Color: White if dark background, primary color if light background
- Animation: Fade-in (800ms) + subtle scale (0.95 → 1.0) using spring physics

**STATUS BAR:**
- Style: Auto-adjust based on background (light content on dark bg, dark content on light bg)
- Hide on transition for seamless experience

### KEY FEATURES
- Auto-transition to appropriate screen after 2 seconds
- Authentication check happens during splash display
- Smooth fade transition (400ms ease-out)
- Support for both light and dark mode
- Optimized for all iOS (iPhone 12-15, SE, iPad) and Android devices
- Handles safe area insets properly
- Logo animation with spring physics for polished feel
- Preload critical app assets during splash display

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Load Application | App launch | Display splash, check authentication state |
| Auto-transition | 2-second timer completion | Navigate to Login (not authenticated) or Home (authenticated) |
| Authentication Check | Background during splash | Verify user token, determine target screen |

### BRANDING ELEMENTS
- Minimal and elegant aesthetic per design philosophy
- Artwork-focused background (optional) sets tone for app
- Dark charcoal (#1C1C1E) primary color for sophisticated feel
- True black (#000000) in dark mode for OLED efficiency
- Smooth animations (spring physics) create premium feel
- Status bar transparency for full-screen immersion

---

## Page: 02-login
name: Login
category: auth

### SCREEN OVERVIEW
The Login page provides multiple authentication options in a clean, artwork-focused layout. Users can sign in via Apple, Google, or email. The page features a hero artwork image background (optional, blurred) with the login form prominently centered. Split layout approach with social login as primary options and email as secondary choice.

Purpose:
- Authenticate existing users
- Provide multiple sign-in methods (social + email)
- Guide users to signup if they don't have an account
- Create welcoming, minimal entry experience

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Centered form layout, max-width 360pt
- Optional: Split screen approach with 40% branding panel (left) + 60% form panel (right) on tablets
- Background: Optional blurred artwork hero image with scrim overlay (rgba(0,0,0,0.30))
- Content: Vertically centered with 32pt safe area padding
- Keyboard-aware: Form shifts up when keyboard appears

**HEADER SECTION:**
- bside logo: 80pt width, centered, 48pt from top safe area
- Welcome text: "Welcome Back" (Display Medium, 28pt Semibold), centered, 24pt below logo
- Subtitle: "Sign in to continue your art journey" (Body Large, 17pt Regular, Text Secondary), centered, 8pt below welcome text

**SOCIAL LOGIN SECTION:**
- Container: 32pt margin-top from subtitle
- Apple Sign-In button:
  - Standard Apple design (black background, white Apple logo + "Sign in with Apple" text)
  - Height: 48pt, full-width, 12pt border radius
  - Font: Body Large (17pt Regular)
- Google Sign-In button:
  - White background, Google logo (24pt) + "Sign in with Google" text
  - Height: 48pt, full-width, 12pt border radius, 1pt gray border (#E0E0E0)
  - 12pt gap between Apple and Google buttons
  - Font: Body Large (17pt Regular)

**DIVIDER:**
- 24pt margin-top from last button
- Horizontal line (1pt, border color) with centered "or" text
- "or" text: Caption (12pt), Text Tertiary, 16pt horizontal padding on white/dark background pill

**EMAIL LOGIN OPTION:**
- "Sign in with email" text button (tertiary style): Body Medium (15pt Regular), Accent Blue (#007AFF), centered
- 16pt margin-top from divider
- Tap reveals email login fields with slide-down animation (300ms ease-out)

**EMAIL LOGIN FIELDS (when expanded):**
- Email input:
  - Label: "Email" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "your@email.com"
  - Border: 1pt border color (default), 2pt Accent Blue (focus)
  - Font: Body Large (17pt Regular)
- Password input:
  - 16pt margin-top from email input
  - Label: "Password" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Enter your password"
  - Eye toggle icon (24pt) positioned right (16pt from edge) for show/hide password
  - Border: 1pt border color (default), 2pt Accent Blue (focus)
  - Font: Body Large (17pt Regular)
- Forgot password link:
  - "Forgot password?" (Body Small, 13pt Regular, Accent Blue), right-aligned, 8pt margin-top
  - Tap navigates to Forgot Password screen
- Sign in button:
  - Primary button: #1C1C1E background, white text, 48pt height, 12pt radius, full-width
  - Text: "Sign In" (Body Large, 17pt Semibold)
  - 24pt margin-top from password field
  - Loading state: Spinner (white, 20pt) replaces text, button disabled

**FOOTER:**
- "Don't have an account? Sign Up" (Body Medium, 15pt Regular)
- "Sign Up" part is Accent Blue (#007AFF), tappable
- Centered, 32pt from bottom safe area
- Tap navigates to Sign Up screen

### KEY FEATURES
- Social authentication priority (Apple/Google)
- Email login as expandable secondary option
- Password visibility toggle (eye icon)
- Forgot password link for account recovery
- Loading state on sign-in button
- Form validation: Email format, password min length
- Error messages display inline below fields (Error Red #FF3B30, Body Small 13pt)
- Keyboard dismisses on tap outside fields
- Auto-fill support for email/password
- Smooth animations: Field expansion (300ms), button press (scale 0.98), transitions
- Dark mode support with inverted colors
- Safe area insets for iPhone notch/island

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Apple Sign In | Tap "Sign in with Apple" button | Launch Apple authentication flow, on success navigate to Home |
| Google Sign In | Tap "Sign in with Google" button | Launch Google authentication flow, on success navigate to Home |
| Expand Email Login | Tap "Sign in with email" | Slide-down animation reveals email/password fields |
| Submit Email Login | Tap "Sign In" button | Validate inputs, call API, show loading, navigate to Home on success or show error |
| Toggle Password | Tap eye icon | Switch between password masked/visible |
| Forgot Password | Tap "Forgot password?" link | Navigate to Forgot Password screen (PAGE 3 email recovery flow) |
| Navigate to Sign Up | Tap "Sign Up" in footer | Navigate to Sign Up screen (PAGE 3) |
| Dismiss Keyboard | Tap outside input fields | Hide keyboard |

### BRANDING ELEMENTS
- Minimal, elegant login experience per Nike SNKRS inspiration
- Artwork as hero in background (optional, blurred) per design philosophy
- Social authentication as primary (modern, frictionless)
- Clean white space, 8pt grid spacing throughout
- Accent Blue (#007AFF) for interactive elements (links, focus states)
- Dark Charcoal (#1C1C1E) for primary action (Sign In button)
- Smooth transitions (300-400ms ease-in-out) for premium feel
- Typography hierarchy: Display Medium (28pt) → Body Large (17pt) → Body Small (13pt)

---

## Page: 03-signup
name: Sign Up
category: auth

### SCREEN OVERVIEW
The Sign Up page guides new users through account creation with multiple authentication options. Similar layout to Login but includes email verification flow and password requirements. Users can sign up via Apple, Google, or email with a comprehensive registration process including terms acceptance.

Purpose:
- Create new user accounts
- Collect required information (email, password, verification)
- Ensure password security and email verification
- Present terms and privacy policy for acceptance
- Provide smooth onboarding transition

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Centered form layout, max-width 360pt
- Scrollable content (vertical scroll if form extends beyond viewport)
- Background: Optional blurred artwork hero image with scrim overlay (rgba(0,0,0,0.30))
- Content: 32pt safe area padding
- Keyboard-aware scrolling

**HEADER SECTION:**
- bside logo: 80pt width, centered, 32pt from top safe area
- Heading: "Create Account" (Display Medium, 28pt Semibold), centered, 24pt below logo
- Subtitle: "Join bside to capture and curate art" (Body Large, 17pt Regular, Text Secondary), centered, 8pt below heading

**SOCIAL SIGN-UP SECTION:**
- Container: 32pt margin-top from subtitle
- Apple Sign-Up button:
  - Standard Apple design (black background, white Apple logo + "Sign up with Apple" text)
  - Height: 48pt, full-width, 12pt border radius
  - Font: Body Large (17pt Regular)
- Google Sign-Up button:
  - White background, Google logo (24pt) + "Sign up with Google" text
  - Height: 48pt, full-width, 12pt border radius, 1pt gray border (#E0E0E0)
  - 12pt gap between Apple and Google buttons
  - Font: Body Large (17pt Regular)

**DIVIDER:**
- 24pt margin-top from last button
- Horizontal line (1pt, border color) with centered "or" text
- "or" text: Caption (12pt), Text Tertiary, 16pt horizontal padding

**EMAIL SIGN-UP OPTION:**
- "Sign up with email" text button (tertiary style): Body Medium (15pt Regular), Accent Blue (#007AFF), centered
- 16pt margin-top from divider
- Tap reveals email signup form with slide-down animation (300ms ease-out)

**EMAIL SIGN-UP FORM (when expanded):**

*Step 1: Email Input & Verification*
- Email input:
  - Label: "Email" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "your@email.com"
  - Border: 1pt border color (default), 2pt Accent Blue (focus)
  - Font: Body Large (17pt Regular)
  - Validation: Real-time email format check, error message below if invalid
- Send Code button:
  - Primary button: 48pt height, full-width, 12pt radius, #1C1C1E background, white text
  - Text: "Send Verification Code" (Body Large, 17pt Semibold)
  - 16pt margin-top from email input
  - Loading state: Spinner replaces text

*Step 2: Verification Code Input (after email submitted)*
- Code input:
  - Label: "Verification Code" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, centered text, tracking 4pt (letter spacing)
  - Placeholder: "000000" (6-digit code)
  - Font: Body Large (17pt Regular), monospace
  - Border: 1pt border color (default), 2pt Accent Blue (focus)
- Timer: "Resend code in 0:59" (Caption, 12pt Regular, Text Tertiary), 8pt margin-top, countdown from 60s
- Resend button: "Resend Code" (Body Small, 13pt Regular, Accent Blue), appears after timer expires

*Step 3: Password Setup (after code verified)*
- Password input:
  - Label: "Create Password" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Minimum 8 characters"
  - Eye toggle icon (24pt) for show/hide
  - Font: Body Large (17pt Regular)
- Password requirements (live validation):
  - List below input: 8pt margin-top, Caption (12pt Regular)
  - Each requirement: Checkmark icon (16pt) or circle icon
  - Requirements:
    - "At least 8 characters" (Success Green #34C759 if met, Text Tertiary if not)
    - "At least 1 uppercase letter" (Success Green if met, Text Tertiary if not)
    - "At least 1 number" (Success Green if met, Text Tertiary if not)
- Password confirmation input:
  - 16pt margin-top from requirements
  - Label: "Confirm Password" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Re-enter your password"
  - Eye toggle icon (24pt)
  - Font: Body Large (17pt Regular)
  - Validation: Real-time match check, error message if doesn't match

**TERMS & PRIVACY SECTION:**
- 24pt margin-top from last password field
- Checkbox row 1:
  - Checkbox: 20pt square, 4pt border radius, border color (unchecked), Accent Blue (checked) with checkmark
  - Label: "I agree to the Terms of Service" (Body Small, 13pt Regular, Text Primary)
  - "Terms of Service" is Accent Blue and tappable (opens webview)
  - 12pt gap between checkbox rows
- Checkbox row 2:
  - Same styling as above
  - Label: "I agree to the Privacy Policy" (Body Small, 13pt Regular, Text Primary)
  - "Privacy Policy" is Accent Blue and tappable (opens webview)

**SUBMIT BUTTON:**
- Primary button: 48pt height, full-width, 12pt radius, #1C1C1E background, white text
- Text: "Create Account" (Body Large, 17pt Semibold)
- 24pt margin-top from checkboxes
- Disabled state: 50% opacity if checkboxes not checked or form invalid
- Loading state: Spinner (white, 20pt) replaces text

**FOOTER:**
- "Already have an account? Sign In" (Body Medium, 15pt Regular)
- "Sign In" part is Accent Blue (#007AFF), tappable
- Centered, 32pt from bottom safe area or below submit button
- Tap navigates to Login screen

### KEY FEATURES
- Multi-step email verification flow (email → code → password)
- Real-time password strength validation with visual feedback
- Timer countdown for code resend (60 seconds)
- Password complexity requirements clearly displayed
- Terms and Privacy Policy checkboxes required
- Social sign-up as quick alternative (Apple/Google)
- Form validation at each step
- Error messages inline below fields (Error Red #FF3B30, Body Small 13pt)
- Loading states on all async actions
- Success feedback after verification (Success Green checkmark)
- Smooth step transitions (slide animations, 300ms ease-out)
- Dark mode support
- Safe area insets
- Keyboard management (dismiss, scroll to focused field)

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Apple Sign Up | Tap "Sign up with Apple" button | Launch Apple authentication flow, on success show profile setup or navigate to Home |
| Google Sign Up | Tap "Sign up with Google" button | Launch Google authentication flow, on success show profile setup or navigate to Home |
| Expand Email Signup | Tap "Sign up with email" | Slide-down animation reveals email signup form |
| Send Verification Code | Tap "Send Verification Code" | Validate email, send code via API, show code input step, start timer |
| Verify Code | Enter 6-digit code | Auto-submit when 6 digits entered, validate via API, show password setup step on success |
| Resend Code | Tap "Resend Code" (after timer expires) | Send new code, restart 60s timer |
| Toggle Password | Tap eye icon | Switch between password masked/visible |
| Check Password Requirements | Type in password field | Real-time validation, update requirement checkmarks |
| Toggle Terms Checkbox | Tap checkbox | Toggle checked state, enable/disable submit button |
| Open Terms/Privacy | Tap "Terms of Service" or "Privacy Policy" link | Open webview with document |
| Create Account | Tap "Create Account" button | Validate all fields, create account via API, show success, navigate to Profile Setup or Home |
| Navigate to Sign In | Tap "Sign In" in footer | Navigate to Login screen (PAGE 2) |
| Dismiss Keyboard | Tap outside input fields | Hide keyboard |

### BRANDING ELEMENTS
- Minimal, step-by-step onboarding per design philosophy
- Social authentication as primary (quick, modern)
- Email verification ensures account security
- Password requirements clearly visible (user-friendly)
- Success Green (#34C759) for validation feedback creates positive reinforcement
- Accent Blue (#007AFF) for interactive elements
- Smooth transitions between steps (300ms ease-out)
- Typography hierarchy maintains consistency with Login
- 8pt grid spacing throughout
- Dark mode full support

---

## Page: 04-feed
name: Art Feed (Home)
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

## Page: 05-collection-detail
name: Collection Detail
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

## Page: 06-artwork-detail
name: Artwork Detail
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
  - Tap: Navigate to Artist Profile (PAGE 7)
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
  - Tap card: Navigate to Exhibition Detail (future feature) or Gallery Profile (PAGE 8)
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
- Tap artist card: Navigate to Artist Profile (PAGE 7)
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
| Navigate to Artist | Tap artist name | Navigate to Artist Profile (PAGE 7) with artist ID |
| Expand Bio | Tap "Read more" in artist bio | Expand text to show full bio, "Read more" becomes "Show less" |
| Follow Artist | Tap "Follow Artist" button | Call follow API, update to "Following" state |
| Navigate to Gallery | Tap gallery name in exhibition card | Navigate to Gallery Profile (PAGE 8) with gallery ID |
| View Related Artwork | Tap related artwork thumbnail | Navigate to that Artwork Detail (replace current page) |
| View Related Artist | Tap related artist card | Navigate to Artist Profile (PAGE 7) with artist ID |
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

## Page: 07-artist-profile
name: Artist Profile
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

## Page: 08-gallery-profile
name: Gallery Profile
category: public

### SCREEN OVERVIEW
The Gallery Profile page displays gallery information including logo, location, opening hours, and exhibitions (current and past). Users can view gallery details, find location/hours, and explore exhibitions hosted by the gallery.

Purpose:
- Display gallery branding and information
- Provide practical details (address, hours, website)
- Showcase current exhibitions
- List past exhibitions for discovery
- Enable navigation to maps and external website
- Support discovery of gallery-related artworks

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Vertical scroll page
- Top: Navigation bar (60pt height)
- Header section with gallery info
- Opening hours section
- Current exhibitions section
- Past exhibitions section (optional)
- Background: Background Primary

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Back button (chevron left icon 24pt), 44pt touch target
  - Center: Gallery name (Heading 2, 18pt Semibold) - shows on scroll past header
  - Right: Share icon (24pt), 44pt touch target

**HEADER SECTION:**
- Background: Background Secondary (#F9F9F9 light, #1C1C1E dark)
- Padding: 32pt horizontal, 40pt top, 32pt bottom
- Content (vertical stack, centered):

  *Gallery Logo:*
  - Size: 80pt square or maintain aspect ratio if rectangular, max 80pt height
  - Centered

  *Gallery Name (16pt margin-top):*
  - Text: Display Medium (28pt Semibold), Text Primary, centered

  *Location (12pt margin-top):*
  - Text: Body Medium (15pt Regular), Text Secondary, centered
  - Format: "Seoul, Korea"

  *Address (8pt margin-top):*
  - Text: Body Small (13pt Regular), Text Secondary, centered, tappable
  - Format: "123 Art Street, Gangnam-gu"
  - Tap: Open in Maps app with gallery location

  *Website Link (8pt margin-top):*
  - Text: Body Small (13pt Regular), Accent Blue, centered, tappable
  - Format: "www.galleryname.com"
  - Tap: Open in browser

**OPENING HOURS SECTION:**
- Padding: 24pt horizontal, 24pt top
- Section header: "Hours" (Heading 3, 16pt Semibold, Text Primary)
- Hours list (16pt margin-top):
  - Vertical list, 8pt gaps between rows
  - Each row (horizontal layout):
    - Day: Body Medium (15pt Regular), Text Primary, left-aligned, 80pt width
    - Hours: Body Medium (15pt Regular), Text Secondary, right-aligned
    - Format: "Monday        10:00 AM - 6:00 PM"
  - Today's hours: Text Primary with Semibold weight (both day and hours)
  - Closed days: "Closed" text in Text Tertiary
- Divider: 24pt margin-top, 1pt border color, full-width

**CURRENT EXHIBITIONS SECTION:**
- Padding: 24pt horizontal, 24pt top
- Section header: "Current Exhibitions" (Heading 3, 16pt Semibold, Text Primary)
- Exhibition cards (16pt margin-top):
  - Vertical list, 16pt gaps between cards
  - Each card:
    - Background: Surface color
    - Border radius: 12pt
    - Padding: 0pt (image edge-to-edge at top)
    - Shadow: Elevation-1
    - Layout:
      - Exhibition image: Full-width, 180pt height, cover fit, border-radius 12pt on top corners
      - Content padding: 16pt
      - Exhibition name: Heading 2 (18pt Semibold), Text Primary
      - Dates: Caption (12pt Regular), Text Tertiary, 4pt margin-top
        - Format: "March 15 - April 30, 2026"
      - Artists: Body Small (13pt Regular), Text Secondary, 4pt margin-top
        - Format: "Featuring [Artist 1], [Artist 2]"
        - Max 2 artists shown, "+ N more" if more artists
  - Tap card: Navigate to Exhibition Detail (future) or Collection Detail (PAGE 5)
- Empty state (if no current exhibitions):
  - Icon: Calendar icon (64pt, Text Tertiary), centered
  - Message: "No current exhibitions" (Body Large, Text Secondary), centered
- Divider: 24pt margin-top

**PAST EXHIBITIONS SECTION (optional):**
- Padding: 24pt horizontal, 24pt top
- Section header: "Past Exhibitions" (Heading 3, 16pt Semibold, Text Primary)
- Exhibition cards (16pt margin-top):
  - Vertical list, compact style
  - Each card:
    - Background: Transparent or Surface color
    - Border: 1pt border color (no shadow)
    - Border radius: 12pt
    - Padding: 16pt
    - Layout:
      - Exhibition name: Body Medium (15pt Semibold), Text Primary
      - Dates: Caption (12pt Regular), Text Tertiary, 4pt margin-top
    - 12pt gaps between cards
  - Tap card: Navigate to Exhibition Detail or Collection Detail
- Bottom padding: 32pt

### KEY FEATURES
- Gallery branding with logo
- Practical information (address, hours, website)
- Today's hours highlighted (bold)
- Address tappable (opens Maps)
- Website link tappable (opens browser)
- Current exhibitions with full image cards
- Past exhibitions in compact list format
- Empty states if no exhibitions
- Share gallery profile
- Loading states: Skeleton cards
- Dark mode support
- Smooth scroll performance

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | Return to previous screen |
| Share Gallery | Tap share icon | Open system share sheet with gallery profile URL |
| Open in Maps | Tap address | Open Maps app with gallery location pinned |
| Open Website | Tap website link | Open gallery website in browser |
| View Current Exhibition | Tap current exhibition card | Navigate to Exhibition Detail or Collection Detail (PAGE 5) |
| View Past Exhibition | Tap past exhibition card | Navigate to Exhibition Detail or Collection Detail |

### BRANDING ELEMENTS
- Gallery branding prominent (logo, name)
- Practical information accessible (hours, address, website)
- Today's hours highlighted for user convenience
- Current exhibitions showcased with imagery (visual-first)
- Past exhibitions in compact format (information-dense)
- Generous spacing: 24pt sections per 8pt grid
- Typography hierarchy: Display Medium (28pt) → Heading 3 (16pt) → Body Medium (15pt)
- Elevation-1 shadows on current exhibition cards (emphasis)
- Accent Blue for links (website)
- Dark mode support

---

## Page: 09-camera-view
name: Camera View
category: user

### SCREEN OVERVIEW
The Camera View is the core feature of bside.art, enabling users to capture artworks using their device camera with real-time recognition powered by AI. The page features a full-screen live camera preview with location-based check-in prompts, capture guidance, and quick controls.

Purpose:
- Capture artwork photos for recognition
- Provide real-time camera preview (60fps)
- Enable location-based exhibition check-in
- Guide users to center artwork in frame
- Support photo upload as alternative
- Trigger AI recognition on capture
- Navigate to recognition results

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen edge-to-edge camera preview
- No margins (0pt all sides)
- Status bar: Light content (white icons) if dark scene, dark content if bright scene
- Safe area insets respected for controls
- Background: Live camera feed

**CAMERA FEED:**
- Full-screen live preview: Edge-to-edge (0pt margins)
- Frame rate: Minimum 60fps for smooth experience
- Aspect ratio: Native device camera (typically 4:3 or 16:9)
- Orientation: Portrait lock recommended, support rotation if needed
- Camera: Rear camera by default (option to switch to front if needed)
- Focus: Tap-to-focus anywhere on screen
- Exposure: Auto-exposure with tap-to-expose option

**TOP OVERLAY (swipeable drawer):**
- Position: Top of screen, swipe down to expand, swipe up to collapse
- Background: Blur background (rgba(0,0,0,0.60)) + backdrop-filter blur
- Padding: 16pt horizontal, 12pt top (+ safe area), 12pt bottom
- Initial state: Collapsed (only visible when location detected or check-in available)
- Content:

  *Location Info:*
  - Icon + text: 📍 location pin emoji + location name (Body Small, 13pt Semibold, white text)
  - Format: "Seoul, Korea" or specific venue if detected

  *Check-In Prompt (if within 500m of exhibition/gallery):*
  - 8pt margin-top from location
  - Text: "Are you at [Exhibition Name] [Year]?" (Body Medium, 15pt Regular, white text)
  - Buttons (horizontal layout, 12pt gap, 16pt margin-top):
    - Yes button: Primary (white background, #1C1C1E text), 36pt height, 8pt radius, 80pt width, "Yes" text (Body Small, 13pt Semibold)
    - No button: Secondary (transparent, 1pt white border, white text), 36pt height, 8pt radius, 80pt width, "No" text
  - Tap Yes: Confirm check-in, tag all subsequent captures with exhibition data, show success toast, collapse drawer
  - Tap No: Dismiss check-in prompt, collapse drawer
  - Once answered, prompt doesn't reappear in session

**CENTER GUIDE:**
- Position: Centered on screen (vertical and horizontal)
- Visual: Dashed frame (2pt dashed line, white with 60% opacity)
- Size: 280x320pt rectangle (approximate artwork frame)
- Corner radius: 8pt
- Purpose: Guide users to center artwork in frame

  *Guidance Text (if artwork not centered or too far):*
  - Position: Below dashed frame, 16pt margin-bottom
  - Background: Scrim (rgba(0,0,0,0.60)), 12pt padding horizontal, 8pt padding vertical, 8pt border radius
  - Text: Body Small (13pt Regular, white), centered
  - Messages:
    - "Place the artwork in the center of the camera to 'Capture'"
    - "Move closer to the artwork" (if too far)
    - "Hold steady..." (if motion detected)
  - Auto-dismiss when conditions met

**BOTTOM CONTROLS:**
- Position: Bottom of screen, 24pt from bottom + safe area
- Background: Optional scrim (rgba(0,0,0,0.30)) for contrast
- Padding: 24pt horizontal
- Layout (horizontal, centered):

  *Upload Button (Left):*
  - Position: Left side, 24pt from left edge
  - Icon button: Gallery/Photo icon (24pt, white)
  - Size: 40x40pt
  - Background: Blur background (rgba(0,0,0,0.50)), 20pt border radius (circular)
  - Touch target: 44pt
  - Tap: Open photo picker, select image, process for recognition

  *Capture Button (Center, FAB):*
  - Position: Centered horizontally
  - Size: 64x64pt circular
  - Background: #FFFFFF (white)
  - Icon: Filled camera icon (28pt, #1C1C1E)
  - Shadow: Elevation-3 (0 8px 24px rgba(0,0,0,0.24))
  - Touch target: 64pt (full button)
  - Tap: Capture photo, trigger animation, navigate to recognition result
  - Animation on tap:
    - Screen flash (white, 100ms)
    - Haptic feedback (medium impact)
    - Button scale animation (1.0 → 0.95 → 1.0, 200ms)
    - Navigate to Recognition Result bottom sheet

  *Flash/Settings Button (Right, optional):*
  - Position: Right side, 24pt from right edge
  - Icon button: Flash icon (24pt, white) - cycles through Auto, On, Off
  - Size: 40x40pt
  - Background: Blur background (rgba(0,0,0,0.50)), 20pt border radius (circular)
  - Touch target: 44pt
  - Tap: Cycle flash mode, show toast with current mode ("Flash: Auto", "Flash: On", "Flash: Off")

### KEY FEATURES
- Full-screen live camera preview (60fps minimum)
- Location-based exhibition check-in (500m radius)
- Check-in prompt with Yes/No options (once per session)
- Artwork centering guide (dashed frame)
- Real-time guidance text (center, move closer, hold steady)
- Large capture button (64pt FAB, white, prominent)
- Upload from gallery as alternative to live capture
- Flash mode control (Auto, On, Off)
- Tap-to-focus anywhere on preview
- Capture animation (screen flash, haptic feedback)
- Auto-tag captures with exhibition data if checked in
- Navigate to Recognition Result (PAGE 10 or 11)
- Dark mode: UI elements adapt, camera preview unaffected
- Permission handling: Request camera and location permissions on first use

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Capture Artwork | Tap capture button (center FAB) | Take photo, screen flash, haptic feedback, process image, navigate to Recognition Result (PAGE 10 or 11) |
| Upload Photo | Tap upload button (left) | Open photo picker, select image, process for recognition, navigate to Recognition Result |
| Check In | Tap "Yes" in check-in prompt | Confirm check-in, tag session with exhibition data, show success toast, collapse drawer |
| Dismiss Check-In | Tap "No" in check-in prompt | Dismiss prompt, collapse drawer, don't tag session |
| Toggle Flash | Tap flash button (right) | Cycle flash mode (Auto → On → Off → Auto), show toast with current mode |
| Focus Camera | Tap anywhere on preview | Focus camera on tapped point, show focus indicator (yellow square, 80pt, 1s fade) |
| Expand Location Drawer | Swipe down on top overlay | Expand drawer to show full check-in prompt |
| Collapse Location Drawer | Swipe up on top overlay or tap outside | Collapse drawer to minimal state |

### BRANDING ELEMENTS
- Camera as primary entry point per design philosophy (Vivino inspiration)
- Full-screen immersive experience (no chrome, minimal UI)
- Large, prominent capture button (64pt white FAB) per Critical Design Rules
- Location-based check-in for exhibition context
- Artwork centering guide (dashed frame) aids composition
- Real-time guidance text helps users capture correctly
- Blur backgrounds on overlays create premium feel
- Smooth 60fps preview for high-quality experience
- Capture animation (flash, haptic) provides feedback
- Upload alternative ensures accessibility (if camera fails)
- Minimal controls (3 buttons) keep focus on artwork
- White capture button stands out against any background
- Elevation-3 shadow on FAB creates depth
- Flash control for various lighting conditions

---

## Page: 10-recognition-success
name: Recognition Result - Success
category: user

### SCREEN OVERVIEW
The Recognition Success bottom sheet appears after capturing an artwork and successfully identifying it. It displays the corrected artwork image, comprehensive metadata, and actions to add to collection or view full details.

Purpose:
- Confirm successful artwork recognition
- Display recognized artwork image and metadata
- Provide immediate feedback after capture
- Enable adding artwork to collection
- Allow viewing full artwork details
- Celebrate successful capture

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Bottom sheet overlay over Camera View (PAGE 9)
- Sheet slides up from bottom (300ms ease-out animation)
- Backdrop: rgba(0,0,0,0.50), tap to dismiss (optional)
- Background: Surface color (#FFFFFF light, #1C1C1E dark)
- Border radius: 16pt on top corners only
- Max height: 80% of screen height
- Scrollable content if exceeds max height

**SHEET HANDLE:**
- Position: Top center, 12pt from top edge
- Size: 36x5pt rounded rectangle
- Background: Text Tertiary (rgba(0,0,0,0.38) light, rgba(255,255,255,0.38) dark)
- Swipe down to dismiss sheet

**HEADER:**
- Padding: 16pt horizontal, 16pt top
- Layout (horizontal):
  - Title: "Artwork Recognized" (Heading 2, 18pt Semibold, Success Green #34C759)
  - Spacer (flex)
  - Close button: X icon (24pt, Text Secondary), 44pt touch target
- Tap close: Dismiss sheet, return to Camera View

**CAPTURED IMAGE:**
- Position: 16pt margin-top from header
- Padding: 0pt (edge-to-edge within sheet)
- Image: Corrected artwork photo (perspective correction applied by recognition)
- Aspect ratio: 16:10 (standard artwork ratio) or original if available
- Max height: 320pt
- Border radius: 0pt (edge-to-edge)
- Animation: Fade in (400ms) after sheet appears
- Loading: Show shimmer placeholder while image loads

**ARTWORK DETAILS:**
- Padding: 16pt horizontal, 16pt top
- Content (vertical stack):

  *Artwork Title:*
  - Text: Heading 1 (20pt Semibold), Text Primary
  - Max 2 lines with ellipsis

  *Artist Name (8pt margin-top):*
  - Text: Body Medium (15pt Regular), Text Secondary, tappable (underline on press)
  - Tap: Dismiss sheet, navigate to Artist Profile (PAGE 7)

  *Metadata (8pt margin-top):*
  - Text: Body Small (13pt Regular), Text Tertiary
  - Format: "1985 • Oil on canvas"
  - Bullet-separated (year, medium)

  *Capture Info (12pt margin-top):*
  - Icon + text: 📍 location pin emoji + location (Body Small, 13pt Regular, Text Secondary)
  - Date: Caption (12pt Regular), Text Tertiary, 4pt margin-top
    - Format: "Captured on March 15, 2026"

**ACTION BUTTONS:**
- Padding: 16pt horizontal, 24pt top, 24pt bottom (+ safe area)
- Vertical stack, 12pt gap

  *Add to Collection Button (Primary):*
  - Background: #1C1C1E, white text
  - Height: 48pt
  - Border radius: 12pt
  - Text: "Add to Collection" (Body Medium, 15pt Semibold)
  - Icon: Plus icon (20pt) left of text
  - Full-width
  - Tap: Open collection picker bottom sheet (overlay current sheet or replace), select collection, save, show success toast, navigate to My Page or Feed

  *View Details Button (Tertiary):*
  - Background: Transparent, Accent Blue text
  - Height: 48pt
  - Text: "View Details" (Body Medium, 15pt Semibold)
  - Full-width
  - Tap: Dismiss sheet, navigate to Artwork Detail (PAGE 6)

### KEY FEATURES
- Bottom sheet presentation (slides up from bottom)
- Success indicator (green title "Artwork Recognized")
- Corrected artwork image (perspective correction from AI)
- Comprehensive metadata (title, artist, year, medium)
- Capture location and date recorded
- Artist name tappable (quick navigation)
- Two primary actions: Add to Collection (main CTA), View Details (secondary)
- Swipe down to dismiss (handle at top)
- Backdrop tap to dismiss (optional)
- Close button (X) for explicit dismissal
- Image fade-in animation for polish
- Loading state for image (shimmer)
- Dark mode support
- Safe area insets

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Add to Collection | Tap "Add to Collection" button | Open collection picker (bottom sheet or modal), user selects existing collection or creates new, save artwork, show success toast "Added to [Collection Name]", navigate to My Page (Captures tab) or Feed |
| View Details | Tap "View Details" button | Dismiss sheet, navigate to Artwork Detail (PAGE 6) with artwork ID |
| Navigate to Artist | Tap artist name | Dismiss sheet, navigate to Artist Profile (PAGE 7) with artist ID |
| Dismiss Sheet | Swipe down on handle, tap backdrop, or tap X button | Animate sheet down (300ms), return to Camera View (PAGE 9) |
| Scroll Content | Vertical scroll if content exceeds max height | Smooth scroll within sheet |

### BRANDING ELEMENTS
- Success feedback (green title, success green #34C759) provides positive reinforcement
- Corrected artwork image showcases AI capability (Vivino inspiration)
- Bottom sheet follows iOS/Android patterns (handle, swipe to dismiss)
- Capture date/location preserves context
- "Add to Collection" as primary action (collection curation is core feature per Spotify inspiration)
- "View Details" offers deeper exploration
- Image fade-in animation creates premium feel
- Typography hierarchy: Heading 1 (20pt) for title → Body Medium (15pt) → Body Small (13pt)
- Generous padding: 16pt margins per 8pt grid
- Elevation-3 shadow on sheet for depth
- Dark mode support with true black
- Smooth animations: Slide up (300ms), fade in (400ms)

---

## Page: 11-recognition-failure
name: Recognition Result - Failure
category: user

### SCREEN OVERVIEW
The Recognition Failure bottom sheet appears when the AI cannot immediately identify the captured artwork. It provides processing feedback, suggests possible matches based on location/exhibition context, and offers manual input as fallback.

Purpose:
- Communicate processing status (AI still working)
- Suggest possible artwork matches if available
- Provide manual input option as fallback
- Enable requesting platform to add artwork
- Maintain user confidence despite recognition failure
- Ensure smooth experience with clear next steps

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Bottom sheet overlay over Camera View (PAGE 9)
- Sheet slides up from bottom (300ms ease-out animation)
- Backdrop: rgba(0,0,0,0.50), tap to dismiss (optional)
- Background: Surface color (#FFFFFF light, #1C1C1E dark)
- Border radius: 16pt on top corners only
- Max height: 80% of screen height
- Scrollable content if exceeds max height

**SHEET HANDLE:**
- Position: Top center, 12pt from top edge
- Size: 36x5pt rounded rectangle
- Background: Text Tertiary
- Swipe down to dismiss sheet

**HEADER:**
- Padding: 16pt horizontal, 16pt top
- Layout (horizontal):
  - Title: "Processing Artwork" (Heading 2, 18pt Semibold, Warning Orange #FF9500)
  - Spacer (flex)
  - Close button: X icon (24pt, Text Secondary), 44pt touch target
- Tap close: Dismiss sheet, return to Camera View

**CAPTURED IMAGE WITH OVERLAY:**
- Position: 16pt margin-top from header
- Padding: 0pt (edge-to-edge within sheet)
- Image: Captured artwork photo (full-width, maintain aspect ratio)
- Max height: 280pt
- Overlay (centered on image):
  - Background: Scrim (rgba(0,0,0,0.60))
  - Text: "We are processing this artwork for you" (Body Medium, 15pt Regular, white text, centered)
  - Padding: 16pt horizontal, 12pt vertical
  - Border radius: 8pt
  - Optional: Spinner animation (white, 24pt) above text

**SUGGESTED ARTWORKS (if location/exhibition known):**
- Padding: 16pt horizontal, 16pt top
- Section header: "Could it be one of these?" (Heading 3, 16pt Semibold, Text Primary)
- Horizontal scroll carousel (16pt margin-top):
  - 2-3 artwork cards per location/exhibition context
  - Card size: 160pt width
  - Gap: 12pt
  - Each card:
    - Image: 160x200pt, border radius 12pt, cover fit
    - Title: Body Medium (15pt Semibold), Text Primary, centered, 8pt margin-top, max 1 line ellipsis
    - Artist: Body Small (13pt Regular), Text Secondary, centered, 4pt margin-top
  - Tap card: Assume this is correct artwork, open Recognition Success sheet (PAGE 10) with selected artwork data
- Empty (if no suggestions): Hide this section

**MANUAL INPUT OPTION:**
- Padding: 16pt horizontal, 24pt top
- Content (vertical stack, centered):

  *Icon:*
  - Icon: Pencil/edit icon (48pt, Text Tertiary)
  - Centered

  *Message (12pt margin-top):*
  - Text: "Can't find it?" (Body Large, 17pt Semibold, Text Primary, centered)

  *Manual Input Button (12pt margin-top):*
  - Background: Transparent, Accent Blue text
  - Height: 48pt
  - Text: "Enter Artwork Info Manually" (Body Medium, 15pt Semibold)
  - Full-width
  - Tap: Dismiss sheet, navigate to Manual Artwork Input (PAGE 12)

**REQUEST PLATFORM OPTION:**
- Padding: 16pt horizontal, 16pt top, 24pt bottom (+ safe area)
- Content:

  *Request Button (Secondary):*
  - Background: Transparent with 1pt border (border color)
  - Height: 48pt
  - Border radius: 12pt
  - Text: "Request Platform to Add This Artwork" (Body Medium, 15pt Semibold, Text Primary)
  - Full-width
  - Tap: Submit captured image + metadata to platform for admin review, show success toast "Request submitted. We'll review and add this artwork soon!", dismiss sheet

### KEY FEATURES
- Processing indicator (orange title, spinner, overlay message)
- Captured image displayed (user sees what was captured)
- Suggested artworks if location/exhibition context available (smart fallback)
- Manual input option always available (user not blocked)
- Request platform to add artwork (crowdsourcing)
- Horizontal scroll for suggestions (easy browsing)
- Tap suggestion to select as correct artwork
- Clear messaging ("Could it be one of these?", "Can't find it?")
- Swipe down to dismiss
- Close button for explicit dismissal
- Loading state: Spinner on image overlay
- Dark mode support
- Safe area insets

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Select Suggested Artwork | Tap artwork card in suggestions | Assume this is correct artwork, dismiss current sheet, open Recognition Success sheet (PAGE 10) with selected artwork data |
| Enter Manual Input | Tap "Enter Artwork Info Manually" | Dismiss sheet, navigate to Manual Artwork Input (PAGE 12) with captured image |
| Request Platform Add | Tap "Request Platform to Add This Artwork" | Submit captured image + metadata to admin queue, show success toast, dismiss sheet, return to Camera View |
| Dismiss Sheet | Swipe down, tap backdrop, or tap X | Animate sheet down, return to Camera View (PAGE 9) |
| Scroll Content | Vertical scroll if content exceeds max height | Smooth scroll within sheet |

### BRANDING ELEMENTS
- Processing feedback (orange title, spinner) manages user expectations
- Suggested artworks provide smart fallback (location-based context per design philosophy)
- Manual input ensures user never blocked (Vivino fallback inspiration)
- Request platform option enables crowdsourcing (community-driven)
- Horizontal carousel for suggestions (easy browsing, Pinterest-like)
- Clear messaging ("Could it be one of these?") guides user
- Icon + text pattern ("Can't find it?") friendly and helpful
- Typography hierarchy: Heading 2 (18pt) → Body Large (17pt) → Body Medium (15pt)
- Warning Orange (#FF9500) for processing state (not error, just in progress)
- Accent Blue for manual input CTA
- Generous padding: 16pt margins per 8pt grid
- Smooth animations: Sheet slide up, image fade in
- Dark mode support

---

## Page: 12-manual-artwork-input
name: Manual Artwork Input
category: user

### SCREEN OVERVIEW
The Manual Artwork Input page provides a form for users to manually enter artwork details when AI recognition fails. Users input artist name, artwork title, year, and medium, with the captured image preview at the top.

Purpose:
- Enable manual artwork entry as fallback
- Collect essential artwork metadata
- Show captured image preview for reference
- Validate required fields before submission
- Save manually entered artwork to collection
- Ensure users can always capture artworks

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen form page
- Top: Navigation bar (60pt height)
- Form content: Scrollable
- Bottom: Submit button (sticky or in scroll)
- Background: Background Primary
- Keyboard-aware: Scroll to focused field

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Back button (chevron left icon 24pt + "Back" text), 44pt touch target
  - Center: "Enter Artwork Info" (Heading 2, 18pt Semibold, Text Primary)
  - Right: Empty (balance)
- Tap back: Dismiss form, return to Camera View (warn if fields filled)

**CAPTURED IMAGE PREVIEW:**
- Position: Top of form, 16pt margin-top from nav bar
- Padding: 16pt horizontal
- Image container:
  - Thumbnail: 120x150pt, border radius 12pt, cover fit
  - Centered horizontally
  - Border: 1pt border color
  - Shadow: Elevation-1
- 24pt margin-bottom from image to form fields

**FORM FIELDS:**
- Padding: 16pt horizontal
- Vertical stack, 16pt gaps between fields
- Keyboard type: Appropriate for each field

  *Artist Name (Required):*
  - Label: "Artist Name *" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Enter artist name"
  - Border: 1pt border color (default), 2pt Accent Blue (focus), 2pt Error Red (error)
  - Font: Body Large (17pt Regular)
  - Validation: Required (show error if empty on submit)
  - Error message: "Artist name is required" (Body Small, 13pt Regular, Error Red, 4pt margin-top)

  *Artwork Title (Required):*
  - Label: "Artwork Title *" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Enter artwork title"
  - Border: 1pt border color (default), 2pt Accent Blue (focus), 2pt Error Red (error)
  - Font: Body Large (17pt Regular)
  - Validation: Required (show error if empty on submit)
  - Error message: "Artwork title is required" (Body Small, Error Red, 4pt margin-top)

  *Year (Optional):*
  - Label: "Year" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Enter year (e.g., 1985)"
  - Keyboard: Numeric
  - Border: 1pt border color (default), 2pt Accent Blue (focus)
  - Font: Body Large (17pt Regular)
  - Validation: Optional, but must be 4-digit number if entered
  - Error message: "Please enter a valid year" (Body Small, Error Red, 4pt margin-top)

  *Medium (Optional):*
  - Label: "Medium" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
  - Input: 48pt height, 12pt border radius, 16pt horizontal padding
  - Placeholder: "Enter medium (e.g., Oil on canvas)"
  - Border: 1pt border color (default), 2pt Accent Blue (focus)
  - Font: Body Large (17pt Regular)
  - Validation: Optional

**SUBMIT BUTTON:**
- Position: Bottom of form, 24pt margin-top from last field
- Padding: 16pt horizontal, 24pt bottom (+ safe area)
- Button:
  - Background: #1C1C1E (enabled), 50% opacity (disabled)
  - Height: 48pt
  - Border radius: 12pt
  - Text: "Save to Collection" (Body Medium, 15pt Semibold, white)
  - Full-width
  - Disabled: If artist name or artwork title empty
  - Loading state: Spinner (white, 20pt) replaces text on submit
- Tap: Validate all fields, create artwork entry with manual data, save to "Captured Artworks" collection, show success toast, navigate to My Page (Captures tab)

### KEY FEATURES
- Captured image preview at top (user sees what was captured)
- Required fields marked with asterisk (artist name, artwork title)
- Optional fields (year, medium) for additional context
- Real-time validation on required fields
- Inline error messages below each field (Error Red)
- Submit button disabled until required fields filled
- Keyboard types appropriate for each field (text, numeric)
- Loading state on submit button
- Success toast on save: "Artwork saved to Captures"
- Navigate to My Page after save (user sees new capture)
- Warning dialog if user tries to go back with filled fields
- Dark mode support
- Keyboard management (dismiss on tap outside, scroll to focused field)
- Safe area insets

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | If fields filled, show confirmation dialog "Discard changes?", if confirmed or fields empty, return to Camera View (PAGE 9) |
| Focus Field | Tap input field | Show keyboard, scroll field to visible area, highlight border with Accent Blue |
| Submit Form | Tap "Save to Collection" button | Validate required fields, if valid: create artwork entry with manual data, save to Captures collection, show success toast "Artwork saved to Captures", navigate to My Page (PAGE 15, Captures tab); if invalid: show inline error messages |
| Dismiss Keyboard | Tap outside input fields | Hide keyboard |
| Validate Year | Type in year field | If 4 digits, validate as year (1000-current year), if invalid show error |

### BRANDING ELEMENTS
- Manual input as fallback ensures users never blocked (Vivino inspiration)
- Required fields clearly marked (asterisk, validation)
- Captured image preview provides context
- Generous input heights (48pt) per design system
- Typography: Body Small (13pt) for labels → Body Large (17pt) for inputs
- Error Red (#FF3B30) for validation messages
- Accent Blue (#007AFF) for focus states
- Submit button disabled state prevents errors
- Success toast confirms save
- Navigate to My Page to show result (user confidence)
- 8pt grid spacing throughout (16pt gaps, 16pt margins)
- Dark mode support
- Keyboard-aware scrolling (UX polish)

---

## Page: 13-search-main
name: Search Main
category: user

### SCREEN OVERVIEW
The Search Main page provides a comprehensive search interface with a prominent search bar, recent search history, and auto-complete suggestions as the user types. It's the entry point for discovering artworks, artists, and users.

Purpose:
- Enable searching for artworks, artists, and users
- Display recent search history for quick access
- Provide auto-complete suggestions while typing
- Navigate to search results page
- Manage search history (clear individual or all)

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen page
- Top: Navigation bar (60pt height, optional)
- Search bar: Fixed at top below nav (or integrated)
- Content area: Recent searches (default) or auto-complete suggestions (when typing)
- Background: Background Primary

**NAVIGATION BAR (optional):**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Back button (chevron left icon 24pt), 44pt touch target, OR empty if tab-based navigation
  - Center: "Search" title (Heading 2, 18pt Semibold, Text Primary)
  - Right: Empty
- Tap back: Return to previous screen (Feed)

**SEARCH BAR:**
- Position: Top of content area (fixed, doesn't scroll)
- Padding: 16pt horizontal, 16pt top, 12pt bottom
- Background: Background Primary
- Search input:
  - Height: 40pt
  - Border radius: 12pt
  - Background: #F2F2F2 (light mode) or #2C2C2E (dark mode)
  - Border: None (default), 2pt Accent Blue (focus)
  - Padding: 12pt horizontal
  - Layout (horizontal):
    - Leading: Magnifying glass icon (20pt, Text Secondary)
    - Input field: Flex, center-aligned vertically
      - Placeholder: "Search artists, artworks, users..." (Body Large, 17pt Regular, Text Tertiary)
      - Text: Body Large (17pt Regular, Text Primary)
    - Trailing: Clear button (X icon, 20pt, Text Secondary), appears only when text entered, 44pt touch target
  - Tap input: Focus, show keyboard, highlight border with Accent Blue
  - Tap clear: Clear input text, hide clear button, dismiss auto-complete
  - Keyboard: Return key labeled "Search", tap return to submit search

**RECENT SEARCHES (default state, when search bar empty):**
- Padding: 16pt horizontal, 16pt top
- Section header: "Recent" (Heading 3, 16pt Semibold, Text Primary)
- Search history list (16pt margin-top):
  - Vertical list of last 10-15 search terms
  - Each item:
    - Height: 48pt
    - Padding: 12pt horizontal
    - Border-bottom: 0.5pt border color (last item: no border)
    - Layout (horizontal):
      - Leading: Clock icon (16pt, Text Tertiary), 12pt margin-right
      - Search term: Body Large (17pt Regular, Text Primary), flex
      - Trailing: X button (remove icon, 16pt, Text Tertiary), 44pt touch target
    - Tap item: Re-run search with this term, navigate to Search Results (PAGE 14)
    - Tap X: Remove this term from history (no confirmation)
- Clear all button (24pt margin-top from last item):
  - Text button: "Clear Search History" (Body Medium, 15pt Semibold, Error Red)
  - Centered
  - Tap: Show confirmation dialog "Clear all recent searches?", if confirmed: clear history, show empty state

**EMPTY STATE (if no recent searches):**
- Position: Centered vertically in content area
- Content (vertical stack, centered):
  - Icon: Magnifying glass (64pt, Text Tertiary)
  - Message: "Search for artworks, artists, or users" (Body Large, 17pt Regular, Text Secondary), 16pt margin-top
  - Hint: "Try searching for an artist or artwork name" (Caption, 12pt Regular, Text Tertiary), 8pt margin-top

**AUTO-COMPLETE SUGGESTIONS (when typing in search bar):**
- Position: Below search bar (overlays recent searches)
- Background: Surface color (#FFFFFF light, #1C1C1E dark)
- Shadow: Elevation-2 (0 4px 16px rgba(0,0,0,0.12))
- Border radius: 12pt
- Padding: 8pt vertical
- Max suggestions: 5-7 results
- Each suggestion item:
  - Height: 48pt
  - Padding: 12pt horizontal
  - Layout (horizontal):
    - Leading: Type icon (20pt, Text Secondary), 12pt margin-right
      - Artist: Person icon
      - Artwork: Image icon
      - User: Person icon (filled)
    - Text: Body Large (17pt Regular), flex
      - Matching part: Bolded (Semibold weight)
      - Format: "[Name]" or "[Title] by [Artist]" for artworks
    - Trailing: Category label (Caption, 11pt Regular, Text Tertiary), "Artist", "Artwork", or "User"
  - Tap suggestion: Navigate to Search Results (PAGE 14) with selected query, or directly to entity (Artist Profile, Artwork Detail, User Profile)
- Empty (if no suggestions): Show "No suggestions" message (Body Medium, Text Tertiary, centered, 16pt padding)

### KEY FEATURES
- Prominent search bar with clear visual affordance
- Recent search history (last 10-15 searches)
- Tap recent search to re-run
- Remove individual recent searches (X button)
- Clear all history with confirmation
- Auto-complete suggestions while typing (5-7 results)
- Suggestions show type icon (artist, artwork, user)
- Matching text bolded in suggestions
- Category labels on suggestions (artist, artwork, user)
- Search bar stays focused while typing
- Clear button appears when text entered
- Keyboard return key labeled "Search"
- Empty state when no history
- Loading state for suggestions (spinner if slow)
- Dark mode support
- Smooth animations: Suggestions fade in (200ms)

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Focus Search | Tap search bar | Focus input, show keyboard, highlight border, display recent searches or auto-complete |
| Type Query | Type in search bar | Show auto-complete suggestions (debounced 300ms), update suggestions as typing |
| Clear Input | Tap X button in search bar | Clear text, hide X button, hide auto-complete, show recent searches |
| Submit Search | Tap return key on keyboard or select suggestion | Navigate to Search Results (PAGE 14) with query, add to recent searches |
| Select Recent Search | Tap recent search item | Navigate to Search Results (PAGE 14) with that query |
| Remove Recent Search | Tap X on recent search item | Remove from history list (no confirmation) |
| Clear All History | Tap "Clear Search History" | Show confirmation dialog, if confirmed: clear all history, show empty state |
| Select Suggestion | Tap auto-complete suggestion | Navigate to Search Results or directly to entity (Artist Profile, Artwork Detail, User Profile) |
| Navigate Back | Tap back button (if present) | Return to previous screen (Feed) |

### BRANDING ELEMENTS
- Search as primary discovery method (Pinterest inspiration)
- Prominent search bar (40pt height, rounded, clear visual affordance)
- Recent searches enable quick re-access (user convenience)
- Auto-complete suggestions with smart matching (bolded text)
- Type icons (artist, artwork, user) provide visual cues
- Category labels reduce ambiguity
- Clock icon for recent searches (clear temporal context)
- Clear all in Error Red (destructive action, clear visual signal)
- Typography: Body Large (17pt) for search terms, Heading 3 (16pt) for sections
- #F2F2F2 (light) / #2C2C2E (dark) background for search bar (iOS native pattern)
- Accent Blue focus state on search bar
- Elevation-2 shadow on suggestions dropdown (depth)
- Generous spacing: 16pt margins, 12pt padding per 8pt grid
- Smooth animations: Suggestions fade in, keyboard handling
- Dark mode support

---

## Page: 14-search-results
name: Search Results
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

## Page: 15-my-page-profile
name: My Page (Profile)
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
  - Tap: Navigate to Edit Profile (PAGE 17)

  *Stats Row (20pt margin-top):*
  - Horizontal layout, evenly spaced, centered
  - 3 stats (24pt gaps):
    - Captures: Number (Heading 1, 20pt Bold) over "Captures" label (Caption, 12pt, Text Tertiary)
    - Followers: Number over "Followers" label, tappable
    - Following: Number over "Following" label, tappable
  - Tap Followers: Navigate to Follower List (PAGE 18)
  - Tap Following: Navigate to Following List (PAGE 19)

  *Settings Icon (top-right of header):*
  - Position: Absolute top-right, 16pt from edges (+ safe area)
  - Icon: Gear icon (24pt, Text Secondary), 44pt touch target
  - Tap: Navigate to Settings (PAGE 16)

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
- Tap item: Navigate to Artwork Detail (PAGE 6)

*Grid View:*
- 2-column masonry (mobile), 3-column (tablet)
- Gap: 12pt
- Each card: Same as artwork cards in other pages (image, title/artist overlay, capture badge)

- Empty state:
  - Icon: Camera icon (64pt, Text Tertiary), centered
  - Message: "No captures yet" (Heading 2, 18pt Semibold, Text Primary), centered, 16pt margin-top
  - Suggestion: "Start capturing artworks at exhibitions" (Body Large, Text Secondary), centered, 8pt margin-top
  - CTA: "Go to Camera" button (Primary, 48pt height), 16pt margin-top
    - Tap: Navigate to Camera View (PAGE 9)

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
- Tap card: Navigate to Collection Detail (PAGE 5)
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
| Edit Profile | Tap "Edit Profile" button | Navigate to Edit Profile (PAGE 17) |
| View Settings | Tap gear icon (top-right) | Navigate to Settings (PAGE 16) |
| View Followers | Tap Followers stat | Navigate to Follower List (PAGE 18) |
| View Following | Tap Following stat | Navigate to Following List (PAGE 19) |
| Switch Tab | Tap Home, Captures, or Collections tab | Switch content, animate underline slide |
| Edit Home Highlights | Tap "Edit" in Home tab | Enter edit mode: pin/unpin, reorder, tap "Done" to save |
| Toggle Captures View | Tap list/grid icon in Captures tab | Toggle between list and grid views |
| Sort Captures | Tap sort dropdown | Open dropdown with sort options, apply selected sort |
| View Artwork | Tap artwork item in Captures | Navigate to Artwork Detail (PAGE 6) |
| View Collection | Tap collection card in Collections | Navigate to Collection Detail (PAGE 5) |
| Collection Actions | Long-press collection card | Open action sheet: Edit, Delete, Share, Change Visibility |
| Group Collections | Tap grouping dropdown | Open dropdown with grouping options, apply selected grouping |
| Go to Camera | Tap "Go to Camera" in empty states | Navigate to Camera View (PAGE 9) |
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

## Page: 16-settings
name: Settings
category: user

### SCREEN OVERVIEW
The Settings page provides account management options organized in grouped lists similar to iOS Settings. Users can change account details (username, password), manage notifications, view about information, and perform account actions like logout or delete.

Purpose:
- Manage account settings (username, password, visibility)
- Configure notification preferences
- Access about/legal information (Privacy Policy, Terms, Help)
- Logout or delete account
- Require password confirmation for sensitive actions

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen scrollable page
- Top: Navigation bar (60pt height)
- Content: Grouped list (iOS Settings style)
- Background: Background Primary

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Back button (chevron left icon 24pt + "Back" text), 44pt touch target
  - Center: "Settings" (Heading 2, 18pt Semibold, Text Primary)
  - Right: Empty
- Tap back: Return to My Page (PAGE 15)

**SETTINGS GROUPS:**
- Vertical scroll, 24pt gaps between groups
- Each group: White cards on gray background (or dark equivalent)

**GROUP 1: ACCOUNT SETTINGS (requires password confirmation):**
- Header: "Account Settings" (Caption, 11pt Semibold, Text Tertiary, uppercase), 16pt horizontal padding, 8pt margin-bottom
- Card: Background Surface, border radius 12pt, 16pt horizontal padding
- Items (list rows, 48pt height each, 0.5pt border-bottom except last):

  *Change Username:*
  - Layout (horizontal): Label "Username" (Body Medium, 15pt Regular, Text Primary) left, Chevron right icon (16pt, Text Tertiary) right
  - Tap: Navigate to edit screen (modal or new page), input field for new username, check duplicate, save

  *Change Password (email accounts only):*
  - Layout: Label "Password" left, Chevron right
  - Tap: Navigate to change password screen (current password, new password, confirm)

  *Account Visibility:*
  - Layout: Label "Private Account" left, Toggle switch (right)
  - Default: Off (Public)
  - Tap: Toggle Private/Public, show confirmation if switching to Private ("Your profile will be hidden from search. Only approved followers can see your content.")

  *Allow Search Engines:*
  - Layout: Label "Allow profile in search engines" left, Toggle switch
  - Default: On
  - Tap: Toggle on/off

  *Delete Account:*
  - Layout: Label "Delete Account" (Error Red) left, Chevron right
  - Tap: Navigate to confirmation screen (password input, warning text, final confirmation), on confirm: delete account, logout

**GROUP 2: NOTIFICATION SETTINGS:**
- Header: "Notifications" (Caption, 11pt Semibold, Text Tertiary, uppercase), 16pt horizontal padding, 8pt margin-bottom
- Card: Background Surface, border radius 12pt, 16pt horizontal padding
- Items:

  *New Followers:*
  - Layout: Label "New Followers" left, Toggle switch right
  - Default: On
  - Tap: Toggle on/off, save preference

  *Accepted Follow Requests:*
  - Layout: Label "Accepted Follow Requests" left, Toggle switch
  - Default: On

  *Artwork Comments (future):*
  - Layout: Label "Artwork Comments" left, Toggle switch
  - Default: On

  *Platform Announcements:*
  - Layout: Label "Platform Announcements" left, Toggle switch
  - Default: On

**GROUP 3: ABOUT:**
- Header: "About" (Caption, 11pt Semibold, Text Tertiary, uppercase), 16pt horizontal padding, 8pt margin-bottom
- Card: Background Surface, border radius 12pt, 16pt horizontal padding
- Items:

  *Privacy Policy:*
  - Layout: Label "Privacy Policy" left, Chevron right
  - Tap: Open webview with Privacy Policy document

  *Terms of Service:*
  - Layout: Label "Terms of Service" left, Chevron right
  - Tap: Open webview with Terms document

  *Help & Support:*
  - Layout: Label "Help & Support" left, Chevron right
  - Tap: Open FAQ or contact form

  *App Version:*
  - Layout: Label "App Version" left, Version text "1.0.0" (Caption, Text Tertiary) right
  - No tap action (display only)

**GROUP 4: ACCOUNT ACTIONS:**
- Header: Empty (no header)
- Card: Background Surface, border radius 12pt, 16pt horizontal padding
- Items:

  *Logout:*
  - Layout: Label "Logout" (Error Red) centered
  - Tap: Show confirmation dialog "Are you sure you want to logout?", if confirmed: logout, navigate to Login (PAGE 2)

**PASSWORD CONFIRMATION MODAL (for Account Settings access):**
- Presented as modal/bottom sheet when user taps any Account Settings item
- Background: Surface with backdrop (rgba(0,0,0,0.50))
- Border radius: 16pt (top corners for sheet, 12pt for modal)
- Padding: 24pt
- Content:

  *Title:*
  - Text: "Enter your password to continue" (Heading 2, 18pt Semibold, Text Primary), centered

  *Password Input (16pt margin-top):*
  - Input: 48pt height, 12pt border radius, 16pt padding, secure entry
  - Placeholder: "Your password"
  - Eye toggle icon (24pt) for show/hide

  *Buttons (24pt margin-top):*
  - Primary button: "Confirm" (full-width, 48pt height)
  - Secondary button: "Cancel" (full-width, 48pt height, 12pt margin-top)
  - Tap Confirm: Validate password, if correct: dismiss modal, allow access to Account Settings; if incorrect: show error "Incorrect password"
  - Tap Cancel: Dismiss modal

### KEY FEATURES
- Grouped list follows iOS Settings pattern
- Password confirmation required for Account Settings (security)
- Toggle switches for binary settings (Private Account, Notifications)
- Account visibility toggle with confirmation dialog
- Delete account with strong confirmation (password + warning + final confirm)
- Notification preferences for multiple event types
- Legal documents in webview (Privacy Policy, Terms)
- Help & Support link
- App version display (read-only)
- Logout with confirmation dialog
- Dark mode support
- Smooth animations: Toggle switches, modal presentations
- Safe area insets

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | Return to My Page (PAGE 15) |
| Change Username | Tap "Username" row | Show password confirmation modal, if confirmed: navigate to username edit screen, check duplicate, save new username, show success toast |
| Change Password | Tap "Password" row (email accounts) | Show password confirmation modal, if confirmed: navigate to change password screen (current, new, confirm), validate, save, show success toast |
| Toggle Private Account | Tap toggle switch | If switching to Private: show confirmation dialog, if confirmed: toggle on, save preference; if switching to Public: toggle off, save |
| Toggle Search Engines | Tap toggle switch | Toggle on/off, save preference |
| Delete Account | Tap "Delete Account" row | Show password confirmation modal, if confirmed: navigate to delete confirmation screen (warning text, password re-entry, "Delete My Account" button in Error Red), on final confirm: delete account, logout, navigate to Login (PAGE 2) |
| Toggle Notification | Tap notification toggle switch | Toggle on/off, save preference to backend |
| View Privacy Policy | Tap "Privacy Policy" row | Open webview with Privacy Policy document, close button returns to Settings |
| View Terms | Tap "Terms of Service" row | Open webview with Terms document |
| Open Help | Tap "Help & Support" row | Open FAQ page or contact form (webview or native) |
| Logout | Tap "Logout" row | Show confirmation dialog "Are you sure you want to logout?", if confirmed: clear session, navigate to Login (PAGE 2) |
| Confirm Password | Tap "Confirm" in password modal | Validate password, if correct: dismiss modal, allow access; if incorrect: show error message "Incorrect password" |
| Cancel Password Modal | Tap "Cancel" in modal | Dismiss modal, no action |

### BRANDING ELEMENTS
- iOS Settings style grouped lists (familiar, organized)
- Password confirmation for sensitive actions (security best practice)
- Toggle switches for binary options (modern, clear)
- Confirmation dialogs for destructive actions (logout, delete, private account)
- Error Red for destructive actions (Delete Account, Logout)
- Webviews for legal documents (in-app, no external browser)
- App version display (transparency)
- Typography: Heading 2 (18pt) for title → Body Medium (15pt) for labels → Caption (11pt) for headers
- Surface color cards on Background Primary (iOS pattern)
- Border-bottom between rows (0.5pt border color)
- Generous padding: 16pt horizontal, 24pt gaps between groups
- Dark mode support
- Smooth animations: Toggle switches, modal presentations

---

## Page: 17-edit-profile
name: Edit Profile
category: user

### SCREEN OVERVIEW
The Edit Profile page allows users to modify their profile information including profile photo, username, and bio. Changes are saved via nav bar action, with validation and feedback.

Purpose:
- Edit profile photo (upload new photo)
- Change username (with duplicate check)
- Edit bio (max 200 characters)
- Save changes to profile
- Provide real-time character count and validation

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen form page
- Top: Navigation bar with save action (60pt height)
- Form content: Scrollable
- Background: Background Primary
- Keyboard-aware: Scroll to focused field

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Cancel button (text "Cancel", Accent Blue), 44pt touch target
  - Center: "Edit Profile" (Heading 2, 18pt Semibold, Text Primary)
  - Right: Save button (text "Save", Accent Blue, enabled if changes made, disabled otherwise), 44pt touch target
- Tap Cancel: Show confirmation if changes made ("Discard changes?"), return to My Page (PAGE 15)
- Tap Save: Validate fields, save to API, show success toast, return to My Page

**FORM CONTENT:**
- Padding: 24pt horizontal, 32pt top
- Vertical stack, 24pt gaps between fields

**PROFILE PHOTO:**
- Avatar: 96pt circular, centered
- "Change Photo" button (12pt margin-top):
  - Text button: "Change Photo" (Body Medium, 15pt Semibold, Accent Blue), centered
  - Tap: Open action sheet with options: "Take Photo", "Choose from Library", "Remove Photo"
    - Take Photo: Open camera, capture photo, crop to square, update avatar preview
    - Choose from Library: Open photo picker, select photo, crop to square, update preview
    - Remove Photo: Set to default avatar (initials or placeholder)

**USERNAME:**
- Label: "Username" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
- Input: 48pt height, 12pt border radius, 16pt padding
- Placeholder: "Enter username"
- Border: 1pt border color (default), 2pt Accent Blue (focus), 2pt Error Red (error)
- Font: Body Large (17pt Regular)
- Validation: Real-time duplicate check (debounced 500ms)
  - If duplicate: Show error message "Username already taken" (Body Small, Error Red, 4pt margin-top)
  - If available: Show success checkmark icon (16pt, Success Green, right side of input)
- Max length: 30 characters

**BIO:**
- Label: "Bio" (Body Small, 13pt Regular, Text Secondary), 8pt margin-bottom
- Textarea: Min 120pt height, 12pt border radius, 16pt padding
- Placeholder: "Tell others about yourself"
- Border: 1pt border color (default), 2pt Accent Blue (focus)
- Font: Body Large (17pt Regular)
- Max length: 200 characters
- Character counter: "0 / 200" (Caption, 12pt Regular, Text Tertiary), 4pt margin-top, right-aligned
  - Updates in real-time as typing
  - Error Red when approaching limit (190+)

### KEY FEATURES
- Cancel and Save actions in nav bar (iOS pattern)
- Profile photo change via action sheet (Take Photo, Choose from Library, Remove)
- Username duplicate check with real-time feedback
- Bio character counter (max 200 characters)
- Save button disabled until changes made
- Validation before save
- Success toast on save: "Profile updated"
- Confirmation dialog if canceling with unsaved changes
- Image cropping for profile photo (square aspect ratio)
- Loading state on Save button (spinner)
- Dark mode support
- Keyboard management (dismiss on tap outside, scroll to focused field)
- Safe area insets

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Cancel | Tap "Cancel" button | If changes made: show confirmation "Discard changes?", if confirmed or no changes: return to My Page (PAGE 15) |
| Save | Tap "Save" button | Validate username (not duplicate), validate bio (≤200 chars), save to API, show success toast "Profile updated", return to My Page |
| Change Photo | Tap "Change Photo" button | Open action sheet with options: "Take Photo", "Choose from Library", "Remove Photo" |
| Take Photo | Select "Take Photo" in action sheet | Open camera, capture photo, show crop screen (square crop), update avatar preview |
| Choose from Library | Select "Choose from Library" in action sheet | Open photo picker, select photo, show crop screen (square crop), update avatar preview |
| Remove Photo | Select "Remove Photo" in action sheet | Set avatar to default (initials or placeholder), update preview |
| Type Username | Type in username field | Check for duplicate (debounced 500ms), show error if duplicate or success checkmark if available |
| Type Bio | Type in bio textarea | Update character counter, highlight in Error Red if > 190 characters |
| Dismiss Keyboard | Tap outside input fields | Hide keyboard |

### BRANDING ELEMENTS
- Cancel/Save in nav bar follows iOS patterns
- Action sheet for photo change (modern, clear options)
- Real-time username validation (user-friendly)
- Character counter for bio (transparency, prevents errors)
- Success checkmark on available username (positive feedback)
- Error messages inline (Error Red)
- Save button disabled until changes (prevents accidental submissions)
- Confirmation dialog on cancel (prevents lost work)
- Image cropping for profile photo (consistency)
- Success toast on save (feedback)
- Typography: Heading 2 (18pt) for title → Body Large (17pt) for inputs → Caption (12pt) for counter
- Accent Blue for interactive elements (Save, Change Photo, focus states)
- Error Red for validation errors
- Success Green for checkmark
- 8pt grid spacing: 16pt padding, 24pt gaps
- Dark mode support

---

## Page: 18-follower-list
name: Follower List
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

## Page: 19-following-list
name: Following List
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

## Page: 20-notification-list
name: Notification List
category: user

### SCREEN OVERVIEW
The Notification List page displays all notifications including new followers, accepted follow requests, and platform announcements. Notifications are marked as read/unread and can be dismissed.

Purpose:
- Display all user notifications chronologically
- Distinguish notification types (follow, follow request, announcement)
- Mark notifications as read/unread
- Navigate to relevant profiles or content
- Dismiss notifications (swipe to delete)

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen page
- Top: Navigation bar (60pt height)
- Notification list: Vertical scrollable list
- Background: Background Primary

**NAVIGATION BAR:**
- Height: 60pt including safe area
- Background: Background Primary with 0.5pt bottom border
- Layout:
  - Left: Back button (chevron left icon 24pt), 44pt touch target (OR empty if tab-based)
  - Center: "Notifications" (Heading 2, 18pt Semibold, Text Primary)
  - Right: Empty (future: mark all as read button)
- Tap back: Return to previous screen (Feed or My Page)

**NOTIFICATION LIST:**
- Vertical list of notification items
- Each item:
  - Height: Dynamic (min 72pt)
  - Padding: 16pt horizontal, 12pt vertical
  - Border-bottom: 0.5pt border color (last item: no border)
  - Background: Background Secondary (#F9F9F9 light, #1C1C1E dark) if unread, Background Primary if read
  - Layout (horizontal):
    - Icon/Avatar: 40pt circular, left
      - User notification: User avatar
      - Platform announcement: bside logo icon
    - Content (12pt margin-left, flex):
      - Text: Body Medium (15pt Regular), Text Primary
        - Format: "[Username] started following you" or "[Username] accepted your follow request" or "Platform announcement: [text]"
        - Username: Semibold weight, tappable
      - Timestamp: Caption (12pt Regular), Text Tertiary, 4pt margin-top
        - Format: "2h ago", "Yesterday", "March 15"
    - Action buttons (if applicable, right side):
      - New Follow (if private account):
        - Accept button: Primary (compact), 32pt height, 60pt width
        - Reject button: Secondary (compact), 32pt height, 60pt width
        - 8pt gap between buttons
        - Vertical stack or horizontal based on space

**NOTIFICATION TYPES:**

*1. New Follow (public account):*
- Avatar + "[Username] started following you" + Timestamp
- Tap notification: Navigate to User Profile (PAGE 15)

*2. New Follow Request (private account):*
- Avatar + "[Username] requested to follow you" + Timestamp
- Buttons: "Accept" (Primary), "Reject" (Secondary)
- Tap Accept: Call API, update notification to "accepted" state, remove buttons
- Tap Reject: Call API, remove notification from list

*3. Follow Request Accepted:*
- Avatar + "[Username] accepted your follow request" + Timestamp
- Tap notification: Navigate to User Profile (PAGE 15)

*4. Platform Announcement:*
- bside logo icon + "Announcement text here..." + Timestamp
- Tap notification: Open announcement detail (webview or modal)

**READ/UNREAD INDICATOR:**
- Unread: Background Secondary (#F9F9F9 light, #1C1C1E dark), text Bold weight
- Read: Background Primary, text Regular weight
- Mark as read: Automatically on tap notification

**SWIPE TO DELETE:**
- Swipe left on notification item
- Reveal red delete button (60pt width, Error Red background, trash icon 24pt white)
- Tap delete: Remove notification with animation (slide out left)

**EMPTY STATE (if no notifications):**
- Position: Centered in list area
- Content (vertical stack, centered):
  - Icon: Bell icon (64pt, Text Tertiary)
  - Message: "No new notifications" (Heading 2, 18pt Semibold, Text Primary), 16pt margin-top

**LOADING STATE:**
- Skeleton rows: 5 shimmer placeholder rows

### KEY FEATURES
- All notification types (follow, follow request, announcement)
- Read/unread visual distinction (background color, text weight)
- Accept/Reject buttons for follow requests (private accounts)
- Swipe to delete notifications
- Tap notification to navigate to relevant profile or content
- Timestamps in relative format (2h ago, Yesterday)
- Mark as read on tap
- Empty state if no notifications
- Loading state: Skeleton rows
- Badge count on tab bar (if using tab navigation)
- Dark mode support
- Smooth animations: Swipe to delete, item removal

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Navigate Back | Tap back button | Return to previous screen (Feed or My Page) |
| View User Profile | Tap notification (follow notifications) | Mark as read, navigate to User Profile (PAGE 15) with user ID |
| Accept Follow Request | Tap "Accept" button | Call accept API, update notification, show success toast "[Username] is now following you" |
| Reject Follow Request | Tap "Reject" button | Call reject API, remove notification from list with animation |
| View Announcement | Tap platform announcement notification | Mark as read, open announcement detail (webview or modal) |
| Delete Notification | Swipe left, tap delete button | Remove notification from list with slide-out animation |
| Mark as Read | Tap any notification | Update background to Background Primary, text weight to Regular |

### BRANDING ELEMENTS
- Instagram/iOS-inspired notification list (familiar pattern)
- Read/unread distinction (background color, text weight)
- Accept/Reject buttons for follow requests (user control)
- Swipe to delete (iOS pattern)
- Relative timestamps (friendly, human-readable)
- Platform announcements distinguished (bside logo icon)
- Empty state friendly message
- Typography: Heading 2 (18pt) → Body Medium (15pt) for text
- Background Secondary for unread (subtle highlight)
- Primary/Secondary buttons for actions
- Error Red for delete
- Generous spacing: 16pt padding per 8pt grid
- Smooth animations: Swipe, delete, mark as read
- Dark mode support

---
