# [Better WordPress Minify] Improve Enqueued Files Table UX
```php
<?php
  add_action( 'admin_head', function () { ?>
    <style>
    
				/* Set table height */
        .bwp-minify-table-scroller {
    				height: 480px;
        }
    

        /* Widen script src column */
        .bwp-minify_page_bwp_minify_manage .bwp-minify-detector-table td input {
            width: 600px;
        }

        /* Widen columns */
        .bwp-minify_page_bwp_minify_manage td:first-child input {
            width: 220px !important;
        }

        /* Remove border spacing and widen plus monospace font */
        .bwp-minify_page_bwp_minify_manage table {
            width: 100%;
            border-spacing: 0px !important;
            font-family: monospace;
        }

        /* Reduce row padding */
        .bwp-minify_page_bwp_minify_manage .bwp-minify-detector-table td {
            padding: 2px 5px;
        }

        /* Row banding */
        .bwp-minify_page_bwp_minify_manage tr:nth-child(even) {
            background: #f3f3f3;
        }

        .bwp-minify_page_bwp_minify_manage .my_size {
            text-align: right;
        }

        .bwp-minify_page_bwp_minify_manage .my_media,
        .bwp-minify_page_bwp_minify_manage .my_action {
            text-align: center;
        }

    </style>
<?php } );
```

- [ ] Run snippet everywhere
- [x] Only run in administration area
- [ ] Only run on site front-end
- [ ] Only run once

### Priority
10

## Description

## Tags