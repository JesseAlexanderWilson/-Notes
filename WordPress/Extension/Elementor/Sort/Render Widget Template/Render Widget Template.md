[TOC]

Let’s start with several examples.

In each example we are going to register controls and then use the control value in the render functions.

# Text Rendering
The common rendering use is to print the value of the control.

In this example our widget will simply print the title the user entered:

```php
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

    protected function _register_controls() {

        $this->start_controls_section(
            'section_content',
            [
                'label' => __( 'Content', 'plugin-name' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => __( 'Title', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'placeholder' => __( 'Enter your title', 'plugin-name' ),

            ]
        );

        $this->end_controls_section();

    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        echo '<h3>' . $settings['title'] . '</h3>';
    }

    protected function _content_template() {
        ?>
        <h3>{{{ settings.title }}}</h3>
        <?php
    }

}
```

# Media Rendering

Elementor let’s you select an image using the media control defined in Control_Media class.
There are several ways to render media files:

## Simple Image Rendering

The simplest media rendering method is to print the image URL in a custom img tag.

You can also use the `wp_get_attachment_image()` function generate the image markup.

```php
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

    protected function _register_controls() {

        $this->start_controls_section(
            'section_content',
            [
                'label' => __( 'Content', 'plugin-name' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'image',
            [
                'label' => __( 'Choose Image', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->end_controls_section();

    }

    protected function render() {
        $settings = $this->get_settings_for_display();

        // Get image url
        echo '<img src="' . $settings['image']['url'] . '" alt="">';

        // Get image by id
        echo wp_get_attachment_image( $settings['image']['id'], 'thumbnail' );
    }

    protected function _content_template() {
        ?>
        <img src="{{{ settings.image.url }}}">
        <?php
    }

}
```

## Advance Image Rendering

The more advanced way to handle images is to combine the `Control_Media` with `Group_Control_Image_Size`.


```php
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

    protected function _register_controls() {

        $this->start_controls_section(
            'section_content',
            [
                'label' => __( 'Content', 'plugin-name' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'image',
            [
                'label' => __( 'Choose Image', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Image_Size::get_type(),
            [
                'name' => 'image',
                'default' => 'large',
                'separator' => 'none',
            ]
        );

        $this->end_controls_section();

    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings );
    }

    protected function _content_template() {
        ?>
        <#
        var image = {
            id: settings.image.id,
            url: settings.image.url,
            size: settings.image_size,
            dimension: settings.image_custom_dimension,
            model: view.getEditModel()
        };

        var image_url = elementor.imagesManager.getImageUrl( image );

        if ( ! image_url ) {
            return;
        }
        #>
        <img src="{{{ image_url }}}" />
        <?php
    }

}
```

# Repeater Rendering
Now lets try to render a repeater control where the user sets multiple fields:

```php
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

    protected function _register_controls() {

        $this->start_controls_section(
            'section_content',
            [
                'label' => __( 'Content', 'plugin-name' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'list',
            [
                'label' => __( 'List', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => [
                    [
                        'name' => 'text',
                        'label' => __( 'Text', 'plugin-name' ),
                        'type' => \Elementor\Controls_Manager::TEXT,
                        'placeholder' => __( 'List Item', 'plugin-name' ),
                        'default' => __( 'List Item', 'plugin-name' ),
                    ],
                    [
                        'name' => 'link',
                        'label' => __( 'Link', 'plugin-name' ),
                        'type' => \Elementor\Controls_Manager::URL,
                        'placeholder' => __( 'https://your-link.com', 'plugin-name' ),
                    ],
                ],
                'default' => [
                    [
                        'text' => __( 'List Item #1', 'plugin-name' ),
                        'link' => 'https://elementor.com/',
                    ],
                    [
                        'text' => __( 'List Item #2', 'plugin-name' ),
                        'link' => 'https://elementor.com/',
                    ],
                ],
                'title_field' => '{{{ text }}}',
            ]
        );

        $this->end_controls_section();

    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <ul>
        <?php foreach ( $settings['list'] as $index => $item ) : ?>
            <li>
                <?php
                if ( ! $item['link']['url'] ) {
                    echo $item['text'];
                } else {
                    ?><a href="<?php echo esc_url( $item['link']['url'] ); ?>"><?php echo $item['text']; ?></a><?php
                }
                ?>
            </li>
        <?php endforeach; ?>
        </ul>
        <?php
    }

    protected function _content_template() {
        ?>
        <ul>
        <#
        if ( settings.list ) {
            _.each( settings.list, function( item, index ) {
            #>
            <li>
                <# if ( item.link && item.link.url ) { #>
                    <a href="{{{ item.link.url }}}">{{{ item.text }}}</a>
                <# } else { #>
                    {{{ item.text }}}
                <# } #>
            </li>
            <#
            } );
        }
        #>
        </ul>
        <?php
    }

}
```

# Style Rendering

Another common rendering method is use the value of the control to style different HTML elements in the widget.

In this example our widget will print the title the user entered with the color he choose:

```php
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

    protected function _register_controls() {

        $this->start_controls_section(
            'section_content',
            [
                'label' => __( 'Content', 'plugin-name' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => __( 'Title', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'placeholder' => __( 'Enter your title', 'plugin-name' ),

            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'section_style',
            [
                'label' => __( 'Style', 'plugin-name' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'color',
            [
                'label' => __( 'Color', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#f00',
                'selectors' => [
                    '{{WRAPPER}} h3' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_section();

    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        echo '<h3>' . $settings['title'] . '</h3>';
    }

    protected function _content_template() {
        ?>
        <h3>{{{ settings.title }}}</h3>
        <?php
    }

}
```

Note that each element in the page includes a set of style settings that are printed as CSS rules under a unique element selector.

The widget can easily use the returned control value has a design rule.

Our test widget will add custom CSS rules to the page CSS file.

Those rules will affect only this widget as the use `{{WRAPPER}}` prefix meaning that only this instance of the widget will use this color.