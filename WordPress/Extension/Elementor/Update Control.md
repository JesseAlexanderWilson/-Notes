```php
<?php
/* {r} HTML Tag     (r)[d,t,m] */
add_action(
    'elementor/element/' . $this->id . '/section__content__heading/before_section_end',
    function (
        $element,
        $args
    ) {
        $element->update_control(
            'content__heading__html_tag',
            [
                'default' => 'h3',
            ]
        );
    },
    10,
    2
);
```