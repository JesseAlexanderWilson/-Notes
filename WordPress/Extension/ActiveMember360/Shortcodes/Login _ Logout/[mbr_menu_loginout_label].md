[TOC]

# Usage
This shortcode returns “Login” is the visitor is not logged in and “Logout” if s/he is. It is primarily intended for use in WP menu items, but can be used anywhere.

This shortcode does **NOT** support conditional branching with **[ELSE_menu_loginout_label]**.
Shortcode nesting is **NOT** supported.

# Example
```css
[mbr_menu_loginout_label]
```
```css
[mbr_menu_loginout_label login='Sign In' logout='Sign Out']
```

# Parameters
## login
- The text to be used for the Login label.
- **Default:** Login.
- **Required:** no.

## logout
- The text to be used for the Logout label.
- **Default:** Logout.
- **Required:** no.

# API
There is currently no ActiveMember360 API function equivalent for this shortcode.