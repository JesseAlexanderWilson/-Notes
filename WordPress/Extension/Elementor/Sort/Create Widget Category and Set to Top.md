```php
<?php
add_action('elementor/elements/categories_registered', function (\Elementor\Elements_Manager $elements_manager) {

    // add custom categories
    $category_prefix = 'prefix-';

    $elements_manager->add_category(
        $category_prefix . 'widgets',
        [
            'title' => __('Category Name', 'plugin-name'),
            'icon'  => 'fa fa-plug'
        ]
    );

    // access private $categories member, and reorder it so custom category is first.
    $reorder_cats = function () use ($category_prefix) {
        uksort($this->categories, function ($keyOne, $keyTwo) use ($category_prefix) {
            if (substr($keyOne, 0, strlen($category_prefix)) == $category_prefix) {
                return -1;
            }

            if (substr($keyTwo, 0, strlen($category_prefix)) == $category_prefix) {
                return 1;
            }

            return 0;
        });

    };

    $reorder_cats->call($elements_manager);

});
```