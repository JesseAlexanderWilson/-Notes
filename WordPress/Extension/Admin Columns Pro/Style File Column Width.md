# Code
```css+php
<?php
add_action( 'wp_head', function () { ?>
    <style>

        .acp-ie-value {
            width: 100% !important;
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
Sets the File column to 100%.

# Tags
`css`