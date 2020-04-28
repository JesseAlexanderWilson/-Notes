```php
<?php
add_filter('learndash_template', 'my_replacement_learndash_templates', 90, 5);

function my_replacement_learndash_templates( 
    $filepath,
    $name,
    $args,
    $echo,
    $return_file_path
) {
    if ( 'course' == $name ) {
        $filepath = plugin_dir_path( __FILE__ ) . 'src/templates/course.php';
    }
    if ( 'lesson' == $name ) {
        $filepath = plugin_dir_path( __FILE__ ) . 'src/templates/lesson.php';
    }

    return $filepath;
}
?>
```