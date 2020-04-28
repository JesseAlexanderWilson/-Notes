WordPress by default hide errors for ajax request call.

This can be confirmed from the source file `wp-includes/load.php#L353`, here:

```php
if ( defined( 'XMLRPC_REQUEST' ) || defined( 'REST_REQUEST' ) || ( defined( 'WP_INSTALLING' ) && WP_INSTALLING ) || wp_doing_ajax() ) {
    @ini_set( 'display_errors', 0 );
}
```