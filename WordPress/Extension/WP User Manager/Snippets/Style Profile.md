# Code
```css+php
<?php
add_action( 'wp_head', function () { ?>
    <style>

        /* Fix label padding */
        #wpum-profile #profile-content-about .profile-fields-table td.label {
            padding: 10px;
        }

        /* Hide about link */
        #wpum-profile .profile-navbar {
           display: none;
        }

        /* Set header image color */
        #wpum-profile #header-cover-image {
            background-color: #2d2d2d;
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
Styles profile page.

# Tags
`css`