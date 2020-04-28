```php+HTML
<?php
add_action( 'admin_init', 'my_child_plugin_has_parent_plugin' );

function my_child_plugin_has_parent_plugin() {

    $is_admin             = is_admin();
    $can_activate_plugins = current_user_can( 'activate_plugins' );
    $parent_plugin_active = ! is_plugin_active( 'parent-plugin/parent-plugin.php' );

    if ( $is_admin && $can_activate_plugins && $parent_plugin_active ) {

        add_action( 'admin_notices', 'my_child_plugin_notice' );

        deactivate_plugins( plugin_basename( __FILE__ ) );

        $activate = $_GET['activate'];

        if ( isset( $activate ) ) {
            unset( $activate );
        }
    }
}

function my_child_plugin_notice() {
    ?>
    <div class="error">
        <p>
            Sorry, but Child plugin requires the Parent plugin to be installed and active.
        </p>
    </div>
    <?php
}
```
