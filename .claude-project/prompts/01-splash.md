# Splash Screen (01-splash)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "01-splash" page:

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
