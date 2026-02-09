# bside.art PRD (Updated: 2026-02-06)

## Document Change Log

**Version:** 3.1
**Last Updated:** February 6, 2026

**Changes from v3.0:**
- Updated Navigation Menu to 3-item bottom floating nav (Home, Camera, My Page) with Search moved to top header
- Added complete authentication flow: Splash Screen, Login (Social + Email/Password), Sign Up (with email verification), Password Recovery, Profile Setup (first-time post-signup)
- Added Edit Profile button to My Page profile section (self-view only)
- Added check-in display style clarification (top overlay/drawer)

**Changes from v2.0 (v3.0):**
- Enhanced Artwork Camera module with detailed camera UI layout, multi-suggestion check-in flow, and post-capture recognition pipeline
- Enhanced Art Feed module with Global UI top nav specifications, collection card element breakdown, artwork feed scroll view, and artwork detail dynamic background
- Enhanced Social Media module with My Page 2-tab structure (Collections / Captures), self vs. other user view logic, and filter/sort options
- Enhanced Search module with auto-complete flow, category tab filters, and navigation paths from results
- Added Figma design references throughout all modules
- Updated AI/ML API endpoint to production URL (`https://dev.noah.bside.art`)
- Resolved all Open Questions with confirmed client answers
- Added SLA specifications for AI recognition response time (target <2s, MVP ~3s, backend timeout 10s)
- Clarified data retention and privacy compliance (Korean PIPA)

**Changes from v1.0 (v2.0, January 30, 2026):**
- Added detailed AI/ML API specifications (Artwork Recognition Engine)
- Added comprehensive database schema documentation
- Added AWS infrastructure configuration details
- Added image transformation service specifications
- Clarified technical integration points between frontend, backend, and AI services

---

# Part 1: Project Overview

## Service Name
**bside**

## Deadline
March 31, 2026 (Tuesday)
*App Store review and registration not included in deadline*

## Service Purpose
Artwork-centric search and online community formation starting with artwork photography

## Primary Target
- MZ generation art enthusiasts who want to share artistic tastes
- Art collectors
- Artists and galleries

---

# Terminology

| Term | Definition |
|------|------------|
| **Artwork Camera** | Camera feature that scans artworks at offline exhibitions, recognizes and provides artwork information |
| **Capture** | The action of directly photographing using the in-app camera function |
| **Art Feed (Home)** | View Capture Collection, Personal Collection, Platform Collection, and recommended feeds from other users |
| **Capture Collection** | Photos you took (only you can see) |
| **Personal Collection** | Photos you chose to share with followers |
| **Platform Collection** | Special collections made by the platform based on captured data (e.g., Top 10 most captured artists this week) |
| **Artwork Details** | Page where specific artwork information, artist information, related exhibitions, and other detailed content can be confirmed |
| **Art Fair** | Large-scale art event where multiple galleries participate |
| **Exhibition** | Small-scale art event held at a solo/group exhibition or gallery space |
| **Collector** | User who has purchased artworks and displays them at home |
| **MZ Art Lover** | Art enthusiast who enjoys art exhibitions or offline events without having purchased artworks |
| **Gallery** | Art gallery with exhibition space |
| **Upload** | The action of loading photos saved in device (local storage) into the app |
| **Transmit** | Process of requesting analysis from 'Artwork Camera' model (automatically executed during capture or upload) |
| **Collect** | Save analyzed or manually entered Artworks to 'My Page > Capture List' |
| **Recognition** | Process where the model analyzes captured artwork |
| **Matching** | Function that returns JSON containing information and 200 response when analysis is complete |

---

# Description

bside.art is a mobile application that allows users to capture and upload artworks from offline exhibition venues, collect and manage artwork-related information through AI-based camera recognition, discover new artists through art-centric feeds, and connect with artworks and artists through comments.

---

# Goals

1. Enable users to easily access artwork information through camera-based artwork recognition at offline exhibitions
2. Build comprehensive artwork database centered on new and past works
3. Create meaningful connections between art enthusiasts (Capturers) and artists through digital participation
4. Provide personalized art discovery through AI-based search and feed curation

---

# User Types

## General (Collector)
Capture artworks, create capture-based collections, write reviews

**Example of field distinction in DB users table:**
- `users.type = 0`: General

<!-- ## Artist
Check capture data of their own works, check artwork/artist-centered comment communication

## Admin
Manage platform content, user accounts, artwork database, system settings

--- -->

# User Status

## Active
User has access to all features

## Suspended (Dormant)
- Admin can temporarily suspend according to operational purposes
- Cannot log in and use main features
- Need guidance message on login failure (e.g., "This is a suspended user.")
- For accounts suspended by admin, automatic logout occurs when app token refreshes

## Withdrawn
- When member withdraws
- Status changes upon withdrawal and becomes unusable
- Withdrawn users are deleted after a certain period
- Need guidance message on login failure (e.g., "This is a withdrawn user.")

---

# User Relationships

**User → User:** Follow relationship (N:N)
- N:N relationship because users can follow each other

---

# Project Types

## iOS App
- React Native
- Expo: ^54.0.27
- React Native: 0.81.5
- React: 19.1.0
- Expo Router: ~6.0.17
- Expo Dev Client: ~6.0.20

## Android App
- React Native
- minSdk: 29
- compileSdkVersion: 36
- targetSdkVersion: 36

## Backend
- Django (Python)
- ECS
- PostgreSQL DB

## AI/Inference
- Python 3.13
- AWS
- torch
- tensorflow
- FastAPI
- Artwork recognition model (torch, tensorflow)

---

# MVP Scope (March 31 Deadline)

## Included Features

### Core Features:
- Artwork Camera (Capture + Upload)
- Basic Art Feed (Capture Collection)
- My Page (Collections, Captures tabs)
- User Authentication (Apple/Google Social Login)
- Basic Search (artist/artwork/user)

### Social Features (Limited):
- Follow/Unfollow
- Follow Notification
- Personal Collection Share/Display

### Admin (Simplified):
- Utilize Django Admin Dashboard
- User Management (type/status changes)
- Basic CRUD
- Push Sending System

---

# System Modules (Step-by-Step Flow)

## Module 1 - Artwork Camera (Artwork Recognition Engine)

Entry point where artworks are photographed anywhere such as art fairs, gallery exhibitions, and collectors' personal spaces. Check-in function is implemented according to the photographing user's location information. Captured artworks are automatically matched with artwork information through AI image recognition, and added to the user's Capture Collection and My Page.

> **Figma Reference:** [Artwork Camera](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-1155)

### Main Features:
1. Artwork Photography "Capture"
2. Upload artwork photos from photo album "Capture-Upload"
3. Location-based check-in (exhibition hall, gallery, home collection, etc.)

### Camera UI Layout:
- **Main area:** Camera preview takes full-screen focus (live camera feed is primary visual element)
- **Top zone:** Location info, exhibition/art fair/gallery check-in suggestions, center-align warning
- **Bottom center:** Large capture (shutter) button
- **Bottom left:** Device photo album thumbnail (tap to open album for upload)
- **Top left:** Close (X) button to exit camera

### Technical Flow:

#### 1. User opens Artwork Camera in app

#### 2. Location-based check-in guidance
- **Check-in criteria:** 500m radius
- **Check-in policy:** Once per session (resets on app restart)
- **Display style:** Check-in suggestions appear as a top overlay/drawer in the camera view
- **Process:**
  - Automatically match and suggest currently ongoing exhibition/gallery information based on location (LBS) and time information
  - Maintain check-in status within camera menu (maintained if same session after termination and re-entry)
  - Reset check-in status on app termination or restart (re-display check-in popup even for same exhibition on re-entry)
  - If multiple ongoing exhibition/gallery shows within 500m radius, display all as selectable suggestions; user taps "Yes" on the one they are attending
  - Each suggestion includes a close (X) icon to dismiss without checking in
  - **If no events detected:** Default check-in uses city/area name as location context (e.g., "London, UK")

**Check-in Display (after confirmation):**
- Displays in the camera top zone in a style similar to Art Feed collection headers
- Shows: Event name (exhibition/art fair title) + Location
- **If exhibition at a gallery:** Display gallery tag alongside exhibition title
- **If gallery only:** Display gallery name + location
- **Otherwise:** Display only city/area location information as default value

#### 3. Artwork Photography "Capture"

**a. Capture Process:**
- Center-align warning is shown **only when** the artwork is not centered in the camera frame: "Place the artwork in the center of the camera to Capture" (displayed at top of camera view)
- Warning hides automatically once the artwork is properly centered
- System transmits image to AI recognition model → Dunamis performs
- User can retake capture if doesn't like the capture, in that case system will choose the latest one to process and recognition.

**b. Post-Capture Recognition Flow:**
1. System displays recognition effect animation while processing
2. AI object recognition detects artwork and performs automatic perspective correction
3. On success → Recognition result overlay displays matched artwork info

**c. Recognition Success:**
1. Object recognition and automatic correction
2. Save to Capture Collection (auto-categorized, see Collection Categorization below)
3. Save to My Page - Capture List
4. Save to personal photo album (mobile device)

**d. Recognition Failure:**
1. System displays "We are processing this artwork for you" on captured photo image
2. On information mismatch:
   - Image is processed and entered
   - Text information (artwork name, artist name) displayed in "We are processing..." status
   - When user clicks on that image item, a 'manual input guidance system' window appears
3. User can manually edit/enter artwork information (title, artist name, year, medium) if the match is incorrect or missing

**e. Collection Categorization (automatic based on check-in context):**
- **If user's location/timestamp matches an art fair:** Captured artwork is added to a **"Capture Collection - Art Fair"** module, grouping artworks by the specific art fair
- **If user's location/timestamp matches a gallery exhibition:** Captured artwork is added to a **"Capture Collection - Gallery"** module, grouping artworks by the gallery/exhibition
- **If no event match (default):** Captured artwork is added to a general capture collection tagged with location and date only

**f. API Integration (Provided by Dunamis):**
- **API Endpoint:** `https://dev.noah.bside.art/api/v1/artworks/vision-search`
- **API Documentation:** `https://dev.noah.bside.art/docs`
- Image transmission specifications (resolution, format)
- **SLA:** Target <2 seconds; MVP acceptable ~3 seconds; backend request timeout set to 10 seconds
- Response returns single best match only (multi-result handling not required)

#### 4. Artwork Photo Upload "Upload"

**a. Process:**
- Display guidance text to upload photos taken with artwork centered when entering album
- User uploads captured image
- Requires photo album access permission from user

**b. Recognition Success:**
1. Object recognition and automatic correction
2. Save to Capture Collection (auto-categorized by check-in context)
3. Save to My Page - Capture List

**c. Recognition Failure:**
- On information mismatch:
  - Image is processed and entered
  - Text information displayed in "We are processing..." status
  - When user clicks, 'manual input guidance system' window appears
  - User can manually edit artwork information

#### 5. Photo Processing Process

**Implementation:**
- Dynamic image transformation allows uploading to AWS S3 and image serving via AWS CloudFront
- Optional use; photo processing supports smooth operation in Art Feed Carousel, My Page, etc.
- Can also be used as image to deliver to AI model

---

## Module 2 - Art Feed

Main feed that provides collections of followed users and platform curation content in chronological order.

> **Figma Reference:** [Art Feed](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-721)

### Global UI (Top Navigation Bar):
- **Top Left:** Search icon → navigates to Search screen (Registered Users / Artworks / Artists)
- **Center:** Brand logo (bside)
- **Top Right:** Notification bell icon → navigates to Events/Notifications
### Global UI (Bottom floating Navigation Bar):
- **Bottom Left:** Home
- **Center:** Camera
- **Bottom Right:** My Page [user profile]
[Bottom flaoting nav will show in Artfeed, Mypage [user and followe], artwork feed, artwork details]
### Main Features:

#### 1. Capture Collection Display
- View collection, share, edit features
- **On entry:** Check artwork list displaying images and detailed information of artworks
- **On artwork image click:** Check additional information such as artwork and artist, related exhibitions

**Collection Card Elements (each collection in the feed):**
- User Avatar / Username / Posting Date (tap avatar → navigates to user's My Page)
- More button (Share / Edit options)
- Header Title:
  - **If Art Fair:** Art Fair's official name + location data by city
  - **If Exhibition at Gallery:** Exhibition title + gallery tag + location
  - **If Gallery only:** Gallery name + gallery tag + location
  - **Otherwise:** Location + date information only as default
- User Tags: Other users who have also captured any one of the artworks in the same collection (tap → navigates to tagged user's page)
- ArtworkCarousel: Horizontally scrollable artwork images within the collection
- ArtworkItemDetails: Artwork title, artist name, capture count per item
- Item Page Indicator: Dots/numbers showing position in carousel (e.g., "1 / 4")
- If the exhibition is being held through a gallery, gallery information is displayed with gallery tag

#### 2. Personal Collection Feed
- Published from My Page, visible to followers
- Feed of collections of users being followed
- **No User Tags** displayed on Personal Collections (unlike Capture Collections)

#### 3. User Recommendations
- Feature to recommend following other users (similar to Instagram's suggested followers)
- Displayed in-between collection cards in the feed

#### 4. Platform Collection
- Content feed utilizing platform data, generated from DB
- **The most captured Artists** this week
- **The most captured Artworks** this week
- Example: "This Week's Most Captured" showcase

> **Figma Reference:** [Platform Collection](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-858)

#### 5. Tutorial (If no captured artworks)
Tutorial educating about artwork photography-based search and personal collection creation features

#### 6. Artwork Feed View (on collection tap)

When user taps on a collection, navigate to a scrollable artwork feed showing all artworks in that collection.

> **Figma Reference:** [Artwork Feed](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-1043)

**Each artwork item in the feed displays:**
- Artwork image (displayed at its own aspect ratio/size)
- Title
- Artist name
- Event name (exhibition / art fair / gallery)
- Camera icon with capture count (how many times this artwork has been captured on the platform by all users)

#### 7. Artwork Detail Screen (on artwork thumbnail tap)

When user taps on a specific artwork thumbnail/image, navigate to the full artwork detail screen.

> **Figma Reference:** [Artwork Details](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-1082)

**Artwork Detail layout:**
- **Artwork Full-Page View:** Large artwork image at top
- **Dynamic Background:** The area behind artwork details uses a faded/lighter version of the artwork's dominant color as background (similar to Facebook/Instagram story backgrounds that match the image's dominant color), ensuring text readability
- **Artwork Details:** Title, artist, year, medium/material, capture count
- **About Artist:** Artist name, birth year, based-in location, biography text
- **Related Artworks:** Grid of other artworks by the same artist
- **Related Artists:** List of other artists (e.g., artists who exhibited at the same gallery or event)
- **Related Exhibitions:** Upcoming or past exhibitions related to this artwork/artist/gallery

---

## Module 3 - Social Media

Main Features: Explore and organize artworks you've captured in My Page, check other users' activities and follow.

> **Figma Reference:** [Social Media / My Page](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-8)

### 1. My Page

**a. Profile Section:**
- Settings icon (gear, top right)
- Profile image (circular)
- Username (with verified badge if applicable)
- Bio description
- **Self view:** Edit Profile button (navigates to profile edit screen for username, photo, bio) — No Follow button
- **Other user view:** Follow button + Message button
- Statistics dashboard: Captures count | Followers count | Following count

**b. Content Tabs (2 tabs):**

**Tab 1 - Collections:**
- Timeline view showing all user's collections as cards with cover images, dates, and titles
- Each collection can be tapped to view artwork thumbnails within it
- Filter icon and search icon available for filtering and searching collections
- **Filter options:**
  - Filter by: Event or Date
  - Sort by: Timeline, Most Captures, Artists, Areas (Gallery)

> **Figma Reference (Captures - self view):** [Captures Tab](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-501)

**Tab 2 - Captures:**
- Artwork list showing all captured artworks
- Grouped by year with featured large image at top and grid of smaller captures below
- Each item shows thumbnail + metadata (artist, title, date) with interaction icons
- Search and filter icons available
- **This tab is visible only to the user themselves (self-view only)**

**View Differences (Self vs. Other User):**

| Element | Self View | Other User View |
|---------|-----------|-----------------|
| Edit Profile button | Shown | Not shown |
| Follow/Message buttons | Not shown | Shown |
| Collections tab | Visible | Visible |
| Captures tab | Visible (private) | **Not visible** |
| Settings icon | Shown | Not shown |

> **Figma Reference (Other user view):** [Other User's Page](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-220)

**c. Settings:**
- Account settings (enter after password confirmation):
  - Account visibility (private/public)
  - Allow profile to appear in search engine results
  - Password reset
  - Delete account
- Notification settings:
  - New followers
  - Accepted follow requests
- Privacy Policy / Terms of Service
- Help & Support
- Logout

---

## Module 4 - Search (Header nav)

> **Figma Reference:** [Search](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2904-6)

### Main Features:

#### 1. Search Landing
- Upon entering the search screen, **recent search history** is displayed as a list
- Each history item shows the previously searched keyword with a clear/remove option

#### 2. Auto-Complete
- As the user types a keyword, the system provides **auto-complete suggestions** based on similar keywords retrieved from the database
- Suggestions update in real-time as the user types

#### 3. Search Results
- After the user completes a keyword search, results are displayed organized by category
- **Category tab filters** at the top allow filtering by: Artists, Artworks, Profiles (Users)
- Results display:
  - **Artist results:** Artist name with chevron → artist detail page
  - **Artwork results:** Artwork thumbnail + title + artist name + capture count
  - **User/Profile results:** User avatar + username

#### 4. Navigation from Search Results
- **Selecting an artwork** → navigates to the Artwork Detail screen
- **Selecting a user profile** → navigates to that user's My Page (other user view, Collections tab only)
- **Selecting an artist** → navigates to the Artist Detail screen with profile and related information
- **Selecting a collection** → navigates to the Artwork Feed view for that collection

> **Figma References:**
> - User profile from search → [Other User's Page](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-220)
> - Artist from search → [Artist Detail](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2966-2108)
> - Collection from search → [Artwork Feed](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-1082)

---

# Part 2: User Application PRD

## User Types: User, Artist

## 1. Common (Authentication Flow)

### Splash Screen
- App logo + brief loading animation
- Auto-check for existing session token → if valid, skip to Home (Art Feed)
- If no valid session → navigate to Login Screen

### Login Screen

**Layout (top to bottom):**
1. **Social login buttons (primary, positioned at top):**
   - "Continue with Apple" (Apple Sign-In)
   - "Continue with Google" (Google Sign-In)
2. **Divider:** "or"
3. **Email + Password input fields**
4. **"Log In" button**
5. **"Forgot password?" link** → navigates to Password Recovery Screen
6. **"Don't have an account? Sign Up" link** → navigates to Sign Up Screen

**Behavior:**
- On success → navigate to Home (Art Feed)
- On failure → inline error message (e.g., "Invalid email or password")
- Suspended account → "This is a suspended account." message
- Withdrawn account → "This account has been withdrawn." message

### Sign Up Screen

**Layout (top to bottom):**
1. **Social sign-up buttons (primary, positioned at top):**
   - "Continue with Apple" (Apple Sign-In)
   - "Continue with Google" (Google Sign-In)
2. **Divider:** "or"
3. **Email field** → tap "Send Code" to receive verification code
4. **Verification code input** (with countdown timer for code expiry)
5. **After verification:** Password field (with complexity indicator) + Confirm Password field
6. **"Create Account" button**
7. **"Already have an account? Log In" link** → navigates to Login Screen

**Behavior:**
- On success → navigate to Home (Art Feed), then show Profile Setup prompt
- Social sign-up → after social auth completes, also navigate to Home then show Profile Setup

### Password Recovery Screen

**Layout (top to bottom):**
1. **Email input field** + **"Send Reset Code" button**
2. **Verification code input** (with countdown timer)
3. **New Password field** + **Confirm Password field**
4. **"Reset Password" button**

**Behavior:**
- On success → navigate to Login Screen with success message ("Password reset successfully. Please log in.")

### Profile Setup (First-Time, Post-Signup)

**Trigger:** Prompted after first login (both social and email sign-up)

**Layout:**
1. **Username input** (with real-time duplicate check; auto-generated default username provided)
2. **Profile photo** (optional; default avatar provided)
3. **Bio text** (optional)
4. **"Complete" button** / **"Skip for now" button**

**Behavior:**
- "Complete" → saves profile and enters Home
- "Skip for now" → enters Home with default username and avatar; user can edit later from My Page

---

## Navigation Menu

**Bottom Floating Navigation Bar (3 items):**
1. Home (Art Feed)
2. Camera (Artwork Camera)
3. My Page

**Top Header (persistent across all main screens):**
- **Left:** Search icon → navigates to Search screen
- **Center:** Brand logo (bside)
- **Right:** Notification bell icon → navigates to Notifications

**Bottom Nav Visibility:** Art Feed, My Page (self and other user), Artwork Feed, Artwork Details

---

## 2. User (General/Collector)

### 2.1 Navigation Menu

**Bottom Floating Nav (3 items):**
1. Home (Art Feed)
2. Camera (Artwork Camera)
3. My Page

**Top Header (persistent):**
- Search icon (left) | Brand logo (center) | Notification bell (right)

### 2.2 Page Structure and Feature Specifications

#### 1. Art Feed (Home)

**1-1. Main Page**

**Global UI (Top Navigation):**
- **Top Left:** Search icon → navigates to Search tab
- **Center:** bside brand logo
- **Top Right:** Notification bell → navigates to Notifications

**Feed Content:**

1. Display posting (artwork list) content based on followed users + own captured exhibitions + app-provided content

2. For artwork lists (Collection), editable on home screen:
   - For collections not related to specific exhibition/art fair, collection title can be changed
   - Can edit order of artwork list included in collection
   - Can delete artworks included in collection

3. For collections without exhibition information, display only location and date information with default name

4. Collections include:
   - User Avatar / Username / Posting Date (tap avatar → link to My Page)
   - More button (Share / Edit)
   - Header Title (Art Fair name / Exhibition name + Gallery tag / Location + Date)
   - User Tags: Other users who captured artworks in the same collection (tap → navigate to user's page)
   - ArtworkCarousel: Horizontally scrollable artwork images
   - ArtworkItemDetails: Title, artist name, capture count per artwork
   - Item Page Indicator (e.g., "1 / 4")

5. Add comment function between users regarding collection

6. **Followers Recommendation:** Instagram-style user recommendation cards displayed between collection items in the feed

7. **Personal Collection cards:** Published from My Page, visible to followers. No User Tags displayed.

8. **Platform Collection cards:** Generated from DB — most captured artists and artworks. (e.g., "This Week's Most Captured")

**1-1a. Artwork Feed View (on collection tap)**

When user taps on a collection card, navigate to a scrollable artwork feed displaying all artworks in the collection.

Each artwork in the feed shows:
- Artwork image (at its own aspect ratio)
- Title
- Artist name
- Event name (exhibition / art fair / event)
- Camera icon + capture count (total captures on platform)

**1-2. Artwork Detail Screen**

When user taps on a specific artwork image/thumbnail, navigate to full detail screen.

- **Artwork Full-Page View:** Large artwork image
- **Dynamic Background:** Background area uses a faded/lighter version of the artwork's dominant color (similar to Instagram/Facebook story backgrounds where surrounding color matches the image), ensuring text readability over the background
- Display:
  - Artwork representative image
  - Title, artist, year, material
  - Capture data (count)
  - **About Artist:** Artist name, birth year, based-in location, biography text, other artwork images
  - **Related Artworks:** Grid of other artworks by the same artist
  - **Related Artists:** Other artists who exhibited at the same gallery/event (e.g., "Seungun Cha", "Jihyun Im")
  - **Related Exhibitions:** Artist's next exhibition, recommended exhibitions, gallery's next exhibition (no display if no exhibition information available)
- If the exhibition is being held through a gallery, gallery information is displayed with gallery tag

**1-3. Artist Detail Screen**

For artists included in database, navigate to artist detail screen through search and artwork detail page.

> **Figma Reference:** [Artist Detail](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2966-2108)

Include:
- Artist name
- Birth year
- Based in {location}
- Brief introduction / biography
- List of artist-related artworks (grid view)

**1-4. Gallery Detail Screen**

For galleries included in database, navigate to detail screen through search and gallery tag of collection.

> **Figma Reference:** [Artist/Gallery Section](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2966-1765)

Include:
- Gallery name
- Location / Address
- Website
- Exhibition information (current and past)
- Gallery description / mission

---

#### 2. Search Tab

> **Figma Reference:** [Search](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2904-6)

**Main Page**

1. **Search Landing (initial state):**
   - Search input field ("keyword search" placeholder)
   - Recent search history displayed as a list below the input
   - Each history item can be tapped to re-search or cleared individually

2. **Auto-Complete (typing state):**
   - As the user types a keyword, auto-complete suggestions appear based on similar keywords retrieved from the database
   - Suggestions update in real-time with each keystroke
   - Keyboard visible at bottom

3. **Search Results (results state):**
   - **Category filter tabs** at the top: Artists | Artworks | Profiles (Users)
   - Users can filter search results by category using the top tab menu
   - **Artist results:** Artist name, arrow to navigate
   - **Artwork results:** Thumbnail + title + artist name + capture count icon
   - **User/Profile results:** User avatar + username

4. **Navigation from Results:**
   - When selecting artwork → navigate to artwork detail screen
   - When selecting profile → navigate to user's My Page (other user view — Collections tab only, no Captures tab)
   - When selecting artist → navigate to artist detail screen with profile and related information
   - When selecting a collection from results → navigate to artwork feed view for that collection

---

#### 3. Camera Tab (Artwork Camera)

> **Figma Reference:** [Artwork Camera](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-1155)

**Main Page - Camera View**

1. **Camera UI Layout:**
   - **Main area:** Full-screen live camera preview (primary visual focus)
   - **Top zone:** Location info + check-in suggestions + center-align warning
   - **Top left:** Close (X) button
   - **Bottom center:** Large capture (shutter) button
   - **Bottom left:** Device photo album thumbnail (tap to open album for upload)

2. **Check-In Suggestions (top zone):**
   - Automatically displayed when events are detected within 500m radius
   - Shows event name, location (e.g., "Are you at Frieze London 2025?")
   - "Yes" button to confirm check-in
   - Close (X) icon to dismiss without checking in
   - If multiple events nearby, user can select from available options
   - If no events detected, defaults to city/area name as location context
   - After check-in: Displays event name + location in the camera top zone (styled like Art Feed collection headers)

3. **Center-Align Warning:**
   - Guide text: "Place the artwork in the center of the camera to Capture"
   - Displayed **only when** artwork is not centered in frame
   - Automatically hides once artwork is properly centered

4. **Post-Capture Flow:**
   - Recognition effect animation displayed while AI processes the image
   - On success: Recognition result overlay sheet appears on camera screen
   - Overlay shows: Capture date/time, artist name, title, year
   - Artwork is auto-saved to Capture Collection (categorized by check-in context)
   - Artwork is saved to My Page - Capture List
   - Artwork is saved to personal device photo album

5. **Recognition Result Camera Screen Overlay Sheet:**
   - Recognized artwork list with highlight frame
   - Display artwork information:
     - Capture date/time
     - Artist name
     - Title
     - Year

**Recognition Result Page (Failure):**
- Captured image
- "We are processing this artwork for you" message
- Suggest artworks by inferring based on location/exhibition
- Manual search option
- User can manually edit/enter artwork information (title, artist, year)
- Request artwork information collection from platform

**Photo Processing Process:**
- Dynamic image transformation implementation allows uploading to AWS S3 and image serving via AWS CloudFront
- Not mandatory to use
- Photo processing purpose is to support smooth operation in Art Feed Carousel, My Page, etc.
- Can also be used as image to deliver to AI model

---

#### 4. My Page Tab

> **Figma Reference:** [Social Media / My Page](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-8)

**Main Page**

**Profile Section (top):**
- Settings icon (gear, top right — self view only)
- Profile image (circular), with basic auto-generated default photo
- Username (duplicate check required), with verified badge if applicable
- Bio description text
- **Self view:** Edit Profile button (navigates to profile edit screen for username, photo, bio) — No Follow/Message buttons
- **Other user view:** Follow button + Message button
- Captures / Followers / Following number dashboard

**Content Tabs:**

**Tab 1 — Collections** (visible to self and other users):
- Timeline view showing all user's collections as cards
- Each card shows: Cover image, date, title
- Tap on a collection → view artwork thumbnails within
- Filter icon + Search icon at top for filtering/searching collections
- **Filter options:**
  - Filter by: Event or Date
  - Sort by: Timeline, Most Captures, Artists, Areas (Gallery)

**Tab 2 — Captures** (visible to self only, hidden from other users):
- Artwork list showing all captured artworks in list/grid format
- Grouped by year with featured large image at top
- Each item: Thumbnail + metadata (artist, title, date) + interaction icons
- Search and filter icons available
- Keyword search and sorting within list (chronological, artwork name, artist name, capture count, etc.)

> **Figma Reference (Captures self view):** [Captures Tab](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-501)
> **Figma Reference (Other user view):** [Other User's Page](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-220)

**View Differences:**

| Element | Self View | Other User View |
|---------|-----------|-----------------|
| Settings icon | Shown | Hidden |
| Edit Profile button | Shown | Hidden |
| Follow / Message buttons | Hidden | Shown |
| Collections tab | Visible | Visible |
| Captures tab | Visible | **Hidden** |

- User bio page can be shared via link

**Settings Page**

- Account Settings (enter after password confirmation):
  - Account visibility (private/public)
  - Allow profile to appear in search engine results
  - Password reset
  - Delete account
- Notification Settings:
  - New followers
  - Accepted follow requests
- Privacy Policy / Terms of Service
- Help & Support
- Logout

---

#### 5. Notification Tab

**Notification List**

- New follow (accept/reject):
  - Land on profile page of user who requested follow
- Follow request acceptance notification:
  - Land on profile page of user who accepted request
- Platform announcement Notification

---

#### 6. Language

Provide in English by default and include Korean support

---

#### 7. Dark Mode

Support to follow mobile device light/dark mode

---

# Admin Management Page

## User Type: Manager (admin account)

### 1. Common

**Admin Account:**
- Login with account created internally without separate sign up
- Allow only that account access

---

### 2. User Account Management

**App Account:**
- Can change user's type (general, artist, gallery)
- Can change user's status (normal, suspended, withdrawn)
  - For accounts suspended by admin, automatic logout occurs when app token refreshes
- In admin can check user's account (social login, general login) status
- For general login accounts, reset password and send reset password by email

---

### 3. Push Management

**Push Sending:**
- Can send push messages to specific/all users
- Must be able to attach images
- Must be able to send immediately or with scheduled time
- Can search and specify landing users
- Can send emails to specific/all users
- File attachment possible
- Manage push sending history as list (Regular push edit/delete)

---

### 4. Content Management

**Content List:**
- Can manage platform collection
- Managed as list format, exposed if active status is true, not exposed if false
- Can schedule and set publication scheduled date for content
- Content can be edited/deleted

---

# Part 3: Technical Requirements

## Supported Versions

- **iOS:** 15.0 or higher
- **Android:** 10 or higher
  - minSdk: 29
  - compileSdkVersion: 36
  - targetSdkVersion: 36
- **React Native:** 0.81.5 or higher
- **Python:** 3.13.x
- **Django:** 6.0.1 or higher
- **PostgreSQL:** 16 or higher

---

## APP Development Requirements

During development, deliver in sprint units to:
**Repository:** `https://github.com/dunamis-art-tech/bside-app`

**Framework Versions:**
- Expo: ^54.0.27
- React Native: 0.81.5
- React: 19.1.0
- React DOM: 19.1.0
- Expo Router: ~6.0.17
- Expo Dev Client: ~6.0.20

---

## Functional Requirements

### Backend Production Environment

#### AWS ECS-based Build/Deployment Automation
- Operate with 2 basic t3.medium instances based on EC2
- Must support autoscaling
- In AWS VPC, outbound must be fixed to specific IP:
  - NAT Gateway + Elastic IP (EIP)
- Implement script to deploy to production environment when merging to main branch using GitHub Action
- Must be non-disruptive during deployment using Blue/Green method

#### AWS RDS PostgreSQL
- Instance type: db.t4g.medium
- Configure write/read as cluster

#### Image Upload and Serving
- Via AWS S3, CloudFront
- **Reference:** `https://github.com/aws-solutions/dynamic-image-transformation-for-amazon-cloudfront/`

#### Service Domain Connection
- Via AWS Route 53

---

### Image Upload/Serving

**Reference Code:**
`https://github.com/aws-solutions/dynamic-image-transformation-for-amazon-cloudfront/`

**Additional References:**
- [Official Documentation](https://aws.amazon.com/solutions/implementations/dynamic-image-transformation-for-amazon-cloudfront/)
- [Reference Blog #1](https://aws.amazon.com/blogs/networking-and-content-delivery/resizing-images-with-amazon-cloudfront-lambdaedge-aws-cdn-blog/)
- [Reference Blog #2](https://medium.com/serverless-transformation/resize-images-on-the-fly-with-amazon-s3-aws-lambda-and-amazon-api-gateway-5d625b390b93)

---

### Admin Site

- CRUD (Create, Read, Update, Delete) for DB tables based on Python Django framework
- For this schedule, must be able to CRUD users and user actions (including follow)
- Plan to expand features to operation site in future
- Need to apply ACL (Access Control List) to allow access only from specific IP

---

## AI/ML Inference Server API Specifications

**Production Base URL:** `https://dev.noah.bside.art`
**Swagger Documentation:** `https://dev.noah.bside.art/docs`

**Legacy Base URL (deprecated):** `http://15.165.88.123:8000`
**Legacy Swagger Documentation (deprecated):** `http://15.165.88.123:8000/docs`

### SLA Requirements
- **Target SLA:** Under 2 seconds response time (ultimate goal)
- **MVP SLA:** Response time ~3 seconds is acceptable during launch phase
- **Backend Timeout:** When the BE API server calls the Model Serving API, set a request timeout of **10 seconds** to allow sufficient buffer for inference latency and retries
- **Multi-Result Handling:** Not required — recognition response returns a single best match only
- **Fallback Service:** No fallback AI service required for failed recognitions

### 1. Detect Coordinates API

**Purpose:** Detect artwork objects in uploaded images and return bounding box coordinates

**Endpoint:** `/detect-coordinates`
**Method:** POST
**Summary:** Image object detection and coordinate return

#### Request Body (JSON)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| base64_image | string | Required | Base64 encoded string of the image to analyze |

#### Response (200 OK)

| Field | Type | Description |
|-------|------|-------------|
| boxes | array of arrays | List of bounding box coordinates for detected objects ([[x1, y1, x2, y2], ...]) |

#### Status Codes
- **200:** Object detection successful
- **400:** Invalid Base64 image
- **500:** Unexpected server error during object detection

---

### 2. Vision Search API

**Purpose:** Upload an image to search for the most visually similar artwork (1 result) in the database

**Production Endpoint:** `/api/v1/artworks/vision-search`
**Legacy Endpoint:** `/vision-search`
**Method:** POST
**Summary:** Object detection-based artwork search

#### Request Body (JSON)

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| base64_image | string | Required | - | Base64 encoded string of the search image |

#### Response (200 OK)

| Field | Type | Description |
|-------|------|-------------|
| results | array | List of similar artwork information (ArtworkDTO) (contains single result) |

**ArtworkDTO Structure:**
```json
{
  "id": "string",         // Unique artwork ID
  "title": "string",      // Artwork title
  "artist": "string",     // Artist name
  "year": "string",       // Year created
  "width": 0.0,          // Artwork width (cm)
  "height": 0.0,         // Artwork height (cm)
  "medium": "string",    // Materials and techniques
  "url": "string"        // Image URL
}
```

#### Status Codes
- **200:** Search successful
- **400:** Invalid Base64 image or unsupported model name
- **404:** No matching artwork found
- **500:** Internal server error during search processing

---

### 3. Data Schemas

#### VisualSearchRequest
Common schema for image analysis and search requests
- `base64_image`: Image data (required)

#### ObjectDetectionCoordinatesResponse
Coordinate detection result response schema
- `boxes`: Integer list array in format [[x1, y1, x2, y2], ...]

#### VisualSearchResponse
Vision search result response schema
- `results`: List of ArtworkDTO objects

#### ArtworkDTO
Object containing detailed artwork information
- **Included fields:** id, title, artist, year, width, height, medium, url

---

## Database Schema

All Primary Keys use **UUID** format.

### Core Data Tables

#### 3.1. `gallery` (Gallery Information)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID (PK) | Primary key |
| `site_code` | VARCHAR | Unique site code |
| `name` | VARCHAR | English name |
| `name_ko` | VARCHAR | Korean name |
| `address` | TEXT | English address |
| `address_ko` | TEXT | Korean address |
| `geo_location` | JSON | Latitude and longitude information |
| `opening_hours` | JSON | Operating hours (detailed data by day) |
| `homepage_url` | VARCHAR | Gallery website URL |
| `logo_url` | VARCHAR | Gallery logo image URL |
| `building_name` | VARCHAR | Building name (English) |
| `building_name_ko` | VARCHAR | Building name (Korean) |

**JSON Field Examples:**
```json
// geo_location
{
  "latitude": 37.5665,
  "longitude": 126.9780
}

// opening_hours
{
  "monday": "10:00-18:00",
  "tuesday": "10:00-18:00",
  "wednesday": "10:00-18:00",
  "thursday": "10:00-18:00",
  "friday": "10:00-18:00",
  "saturday": "10:00-17:00",
  "sunday": "closed"
}
```

---

#### 3.2. `artist` (Artist Information)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID (PK) | Primary key |
| `name` | VARCHAR | Artist name (English) — indexed for search |
| `name_ko` | VARCHAR | Artist name (Korean) |
| `based_in` | VARCHAR | Location (English) |
| `based_in_ko` | VARCHAR | Location (Korean) |
| `birth_year` | INTEGER | Birth year |
| `death_year` | INTEGER | Death year (nullable) |
| `bio` | TEXT | Biography (English) |
| `bio_ko` | TEXT | Biography (Korean) |
| `profile_image_url` | VARCHAR | Profile image path |
| `social_links` | JSON | SNS and external links (Instagram, website, etc.) |

**JSON Field Example:**
```json
// social_links
{
  "instagram": "https://instagram.com/artist_name",
  "website": "https://artistwebsite.com",
  "twitter": "https://twitter.com/artist_name"
}
```

---

#### 3.3. `exhibition` (Exhibition Information)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID (PK) | Primary key |
| `gallery_id` | UUID (FK) | Associated Gallery ID |
| `title` | VARCHAR | Exhibition title (English) |
| `title_ko` | VARCHAR | Exhibition title (Korean) |
| `start_date` | DATE | Exhibition start date |
| `end_date` | DATE | Exhibition end date |
| `poster_image_url` | VARCHAR | Poster image URL |
| `participating_artists` | JSON | List of participating artists |
| `space` | VARCHAR | Exhibition space (English) |
| `space_ko` | VARCHAR | Exhibition space (Korean) |
| `description` | TEXT | Exhibition description (English) |
| `description_ko` | TEXT | Exhibition description (Korean) |

**JSON Field Example:**
```json
// participating_artists
[
  {
    "artist_id": "uuid-here",
    "artist_name": "Artist Name"
  },
  {
    "artist_id": "uuid-here",
    "artist_name": "Another Artist"
  }
]
```

---

#### 3.4. `artwork` (Artwork Information)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID (PK) | Primary key |
| `artist_id` | UUID (FK) | Artist ID |
| `title` | VARCHAR | Artwork title (English) |
| `title_ko` | VARCHAR | Artwork title (Korean) |
| `year` | VARCHAR | Year of creation |
| `medium` | VARCHAR | Materials and techniques (English) |
| `medium_ko` | VARCHAR | Materials and techniques (Korean) |
| `caption` | TEXT | Caption of the artwork (raw data) |
| `width` | NUMERIC | Width of work (cm) |
| `height` | NUMERIC | Height of work (cm) |
| `depth` | NUMERIC | Depth of work (cm, nullable) |
| `image_url` | VARCHAR | Image file path |
| `source_url` | VARCHAR | Original source URL |

---

#### 3.5. `users` (User Information)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID (PK) | Primary key |
| `email` | VARCHAR | User email (unique) |
| `username` | VARCHAR | Username (unique) |
| `type` | INTEGER | User type (0: General, 1: Artist, 2: Gallery, 3: Admin) |
| `status` | INTEGER | User status (0: Active, 1: Suspended, 2: Withdrawn) |
| `profile_image_url` | VARCHAR | Profile image path |
| `bio` | TEXT | User bio/description |
| `created_at` | TIMESTAMP | Account creation timestamp |
| `updated_at` | TIMESTAMP | Last update timestamp |

---

#### 3.6. `captures` (User Artwork Captures)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID (PK) | Primary key |
| `user_id` | UUID (FK) | User ID who captured |
| `artwork_id` | UUID (FK) | Captured artwork ID |
| `captured_at` | TIMESTAMP | Capture timestamp |
| `location` | VARCHAR | Capture location |
| `geo_location` | JSON | Latitude and longitude |
| `exhibition_id` | UUID (FK) | Associated exhibition (nullable) |
| `gallery_id` | UUID (FK) | Associated gallery (nullable) |
| `image_url` | VARCHAR | User's captured image path |

---

#### 3.7. `collections` (User Collections)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID (PK) | Primary key |
| `user_id` | UUID (FK) | Collection owner ID |
| `name` | VARCHAR | Collection name |
| `description` | TEXT | Collection description (nullable) |
| `is_public` | BOOLEAN | Visibility (true: public, false: private) |
| `cover_image_url` | VARCHAR | Collection cover image |
| `created_at` | TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | Last update timestamp |

---

#### 3.8. `collection_artworks` (Artworks in Collections)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID (PK) | Primary key |
| `collection_id` | UUID (FK) | Collection ID |
| `capture_id` | UUID (FK) | Capture ID |
| `order` | INTEGER | Order in collection |
| `added_at` | TIMESTAMP | Added timestamp |

---

#### 3.9. `follows` (User Follow Relationships)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID (PK) | Primary key |
| `follower_id` | UUID (FK) | User ID who follows |
| `following_id` | UUID (FK) | User ID being followed |
| `created_at` | TIMESTAMP | Follow timestamp |

**Note:** N:N relationship table implementing user-to-user follows

---

### Database Relationships

```
users (1) ----< (N) captures
captures (N) >---- (1) artworks
artworks (N) >---- (1) artists
captures (N) >---- (1) exhibitions (nullable)
captures (N) >---- (1) galleries (nullable)
exhibitions (N) >---- (1) galleries

users (1) ----< (N) collections
collections (1) ----< (N) collection_artworks
collection_artworks (N) >---- (1) captures

users (1) ----< (N) follows (as follower)
users (1) ----< (N) follows (as following)
```

---

## Integration Architecture

### Frontend (React Native) <> Backend (Django) <> AI Service (FastAPI)

#### Flow 1: Artwork Capture with Recognition

```
1. User captures photo in React Native app
2. App encodes image to Base64
3. App sends Base64 image to Django Backend API
4. Django Backend forwards Base64 to AI Service /api/v1/artworks/vision-search endpoint
5. AI Service returns ArtworkDTO (matched artwork info) — single best match
6. Django Backend enriches data from PostgreSQL database
7. Django Backend returns complete artwork info to Frontend
8. Frontend displays recognition effect animation, then shows result overlay
9. Frontend auto-saves capture to Capture Collection (categorized by check-in context)
10. Frontend saves to My Page - Capture List and device photo album
```

#### Flow 2: Manual Artwork Entry (Recognition Failure)

```
1. User captures photo in React Native app
2. App sends Base64 to Django Backend
3. Django forwards to AI Service /api/v1/artworks/vision-search
4. AI Service returns 404 (no match found)
5. Django Backend returns "processing" status to Frontend
6. Frontend displays "We are processing this artwork for you"
7. User can manually enter/edit artwork info (title, artist, year, medium)
8. Frontend sends manual entry to Django Backend
9. Django saves capture with manual info to database
10. Optional: Django flags for admin review/matching later
```

#### Flow 3: Location-Based Check-In

```
1. User opens Camera tab in React Native app
2. App requests GPS location (with permission)
3. App sends GPS coordinates to Django Backend API
4. Django queries database for exhibitions/galleries within 500m radius
5. Django checks current date against exhibition dates
6. Django returns matched exhibition/gallery info to Frontend (may return multiple results)
7. Frontend displays check-in suggestions with "Yes" button and close (X) icon for each
8. If multiple results, user selects one; if no results, defaults to city/area name
9. User confirms check-in → Frontend maintains check-in context for session
10. All captures in session automatically tagged with exhibition/gallery ID
11. Check-in display styled like Art Feed collection headers (event name + location)
```

---

## API Endpoints (Backend Django)

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh authentication token

### User Management
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update current user profile
- `GET /api/users/{user_id}` - Get user profile by ID
- `POST /api/users/follow` - Follow a user
- `DELETE /api/users/unfollow` - Unfollow a user
- `GET /api/users/{user_id}/followers` - Get user's followers
- `GET /api/users/{user_id}/following` - Get users being followed

### Artwork Recognition (proxied to AI Service)
- `POST /api/artworks/recognize` - Recognize artwork from image (calls AI `/api/v1/artworks/vision-search`)
- `POST /api/artworks/detect` - Detect artwork coordinates (calls AI `/detect-coordinates`)

### Captures
- `POST /api/captures` - Create new capture
- `GET /api/captures` - List user's captures
- `GET /api/captures/{capture_id}` - Get capture details
- `PUT /api/captures/{capture_id}` - Update capture info
- `DELETE /api/captures/{capture_id}` - Delete capture

### Collections
- `POST /api/collections` - Create new collection
- `GET /api/collections` - List user's collections
- `GET /api/collections/{collection_id}` - Get collection details
- `PUT /api/collections/{collection_id}` - Update collection
- `DELETE /api/collections/{collection_id}` - Delete collection
- `POST /api/collections/{collection_id}/artworks` - Add artwork to collection
- `DELETE /api/collections/{collection_id}/artworks/{artwork_id}` - Remove artwork from collection

### Artworks
- `GET /api/artworks` - Search/list artworks
- `GET /api/artworks/{artwork_id}` - Get artwork details
- `GET /api/artworks/{artwork_id}/captures` - Get capture count for artwork

### Artists
- `GET /api/artists` - Search/list artists
- `GET /api/artists/{artist_id}` - Get artist details
- `GET /api/artists/{artist_id}/artworks` - Get artist's artworks

### Galleries
- `GET /api/galleries` - Search/list galleries
- `GET /api/galleries/{gallery_id}` - Get gallery details
- `GET /api/galleries/{gallery_id}/exhibitions` - Get gallery's exhibitions

### Exhibitions
- `GET /api/exhibitions` - List exhibitions
- `GET /api/exhibitions/{exhibition_id}` - Get exhibition details
- `GET /api/exhibitions/nearby` - Get exhibitions near GPS coordinates (for check-in)

### Feed
- `GET /api/feed` - Get personalized art feed (following + platform collections)
- `GET /api/feed/platform` - Get platform curated collections

### Search
- `GET /api/search?q={query}&type={artworks|artists|users}` - Universal search
- `GET /api/search/suggest?q={partial_query}` - Auto-complete suggestions

### Notifications
- `GET /api/notifications` - Get user notifications
- `PUT /api/notifications/{notification_id}/read` - Mark notification as read

---

## Reference

Regarding development order, confirm if Artwork Camera can be prioritized → AI model integration test

---

# Appendix A: Change Log

## Version 3.1 (February 6, 2026)

**Updated:**
- Navigation Menu changed from 4-tab bottom bar to 3-item bottom floating nav (Home, Camera, My Page); Search moved to persistent top header
- Authentication flow fully specified: Splash Screen, Login (Social + Email/Password), Sign Up (email verification + password), Password Recovery, Profile Setup (first-time post-signup)
- Edit Profile button added to My Page profile section (self-view)
- Check-in suggestions clarified as top overlay/drawer style

## Version 3.0 (February 6, 2026)

**Enhanced:**
- Artwork Camera module: Camera UI layout, multi-suggestion check-in flow, post-capture recognition pipeline, collection auto-categorization logic
- Art Feed module: Global UI top nav, collection card element breakdown, artwork feed scroll view, artwork detail dynamic background
- Social Media module: My Page 2-tab structure (Collections/Captures), self vs. other user view visibility rules, filter/sort options
- Search module: Auto-complete from database, category tab filters, detailed navigation paths from results

**Added:**
- Figma design references linked throughout all modules
- AI SLA specifications (target <2s, MVP ~3s, backend timeout 10s)
- Production AI API endpoint (`https://dev.noah.bside.art/api/v1/artworks/vision-search`)
- Search auto-complete API endpoint (`/api/search/suggest`)
- Client Q&A answers resolving all open questions
- Data retention and privacy compliance notes (Korean PIPA)

**No Changes:**
- MVP scope and deadlines remain the same
- Database schema unchanged
- Admin features unchanged

## Version 2.0 (January 30, 2026)

**Added:**
- Detailed AI/ML API specifications with Swagger documentation
- Comprehensive database schema with all core tables
- Database relationship diagrams
- Integration architecture documentation (Frontend <> Backend <> AI flows)
- Complete Django API endpoint specifications
- AWS infrastructure configuration details
- Image transformation service references
- SQL schema files integration

**Clarified:**
- Artwork recognition process flow (success and failure paths)
- Location-based check-in implementation details
- Manual artwork entry workflow
- Photo processing and image serving strategy

**No Changes:**
- MVP scope and deadlines remain the same
- User flows and feature specifications unchanged
- UI/UX requirements preserved from original PRD

---

# Appendix B: Client Q&A (Resolved)

| # | Question | Answer |
|:-:|:---------|:-------|
| 1 | Should object storage connection for test response image URLs be completed before or after MVP launch? | Currently not functioning correctly per developer note — to be resolved before launch |
| 2 | What is the expected SLA for AI recognition response time? | **Target SLA:** Under 2 seconds (ultimate goal). **MVP SLA:** ~3 seconds acceptable during launch phase. **Backend config:** Set request timeout of 10 seconds when BE API calls Model Serving API to allow buffer for inference latency and retries. |
| 3 | What should happen when AI service returns multiple potential matches? | Multi-result handling is **not required**. The recognition response is expected to return a **single best match only**. |
| 4 | Should there be a fallback AI service or manual review queue for failed recognitions? | **No fallback AI service required.** Users can manually enter/edit artwork info on recognition failure. |
| 5 | What is the data retention policy for user captures and images? | Image collection and retention handled in compliance with **Korean Personal Information Protection Act (PIPA)** (for local service). Users must explicitly consent during sign-up. Exact image retention period must be clearly specified in the Privacy Policy. Upon user withdrawal, images must be deleted immediately or within the retention period defined in the Privacy Policy. |
| 6 | Should exhibitions/galleries be able to claim and manage their own profiles in later phases? | **Confirmed** — both artists and galleries will manage their own profiles in later phases (post-MVP). |

---

# Appendix C: Figma Design References

All designs are from the Figma file: **bside - Design**

| Section | Figma Node | URL |
|---------|-----------|-----|
| Artwork Camera | `2902-1155` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-1155) |
| Art Feed (Home) | `2902-721` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-721) |
| Platform Collection | `2902-858` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-858) |
| Artwork Feed (Collection View) | `2902-1043` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-1043) |
| Artwork Details | `2902-1082` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-1082) |
| Social Media / My Page | `2902-8` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-8) |
| Other User's Page | `2902-220` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-220) |
| Captures (Self View) | `2902-501` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2902-501) |
| Search | `2904-6` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2904-6) |
| Artist Detail | `2966-2108` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2966-2108) |
| Artist/Gallery Section | `2966-1765` | [View](https://www.figma.com/design/bZSJl0q8HE4Dxp7WjeHV6k/bside---Design?node-id=2966-1765) |

---

**END OF DOCUMENT**