```js+php
<?php

add_action('wp_footer', function () { ?>
    <script>
    
        (function($) {
            
            // Lessons
            $('.menu-item-object-sfwd-courses').has('.ld-is-current-item').addClass("active");
            $('.menu-item-object-sfwd-courses').has('.ld-is-current-item').addClass('current-menu-item');
            $('.sub-menu').has('.ld-is-current-item').css('display', 'block');
            
            // Topics
            $('.menu-item-object-sfwd-courses').has('.ld-is-current-lesson').addClass("active");
            $('.menu-item-object-sfwd-courses').has('.ld-is-current-lesson').addClass('current-menu-item');
            $('.sub-menu').has('.ld-is-current-lesson').css('display', 'block');
            
        })( jQuery );

    </script>
<?php } );
```

- [ ] Run snippet everywhere
- [ ] Only run in administration area
- [x] Only run on site front-end
- [ ] Only run once

Priority: 10

# Description
Activate top-level menu items.

# Tags
`javascript`