[TOC]

# Usage
This shortcode enables you to redirect a visitor to another page on your site or off your site.
The shortcode may be run in “autorun” mode, in which case the visitor is automatically redirect or it may be used as a link.

This shortcode does **NOT** support conditional branching with **[ELSE_redirect]**.
Shortcode nesting is **NOT** supported.

# Example
```css
[mbr_redirect url='/info']
```
```css
[mbr_redirect url='/info' autorun='1']
```
```css
[mbr_redirect url='/info' autorun='1' newwindow='1']
```
```css
[mbr_redirect url='http://example.com/info' autorun='1']
```
```css
[mbr_redirect button_text='Click here']
```
```css
[mbr_redirect button_style='font-size:2.0em;font-weight:bold;']
```
```css
[mbr_redirect button_image='http://example.com/image.png']
```

# Parameters
## url
- The URL to which a visitour should be sent to.
- **Default:** none.
- **Required:** yes.

## autorun
- Defines whether a visitor will be automatically send to the specified URL or whether a click is required.
- **Default:** 0. (no)
- **Required:** no.

## new_window
- Defines whether a visitor will be sent to the specified URL in a new browser window or not.
- **Default:** 0. (no)
- **Required:** no.

## button_text
- Defines the text to be displayed on a submit button.
- **Default:** Submit.
- **Required:** no.

## button_image
- Defines whether an image is displayed in lieu of an HTML submit button.
- **Default:** none.
- **Required**: no.

## button_style
- Provides additional CSS instructions to be applied to an HTML submit button.
- **Default:** none.
- **Required:** no.