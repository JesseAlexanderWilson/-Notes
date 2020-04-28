Modify wp-config.php in the root of your local install.

```php
define('WP_HOME',  "http://{$_SERVER['HTTP_HOST']}");
define('WP_SITEURL', "http://{$_SERVER['HTTP_HOST']}");

ob_start( 'ob_replace_home_url' );
function ob_replace_home_url( $content ) {
    $home_urls = array(
        'http://site.testing.foo.com',
        'http://site.foo.com',
        'http://site.authoring.testing.foo.com',
        'http://site.authoring.foo.com',
    );

    $content = str_replace( $home_urls, WP_HOME, $content );

    return $content;
}
```
Source
https://wordpress.org/support/article/running-a-development-copy-of-wordpress/