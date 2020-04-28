```php
<?php
// This hook enables you to influence and manipulate the WordPress field ‘display_name’ when the user is first created.

function my_mbr_display_name_hook( $display_name, $first_name, $last_name, $arrCONTACT ) {
    // In this simple example, we create a "display_name" consisting of first name and last name initial only.
    return ucfirst( trim( $first_name ) ) . ' ' . strtoupper( substr( trim( $last_name ), 0, 1 ) ) . '.';
}
add_filter( 'mbr_display_name', 'my_mbr_display_name_hook', 10, 4 );
?>
```