## [ACF] Render Shortcodes of Declared Fields
```php
<?php
  function my_acf_format_value( $value, $post_id, $field ) {

    // Render shortcodes in all textarea values.
    return do_shortcode( $value );
}

// Apply to textarea fields.
add_filter('acf/format_value/type=text', 'my_acf_format_value', 10, 3);
add_filter('acf/format_value/type=url', 'my_acf_format_value', 10, 3);
```

- [x] Run snippet everywhere
- [ ] Only run in administration area
- [ ] Only run on site front-end
- [ ] Only run once

### Priority
10

## Description

[https://www.advancedcustomfields.com/resources/acf-format_value/﻿](https://www.advancedcustomfields.com/resources/acf-format_value/)

## Tags