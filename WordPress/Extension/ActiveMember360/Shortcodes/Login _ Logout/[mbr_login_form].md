[TOC]

#Usage
This shortcode returns a WordPress login form through which a visitor can log in. It’s based on the default WordPress login form found at wp-login.php.

The shortcode behaves differently depending on the user’s login status. If the user is already logged in, the form is suppressed. However, using the “force_display” parameter, the form can be forced to display even if a user is logged in.

This shortcode does **NOT** support conditional branching with **[ELSE_login_form]**.
Shortcode nesting is **NOT** supported.

# Example
Using default values:
```css
[mbr_login_form]
```
Force login form to display even if the user is already logged in:
```css
[mbr_login_form force_display='yes']
```
Redirect to a specific page rather than site defaults:
```css
[mbr_login_form redirect='http://mysite.com/mypage/']
```

# Parameters
## form_id
- The html id of this form.
- **Default:** loginform.
- **Required:** no.

## label
- Defines the field label position. Possible values are “top”, “left” or “placeholder”, to indicate placement above the fields , to the left or as a placeholder, respectively.
- **Default:** top.
- **Required:** no.

## label_login
- The default label for the login label is “Log In”. Using this parameter, this default value can be overridden.
- **Defaul:** Log In.
- **Required:** no.

## abel_username
- The default label for the user login name field is “Email Address”. Using this parameter, this default value can be overridden..
- **Default:** Username or Email.
- **Required:** no.

## label_password
- The default label for the user password field is “Password”. Using this parameter, this default value can be overridden.
- **Default*:** Password.
- **Required:** no.

## label_remember
- Using this parameter, the default “Remember Me” label can be overridden.
- **Default:** Remember me.
- **Required:** no.

## redirect
- The user will be redirected to this URL after successful login.
- **Default:** Setting defined in “Memberships” options panel.
- **Required:** no.

## force_display
- Define whether or not the login form should be displayed when the user is already logged in. Possible values: yes, no.
- **Default:** no.
- **equired:** no.

# API
There is currently no ActiveMember360 API function equivalent for this shortcode.