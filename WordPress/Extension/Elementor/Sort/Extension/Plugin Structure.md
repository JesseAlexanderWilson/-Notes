[TOC]

# Plugin Structure

The main plugin class should have basic information about the extensions, to check basic requirements and to load the required files to activate the plugin functionality.

```php
<?php
final class Elementor_Test_Extension {

    const VERSION;
    const MINIMUM_ELEMENTOR_VERSION;
    const MINIMUM_PHP_VERSION;

    private static $_instance = null;
    public static function instance() {}

    public function __construct() {}
    public function init() {}
    public function includes() {}

}
Elementor_Test_Extension::instance();
```

## Single Instance

The plugin class should use a singleton design pattern to make sure it loads only once:

```php
<?php
final class Elementor_Test_Extension {

    private static $_instance = null;

    public static function instance() {

        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;

    }

}
Elementor_Test_Extension::instance();
```

## Constructor

The constructor should load localization functionality and initiate the plugin.

The init process should check for basic requirements and then then run the plugin logic.

Note that If one of the basic plugin requirements fails the plugin logic won’t run.

```php
<?php
final class Elementor_Test_Extension {

    public function __construct() {

        add_action( 'init', [ $this, 'i18n' ] );
        add_action( 'plugins_loaded', [ $this, 'init' ] );

    }

    public function i18n() {

        load_plugin_textdomain( 'elementor-test-extension' );

    }

    public function init() {

        // Plugin logic here...

    }

}
```

## Check if Elementor is Installed

As the extension extend Elementor functionality, it should check whether Elementor is installed and activated before loading the main functionality, using the following code:

```php
<?php
final class Elementor_Test_Extension {

    public function init() {

        // Check if Elementor installed and activated
        if ( ! did_action( 'elementor/loaded' ) ) {
            add_action( 'admin_notices', [ $this, 'admin_notice_missing_main_plugin' ] );
            return;
        }

    }

    public function admin_notice_missing_main_plugin() {

        if ( isset( $_GET['activate'] ) ) unset( $_GET['activate'] );

        $message = sprintf(
            /* translators: 1: Plugin name 2: Elementor */
            esc_html__( '"%1$s" requires "%2$s" to be installed and activated.', 'elementor-test-extension' ),
            '<strong>' . esc_html__( 'Elementor Test Extension', 'elementor-test-extension' ) . '</strong>',
            '<strong>' . esc_html__( 'Elementor', 'elementor-test-extension' ) . '</strong>'
        );

        printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );

    }

}
```

If Elementor is not installed and activated, an admin notice will be displayed and it won’t continue loading the functionality.

## Check for Elementor Version

Elementor extensions need to check for backwards compatibility with older Elementor versions.

It should check for minimum required Elementor version before loading the main functionality, using the following code:

```php
<?php
final class Elementor_Test_Extension {

    const MINIMUM_ELEMENTOR_VERSION = '2.0.0';

    public function init() {

        // Check for required Elementor version
        if ( ! version_compare( ELEMENTOR_VERSION, self::MINIMUM_ELEMENTOR_VERSION, '>=' ) ) {
            add_action( 'admin_notices', [ $this, 'admin_notice_minimum_elementor_version' ] );
            return;
        }

    }

    public function admin_notice_minimum_elementor_version() {

        if ( isset( $_GET['activate'] ) ) unset( $_GET['activate'] );

        $message = sprintf(
            /* translators: 1: Plugin name 2: Elementor 3: Required Elementor version */
            esc_html__( '"%1$s" requires "%2$s" version %3$s or greater.', 'elementor-test-extension' ),
            '<strong>' . esc_html__( 'Elementor Test Extension', 'elementor-test-extension' ) . '</strong>',
            '<strong>' . esc_html__( 'Elementor', 'elementor-test-extension' ) . '</strong>',
             self::MINIMUM_ELEMENTOR_VERSION
        );

        printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );

    }

}
```

If an old Elementor version is in use, an admin notice will be displayed and it won’t continue loading the functionality.

## Check for PHP Version

Elementor extensions should also check for minimum required PHP version.

Keep in mind that Elementor has it’s own minimum required PHP version, the extension should use a greater PHP version than the one Elementor is using.

You need to check the minimum required PHP version before loading the main functionality, using the following code:

```php
<?php
final class Elementor_Test_Extension {

    const MINIMUM_PHP_VERSION = '7.0';

    public function init() {

        // Check for required PHP version
        if ( version_compare( PHP_VERSION, self::MINIMUM_PHP_VERSION, '<' ) ) {
            add_action( 'admin_notices', [ $this, 'admin_notice_minimum_php_version' ] );
            return;
        }

    }

    public function admin_notice_minimum_php_version() {

        if ( isset( $_GET['activate'] ) ) unset( $_GET['activate'] );

        $message = sprintf(
            /* translators: 1: Plugin name 2: PHP 3: Required PHP version */
            esc_html__( '"%1$s" requires "%2$s" version %3$s or greater.', 'elementor-test-extension' ),
            '<strong>' . esc_html__( 'Elementor Test Extension', 'elementor-test-extension' ) . '</strong>',
            '<strong>' . esc_html__( 'PHP', 'elementor-test-extension' ) . '</strong>',
             self::MINIMUM_PHP_VERSION
        );

        printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );

    }

}
```

If an old PHP version is in use, an admin notice will be displayed and it won’t continue loading the functionality.

## Include Files

Only when all check have passed, the extension should load all the files required to run the plugin at the correct hooks.

It can be done using the following code:

```php
<?php
final class Elementor_Test_Extension {

    public function init() {

        // Add Plugin actions
        add_action( 'elementor/widgets/widgets_registered', [ $this, 'init_widgets' ] );
        add_action( 'elementor/controls/controls_registered', [ $this, 'init_controls' ] );
    }

    public function init_widgets() {

        // Include Widget files
        require_once( __DIR__ . '/widgets/test-widget.php' );

        // Register widget
        \Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor_Test_Widget() );

    }

    public function init_controls() {

        // Include Control files
        require_once( __DIR__ . '/controls/test-control.php' );

        // Register control
        \Elementor\Plugin::$instance->controls_manager->register_control( 'control-type-', new \Test_Control() );

    }
} 
```