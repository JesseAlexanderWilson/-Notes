```js+php
<?php

add_action('wp_footer', function () { ?>
    
    <script>
    
        (function($) {
            
            var $element = $('.my-front-end .ld-course-navigation .learndash-not-available');
            
            $element.each(function() {
                
                var $this = $(this);
                
                var $access_date = $this
                    .find('.ld-status-waiting')
                    .data('ld-tooltip');
                
                $this.prepend(
                        '<div class="bb-ld-access-date">' +
                        $access_date +
                        '</div>'
                    );

            });
            
        })( jQuery );

    </script>
        
<?php } );
```

- [ ] Run snippet everywhere
- [ ] Only run in administration area
- [x] Only run on site front-end
- [ ] Only run once

Priority: 10

# Description
Add full access date to the Navigator Widget.

# Tags
`javascript`