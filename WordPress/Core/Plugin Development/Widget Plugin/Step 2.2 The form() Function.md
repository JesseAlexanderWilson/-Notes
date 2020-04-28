# The `form()` Function

This function is the one that creates the widget form settings in the WordPress admin area (either under `Appearance > Widgets` or `Appearance > Customize > Widgets`).

This is were you’ll enter your data to be displayed on the the website.

So I’ll explain how you can add text fields, text areas, select boxes and checkboxes to your widget form settings.

This code is simply adding 5 fields to the widget (**Title**, **text**, **textarea**, **select**, and **checkbox**).

So first you define the defaults for your widget, then the next function parses the current settings defined/saved for your widget with the defaults (so any settings that don’t exist would revert to the default, like when you first add a widget to your sidebar).

And last is the HTML for each field.

Notice the use of `esc_attr()` when adding the form fields, this is done for security reasons.

Whenever you `echo` a user-defined variable on your site you should make sure it’s first sanitized.

```html+php
<?php

// The widget form (for the backend)
public function form($instance) {

    // Set widget defaults
    $defaults = array(
        'title'    => '',
        'text'     => '',
        'textarea' => '',
        'checkbox' => '',
        'select'   => '',
    );

    // Parse current settings with defaults
    extract(wp_parse_args((array) $instance, $defaults)); ?>

    <?php // Widget Title ?>
    <p>
        <label for="<?php echo esc_attr($this->get_field_id('title')); ?>">
            <?php _e('Widget Title', 'text_domain'); ?>
        </label>
        <input
            class="widefat"
            id="<?php echo esc_attr($this->get_field_id('title')); ?>"
            name="<?php echo esc_attr($this->get_field_name('title')); ?>"
            type="text"
            value="<?php echo esc_attr($title ); ?>"
        />
    </p>

    <?php // Text Field ?>
    <p>
        <label for="<?php echo esc_attr($this->get_field_id('text')); ?>">
            <?php _e('Text:', 'text_domain'); ?>
        </label>
        <input
            class="widefat"
            id="<?php echo esc_attr($this->get_field_id('text')); ?>"
            name="<?php echo esc_attr($this->get_field_name('text')); ?>"
            type="text"
            value="<?php echo esc_attr($text); ?>"
        />
    </p>

    <?php // Textarea Field ?>
    <p>
        <label for="<?php echo esc_attr($this->get_field_id('textarea')); ?>">
            <?php _e('Textarea:', 'text_domain'); ?>
        </label>
        <textarea
            class="widefat"
            id="<?php echo esc_attr($this->get_field_id('textarea')); ?>"
            name="<?php echo esc_attr($this->get_field_name('textarea')); ?>"
        >
            <?php echo wp_kses_post($textarea); ?>
        </textarea>
    </p>

    <?php // Checkbox ?>
    <p>
        <input
            id="<?php echo esc_attr($this->get_field_id('checkbox')); ?>"
            name="<?php echo esc_attr($this->get_field_name('checkbox')); ?>"
            type="checkbox"
            value="1" <?php checked('1', $checkbox); ?> />
        <label for="<?php echo esc_attr( $this->get_field_id('checkbox')); ?>">
            <?php _e('Checkbox', 'text_domain'); ?>
        </label>
    </p>

    <?php // Dropdown ?>
    <p>
        <label for="<?php echo $this->get_field_id('select'); ?>">
            <?php _e('Select', 'text_domain'); ?>
        </label>
        <select
            name="<?php echo $this->get_field_name('select'); ?>"
            id="<?php echo $this->get_field_id('select'); ?>"
            class="widefat"
        >
        <?php // Your options array
            $options = array(
                ''         => __('Select', 'text_domain'),
                'option_1' => __('Option 1', 'text_domain'),
                'option_2' => __('Option 2', 'text_domain'),
                'option_3' => __('Option 3', 'text_domain'),
            );

            // Loop through options and add each one to the select dropdown
            foreach ($options as $key => $name) {
                echo
                '<option
                    value="' . esc_attr($key) . '"
                    id="' . esc_attr($key) . '" '.
                    selected($select, $key, false) .
                '>' .
                    $name .
                '</option>';
            }
        ?>
        </select>
    </p>
<?php
}
```
