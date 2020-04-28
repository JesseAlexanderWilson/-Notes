```js+php
<?php

add_action('wp_footer', function () { ?>
    
    <script>
    
        (function($) {
            
            $lesson = $('.my-front-end .ld-lesson-item');
            
            $lesson.each(function(index) {
            
                var $this = $(this);
                
                var $topics     = $this.children('.ld-lesson-item-expanded');
                var $has_topics = $topics.length > 0;
                
                if ($has_topics) {
                    
                    // Build Unique ID
                    var $topics_id = $topics.attr('id');
                    var $separator = '_';
                    var $instance  = index;
                    
                    var $topics_id_instance = $topics_id + $separator + $instance;
                    
                    // Set Unique ID
                    $topics.attr('id', $topics_id_instance);
                    
                    // Set Unique ID to Data Attribute
                    var $expand_button = $this.find('.ld-expand-button');
                    $expand_button.attr('data-ld-expands', $topics_id_instance);
                }

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
Appends unique ID to each lesson with a drop-down to allow duplicate Navigation Widgets on a single page.

# Tags
`javascript`