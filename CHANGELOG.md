# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **New Work Experience Section**: Comprehensive work history showcasing experience at JP Morgan Chase and Barclays
  - CAST (RWA & Regulatory Capital Engine) project - optimized QE processing by 65% (6h → 2h)
  - Market Risk Engine (HVaR) project - Historical Value at Risk calculations for multi-asset portfolios
  - Micro-Frontends Integration project at Barclays - React, Angular, single-spa, and SSR implementation
- **Company Logos**: Added Barclays and JP Morgan Chase logos to work section
- **New Coachify Project**: Full-stack educational platform supporting 500+ students with React.js, Node.js, and MongoDB
- **Profile Image**: New professional profile photo in About section
- **Navigation Links**: Updated all navigation with proper section numbering (01-06)

### Enhanced
- **About Section**: Updated description to focus on backend and full-stack development expertise, system optimization, and AI-driven solutions
- **Skills Section**: Expanded and reorganized skills including:
  - Languages: C++, Python, C, Prompt Engineering
  - Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap
  - Backend: Node.js
  - Databases: MySQL, MongoDB
- **Hero Section**: 
  - Increased font sizes (name: 100px, info1: 85px)
  - Enhanced button styling and padding
  - Improved vertical spacing and scrolling offsets
- **Navigation**: Added `offset={-80}` to all smooth scroll links for better heading visibility
- **Section Layout**: Reorganized to display Work section before Projects
- **Get In Touch Buttons**: Updated to redirect to Gmail compose view (https://mail.google.com/mail)
- **Resume Button**: Linked to bit.ly shortener (https://bit.ly/4cdodwK) with Google Drive backup

### Fixed
- Fixed navbar scroll behavior to prevent section headings from being hidden behind fixed header
- Improved About section image alignment with proper margin-top spacing
- Reduced spacing between Skills and About sections

### Modified
- Removed "Shade Game" and "Gourmet Natural Food Website" projects
- Updated Connect section button to use email redirect
- Enhanced responsive design and layout calculations
- Updated all section numbering in navigation

### Technical Changes
- Created new `Work.jsx` component
- Updated `HomeSection.jsx` to include Work section
- Modified `Navbar.jsx` and `Navbar2.jsx` with updated navigation structure
- Enhanced `Style.css` with new work container and improved spacing
- Updated `Projectdata.js` with new Coachify project details
- Improved `Skills.jsx` with updated skill list and reduced margins

---

## Previous Updates

### Initial Release
- Portfolio website with sections for Header, About, Skills, Projects, and Contact
- Responsive design with mobile-first approach
- Dark theme with teal accent color
- Smooth scrolling navigation
