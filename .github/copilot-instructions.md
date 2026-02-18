# Copilot Instructions for To-Do App Project

## Project Overview
This is a beginner-level HTML/CSS web application project for learning web development fundamentals. The workspace contains:
- **[index.html](index.html)**: Goals/To-Do application (currently minimal structure)
- **[html-course.html](html-course.html)**: Learning/reference page with HTML & CSS examples
- **[style.css](style.css)**: Shared stylesheet (currently minimal with basic body/h1 styles)

## Architecture & Structure
- **Pure frontend**: No build tools, frameworks, or JavaScript bundlers - just vanilla HTML/CSS
- **Learning-oriented**: `html-course.html` serves as a reference/tutorial file with examples of forms, images, and styling
- **Shared styling**: Single `style.css` file linked from HTML pages

## Code Conventions
- **Document title consistency**: Note the title tag in [index.html](index.html#L6) has a closing tag syntax error (`/title>` instead of `</title>`)
- **Simple selector patterns**: CSS uses element selectors (`body`, `h1`) and class selectors (`.first`, `.second`)
- **Color scheme**: Light cream background (`rgb(255, 255, 246)`) with Arial font family
- **Base font size**: 20px for body, 45px for h1

## Development Workflow
- **No build process**: Edit HTML/CSS files directly and open in browser
- **Preview**: Open HTML files directly in browser (no local server required)
- **Testing**: Manual browser testing across different viewports

## Key Patterns
1. **HTML structure**: Standard HTML5 boilerplate with viewport meta tag for responsiveness
2. **Form handling**: See [html-course.html](html-course.html#L33-L40) for form structure pattern
3. **Image embedding**: Base64-encoded images used in examples (see [html-course.html](html-course.html#L23))
4. **Class naming**: Ordinal class names like `.first`, `.second` for paragraph styling

## Current State & Next Steps
- [index.html](index.html) is a minimal skeleton - likely needs:
  - Content structure (headings, form inputs for to-do items)
  - Link to [style.css](style.css) (currently missing)
  - Interactive elements for to-do functionality
- Consider adding JavaScript for to-do item management (add, delete, toggle)
- Expand [style.css](style.css) with component-specific styles for to-do items

## Security
- **Snyk scanning**: Project has `.github/instructions/snyk_rules.instructions.md` for security scanning
- Run Snyk scans on any new code or dependencies introduced

## What This Project Is NOT
- Not using any JavaScript framework (React, Vue, etc.)
- Not using any CSS preprocessor (Sass, Less)
- Not using any build tools (Webpack, Vite, etc.)
- Not a full-stack application (no backend/database)
