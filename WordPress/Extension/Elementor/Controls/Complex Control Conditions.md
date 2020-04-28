```php
<?php

// A is shown always
$this->add_control(
    'a',
    [
        'label'        => 'A',
        'type'         => Controls_Manager::SWITCHER,
        'label_off'    => 'Off',
        'label_on'     => 'On',
        'return_value' => 'on',
    ]
);

// B is shown if A is on using 'condition parameter
$this->add_control(
    'b',
    [
        'label'        => 'B',
        'type'         => Controls_Manager::SWITCHER,
        'label_off'    => 'Off',
        'label_on'     => 'On',
        'return_value' => 'on',
        'condition'    => [
            'a' => 'on',
        ],
    ]
);

// C is shown always
$this->add_control(
    'c',
    [
        'label'        => 'C',
        'type'         => Controls_Manager::SWITCHER,
        'label_off'    => 'Off',
        'label_on'     => 'On',
        'return_value' => 'on',
    ]
);

// D is shown if C is on AND ( (A is on AND B is off) OR (A is off) ) using conditions parameter
$this->add_control(
    'd',
    [
        'label'        => 'D',
        'type'         => Controls_Manager::SWITCHER,
        'label_off'    => 'Off',
        'label_on'     => 'On',
        'return_value' => 'on',
        'conditions'   => [
            'terms' => [
                [
                    'name'  => 'c',
                    'value' => 'on',
                ],
                [
                    'relation' => 'or',
                    'terms'    => [
                        [
                            'name'     => 'a',
                            'operator' => '!=',
                            'value'    => 'on',
                        ],
                        [
                            'terms' => [
                                [
                                    'name'  => 'a',
                                    'value' => 'on',
                                ],
                                [
                                    'name'  => 'b',
                                    'value' => 'off',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ]
);
```