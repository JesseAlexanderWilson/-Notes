[TOC]

# Usage
This shortcode generates a link to log out of the membership site, taking your logout redirect settings into account.

This shortcode does **NOT** support conditional branching with **[ELSE_logout_link]**.
Shortcode nesting is **NOT** supported.

# Example
```css
[mbr_logout_link]
```
```css
[mbr_logout_link text='Get me outa here']
```

# Parameters
## redirect
- An alternate redirection target may be given. If none is given, the applicable target for the membership level will be used.
- **Default:** Membership setting.
- **Required:** no.

## text
- An alternate text for the generated link.
- **Default:** Logout.
- **Required:** no.

## class
- CSS class used to display text.
- **Default:** mbr_logout_link.
- **Required:** no.

# API
To use this shortcode in your own PHP code, please use as follows:
```css
echo mbr_logout_link(
    array( 
        'redirect' => 'http://example.com',
        'text'     => 'Click here to logout'
    )
);
```