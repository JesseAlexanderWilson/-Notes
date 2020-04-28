```css+php
<?php
add_action( 'wp_head', function () { ?>
    <style>

        .my-front-end.oceanwp-theme .entry-title {
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
Hides title for single entries.

# Tags
`css`