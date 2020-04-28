```php
<?php

$this->add_control(
    'b_inherits_a',
    [
        'label'     => __( 'Inherit From Sibling A?', 'your-text-domain' ),
        'type'      => Controls_Manager::SWITCHER,
        'default'   => 'yes',
        'selectors' => [
            '(desktop){{WRAPPER}} .sibling-b' => 'text-align: {{a_alignment.VALUE || a_alignment.DEFAULT}};', //controls default value
            '(tablet){{WRAPPER}} .sibling-b'  => 'text-align: {{a_alignment_tablet.VALUE || "center" }};', //hard coded value
            '(mobile){{WRAPPER}} .sibling-b'  => 'text-align: {{a_alignment_mobile.VALUE || "left" }};',
        ],
    ]
);
```