---
project_name: "B-SIDE Art"
total_pages: 22
design_system:
  type: "Mobile App (React Native)"
  style: "Visual-first social curation with minimal elegance"
  industry: "Art & Culture"
  primary_color: "#1C1C1E"
  secondary_color: "#007AFF"
  font: "SF Pro (iOS) / Roboto (Android)"
  icons: "SF Symbols (iOS) / Material Icons (Android)"
---

# B-SIDE Art - AURA.build Design Prompts

## Design System

B-SIDE Art - Mobile Application for Art & Culture.
Style: Minimal and elegant, visual-first social curation with understated luxury feel, using #1C1C1E (Dark Charcoal) primary and #007AFF (iOS Blue) secondary colors.

**Design Inspiration:**
- Nike SNKRS for minimalist product-focused navigation
- HYPE by Hypebeast for content-driven UI and calm balanced tone
- Vivino for object scanning functionality and information overlay patterns
- Pinterest for visual-first interface and masonry layouts
- Spotify for playlist organization and curation features
- Instagram for social features and profile layouts

**The Four Pillars:**
- Camera/Recognition = Vivino (scan → get info, overlay results, manual fallback)
- Feed/Discovery = Pinterest + Instagram (visual-first cards, social feed, infinite scroll)
- Curation/Collections = Spotify (organize artworks into collections)
- Profile/Social = Instagram (follower system, profile tabs)

**Colors:**
- Primary: #1C1C1E - Dark Charcoal (brand, buttons, key UI elements)
- Secondary: #007AFF - iOS Blue (links, selected states, informational elements)
- Success: #34C759 - iOS Green
- Error: #FF3B30 - iOS Red
- Warning: #FF9500 - iOS Orange
- Featured: #AF52DE - iOS Purple (use sparingly)
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
- Font Family: SF Pro (iOS) / Roboto (Android)
- Display Large: 32pt Bold (Hero headlines)
- Display Medium: 28pt Semibold (Page titles)
- H1: 20pt Semibold (Artwork titles)
- H2: 18pt Semibold (Artist names, section headers)
- Body Large: 17pt Regular (Primary content)
- Body Medium: 15pt Regular (Secondary content)
- Body Small: 13pt Regular (Metadata)
- Caption: 12pt Regular (Timestamps, tertiary info)
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

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
- Shadow Elevation-2: 0 4px 12px rgba(0,0,0,0.12)
- Shadow Elevation-3: 0 8px 24px rgba(0,0,0,0.16)
- Transition: 300-400ms ease-in-out
- Icons: 24pt (standard), 44x44pt tap targets

**Component Standards:**
- Bottom Nav Bar: 56pt height + safe area, 3 items, floating style with 16pt margins, 24pt border radius
- Top Header Bar: 44pt height + safe area, Search (left) | Logo (center) | Notifications (right)
- Artwork Card: 16pt border radius, Elevation-1 shadow, full-width image + title + artist + metadata
- Collection Card: 16pt border radius, 16pt padding, horizontal carousel of artworks
- Bottom Sheet: 16pt top corner radius, Elevation-3 shadow, rgba(0,0,0,0.50) backdrop
- FAB (Camera): 64x64pt circular, white background, Elevation-3 shadow
- Buttons: Primary (48pt height, 12pt radius), Secondary (48pt height, border), Icon (44x44pt minimum)

---

## Page: 01-splash
name: Splash Screen
category: auth

### SCREEN OVERVIEW
The Splash Screen is the initial entry point of the B-SIDE Art mobile application. It displays the bside brand logo with an optional blurred artwork background, creating a minimal and elegant first impression. The screen automatically checks for an existing authentication token and routes users accordingly—authenticated users proceed to the Art Feed (Home), while new or logged-out users are directed to the Login screen after a brief 2-second brand display. This screen sets the premium, understated luxury tone of the entire application.

Purpose:
- Provide branded entry point with premium aesthetic
- Auto-check authentication status (session token validation)
- Route users to appropriate screen (Home if authenticated, Login if not)
- Set brand tone with minimal, elegant design

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Full-screen brand experience (edge-to-edge)
- Centered bside logo (primary visual element)
- Optional blurred artwork background (low opacity, subtle)
- Status bar styling (light or dark mode compatible)

**BACKGROUND:**
- Option 1: Solid background using Background Primary (#FFFFFF light, #000000 dark)
- Option 2: Blurred artwork image (low opacity 0.20, blur radius 40pt) as background
- Gradient overlay (top to bottom, from Background Primary to transparent) to ensure logo visibility

**LOGO (CENTERED):**
- bside brand logo (SVG, auto height, proportional width)
- Positioned: Vertical and horizontal center of screen
- Size: Approximately 120-160pt width (proportional height)
- Color: Primary (#1C1C1E) in light mode, #FFFFFF in dark mode
- Optional subtle fade-in animation (400ms ease-in)

**LOADING INDICATOR (BELOW LOGO):**
- Subtle spinner or animation (optional, appears during token check)
- Position: 40pt below logo, centered
- Size: 32pt diameter
- Color: Text Tertiary (rgba(0,0,0,0.38) light, rgba(255,255,255,0.38) dark)
- Style: Circular progress indicator or simple dots animation

**STATUS BAR:**
- Style: Light content (white icons) if dark background, dark content (black icons) if light background
- No safe area padding adjustments needed (full-screen background)

### KEY FEATURES
- Auto-check authentication token on load (API call to validate session)
- If valid token → Navigate to Art Feed (PAGE 06) after 2-second brand display
- If no valid token or expired → Navigate to Login (PAGE 02) after 2-second display
- Minimal, elegant brand presentation (no unnecessary UI chrome)
- Fade-in animation for logo (400ms) on screen load
- Supports both light and dark mode with appropriate background and logo color
- Loading state: Spinner visible during token validation
- Error state (network failure): Retry button appears below logo ("Retry", Tertiary button, 40pt height)
- Fast transition (300ms fade-out) when navigating to next screen

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Auto Token Check | Screen loads | API call to validate session token, show loading indicator |
| Navigate to Home | Valid token detected | After 2s display, fade out and navigate to Art Feed (PAGE 06) |
| Navigate to Login | No/invalid token | After 2s display, fade out and navigate to Login (PAGE 02) |
| Retry Connection | Tap "Retry" (if network error) | Re-attempt token validation API call |

### BRANDING ELEMENTS
- Minimal and elegant entry point (Nike SNKRS inspiration for refined brand presence)
- Understated luxury aesthetic with premium feel
- Artwork as hero (optional blurred background showcases art-centric app)
- Brand logo is sole focus, no distracting UI elements
- Calm and composed tone (not playful or busy)
- Smooth transition animations (300-400ms) maintain premium feel
- Dark mode support with true black (#000000) for OLED efficiency

---

## Page: 02-login
name: Login
category: auth

### SCREEN OVERVIEW
The Login Screen provides the primary authentication entry point for returning users of the B-SIDE Art application. The screen adopts a social-first approach, prominently displaying Apple and Google Sign-In buttons at the top, followed by a traditional email and password login option below a visual divider. The layout is clean and centered, with an optional blurred artwork background to maintain the app's art-centric aesthetic. Users can also access the Password Recovery flow or navigate to the Sign Up screen if they don't have an account. The design emphasizes ease of access while maintaining the app's minimal, elegant brand personality.

Purpose:
- Enable returning users to authenticate via social login (Apple, Google) or email/password
- Provide quick access to Password Recovery for forgotten passwords
- Offer seamless navigation to Sign Up for new users
- Maintain minimal, elegant brand aesthetic with artwork-focused design

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Centered form layout with vertical stack of elements
- Optional blurred artwork background (low opacity, subtle, similar to Splash)
- Content container max-width 400pt, centered horizontally
- Vertical padding: 24pt from top safe area, 32pt from bottom safe area

**BACKGROUND:**
- Option 1: Solid Background Primary (#FFFFFF light, #000000 dark)
- Option 2: Blurred artwork hero image (low opacity 0.15, blur radius 40pt)
- Gradient overlay (top to bottom, from Background Primary to transparent) to ensure text readability

**LOGO/HEADER (TOP):**
- bside brand logo (SVG, proportional)
- Position: Top center, 24pt from safe area
- Size: Approximately 80-100pt width
- Color: Primary (#1C1C1E) in light mode, #FFFFFF in dark mode

**SOCIAL LOGIN SECTION (PRIMARY):**
- Apple Sign-In button:
  - Standard Apple design ("Sign in with Apple")
  - Height: 48pt
  - Border radius: 12pt
  - Background: Black (#000000)
  - Text: White, SF Pro Semibold 17pt
  - Apple logo icon (20pt, white, leading)
  - Full-width (content container width minus 32pt horizontal margins)
- Google Sign-In button:
  - Standard Google design ("Sign in with Google")
  - Height: 48pt
  - Border radius: 12pt
  - Background: White (#FFFFFF)
  - Text: Text Primary (rgba(0,0,0,0.87)), SF Pro Semibold 17pt
  - Google logo icon (20pt, colored, leading)
  - Border: 1px solid rgba(0,0,0,0.12)
  - Full-width
- Spacing: 12pt vertical gap between buttons

**DIVIDER:**
- Text: "or" (Body Medium, Text Secondary, centered)
- Horizontal lines (1px, rgba(0,0,0,0.12) light or rgba(255,255,255,0.12) dark) on left and right
- Margin: 24pt vertical from social buttons and email section

**EMAIL LOGIN SECTION:**
- Email input field:
  - Height: 48pt
  - Border radius: 12pt
  - Background: Background Secondary (#F9F9F9 light, #1C1C1E dark)
  - Border: 1px solid rgba(0,0,0,0.12) (light) or rgba(255,255,255,0.12) (dark)
  - Placeholder: "Email" (Body Medium, Text Tertiary)
  - Leading icon: Mail icon (20pt, Text Secondary)
  - Padding: 16pt horizontal, 12pt vertical
  - Full-width
- Password input field:
  - Same styling as Email field
  - Placeholder: "Password"
  - Leading icon: Lock icon (20pt, Text Secondary)
  - Trailing icon: Eye icon (20pt, tappable, toggles password visibility)
  - Margin: 16pt vertical from Email field
- Forgot Password link:
  - Text: "Forgot password?" (Body Small, Secondary Blue #007AFF)
  - Position: Right-aligned, 8pt below Password field
  - Tap target: 44x44pt
- Login button:
  - Text: "Log In" (Body Large Semibold, white)
  - Height: 48pt
  - Border radius: 12pt
  - Background: Primary (#1C1C1E)
  - Full-width
  - Margin: 24pt vertical from Forgot Password link
  - States: Press scales to 0.98, shadow increases (Elevation-2)

**SIGN UP LINK (BOTTOM):**
- Text: "Don't have an account? Sign Up" (Body Medium, Text Secondary, with "Sign Up" in Secondary Blue #007AFF)
- Position: Centered, 24pt below Login button
- Tap target: Full text width, 44pt height

**ERROR MESSAGE (INLINE):**
- Appears below relevant field on validation error or auth failure
- Text: Error message (Body Small, Error Red #FF3B30)
- Examples: "Invalid email or password", "This is a suspended account.", "This account has been withdrawn."
- Icon: Alert circle (16pt, Error Red, leading)
- Margin: 8pt below field

### KEY FEATURES
- Social login primary options (Apple, Google) with standard branded buttons
- Email/password login secondary option below divider
- Password visibility toggle (eye icon) on password field
- Forgot Password link navigates to Password Recovery (PAGE 04)
- Sign Up link navigates to Sign Up (PAGE 03)
- Inline error messages for invalid credentials or account status issues
- Auto-focus on Email field when screen loads (keyboard appears)
- On success → Navigate to Art Feed (PAGE 06)
- On failure → Inline error message (red text below field)
- Suspended account → "This is a suspended account." error message
- Withdrawn account → "This account has been withdrawn." error message
- Loading state on Login button: Spinner replaces text, button disabled
- Keyboard dismissal: Tap outside input fields or swipe down
- Dark mode support with appropriate backgrounds and text colors

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Social Login (Apple) | Tap "Sign in with Apple" | Apple Sign-In flow, on success navigate to Home (PAGE 06) |
| Social Login (Google) | Tap "Sign in with Google" | Google Sign-In flow, on success navigate to Home (PAGE 06) |
| Email Login | Tap "Log In" button | Validate email + password, API call, on success navigate to Home (PAGE 06) |
| Forgot Password | Tap "Forgot password?" link | Navigate to Password Recovery (PAGE 04) |
| Navigate to Sign Up | Tap "Sign Up" in bottom link | Navigate to Sign Up screen (PAGE 03) |
| Toggle Password Visibility | Tap eye icon on Password field | Toggle secure text entry (show/hide password) |
| Dismiss Keyboard | Tap outside input fields or swipe down | Hide keyboard, unfocus input fields |

### BRANDING ELEMENTS
- Minimal and elegant layout (clean, uncluttered, artwork as hero in background)
- Social-first authentication approach (Apple and Google primary, email secondary)
- Understated luxury aesthetic with blurred artwork background (optional)
- Calm and composed tone (not playful or busy)
- Consistent Primary button styling (#1C1C1E) for Login action
- Secondary Blue (#007AFF) for links (Forgot Password, Sign Up)
- Smooth transitions and animations (300ms button presses, fade-ins)
- Dark mode with true black (#000000) background for OLED efficiency
- Typography hierarchy: Logo (largest) → Buttons (Body Large Semibold) → Links (Body Small)

---

## Page: 03-signup
name: Sign Up
category: auth

### SCREEN OVERVIEW
The Sign Up Screen enables new users to create a B-SIDE Art account through a social-first registration flow or a multi-step email verification process. Similar to the Login screen, social authentication options (Apple, Google) are prominently displayed at the top for quick registration. The email sign-up flow below the divider guides users through email verification (with a countdown timer), password creation (with complexity requirements), and terms acceptance. Upon successful account creation, users are navigated to the Art Feed and then prompted with a Profile Setup screen (PAGE 05) to complete their onboarding. The layout maintains the minimal, elegant aesthetic with an optional blurred artwork background.

Purpose:
- Enable new users to create accounts via social sign-up (Apple, Google) or email registration
- Guide users through email verification with countdown timer and code input
- Enforce password complexity requirements for security
- Obtain user consent for Terms & Privacy Policy
- Navigate to Profile Setup (PAGE 05) after successful registration

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Centered form layout with vertical stack of elements (multi-step inline flow)
- Optional blurred artwork background (low opacity, similar to Login)
- Content container max-width 400pt, centered horizontally
- Vertical padding: 24pt from top safe area, 32pt from bottom safe area
- Scrollable content if keyboard appears (auto-scroll to active input)

**BACKGROUND:**
- Same styling as Login (PAGE 02): Solid or blurred artwork background

**LOGO/HEADER (TOP):**
- Same styling as Login: bside brand logo, top center, 24pt from safe area

**SOCIAL SIGN-UP SECTION (PRIMARY):**
- Apple Sign-Up button: Same styling as Login Apple button ("Sign up with Apple")
- Google Sign-Up button: Same styling as Login Google button ("Sign up with Google")
- Spacing: 12pt vertical gap between buttons

**DIVIDER:**
- Same styling as Login: "or" text with horizontal lines, 24pt vertical margins

**EMAIL SIGN-UP FLOW (MULTI-STEP INLINE):**

**Step 1: Email Input**
- Email input field:
  - Height: 48pt, Border radius: 12pt, Background: Background Secondary
  - Placeholder: "Email" (Body Medium, Text Tertiary)
  - Leading icon: Mail icon (20pt, Text Secondary)
  - Full-width, same styling as Login email field
- Send Code button:
  - Text: "Send Code" (Body Large Semibold, white)
  - Height: 48pt, Border radius: 12pt, Background: Primary (#1C1C1E)
  - Full-width, Margin: 16pt vertical from Email field
  - States: Loading (spinner), Disabled (if email invalid or empty)

**Step 2: Verification Code Input (appears after Send Code)**
- Verification code input:
  - 6-digit code input (6 separate boxes or single input with formatting)
  - Height: 56pt per box, Border radius: 12pt
  - Background: Background Secondary, Border: 1px solid rgba(0,0,0,0.12)
  - Font: Display Medium 28pt (large, easy to read)
  - Spacing: 8pt gaps between boxes, centered horizontally
- Countdown timer:
  - Text: "Resend in 1:30" (Body Small, Text Secondary, centered, 12pt below code input)
  - After expiry: "Resend Code" (Body Small, Secondary Blue #007AFF, tappable)
- Auto-focus on code input when visible

**Step 3: Password Creation (appears after code verified)**
- Password input field:
  - Same styling as Login password field (48pt height, eye toggle icon)
  - Placeholder: "Create Password"
  - Leading icon: Lock icon
  - Trailing icon: Eye icon (toggle visibility)
- Complexity requirements (below password field):
  - Text: "Min 8 characters, 1 uppercase, 1 number" (Caption, Text Tertiary)
  - Real-time validation indicators:
    - Green checkmark (12pt) + requirement text (green) if met
    - Gray circle (12pt) + requirement text (gray) if not met
  - Margin: 8pt below password field

**Step 4: Confirm Password**
- Confirm Password input field:
  - Same styling as Password field
  - Placeholder: "Confirm Password"
  - Match indicator (inline, below field):
    - "Passwords match" (Caption, Success Green #34C759, green checkmark) if match
    - "Passwords don't match" (Caption, Error Red #FF3B30, red X) if mismatch
  - Margin: 16pt vertical from Password field

**TERMS & PRIVACY (CHECKBOXES):**
- Checkbox 1: "I agree to the Terms of Service" (Caption, with "Terms of Service" as link, Secondary Blue)
- Checkbox 2: "I agree to the Privacy Policy" (Caption, with "Privacy Policy" as link, Secondary Blue)
- Checkbox style: 20x20pt, border radius 4pt, checkmark icon (white) on Primary background when checked
- Spacing: 12pt vertical between checkboxes, 16pt margin from Confirm Password field

**CREATE ACCOUNT BUTTON:**
- Text: "Create Account" (Body Large Semibold, white)
- Height: 48pt, Border radius: 12pt, Background: Primary (#1C1C1E)
- Full-width, Margin: 24pt vertical from Terms checkboxes
- Enabled only when: Code verified, Passwords match, Complexity met, Terms checked
- States: Loading (spinner), Disabled (gray background if requirements not met)

**LOGIN LINK (BOTTOM):**
- Text: "Already have an account? Log In" (Body Medium, Text Secondary, with "Log In" in Secondary Blue #007AFF)
- Position: Centered, 24pt below Create Account button
- Tap target: Full text width, 44pt height

### KEY FEATURES
- Social sign-up primary options (Apple, Google) for quick registration
- Multi-step email sign-up flow (Email → Verification Code → Password → Confirm → Terms → Create)
- Countdown timer for verification code (e.g., "Resend in 1:30") with Resend option after expiry
- Real-time password complexity validation (visual indicators: green checkmarks for met requirements)
- Password match indicator (green if match, red if mismatch)
- Terms of Service and Privacy Policy checkboxes (required, links open in webview)
- Create Account button enabled only when all requirements met
- On success → Navigate to Art Feed (PAGE 06), then show Profile Setup prompt (PAGE 05)
- Social sign-up → After social auth, also navigate to Home then show Profile Setup
- Error handling: Inline error messages (e.g., "Email already registered", "Invalid verification code")
- Loading states: Send Code button (spinner), Create Account button (spinner)
- Auto-focus and auto-scroll to active input as user progresses through steps
- Keyboard dismissal: Tap outside or swipe down
- Dark mode support with appropriate backgrounds and text colors

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Social Sign-Up (Apple) | Tap "Sign up with Apple" | Apple auth flow, on success navigate to Home (PAGE 06) then Profile Setup (PAGE 05) |
| Social Sign-Up (Google) | Tap "Sign up with Google" | Google auth flow, on success navigate to Home (PAGE 06) then Profile Setup (PAGE 05) |
| Send Verification Code | Tap "Send Code" button | API call to send code to email, show Step 2 (code input) with countdown timer |
| Verify Code | Input 6-digit code | Auto-verify code (API call), on success show Step 3 (password creation) |
| Resend Code | Tap "Resend Code" (after timer expiry) | Re-send verification code, restart countdown timer |
| Validate Password | Type in Password field | Real-time validation, update complexity requirement indicators (green checkmarks) |
| Check Password Match | Type in Confirm Password field | Real-time match check, show "Passwords match" (green) or "Passwords don't match" (red) |
| Toggle Terms Checkbox | Tap Terms or Privacy checkbox | Toggle checkbox state (checked/unchecked) |
| Create Account | Tap "Create Account" button | API call to create account, on success navigate to Home (PAGE 06) then Profile Setup (PAGE 05) |
| Navigate to Login | Tap "Log In" in bottom link | Navigate to Login screen (PAGE 02) |
| Open Terms/Privacy | Tap "Terms of Service" or "Privacy Policy" links | Open webview with full document |

### BRANDING ELEMENTS
- Minimal and elegant layout (clean multi-step flow, no overwhelming forms)
- Social-first registration (Apple and Google primary, email secondary)
- Understated luxury aesthetic with optional blurred artwork background
- Calm and composed tone (friendly error messages, encouraging validation feedback)
- Consistent Primary button styling (#1C1C1E) for Create Account action
- Secondary Blue (#007AFF) for links (Login, Terms, Privacy)
- Success Green (#34C759) for positive validation feedback (passwords match, requirements met)
- Error Red (#FF3B30) for negative validation (passwords don't match, invalid code)
- Smooth transitions between steps (fade-in animations 300ms)
- Real-time validation provides immediate feedback (no waiting until submission)
- Dark mode with true black background for OLED efficiency
- Typography hierarchy maintains readability (Display Medium for code input, Body Large for buttons)

---

## Page: 04-password-recovery
name: Password Recovery
category: auth

### SCREEN OVERVIEW
The Password Recovery Screen provides a streamlined flow for users who have forgotten their password and need to reset it. The screen guides users through a multi-step process: entering their email address, receiving and inputting a verification code (with countdown timer), creating a new password (with complexity requirements), and confirming the new password. Upon successful password reset, users are navigated back to the Login screen with a success message. The layout is centered and minimal, maintaining the app's elegant aesthetic with optional blurred artwork background. A "Back to Login" link is provided at the top-left for users who remember their password mid-flow.

Purpose:
- Enable users to reset their forgotten passwords via email verification
- Guide users through email verification with countdown timer and code input
- Enforce password complexity requirements for new password creation
- Provide success confirmation and navigate to Login screen after reset

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Centered form layout with vertical stack of elements (multi-step inline flow)
- Optional blurred artwork background (low opacity, similar to Login/Sign Up)
- Content container max-width 400pt, centered horizontally
- Vertical padding: 24pt from top safe area, 32pt from bottom safe area
- Scrollable content if keyboard appears

**BACKGROUND:**
- Same styling as Login/Sign Up: Solid or blurred artwork background

**BACK TO LOGIN LINK (TOP-LEFT):**
- Text: "← Back to Login" (Body Medium, Secondary Blue #007AFF)
- Position: Top-left, 16pt from left margin, 16pt from top safe area
- Tap target: 44x44pt
- Icon: Chevron left (16pt, Secondary Blue, leading)

**TITLE/HEADER (TOP CENTER):**
- Text: "Reset Password" (Display Medium 28pt, Primary color, centered)
- Position: 24pt below top safe area (or below Back to Login if space constrained)
- Subtitle (optional): "Enter your email to receive a reset code" (Body Medium, Text Secondary, centered, 12pt below title)

**PASSWORD RECOVERY FLOW (MULTI-STEP INLINE):**

**Step 1: Email Input**
- Email input field:
  - Height: 48pt, Border radius: 12pt, Background: Background Secondary
  - Placeholder: "Email" (Body Medium, Text Tertiary)
  - Leading icon: Mail icon (20pt, Text Secondary)
  - Full-width
- Send Reset Code button:
  - Text: "Send Reset Code" (Body Large Semibold, white)
  - Height: 48pt, Border radius: 12pt, Background: Primary (#1C1C1E)
  - Full-width, Margin: 16pt vertical from Email field
  - States: Loading (spinner), Disabled (if email invalid or empty)

**Step 2: Verification Code Input (appears after Send Reset Code)**
- Verification code input:
  - 6-digit code input (6 separate boxes or single input with formatting)
  - Height: 56pt per box, Border radius: 12pt
  - Background: Background Secondary, Border: 1px solid rgba(0,0,0,0.12)
  - Font: Display Medium 28pt (large, easy to read)
  - Spacing: 8pt gaps between boxes, centered horizontally
- Countdown timer:
  - Text: "Resend in 1:30" (Body Small, Text Secondary, centered, 12pt below code input)
  - After expiry: "Resend Code" (Body Small, Secondary Blue #007AFF, tappable)
- Auto-focus on code input when visible
- Auto-verify code when 6 digits entered (API call)

**Step 3: New Password Creation (appears after code verified)**
- New Password input field:
  - Height: 48pt, Border radius: 12pt, Background: Background Secondary
  - Placeholder: "New Password"
  - Leading icon: Lock icon (20pt, Text Secondary)
  - Trailing icon: Eye icon (20pt, tappable, toggles password visibility)
  - Full-width
- Complexity requirements (below password field):
  - Text: "Min 8 characters, 1 uppercase, 1 number" (Caption, Text Tertiary)
  - Real-time validation indicators:
    - Green checkmark (12pt) + requirement text (Success Green #34C759) if met
    - Gray circle (12pt) + requirement text (Text Tertiary) if not met
  - Margin: 8pt below password field

**Step 4: Confirm New Password**
- Confirm New Password input field:
  - Same styling as New Password field
  - Placeholder: "Confirm New Password"
  - Leading icon: Lock icon
  - Trailing icon: Eye icon (toggle visibility)
  - Full-width, Margin: 16pt vertical from New Password field
- Match indicator (inline, below field):
  - "Passwords match" (Caption, Success Green #34C759, green checkmark) if match
  - "Passwords don't match" (Caption, Error Red #FF3B30, red X) if mismatch
  - Margin: 8pt below field

**RESET PASSWORD BUTTON:**
- Text: "Reset Password" (Body Large Semibold, white)
- Height: 48pt, Border radius: 12pt, Background: Primary (#1C1C1E)
- Full-width, Margin: 24pt vertical from Confirm Password field
- Enabled only when: Code verified, Passwords match, Complexity met
- States: Loading (spinner), Disabled (gray background if requirements not met)

**SUCCESS MESSAGE (APPEARS AFTER RESET):**
- Text: "Password reset successfully. Please log in." (Body Large, Success Green #34C759, centered)
- Icon: Green checkmark circle (32pt, Success Green, centered above text)
- Position: Replaces form content after successful reset
- Auto-navigate to Login (PAGE 02) after 2 seconds (or immediate tap to navigate)

### KEY FEATURES
- Multi-step password recovery flow (Email → Verification Code → New Password → Confirm → Reset)
- Countdown timer for verification code (e.g., "Resend in 1:30") with Resend option after expiry
- Real-time password complexity validation (visual indicators: green checkmarks for met requirements)
- Password match indicator (green if match, red if mismatch)
- Auto-verify code when 6 digits entered (no manual submit button)
- Success message with auto-navigation to Login (PAGE 02) after 2s
- "Back to Login" link always accessible at top-left
- Error handling: Inline error messages (e.g., "Invalid verification code", "Email not found")
- Loading states: Send Reset Code button (spinner), Reset Password button (spinner)
- Auto-focus and auto-scroll to active input as user progresses through steps
- Keyboard dismissal: Tap outside or swipe down
- Dark mode support with appropriate backgrounds and text colors

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Send Reset Code | Tap "Send Reset Code" button | API call to send code to email, show Step 2 (code input) with countdown timer |
| Verify Code | Input 6-digit code (auto on 6th digit) | Auto-verify code (API call), on success show Step 3 (new password creation) |
| Resend Code | Tap "Resend Code" (after timer expiry) | Re-send verification code, restart countdown timer |
| Validate Password | Type in New Password field | Real-time validation, update complexity requirement indicators (green checkmarks) |
| Check Password Match | Type in Confirm Password field | Real-time match check, show "Passwords match" (green) or "Passwords don't match" (red) |
| Toggle Password Visibility | Tap eye icon on password fields | Toggle secure text entry (show/hide password) |
| Reset Password | Tap "Reset Password" button | API call to reset password, on success show success message and navigate to Login (PAGE 02) |
| Back to Login | Tap "Back to Login" link (top-left) | Navigate back to Login screen (PAGE 02) |

### BRANDING ELEMENTS
- Minimal and elegant layout (clean multi-step flow, no overwhelming forms)
- Understated luxury aesthetic with optional blurred artwork background
- Calm and composed tone (friendly error messages, encouraging validation feedback)
- Consistent Primary button styling (#1C1C1E) for Reset Password action
- Secondary Blue (#007AFF) for links (Back to Login, Resend Code)
- Success Green (#34C759) for positive validation feedback (passwords match, requirements met, success message)
- Error Red (#FF3B30) for negative validation (passwords don't match, invalid code)
- Smooth transitions between steps (fade-in animations 300ms)
- Real-time validation provides immediate feedback (no waiting until submission)
- Auto-navigation after success (2s delay) for seamless flow back to Login
- Dark mode with true black background for OLED efficiency
- Typography hierarchy: Display Medium for title, Body Large for buttons, Caption for helper text

---

Due to the length of this response, I'll continue with the remaining 18 pages in the next message. This file is getting quite large. Let me know if you'd like me to continue or if you'd prefer a different approach!
