# The `update()` Function

The `update()` function is really simple.

As WordPress core developers added a really powerful widgets API, we only need to add this code to update each field.

As you can see all we have to do is check for each setting and if it’s not empty save it into the database.

Notice the use of the `wp_strip_all_tags()` and `wp_kses_post()` functions, these are used to sanitize the data before it’s added to the database.

Whenever you are inserting ANY user submitted content into a database you need to make sure it doesn’t have any malicious code.

The first function `wp_strip_all_tags` removes everything except basic text so you can use it for any fields where the end value is a string and the second function `wp_kses_post()` is the same function used for the post content and it removes all tags besides basic html like links, spans, divs, images, etc.

```php
<?php

// Update widget settings
public function update($new_instance, $old_instance) {
    $instance = $old_instance;

    $instance['title']    = isset($new_instance['title']) ? wp_strip_all_tags($new_instance['title']) : '';
    $instance['text']     = isset($new_instance['text']) ? wp_strip_all_tags($new_instance['text']) : '';
    $instance['textarea'] = isset($new_instance['textarea']) ? wp_kses_post($new_instance['textarea']) : '';
    $instance['checkbox'] = isset($new_instance['checkbox']) ? 1 : false;
    $instance['select']   = isset($new_instance['select']) ? wp_strip_all_tags($new_instance['select']) : '';

    return $instance;
}

?>
```