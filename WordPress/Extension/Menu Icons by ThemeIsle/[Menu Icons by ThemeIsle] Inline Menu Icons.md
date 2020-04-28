# Code
```css+php
<?php

add_action( 'wp_head', function () { ?>
    <style>
        
        .my-front-end .menu-item i._mi {
            text-align: center;
            width: 1.25em;
        }
                                    
        .my-front-end .menu-item i._before,
        .my-front-end .rtl .menu-item i._after {
            margin-right: .5em;
        }
                                    
        .my-front-end .dropdown-menu li a.menu-link i {
            padding-right: 0px;
        }

    </style>
<?php } );
```

- [ ] Run snippet everywhere
- [ ] Only run in administration area
- [x] Only run on site front-end
- [ ] Only run once

Priority: 10

# Description
Set menu icons to a fixed width so they appear inline.

# Tags
`css`