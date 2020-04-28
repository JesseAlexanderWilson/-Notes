```php+HTML
<?php
add_action( 'wp_head', function () { ?>
    <style>

        a.custom-logo-link {
            pointer-events: none;
        }
    
    </style>
<?php } );
```