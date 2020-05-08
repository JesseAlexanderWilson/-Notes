# [Elementor] Resize Text Editor

```php
<?php
add_action(
    'elementor/editor/after_enqueue_styles',
    function () {
    ?>
      	<style>
            #elementor-panel .wp-editor-container {
                height: 640px !important;
            }
  
  					#elementor-panel .wp-editor-area {
  					    height: 603px !important;
  					}

            #elementor-panel .mce-edit-area,
            #elementor-panel .mce-edit-area iframe {
                height: 546px !important;
            }
      	</style>
    <?php
    },
    11,
    1
);
```

