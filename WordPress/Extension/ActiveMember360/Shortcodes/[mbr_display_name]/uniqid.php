function my_mbr_display_name_hook( $display_name, $first_name, $last_name, $arrCONTACT ) {
    return "s";
}
add_filter( 'mbr_display_name', 'my_mbr_display_name_hook', 10, 4 );