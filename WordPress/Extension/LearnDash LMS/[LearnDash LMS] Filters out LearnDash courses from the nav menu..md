```php
<?php

/**
 * Filters out LearnDash courses from the nav menu.
 * @author WPDevLMS wpdevlms@gmail.com
 */
function wpdevlms_filter_courses($items, $menu, $args) {

    // change 'Top Menu' text according to your menu name.
    if (is_admin() || strtolower('x') != strtolower($menu->name)) {
        return $items;
    }

    if (!empty($items) && function_exists('sfwd_lms_has_access')) {

        $parent_id  = 0;
        $parent_key = 0;
        $user_id    = get_current_user_id();

        $total_courses     = 0;
        $no_access_courses = 0;

        foreach ($items as $key => $item) {

            // change 'My Courses' text according to your menu item name.
            if (strtolower('dating') == strtolower($item->title)) {
                $parent_id  = $item->ID;
                $parent_key = $key;
                continue;
            }

            if ($parent_id && $parent_id == $item->menu_item_parent) {

                $total_courses++;

                if (!sfwd_lms_has_access($item->object_id, $user_id)) {
                    $no_access_courses++;
                    unset($items[$key]);
                }
            }
        }

        if ($parent_id && $total_courses && $total_courses == $no_access_courses) {
            unset($items[$parent_key]);
        }
    }

    return $items;
}

add_filter('wp_get_nav_menu_items', 'wpdevlms_filter_courses', 999, 3);

```