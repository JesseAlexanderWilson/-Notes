# The Constructor

The constructor is the part of code that defines the widget name and main arguments, below is an example of what it may look like.

Please note the use of `__()` around the widget name, this function is use by WordPress for translation.

I really recommend you to always use these functions, to make your theme fully translatable.

And the use of the `customize_selective_refresh` parameter allows the widget to be refreshed under `Appearance > Customize` when editing the widget so instead of refreshing the entire page only the widget is refreshed when making changes.

```php
<?php

// Main constructor
public function __construct() {
    parent::__construct(
        'my_custom_widget',
        __('My Custom Widget', 'text_domain'),
        array(
            'customize_selective_refresh' => true,
        )
    );
}

?>
```