[TOC]

# Usage
This shortcode returns a form through which a contact can change his/her password. The changed password is updated in ActiveCampaign. This shortcode only works for users whose password is stored in ActiveCampaign and is ignored for local WP users, such as admins, editors, etc.

This shortcode does **NOT** support conditional branching with **[ELSE_password_change]**.
Shortcode nesting is **NOT** supported.

# Example
```css
[mbr_password_change button_text='Reset my password']
```
```css
[mbr_password_change button_image='URL_to_image']
```
```css
[mbr_password_change button_text='Reset my password' pass_1='Your new password' pass_2='Repeat your new password' placeholder='yes']
```
```css
[mbr_password_change button_text='Reset my password' before_pass_1='<div>' after_pass_1='</div>' pass_1='Your new password' pass_2='Repeat your new password' placeholder='yes']
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

## lass_submit_button
- CSS class for the submit button.
- **Default:** none.
- **Required:** no.

## id_submit_button
- CSS id for the submit button.
- **Default:** none.
- **Required:** no.

## lead_text
- Enter the text that should appear above the form.
- **Default:** Please enter your new password twice.
- **Required:** no.

## pass_1
- The label/placeholder for the first password input field.
- **Default:** New Password.
- **Required:**: no.

## size_pass_1
- The size of the first password input field.
- **Default:** 20.
- **Required:** no.

## maxlength_pass_1
- The maxlength of the first password input field.
- **Default:** none.
- **Required:** no.

## before_pass_1
- Text or HTML before the first password label and input field.
- **Default:** none.
- **Required:** no.

## after_pass_1
- Text or HTML after the first password input field.
- **Default:** none.
- **Required:** no.

## style_pass_1
- CSS style for the first password input field.
- **Default:** none.
- **Required:** no.

## class_pass_1
- CSS class for the first password input field.
- **Default:** none.
- **Required:** no.

## pass_2
- The label/placeholder for the second password input field.
- **Default:** Repeat Password.
- **Required:** no.

## size_pass_2
- The size of the second email input field.
- **Default:** 20.
- **Required:** no.

## maxlength_pass_2
- The maxlength of the second password input field.
- **Default:**: none.
- **Required:** no.

## before_pass_2
- Text or HTML before the second password label and  input field.
- **Default:** none.
- **Required:** no.

## after_pass_2
- Text or HTML after the second password input field.
- **Default:** none.
- **Required:** no.

## style_pass_2
- CSS style for the second password input field.
- **Default:** none.
- **Required:** no.

## class_pass_2
- CSS class for the second password input field.
- **Default:** none.
- **Required:** no.

## placeholder
- Use placeholder in the input fields of email_1 and email_2 instead of labels. Valid values: true, yes, 1
- **Default:**: 0.
- **Required:** no.

## automation_id
- ID of the automation to run upon password change.
- **Default:** none.
- **Required:** no.

# API
There is currently no ActiveMember360 API function equivalent for this shortcode.