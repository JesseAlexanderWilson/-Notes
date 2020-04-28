# Code
```css
add_action( 'admin_head', function () { ?>
    <style>

        .my-admin .wp-block-uagb-columns .uagb-column__inner-wrap {
            padding: 0px !important;
        }
                                       
        .my-admin .wp-block-uagb-columns [data-type="uagb/column"] {
            padding-left:  0px !important;
            padding-right: 0px !important;
        }
                                       
        .my-admin [data-type="uagb/column"] .editor-block-list__block-edit {
            margin-top:    0px !important;
            margin-bottom: 0px !important;
        }
                                       
        .my-admin [data-type="uagb/column"] .wp-block-image {
            margin-bottom: 0 !important
        }
                                       
        .my-admin .wp-block-uagb-columns .components-placeholder {
            padding: 0px; !important;
        }
                        
        /* Hide paragraph appender */
        .my-admin [data-type="uagb/column"] .block-editor-default-block-appender__content {
            display: none !important;
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
-

# Tags
`css`