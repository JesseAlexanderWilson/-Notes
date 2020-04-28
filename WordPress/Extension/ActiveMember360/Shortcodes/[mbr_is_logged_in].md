[TOC]

# Usage
This shortcode returns the embedded content if the current visitor is logged in.

**[ELSE_is_logged_in]** conditional branching is supported.
Shortcode nesting is **NOT** supported.

# Example
```css
[mbr_is_logged_in]
  Display this if logged in.
[ELSE_is_logged_in]
  Display this if not logged in.
[/mbr_is_logged_in]
```
```css
[mbr_is_logged_in]
  Display this if logged in.
[/mbr_is_logged_in]
```