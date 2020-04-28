```css+php
<?php

add_action( 'admin_head', function () { ?>
    <style>

        .tools_page_p3-profiler .ui-dialog.noPadding {
            width:     1600px !important;
            top:       50% !important
            left:      calc( 50% + 160px ) !important;
            transform: translate( -50%, -50% ) translate( -80px );
        }

        .tools_page_p3-profiler #p3-scanner-dialog {
            height: 961px !important;
        }

        .tools_page_p3-profiler #p3-scan-frame {
            height: 900px;
        }

    </style>
<?php } );
```