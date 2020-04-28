```php
<?php
// Tell elementor not to load google fonts for me
add_filter( 'elementor/frontend/print_google_fonts', '__return_false' );
```