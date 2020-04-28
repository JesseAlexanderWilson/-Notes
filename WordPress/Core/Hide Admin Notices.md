Hide Admin Notices
Hides admin notifications.
Only run in administration area

```php+HTML
<?php
add_action( 'admin_head', function () { ?>
    <style>

        .notice-error,
        .notice-warning,
      	.bsf-update-nag,
        .dce-generic-notice,
        .ac-notice.notice,
        .update-nag.bsf-update-nag,
        .notice.elementor-message {
            display: none !important;
        }
    
    </style>
<?php } );
```