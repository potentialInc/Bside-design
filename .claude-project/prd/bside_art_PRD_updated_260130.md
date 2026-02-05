# bside.art PRD (Updated: 2026-01-30)

## Document Change Log

**Version:** 2.0  
**Last Updated:** January 30, 2026  
**Changes from v1.0:**
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

## Artist
Check capture data of their own works, check artwork/artist-centered comment communication

## Admin
Manage platform content, user accounts, artwork database, system settings

---

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

## ✅ Included Features

### Core Features:
- Artwork Camera (Capture + Upload)
- Basic Art Feed (Capture Collection)
- My Page (Home, Captures, Collections tabs)
- User Authentication (Apple/Google Social Login)
- Basic Search (artist/artwork/user)

### Social Features (Limited):
- Follow/Unfollow
- Follow Notification
- Personal Collection Display

### Admin (Simplified):
- Utilize Django Admin Dashboard
- User Management (type/status changes)
- Basic CRUD
- Push Sending System

---

# System Modules (Step-by-Step Flow)

## Module 1 - Artwork Camera (Artwork Recognition Engine)

Entry point where artworks are photographed anywhere such as art fairs, gallery exhibitions, and collectors' personal spaces. Check-in function is implemented according to the photographing user's location information. Captured artworks are automatically matched with artwork information through AI image recognition, and added to the user's Capture Collection and My Page.

### Main Features:
1. Artwork Photography "Capture"
2. Upload artwork photos from photo album "Capture-Upload"
3. Location-based check-in (exhibition hall, gallery, home collection, etc.)

### Technical Flow:

#### 1. User opens Artwork Camera in app

#### 2. Location-based check-in guidance
- **Check-in criteria:** 500m radius
- **Check-in policy:** Once per session (resets on app restart)
- **Process:**
  - Automatically match and suggest currently ongoing exhibition/gallery information based on location (LBS) and time information
  - Maintain check-in status within camera menu (maintained if same session after termination and re-entry)
  - Reset check-in status on app termination or restart (re-display check-in popup even for same exhibition on re-entry)

#### 3. Artwork Photography "Capture"

**a. Capture Process:**
- If artwork is not center-aligned, display guide: "Please center the artwork in the camera frame" (top window)
- System transmits image to AI recognition model → Dunamis performs

**b. Recognition Success:**
1. Object recognition and automatic correction
2. Save to Capture Collection
3. Save to My Page - Capture List
4. Save to personal photo album (mobile device)

**c. Recognition Failure:**
1. System displays "We are processing this artwork for you" on captured photo image
2. On information mismatch:
   - Image is processed and entered
   - Text information (artwork name, artist name) displayed in "We are processing..." status
   - When user clicks on that image item, a 'manual input guidance system' window appears

**d. API Integration (Provided by Dunamis):**
- API endpoint URL
- Image transmission specifications (resolution, format)
- Expected response time SLA
- API authentication method (if needed)

#### 4. Artwork Photo Upload "Upload"

**a. Process:**
- Display guidance text to upload photos taken with artwork centered when entering album
- User uploads captured image

**b. Recognition Success:**
1. Object recognition and automatic correction
2. Save to Capture Collection
3. Save to My Page - Capture List

**c. Recognition Failure:**
- On information mismatch:
  - Image is processed and entered
  - Text information displayed in "We are processing..." status
  - When user clicks, 'manual input guidance system' window appears

#### 5. Photo Processing Process

**Implementation:**
- Dynamic image transformation allows uploading to AWS S3 and image serving via AWS CloudFront
- Optional use; photo processing supports smooth operation in Art Feed Carousel, My Page, etc.
- Can also be used as image to deliver to AI model

---

## Module 2 - Art Feed

Main feed that provides collections of followed users and platform curation content in chronological order.

### Main Features:

#### 1. Capture Collection Display
- View collection, share, edit features
- **On entry:** Check artwork list displaying images and detailed information of artworks
- **On artwork image click:** Check additional information such as artwork and artist, related exhibitions

**Collection Header Elements (vary by location/time):**
- **If exhibition:** Automatically display location and exhibition title. Display users who viewed exhibition together
- **If gallery:** Add gallery tag
- **Otherwise:** Add only location information as default value

#### 2. Personal Collection Feed
Feed of collections of users being followed

#### 3. User Recommendations
Feature to recommend following other users

#### 4. Platform Collection
Content feed utilizing platform data
- Example: Introduce artists most captured this week

#### 5. Tutorial (If no captured artworks)
Tutorial educating about artwork photography-based search and personal collection creation features

---

## Module 3 - Social Media

Main Features: Explore and organize artworks you've captured in My Page, check other users' activities and follow.

### 1. My Page

**a. Profile Section:**
- Profile image
- Username
- Statistics: Number of captured artworks, exhibitions visited, artists followed
- Edit profile button

**b. Artwork Section:**
- **Home:** Users' personalized art dashboard
- **My Captures:** Artwork list grouped by year, exhibition criteria, artist, etc.
- **Collection:** Select and share artworks for collection among captured artworks, and publish to home feed function

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

### Main Features:

#### 1. Search Function
- Search users, artworks, and artist information in DB
- When searching for artist, list artist's artwork list in search results
- When searching for user, list user list in search results

---

# Part 2: User Application PRD

## User Types: User, Artist

## 1. Common

### Splash Page
**Design Guide:** TBD

### Login Page

**Input:**
- Use email for ID
- Social login options:
  - Apple Sign-In
  - Google Sign-In

**Next Action:**
- On success: Navigate to Home
- On failure: Display error message

**Design Guide:** TBD

### Password Recovery Page

**Main:**
- Not applicable (Social login only - no password recovery needed)
- For email members:
  - Send code by email
  - Navigate to password reset screen after email verification completes
  - After password reset completes, land on login screen

### Sign Up Page

**Input:**
- For email login:
  - Send email verification code
  - Count code input time
  - Sign up after verification code confirmation
  - Enter password (complexity review)
  - Enter password confirmation then sign up
- Social account authentication (Apple/Google)

**Rules:**
- Social authentication completion required
- TBD - First enter home screen then guide with profile setup popup

**Design Guide:** TBD

---

## Navigation Menu

1. Art Feed (Home)
2. Search
3. Camera (Artwork Camera)
4. My Page
5. Notification (header)

---

## 2. User (General/Collector)

### 2.1 Navigation Menu
1. Home
2. Search
3. Camera (Artwork Camera)
4. My Page
5. Notification (header)

### 2.2 Page Structure and Feature Specifications

#### 1. Art Feed (Home)

**1-1. Main Page**

1. Display posting (artwork list) content based on followed users + own captured exhibitions + app-provided content

2. For artwork lists (Collection), editable on home screen:
   - For collections not related to specific exhibition/art fair, collection title can be changed
   - Can edit order of artwork list included in collection
   - Can delete artworks included in collection

3. For collections without exhibition information, display only location and date information with default name

4. Collections include:
   - Creator user
   - Creation date
   - Creation exhibition name
   - Statistics/list of other users who visited exhibition
   - List of captured artworks
   - Artwork information (title, artist, capture count)

5. Add comment function between users regarding collection

**1-2. Artwork Detail Screen**

- When selecting collection, navigate to screen listing artwork list in collection
- When selecting artwork, navigate to detail screen of selected artwork
- Display:
  - Artwork representative image
  - Title, artist, year, material
  - Capture data
  - Artist introduction content and other artwork images of artist
  - Artists with other exhibition history at gallery of selected artwork or collection
  - Recommended exhibitions (display artist's next exhibition or recommended other artist's exhibition or gallery's next exhibition / No display acceptable if no exhibition information)

**1-3. Artist Detail Screen**

For artists included in database, navigate to artist detail screen through search and artwork detail page.

Include:
- Artist name
- Birth year
- Based in {location}
- Brief introduction
- List of artist-related artworks

**1-4. Gallery Detail Screen**

For galleries included in database, navigate to detail screen through search and gallery tag of collection.

Include:
- Gallery name
- Location
- Website
- Exhibition information

---

#### 2. Search Tab

**Main Page**

1. **Search Input:**
   - Text input for keywords (artist name, artwork title, user name)
   - Search suggestion dropdown

2. **Search Results:**
   - When searching for artist, list artist's artwork list in search results
   - When searching for user, list user list in search results
   - When selecting artwork, navigate to artwork detail screen
   - When selecting profile, navigate to user bio page
   - When selecting artist, displays artist's profile and related information

---

#### 3. Camera Tab (Artwork Camera)

**Main Page - Camera View**

1. **Camera Preview:**
   - Live camera feed
   - Guide overlay: "Please center the artwork in the camera frame"
   - Display current exhibition/gallery information (location-based)

2. **Camera Controls:**
   - Shutter button (center)
   - Photo album/recent photo button (left)

3. **Recognition Result Camera Screen Overlay Sheet:**
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
- Request artwork information collection from platform

**Photo Processing Process:**
- Dynamic image transformation implementation allows uploading to AWS S3 and image serving via AWS CloudFront
- Not mandatory to use
- Photo processing purpose is to support smooth operation in Art Feed Carousel, My Page, etc.
- Can also be used as image to deliver to AI model

---

#### 4. My Page Tab

**Main Page**

- Provide username (duplicate check), profile photo registration, introduction
- Provide profile with basic auto-generated username and default photo
- Provide Captures/Follower/Following dashboard
- Provide captured artwork list through Home/Collections/Captures tab menu:
  - **Home:** User's artwork capture highlights through user customization
  - **Captures:** Artwork list in list format
  - **Collection:** Artwork folder grouped by captured artworks' date, location-based visited exhibitions or fairs
- Provide keyword search and sorting within list (chronological, artwork name, artist name, capture count, etc.)
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

**Base URL:** `http://15.165.88.123:8000`  
**Swagger Documentation:** `http://15.165.88.123:8000/docs`

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

**Endpoint:** `/vision-search`  
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
| `name` | VARCHAR | Artist name (English) |
| `name_ko` | VARCHAR | Artist name (Korean) |
| `based_in` | VARCHAR | Location (English) |
| `based_in_ko` | VARCHAR | Location (Korean) |
| `birth_year` | INTEGER | Birth year |
| `death_year` | INTEGER | Death year (nullable) |
| `bio` | TEXT | Biography (English) |
| `bio_ko` | TEXT | Biography (Korean) |
| `profile_image_url` | VARCHAR | Profile image path |
| `social_links` | JSON | SNS and external links |

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

### Frontend (React Native) ↔ Backend (Django) ↔ AI Service (FastAPI)

#### Flow 1: Artwork Capture with Recognition

```
1. User captures photo in React Native app
2. App encodes image to Base64
3. App sends Base64 image to Django Backend API
4. Django Backend forwards Base64 to AI Service /vision-search endpoint
5. AI Service returns ArtworkDTO (matched artwork info)
6. Django Backend enriches data from PostgreSQL database
7. Django Backend returns complete artwork info to Frontend
8. Frontend displays recognition result to user
9. Frontend saves capture record via Django Backend API
```

#### Flow 2: Manual Artwork Entry (Recognition Failure)

```
1. User captures photo in React Native app
2. App sends Base64 to Django Backend
3. Django forwards to AI Service /vision-search
4. AI Service returns 404 (no match found)
5. Django Backend returns "processing" status to Frontend
6. Frontend displays "We are processing this artwork for you"
7. User can manually enter artwork info (title, artist, year)
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
6. Django returns matched exhibition/gallery info to Frontend
7. Frontend displays check-in prompt: "Are you at [Exhibition Name]?"
8. User confirms or declines check-in
9. If confirmed, Frontend maintains check-in context for session
10. All captures in session automatically tagged with exhibition/gallery ID
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
- `POST /api/artworks/recognize` - Recognize artwork from image (calls AI /vision-search)
- `POST /api/artworks/detect` - Detect artwork coordinates (calls AI /detect-coordinates)

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

### Notifications
- `GET /api/notifications` - Get user notifications
- `PUT /api/notifications/{notification_id}/read` - Mark notification as read

---

## Reference

Regarding development order, confirm if Artwork Camera can be prioritized → AI model integration test

---

# Appendix A: Change Log

## Version 2.0 (January 30, 2026)

**Added:**
- Detailed AI/ML API specifications with Swagger documentation
- Comprehensive database schema with all core tables
- Database relationship diagrams
- Integration architecture documentation (Frontend ↔ Backend ↔ AI flows)
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

# Appendix B: Open Questions for Client

| # | Question | Context |
|:-:|:---------|:--------|
| 1 | Should object storage connection for test response image URLs be completed before or after MVP launch? | Currently not functioning correctly per developer note |
| 2 | What is the expected SLA for AI recognition response time? | Important for user experience planning |
| 3 | What should happen when AI service returns multiple potential matches? | Current spec returns single result, but edge cases need handling |
| 4 | Should there be a fallback AI service or manual review queue for failed recognitions? | Important for reliability and data quality |
| 5 | What is the data retention policy for user captures and images? | Important for storage planning and costs |
| 6 | Should exhibitions/galleries be able to claim and manage their own profiles in later phases? | Artist profile management confirmed for later phases |

---

**END OF DOCUMENT**
