```php
<?php
    $args = array(
        'post_type'   => 'sfwd-courses',
        'post_status' => 'publish',
        'order'       => 'DESC',
        'orderby'     => 'ID',
        'mycourses'   => false
    );

    $results = new WP_Query($args);
```