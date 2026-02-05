# Sign Up (03-signup)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "03-signup" page:

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
