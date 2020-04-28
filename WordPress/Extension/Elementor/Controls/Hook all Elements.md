```php
<?php
add_action(
    'elementor/element/after_section_end',
    function( $section, $section_id ) {
    
        if ( 'section_advanced' === $section_id || '_section_style' === $section_id ) {
        
            #Start Custom Settings Section
            $section->start_controls_section(
                'my_custom',
                [
                    'label' => __( 'My Custom', 'plugin-name' ),
                    'tab' => \Elementor\Controls_Manager::TAB_ADVANCED,
                ]
            );
    
            $section->add_control(
                'control-name',
                [
                    'label' => __( 'Control Name', 'plugin-name' ),
                    'type' => \Elementor\Controls_Manager::TEXT,
                ]
            );
    
            #End Custom Settings Section
            $section->end_controls_section();
        }
    },
    10,
    2
);
```