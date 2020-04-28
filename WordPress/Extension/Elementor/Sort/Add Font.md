```php
<?php
add_filter( 'elementor/fonts/additional_fonts', function ( $additional_fonts ) {
    $additional_fonts['Noto Sans TC'] = 'earlyaccess';
    return $additional_fonts;
} );
```