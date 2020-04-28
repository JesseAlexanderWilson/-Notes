```php
<?php

// Create a multidimensional array to conatin a list of items and parents
$menu = array(
    'items' => array(),
    'parents' => array()
);

// Builds the array lists with data from the menu table
foreach ($rows as $items) {
    // Creates entry into items array with current menu item id ie. $menu['items'][1]
    $menu['items'][$items['id']] = $items;

    // Creates entry into parents array. Parents array contains a list of all items with children
    $menu['parents'][$items['parent']][] = $items['id'];
}
```