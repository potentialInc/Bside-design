# Search Main (13-search-main)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "13-search-main" page:

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
