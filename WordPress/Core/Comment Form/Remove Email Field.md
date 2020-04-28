```php+HTML
<?php
add_filter('comment_form_field_email', '__return_false');

add_action( 'wp_head', function () { ?>
    <style>

        .comment-notes {
            display:none;
        }

    </style>
<?php } );
```