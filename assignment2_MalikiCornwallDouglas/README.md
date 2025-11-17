Assignment 2 - CSS Animations & Media Queries
Project: assignment2_MalikiCornwallDouglas

-----------------------------------------
HOW TO VIEW THE PROJECT
-----------------------------------------
1. Download and extract the ZIP.
2. Keep all files in the same folder:
   - assignment2_MalikiCornwallDouglas.html
   - assignment2_MalikiCornwallDouglas.css
   - assignment2_MalikiCornwallDouglas.js
3. Double-click assignment2_MalikiCornwallDouglas.html to open it
   in any modern browser.

-----------------------------------------
DESIGN CHOICES (FOR DOCUMENTATION MARKS)
-----------------------------------------

1. Color Scheme & Theme
   - Dark, modern interface with a subtle radial background gradient.
   - Accent colors: cyan and purple used for CTAs, highlights, and cards.
   - High contrast between text and background for readability.

2. Animations
   - Hero title uses a slide-down animation to draw attention on load.
   - Subheading and button row fade in with a slight delay for a smooth intro.
   - Floating hero cards use a looping float animation to suggest "live" data.
   - Pulse animation on the hero note for a subtle attention grab.
   - Scroll-based reveal: cards and sections with .fade-up smoothly animate in
     as the user scrolls (triggered via IntersectionObserver in JS).
   - Button hover states use box-shadow and transform to feel interactive
     without being distracting.

3. Media Queries / Responsiveness
   - Desktop:
       * Two-column hero layout (text + visual).
       * Three-column feature and pricing grids.
       * Desktop, tablet, and mobile showcase cards displayed side-by-side.
   - Tablet (max-width: 768px / 1024px):
       * Hero re-balances layout; grids reduce to two columns.
       * Cards and sections keep comfortable padding and font size.
   - Mobile (max-width: 520px):
       * Single-column layout for all sections.
       * Full-width buttons and form inputs for thumb-friendly design.
       * Highlighted pricing card drops its vertical offset so the stack
         looks clean.
   - Navigation links are simplified on smaller screens (hidden in this
     version) to avoid layout crowding and still show a sticky header.

4. Structure & Semantics
   - Uses semantic HTML5 sections:
       * <nav>, <header>, <section>, and <footer>.
       * Clear IDs for navigation: #hero, #features, #showcase, #pricing, #contact.
   - Content is organized like a real SaaS landing page:
       * Hero with CTA
       * Features
       * Responsive showcase
       * Pricing
       * Contact / CTA form
   - Accessibility helpers:
       * .sr-only class for screen-reader-only labels on the email input.

5. Creativity & Design
   - Fictional brand: "NovaFlow Studios" specializing in landing pages.
   - Thematic consistency: all copy is about smooth launches, responsive
     layouts, and clean animations.
   - Visual hierarchy:
       * Large hero title
       * Strong CTA buttons
       * Secondary cards and sections support the main story.
   - Multiple distinct but consistent card styles (features, pricing, device
     showcase) show variety in layout while still feeling like one brand.

-----------------------------------------
FILES INCLUDED
-----------------------------------------
assignment2_MalikiCornwallDouglas.html  - full page structure and content
assignment2_MalikiCornwallDouglas.css   - styling, animations, media queries
assignment2_MalikiCornwallDouglas.js    - scroll-based animation logic + demo form handler
README.txt                              - this documentation file

-----------------------------------------
AUTHOR
-----------------------------------------
Created for: Maliki Cornwall-Douglas
Assignment 2 - CSS Animations and Media Queries
