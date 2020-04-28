```css+php
<?php
// Makes Elementor's Shortcode input fields responsive to stop horizontal scroll.
//
// Only run in administration area

add_action( 'admin_head', function () { ?>
    <style>

        .fixed .elementor-shortcode-input {
            width: 100%;
            min-width: 100%;
        }

    </style>
<?php } );
```