```php
<?php
add_action(
    'elementor/element/before_section_end',
    function($section, $section_id, $args) {
        if( $section->get_name() == 'text-editor' && $section_id == 'section_style' ) {
            $section->remove_control('typography_typography');
        }
    },
    10,
    3
);
```
```php
<?php
/* {r} Dimensions > Width     (r)[d,t,m] */
/* {r} Max Width     (r)[d,t,m] */
/* {r} ––– */
/* {r} [c] Align     (r)[d,t,m] */
/* {r} [c] ––– */
add_action(
    'elementor/element/' . $this->id . '/section__layout__image/before_section_end',
    function ($element, $args) {
        $element->remove_responsive_control('layout__image__dimensions__width');
        $element->remove_responsive_control('layout__image__max_width');
        $element->remove_control('layout__image__max_width__hr');
        $element->remove_responsive_control('layout__image__align');
        $element->remove_control('layout__image__align__hr');
    },
    10,
    2
);
```