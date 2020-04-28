[TOC]

# Usage
This shortcode return the logout URL for the logged in contact.

This shortcode does **NOT** support conditional branching with **[ELSE_logout_url]**.
Shortcode nesting is **NOT** supported.

# Example
```css
[mbr_logout_url]
```
```css
[mbr_logout_url redirect='http://example.com']
```

# Parameters
## redirect
- An alternate redirection target may be given. If none is given, the applicable target for the membership level will be used.
- **Default:** Membership setting.
- **Required:** no.

# API
There is currently no ActiveMember360 API function equivalent for this shortcode.