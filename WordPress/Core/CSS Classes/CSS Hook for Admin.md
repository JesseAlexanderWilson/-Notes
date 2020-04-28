# Code
```php
add_filter( 'admin_body_class', 'my_admin_body_class' );

/**
 * @param  String $classes Current body classes.
 * @return String          Altered body classes.
 */
function my_admin_body_class( $classes ) {
    return $classes . " my-admin";
}
```

- [ ] Run snippet everywhere
- [x] Only run in administration area
- [ ] Only run on site front-end
- [ ] Only run once

Priority: 10

# Description
Adds one or more classes to the body tag in the dashboard.