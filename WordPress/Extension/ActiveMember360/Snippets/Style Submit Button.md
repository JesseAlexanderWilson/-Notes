# Code
```css+php
<?php
add_action( 'wp_head', function () { ?>
    <style>

        .mbr-submit #wp-submit,
        .mbr-submit #mbr-submit {
            border-radius:  0 !important;
            text-transform: capitalize !important;
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
Styles submit buttons.

# Tags
`css`