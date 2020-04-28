# Widget Structure

The widget structure has three main methods that we are going to use – the controls method and the two render methods:

```php
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

    protected function _register_controls() {}

    protected function render() {}

    protected function _content_template() {}

}
```