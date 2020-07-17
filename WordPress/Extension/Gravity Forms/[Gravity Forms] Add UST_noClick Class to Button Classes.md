# [Gravity Forms] Add UST_noClick Class to Button Classes

## Code
```php
<?php
add_filter(
	'gform_submit_button',
	function ( $button, $form ) {
		return str_replace(
			'gform_button button',
			'gform_button button UST_noClick',
			$button
		);
	},
	10,
	2
);
```

- [x] Run snippet everywhere
- [ ] Only run in administration area
- [ ] Only run on site front-end
- [ ] Only run once

### Priority
10

## Description

Add UST_noClick to Gravity Forms Button Classes.

**Source**
[https://salferrarello.com/apply-bootstrap-classes-to-gravity-forms-button/﻿](https://salferrarello.com/apply-bootstrap-classes-to-gravity-forms-button/)

## Tags