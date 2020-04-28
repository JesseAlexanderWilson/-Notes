[TOC]

# Usage
This shortcode is designed to segment content on a page, post, excerpt or text widget by displaying the embedded content only to those contacts whose memberships or ActiveCampaign contact ID match the criteria passed as parameters. There are three variants, depending on the parameters used.

`[ELSE_is_for]` conditional branching is supported.

Shortcode nesting is supported:

- `[mbr_is_for1]` thru `[mbr_is_for19]`
- `[ELSE_is_for1]` thru `[ELSE_is_for19]`

# Example

Based on ActiveCampaign tag ID’s or tag NAMES:

```css
[mbr_is_for tags='123, 456, MY TAG NAME']
  /* content-content-content */
[ELSE_is_for]
  /* alternate-content-alternate-content */
[/mbr_is_for]
```
Based on ActiveCampaign tag ID’s or tag NAMES and excluding some contact ID’s:

```css
[mbr_is_for tags='123, 456, MY TAG NAME' exclude_cid='56, 43']
  /* content-content-content */
[ELSE_is_for]
  /* alternate-content-alternate-content */
[/mbr_is_for]
```
Based on ActiveCampaign cummulative contact ID’s and tag ID’s or tag NAMES:

```css
[mbr_is_for tags='123, 456, MY TAG NAME' only_cid='4321, 6543, 9876']
  /* content-content-content */
[ELSE_is_for]
  /* alternate-content-alternate-content */
[/mbr_is_for]
```
Based on ActiveCampaign contact ID’s and tag ID’s or tag NAMES and excluding some contact ID’s and tag ID’s or tag NAMES:

```css
[mbr_is_for only_cid='4321, 6543, 9876' tags='123, 456, MY TAG NAME' exclude_cid='23, 45, 56' exclude_tags='87, 65, MY TAG NAME 2']
  /* content-content-content */
[ELSE_is_for]
  /* alternate-content-alternate-content */
[/mbr_is_for]
```
When nesting `[mbr_is_for]` or `[mbr_not_for]` shortcodes within one another, add a number to reflect the nesting level:

```css
[mbr_not_for1 tags='987, 654, MY TAG NAME 2']
  [mbr_is_for2 tags='123, 456, MY TAG NAME']
    /* content-content-content */
  [ELSE_is_for]
    /* alternate-content-alternate-content */
  [/mbr_is_for2]
[/mbr_not_for1]
```

# Parameters
**Tag ID’s vs. tag names:**

We encourage the use of tag ID’s over tag names. Unless a tag is deleted, its tag ID can be considered persistent. Tag names, on the other hand, can be changed any time. Using a tag name that has been changed can lead your shortcode, hook or module to no longer work as expected.

## tags
- One or more tag ID’s or tag NAMES taken from ActiveCampaign. If more than one is entered, please separate with commas.
- **Default:** none.
- **Required:** yes, if contact ID’s are not passed.

## only_cid
- One or more contact ID’s taken from ActiveCampaign. If more than one is entered, please separate with commas.
- **Default:** none.
- **Required:** yes, if tag ID’s are not passed.

## exclude_tag
- One or more tag ID’s or tag NAMES taken from ActiveCampaign which, if passed, will exclude anyone with any of these tag ID’s or tag NAMES, regardless of whether other criteria is met. If more than one is entered, please separate with commas.
- **Default:** none.
- **Required:** no.

## exclude_cid
- One or more ActiveCampaign contact ID’s to be excluded. If more than one is entered, please separate with commas.
- **Default:** none.
- **Required:** yes, if tag ID’s are not passed.

## limit_else
- If used and set to “yes” and the user is not logged in or does not have any “membership tags”, this parameter will cause the “ELSE” part of the shortcode to be suppressed This “condition within the condition” can be useful in some scenarios where the “ELSE” portion of the shortcode is only applicable to members of the site only, for example excluding visitors who are not logged in.
- **Default:** ‘no’.
- **Required:** no.

## require_all_tags
- Specifies whether ALL tags must be present in order to satisfy the “IF” condition.
- **Default:** none.
- **Required:** no.

# API
To use this shortcode in your own PHP code, please use as follows:

```php
<?php

// can be passed as a PHP array
$tags = array(123, 234, 345);

// require a match on all tags
$mode = 'all';

IF (mbr_has_tags($tags, $mode)) :
  echo 'You have all tags';
ELSE :
  echo 'You do not have all tags';
ENDIF;

//======================

// can also be passed as CSV string
$tags = '123, 234, 345';

// require a match on any tag
$mode = 'any';

IF (mbr_has_tags($tags, $mode)) :
  echo 'You matched at least one tag';
ELSE :
  echo 'You did not match any tag';
ENDIF;

?>
```