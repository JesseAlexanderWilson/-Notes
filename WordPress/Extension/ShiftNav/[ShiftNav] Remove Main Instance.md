# Code
```js+php
<?php

// Remove Menu Location
remove_action('init', 'shiftnav_register_theme_locations');

// Remove Customizer Panel
add_filter(
    'customize_register',
    function($wp_customize) {
        $wp_customize->remove_panel('shiftnav_config_shiftnav-main');
    }
);

// Hide Toggle Button
add_action( 'wp_head', function () { ?>
    <style>

       .my-front-end #shiftnav-toggle-main-button {
	       display: none;
	   }

    </style>
<?php } );

// Remove Toggle Button HTML
add_action('wp_footer', function () { ?>
    <script>
    
        (function($) {
            $('.my-front-end #shiftnav-toggle-main-button').remove();
        })(jQuery);
                                     
    </script>
<?php } );
```

- [x] Run snippet everywhere
- [ ] Only run in administration area
- [ ] Only run on site front-end
- [ ] Only run once

Priority: 10

# Description
Remove menu location, customizer panel, and toggle button for main instance.

# Tags
`javascript` `css`