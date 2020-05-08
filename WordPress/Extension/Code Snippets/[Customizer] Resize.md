# [Customizer] Resize

# Code
```css+php
<?php

add_action('customize_controls_print_styles', function () { ?>

    <style>
    
        @media screen and (min-width: 1667px) {
            .wp-full-overlay.expanded {
                margin-left: 30% !important;
            }
        }

        .wp-full-overlay-sidebar {
            width:     30% !important;
            max-width: 712px !important;
        }
                                       
    </style>
    
<?php } );
```

- [ ] Run snippet everywhere
- [x] Only run in administration area
- [ ] Only run on site front-end
- [ ] Only run once

Priority: 10

# Description
Resize Customizer.

# Tags
`css`