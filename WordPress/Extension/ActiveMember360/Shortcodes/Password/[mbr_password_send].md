[TOC]

# Usage
This shortcode returns a form through which a subscriber or visitor can request that his/her password be sent by mail. This shortcode only works for users whose password is stored in ActiveCampaign and is ignored for local WP users, such as admins, editors, etc.

This shortcode does **NOT** support conditional branching with **[ELSE_password_send]**.
Shortcode nesting is **NOT** supported.

# Example
```css
[mbr_password_send button_text='Reset my password']
```
```css
[mbr_password_send button_image='URL_to_image']
```
```css
[mbr_password_send automation_id='123']
```
```css
[mbr_password_send button_text='Reset my password' email='Your Email Address' placeholder='yes']
```
```css
[mbr_password_send button_text='Reset my password' email='Your Email Address' placeholder='yes' before_email='<div>' after_email='</div>']
```

# Parameters
## label
- Defines the field label positions. Possible values are “top”, “left” or “placeholder”, to indicate placement above the fields , to the left or as a placeholder, respectively.
- **Default:** top.
- **Required:** no.

## button_text
- Enter the text that should appear on the input button.
- **Default:** Change Password.
- **Required:** no.

## button_image
- Enter the URL path to the image of your choice.
- **Default:** none.
- **Required:** no.

## button_style
- Any inline style you want to apply to the button image or HTML button.
- **Default:** none.
- **Required:** no.

## before_submit_button
- Text or HTML before the submit button.
- **Default:** none.
- **Required:** no.

## after_submit_button
- Text or HTML after the submit button.
- **Default:** none.
- **Required:** no.

## class_submit_button
- CSS class for the submit button.
- **Default:** none.
- **Required:** no.

## id_submit_button
- CSS id for the submit button.
- **Default:** none.
- **Required:** no.

## email
- Replacement text for the label ‘Email:’
- **Default:** Email:.
- **Required:** no.

## size_email
- The size of the email input field.
- **Default:** 20.
- **Required:** no.

## maxlength_email
- The maxlength of the email input field.
- **Default:** none.
- **Required:** no.

## before_email
- Text or HTML before the email label and  input field.
- **Default:** none.
- **Required:** no.

## after_email
- Text or HTML after the email input field.
- **Default:** none.
- **Required:** no.

## style_email
- CSS style for the email input field.
- **Default:** none.
- **Required:** no.

## class_email
- CSS class for the second email input field.
- **Default:** none.
- **Required:** no.

## from_addr
- From email address.
- **Default:** Plugin Options => Main Settings =>Default “Mail From” address.
- **Required:** no.

## from_name
- From name..
- **Default:** Plugin Options => Main Settings => Default “Mail From” name.
- **Required:** no.

## automation_id
- ID of automation to run upon password change.
- **Default:** none.
- **Required:** no.

# API
There is currently no ActiveMember360 API function equivalent for this shortcode.