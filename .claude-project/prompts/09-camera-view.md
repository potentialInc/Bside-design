# Camera View (09-camera-view)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "09-camera-view" page:

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
