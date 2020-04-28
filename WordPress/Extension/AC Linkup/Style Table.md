```css+php
<?php
add_action( 'admin_head', function () { ?>
    <style>

        .settings_page_ac_linkup input,
        .settings_page_ac_linkup input select,
        .settings_page_ac_linkup input textarea {
            font-size: 12px;
        }

        /* Set form fields width to 100% */
        .settings_page_ac_linkup table input.regular-text {
           width: 100% !important;
        }

        /* Align table titles */
        .settings_page_ac_linkup .producttitle,
        .settings_page_ac_linkup .producname {
            margin-right: 1%;
        }

        /* Exact CB Product Name */
        .settings_page_ac_linkup #multiple_product > .row > div:nth-child(1) {
            width: 13%;
        }

        /* Add To List */
        .settings_page_ac_linkup #multiple_product > .row > div:nth-child(2) {
            width: 8%;
        }

        /* Add Tag */
        .settings_page_ac_linkup #multiple_product > .row > div:nth-child(3) {
            width: 34%;
        }

        /* If cancel, then add tag */
        .settings_page_ac_linkup #multiple_product > .row > div:nth-child(4) {
            width: 16%;
        }

         /* If REFUND, then add tag */
        .settings_page_ac_linkup #multiple_product > .row > div:nth-child(5) {
            width: 16%;
        }

    </style>
<?php } );

```
