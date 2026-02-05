# bside.art - Project Context

**Last Updated:** February 2, 2026

## Project Snapshot

**Status:** Design Phase (Week 1 of 8)
**Next Milestone:** Core screen designs (Feb 16, 2026)
**MVP Deadline:** March 31, 2026

## Current Phase

**Design & Planning Phase (Feb 3-16, 2026)**
- [x] PRD finalized (v2.0)
- [x] Design guideline created (v2.0)
- [x] Page count breakdown (23 screens)
- [x] Design system foundations defined
- [ ] Reference app research
- [ ] Low-fidelity wireframes
- [ ] High-fidelity core screens

## Recent Updates (Feb 2, 2026)

### Design Guideline v2.0 Created
- Added comprehensive page-by-page design briefs for all 23 screens
- Documented 25 critical design rules (PRD-specific + universal + brand consistency)
- Created detailed 8-week deliverables timeline
- Integrated all PRD v2.0 requirements into design specifications

### PRD v2.0 (Jan 30, 2026)
- Added AI/ML API specifications with Swagger documentation
- Added comprehensive database schema (9 core tables)
- Added integration architecture documentation
- Added complete Django API endpoint specifications

## Key Decisions

### Design Philosophy
- **Reference Apps:** Nike SNKRS + HYPE by Hypebeast (primary), Spotify + Pinterest + Vivino (secondary)
- **Color Approach:** Neutral-forward (80% neutral, 20% accent colors) to let artwork stand out
- **Typography:** System fonts (SF Pro iOS, Roboto Android) for performance and consistency
- **Dark Mode:** System-driven (automatic), no manual toggle in MVP

### Technical Stack
- **Mobile:** React Native 0.81.5, Expo ^54.0.27 (confirmed)
- **Backend:** Django 6.0.1, PostgreSQL 16, AWS ECS (confirmed)
- **AI/ML:** FastAPI, PyTorch, TensorFlow for artwork recognition (confirmed)

### MVP Scope Decisions
- Social login only (Apple + Google), no email/password for MVP
- Comments system deferred to post-MVP (too complex for timeline)
- Admin uses Django Admin Dashboard (no custom admin UI for MVP)
- Dark mode automatic (no manual toggle to reduce complexity)

## Open Questions

### Design
- [ ] Icon library selection: Use SF Symbols (iOS) + Material Icons (Android) or custom icon set?
- [ ] Animation library: React Native Animated or Reanimated 2?
- [ ] Prototype tool: Figma prototypes or separate ProtoPie/Principle?

### Development
- [ ] Image caching strategy: React Native Fast Image or custom solution?
- [ ] State management: Redux, Zustand, or React Context?
- [ ] Navigation: React Navigation or Expo Router?

### Infrastructure
- [ ] Image CDN: AWS CloudFront configuration finalized?
- [ ] CI/CD: GitHub Actions setup for ECS deployment?
- [ ] Monitoring: Error tracking (Sentry?) and analytics (Mixpanel? Amplitude?)

## Next Actions

**Immediate (This Week):**
1. Begin reference app research (Nike SNKRS, HYPE, Spotify, Pinterest, Vivino)
2. Create mood board and visual exploration
3. Start low-fidelity wireframes for 23 screens
4. Set up Figma project structure

**Week 2 (Feb 10-16):**
1. Complete wireframes for all screens
2. Begin high-fidelity designs for Phase 1 screens (Login, Camera, Artwork Detail)
3. Establish component library foundations
4. First design review with stakeholders

## Team Notes

### Communication
- **Design Reviews:** Mondays (weekly)
- **Developer Sync:** Wednesdays (bi-weekly, starting Week 3)
- **Client Check-ins:** Fridays (bi-weekly)
- **Slack Channel:** #bside-design

### Tools
- **Design:** Figma (shared workspace)
- **Documentation:** Markdown files in `.claude-project/`
- **Version Control:** Git (design files) + Figma versions
- **Project Management:** TBD (Notion? Linear? Jira?)

## References

- **PRD:** [bside_art_PRD_updated_260130.md](../prd/bside_art_PRD_updated_260130.md)
- **Design Guide:** [bside_design_style_guideline.md](../docs/bside_design_style_guideline.md)
- **GitHub Repo:** https://github.com/dunamis-art-tech/bside-app

---

*This document is updated weekly or when significant project changes occur.*
