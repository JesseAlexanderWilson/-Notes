# Code
```css+php
<?php
add_action( 'wp_head', function () { ?>
    <style>

        .my-front-end #learndash_course_status {
            display: none !important;
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
Hides LearnDash Progress bar.

# Tags
`css`