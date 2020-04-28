Disable Data Export
Run snippet everywhere
Disable BuddyPress user personal Data Export setting.

```php
add_filter(
    'bp_settings_show_user_data_page',
    '__return_false'
);
```