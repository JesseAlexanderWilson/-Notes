```php
<?php

$query = "
    SELECT
        post_title
    FROM
        wp_posts
    WHERE
        post_type = 'sfwd-courses'
        AND
        post_status NOT IN ('trash', 'auto-draft', 'inherit')
    ";

global $wpdb;
$rows = $wpdb->get_results($query, ARRAY_A);

foreach($rows as $row) {
    $courses[] = $row['post_title'];
}
```