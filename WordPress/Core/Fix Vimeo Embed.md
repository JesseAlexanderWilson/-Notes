```php
function add_vimeo_oembed_correctly() {

    wp_oembed_add_provider( '#http://(www\.)?vimeo\.com/.*#i', 'http://vimeo.com/api/oembed.{format}', true );

}

add_action('init', 'add_vimeo_oembed_correctly');
```