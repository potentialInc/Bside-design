# Password Recovery (04-password-recovery)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "04-password-recovery" page:

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
- Primary: #1C1C1E (Dark Charcoal) - For primary buttons, key UI elements, brand presence
- Accent Blue: #007AFF (iOS Blue) - For links, selected states, informational elements
- Success Green: #34C759 (iOS Green) - Success states
- Error Red: #FF3B30 (iOS Red) - Error states
- Warning Orange: #FF9500 (iOS Orange) - Warning states
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
- Screen Margins: 16pt

**Styling:**
- Card Radius: 16pt
- Button Radius: 12pt
- Input Radius: 12pt
- Shadow Elevation-1: 0 2px 8px rgba(0,0,0,0.08)
- Shadow Elevation-2: 0 4px 12px rgba(0,0,0,0.12)
- Shadow Elevation-3: 0 8px 24px rgba(0,0,0,0.16)
- Transition: 300-400ms ease-in-out
- Icons: SF Symbols (iOS) / Material Icons (Android)

---

category: auth

### SCREEN OVERVIEW
The Password Recovery Screen provides a streamlined flow for users who have forgotten their password. The screen guides users through a multi-step process: entering email, receiving and inputting a verification code with countdown timer, creating a new password with complexity requirements, and confirming the new password. Upon successful reset, users navigate back to Login with a success message. A "Back to Login" link is always accessible at top-left.

Purpose:
- Enable users to reset forgotten passwords via email verification
- Guide users through secure email verification with countdown timer
- Enforce password complexity requirements for security
- Provide success confirmation and seamless navigation to Login

### LAYOUT INSTRUCTIONS

**OVERALL LAYOUT:**
- Centered form layout, max-width 400pt
- Optional blurred artwork background (low opacity 0.15, blur 40pt)
- Vertical padding: 24pt from top safe area, 32pt from bottom
- Scrollable content (auto-scroll to active input when keyboard appears)

**BACK TO LOGIN LINK (TOP-LEFT):**
- Text: "← Back to Login" (Body Medium, #007AFF)
- Position: Top-left, 16pt margins, 16pt from safe area
- Tap target: 44x44pt
- Chevron left icon (16pt, #007AFF)

**TITLE (TOP CENTER):**
- Text: "Reset Password" (Display Medium 28pt, #1C1C1E primary)
- Position: 24pt below safe area, centered
- Subtitle: "Enter your email to receive a reset code" (Body Medium, Text Secondary, 12pt below title)

**STEP 1: EMAIL INPUT**
- Email field: 48pt height, 12pt radius, Background Secondary (#F9F9F9)
- Placeholder: "Email" (Body Medium, Text Tertiary)
- Mail icon (20pt, Text Secondary, leading)
- Full-width with 32pt horizontal margins

**SEND RESET CODE BUTTON:**
- Text: "Send Reset Code" (Body Large Semibold, white)
- 48pt height, 12pt radius, #1C1C1E background
- Full-width, 16pt margin from Email field
- Loading state: Spinner replaces text
- Disabled state: Gray background if email invalid

**STEP 2: VERIFICATION CODE INPUT** (appears after Send Reset Code)
- 6-digit code input (6 separate boxes, 56pt height each, 12pt radius)
- Background: Background Secondary, Border: 1px solid rgba(0,0,0,0.12)
- Font: Display Medium 28pt (large, easy to read)
- 8pt gaps between boxes, centered horizontally
- Countdown timer below: "Resend in 1:30" (Body Small, Text Secondary, centered, 12pt below)
- After expiry: "Resend Code" (Body Small, #007AFF, tappable)
- Auto-verify when 6 digits entered

**STEP 3: NEW PASSWORD** (appears after code verified)
- Password field: 48pt height, 12pt radius, Background Secondary
- Placeholder: "New Password"
- Lock icon (20pt, leading), Eye icon (20pt, trailing, toggles visibility)
- Complexity requirements below (8pt margin):
  - "Min 8 characters, 1 uppercase, 1 number" (Caption, Text Tertiary)
  - Real-time indicators: Green checkmark (12pt) if met, Gray circle if not
  - Text turns green when requirement met

**STEP 4: CONFIRM PASSWORD**
- Same styling as New Password field
- Placeholder: "Confirm New Password"
- Match indicator (8pt below):
  - "Passwords match" (Caption, Success Green #34C759, green checkmark) if match
  - "Passwords don't match" (Caption, Error Red #FF3B30, red X) if mismatch

**RESET PASSWORD BUTTON:**
- Text: "Reset Password" (Body Large Semibold, white)
- 48pt height, 12pt radius, #1C1C1E background
- Full-width, 24pt margin from Confirm Password
- Enabled only when: Code verified, Passwords match, Complexity met
- Loading state: Spinner, Disabled state: Gray background

**SUCCESS MESSAGE** (appears after reset):
- Green checkmark circle (32pt, Success Green, centered)
- Text: "Password reset successfully. Please log in." (Body Large, Success Green, centered)
- Auto-navigate to Login after 2 seconds

### KEY FEATURES
- Multi-step password recovery flow (Email → Code → New Password → Confirm → Reset)
- Countdown timer for verification code with Resend option
- Real-time password complexity validation (green checkmarks for met requirements)
- Password match indicator (green/red feedback)
- Auto-verify code when 6 digits entered
- Success message with auto-navigation to Login (2s delay)
- "Back to Login" always accessible
- Inline error messages (e.g., "Invalid code", "Email not found")
- Loading states on buttons (spinner)
- Auto-focus and auto-scroll to active input
- Keyboard dismissal: Tap outside or swipe down
- Dark mode support

### MAIN ACTIONS
| Action | Trigger | Behavior |
|--------|---------|----------|
| Send Reset Code | Tap "Send Reset Code" | API call to send code, show Step 2 with countdown |
| Verify Code | Input 6 digits (auto) | Auto-verify, on success show Step 3 |
| Resend Code | Tap "Resend Code" (after timer) | Re-send code, restart countdown |
| Validate Password | Type in New Password | Real-time validation, update indicators |
| Check Match | Type in Confirm Password | Show match/mismatch feedback |
| Toggle Visibility | Tap eye icon | Show/hide password |
| Reset Password | Tap "Reset Password" | API call, on success show message, navigate to Login |
| Back to Login | Tap "Back to Login" | Navigate to Login screen |

### BRANDING ELEMENTS
- Minimal and elegant layout (clean multi-step flow)
- Understated luxury with optional blurred artwork background
- Calm and composed tone (friendly errors, encouraging validation)
- Primary button (#1C1C1E) for Reset Password action
- Secondary Blue (#007AFF) for links (Back to Login, Resend Code)
- Success Green (#34C759) for positive validation (match, requirements met, success)
- Error Red (#FF3B30) for negative validation (mismatch, invalid code)
- Smooth transitions between steps (300ms fade-ins)
- Real-time validation provides immediate feedback
- Auto-navigation after success for seamless flow
- Dark mode with true black (#000000) for OLED efficiency
- Typography hierarchy: Display Medium for title, Body Large for buttons, Caption for helpers

---
