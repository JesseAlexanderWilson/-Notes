# Code
```php
add_filter( 'body_class', 'my_body_class' );

function my_body_class( $class ) {
    $class[] = 'my-front-end';
    return $class;
}
```

- [ ] Run snippet everywhere
- [ ] Only run in administration area
- [x] Only run on site front-end
- [ ] Only run once

Priority: 10

# Description
Inserts a CSS hook in the front-end for custom styles.