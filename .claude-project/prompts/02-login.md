# Login (02-login)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "02-login" page:

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
