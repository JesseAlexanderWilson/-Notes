[TOC]

# Usage
This module enables you to autologin your contacts into your membership site. It can be used as a link in an email, for example, or as a target page for a “Thank You” page.

This module will auto-generate a password for contacts who do not yet have one. A default, non-random password may also be defined. See the parameter list for more information.

Just as a user can share his/her password with others, an autologin link can also be shared. As such, it is neither safer nor less safe than a regular, manual login.

# Example
Typical usage
```css
http://www.yoursite.com/?mbr_autologin=SECURITY_CODE
```
```css
http://www.yoursite.com/?mbr_autologin=SECURITY_CODE&redir=http://www.yoursite.com/thankyou
```
```css
http://www.yoursite.com/?mbr_autologin=SECURITY_CODE&assign_tags=234&redir=http://www.yoursite.com/thankyou
```
```css
http://www.yoursite.com/?mbr_autologin=SECURITY_CODE&assign_tags=123,234&nofirstlogin=1&redir=http://www.yoursite.com/thankyou
```
Autologin URL as your ActiveCampaign Form Thank You Page URL or for use in an email link
```css
http://www.yoursite.com/?mbr_autologin=SECURITY_CODE&assign_tags=234&id=%SUBSCRIBERID%&redir=http://www.yoursite.com/thankyou
```
```css
http://www.yoursite.com/?mbr_autologin=SECURITY_CODE&assign_tags=123,234&email=%EMAIL%&redir=http://www.yoursite.com/thankyou
```

# Parameters
## mbr_autologin=SECURITY_CODE
This sets the action to be performed, mbr_autologin.

## autocreate=yes
This parameters instructs the autologin process to automatically create a new contact in your ActiveCampaign account once the Thank You page validation has taken place. This will only happen if a contact doesn’t already exist.

This option is only available for the external carts / payment platforms listed above for which a secure autologin is available.

By default, this option is set to `yes` and need not be specified. If you do not want this functionality to be used, specify `autocreate=no`.

When a contact record doesn’t yet exist, a “skeleton” contact record will be created consisting of only the email address.

## tid=234
[DEPRECATED, please use “assign_tags”]

Additional parameter to have the plugin to assign the user one or more tags during the auto-login process. To assign multiple tags, separate them with commas.

## assign_tags=123
Additional parameter to have the plugin assign one or more tags to the user during the auto-login process. To assign multiple tags, separate them with commas.

## remove_tags=345
Additional parameter to have the plugin remove one or more tags previously assigned to the user during the auto-login process. To remove multiple tags, separate them with commas. Please note that during processing, any tags defined with the `remove_tags` parameter will be removed first and tags defined in `assign_tags` will be added subsequently.

## assign_automations=567
Additional parameter to have the plugin assign a contact to one or more automations during the auto-login process. To assign to multiple automations, separate them with commas.

## remove_automations=789
Additional parameter to have the plugin remove a contact from one or more automations to which they had previously been assigned. To remove from multiple automations, separate them with commas. Please note that during processing, any automation defined with the `remove_automations` parameter will be removed first and automations defined in `assign_automations` will be assigned subsequently.

## subscribe_lists=234
Additional parameter to have the plugin subscribe a contact to one or more lists during the auto-login process. To subscribe to multiple lists, separate them with commas.

## unsubscribe_lists=456
Additional parameter to have the plugin unsubscribe a contact from one or more lists to which they had previously been subscribed. To unsubscribe from multiple lists, separate them with commas. Please note that during processing, any lists defined with the `unsubscribe_lists` parameter will be removed first and lists defined in `subscribe_lists` will be subscribed subsequently.

## default_pass=secret
This defines a default password for all users who do not yet have a password in their contact record. You may define any word of your choice.

## nofirstlogin=x
Any value can be specified, enabling you to override any actions defined for first time logins.in the `Plugin Options` panel.

## redir=http://yousite.com/thankyou/
This specifies an alternate landing page upon login. Please note that most browsers will not correctly interpret the `redir` URL unless it is placed last in the URL.

Please ensure that this parameter is placed last in your link / URL to prevent some browser from interpreting the information incorrectly.

In some cases, the full `redir` URL may not be parsed correctly. In those cases, please use a relative URL, i.e. instead of `http://yousite.com/thankyou/`, use `/thankyou/`.