# [Elementor] Resize Control Unit

## Code
```php+HTML
<?php
add_action(
    'elementor/editor/after_enqueue_styles',
    function () {
    ?>
      	<style>
            #elementor-panel .elementor-control-unit-5 {
                width: 320px;
            }
      	</style>
    <?php
    },
    11,
    1
);
```

- [ ] Run snippet everywhere
- [x] Only run in administration area
- [ ] Only run on site front-end
- [ ] Only run once

### Priority
10

## Description
Extends control unit's text field so ACF fields can be read.

## Tags