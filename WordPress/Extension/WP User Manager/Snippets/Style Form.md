# Code
```css+php
<?php
add_action( 'wp_head', function () { ?>
    <style>

        .wpum-form {
            font-size: .75em;
            border: 1px solid rgba(0,0,0,.1);
            color: #000;
            line-height: 1em;
            min-height: 35px;
            padding: 0;
            text-indent: .5em;
            background: #f8f9f9;
            transition: all .25s ease-in-out;
            font-family: inherit;
            width: 100%;
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
Styles registration page.

# Tags
`css`