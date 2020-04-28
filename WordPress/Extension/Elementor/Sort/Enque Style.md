```php
<?php
/**
 * Widgets Styles
 *
 * Include widgets styles files and register them
 *
 * @since 1.0.1
 *
 * @access public
 */
public function widget_styles() {

    wp_enqueue_style(
        'elementor-bb-icon-list',
        plugins_url('elementor-bb-extension/widgets/icon-list/css/styles.css', dirname(__FILE__))
    );

}
```
Call in `init()` function,
```php
<?php
public function init() {

    add_action('elementor/editor/after_enqueue_styles', [$this, 'widget_styles']);

}
```