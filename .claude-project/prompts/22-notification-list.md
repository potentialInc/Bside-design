# Notification List (22-notification-list)

## Full Prompt for Aura.build

Copy the text below and paste into Aura.build when creating the "22-notification-list" page:

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

**TOP HEADER BAR (GLOBAL - Pages 06-10, 15-22):**
- Fixed top position
- Height: 44pt + safe area inset
- Background: Transparent or Surface color with blur
- Left: Search icon (24pt, tappable 44x44pt) → Navigate to Search (PAGE 15)
- Center: bside logo (proportional, centered)
- Right: Notification bell (24pt, tappable 44x44pt, red dot badge if unread) → Navigate to Notifications (PAGE 22)
- Badge: Red dot (8pt diameter, #FF3B30, top-right of bell)

**BOTTOM NAVIGATION BAR (GLOBAL - Pages 06-10, 15-22):**
- Fixed bottom position with floating style
- Height: 56pt + safe area inset
- Background: #FFFFFF (light) / #1C1C1E (dark)
- Border radius: 24pt (floating pill effect)
- Horizontal margins: 16pt, Bottom margin: 8pt above safe area
- Shadow: Elevation-2 (0 4px 12px rgba(0,0,0,0.12))
- 3 items evenly spaced: Home | Camera | My Page
- Each item: Icon (24pt) + Label (Caption 11pt)
- Active state: Icon + Label in Primary color (#1C1C1E or #007AFF), bold
- Inactive state: Icon + Label in Text Tertiary
- Tap target: Full item area (minimum 56pt height)

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
