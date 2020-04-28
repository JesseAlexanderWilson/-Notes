# Create the Widget

We are now going to create the widget itself.

This widget will be a PHP class extending the core WordPress class `WP_Widget`.

Basically, our widget will be defined this way.

This code gives WordPress all the information the system needs to be able to use the widget:

1. The **constructor**, to initiate the widget.
1. The `form()` **function** to create the widget form in the administration.
1. The `update()` **function**, to save widget data during edition.
1. And the `widget()` **function** to display the widget content on the front-end.

```php
<?php

// The widget class
class My_Custom_Widget extends WP_Widget {

    // Main constructor
    public function __construct() {
        /* ... */
    }

    // The widget form (for the backend )
    public function form($instance) {
        /* ... */
    }

    // Update widget settings
    public function update($new_instance, $old_instance) {
        /* ... */
    }

    // Display the widget
    public function widget($args, $instance) {
        /* ... */
    }

}

// Register the widget
function my_register_custom_widget() {
    register_widget('My_Custom_Widget');
}
add_action('widgets_init', 'my_register_custom_widget');

?>
```