# Code
```css+php
<?php
add_action( 'wp_head', function () { ?>
    <style>

        .mbr-login-error {
            color:            #721c24;
            background-color: #f8d7da;

            border:           1px solid transparent;
            border-color:     #f5c6cb;
            border-radius:    .25rem;

            position:         relative;
            padding:          .75rem 1.25rem;
            margin-bottom:    1rem;
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
Styles error alert.

# Tags
`css`