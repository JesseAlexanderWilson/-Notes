```php
<?php
add_action(
    'elementor/element/before_section_end',
    function ($element, $section_id, $args) {

        if ('section_advanced' === $section_id || '_section_style' === $section_id) {

            $element->add_control(
                'control-name',
                [
                    'label' => __('Control Name', 'plugin-name'),
                    'type'  => \Elementor\Controls_Manager::TEXT,
                ]
            );

            // Get existing control
            $control = \Elementor\Plugin::instance()
                ->controls_manager
                ->get_control_from_stack(
                    $element->get_unique_name(),
                    'control-name'
                );

            // Add new option
            $control['label'] = __('Updated Control Name', 'plugin-name');

            // Update the control
            $element->update_control('control-name', $control);
        }
    },
    10,
    3
);
```