```php
<?php

function makeNested($source) {
    $nested = array();

    foreach ( $source as &$s ) {
        if ( is_null($s['parent_id']) ) {
            // no parent_id so we put it in the root of the array
            $nested[] = &$s;
        }
        else {
            $pid = $s['parent_id'];
            if ( isset($source[$pid]) ) {
                // If the parent ID exists in the source array
                // we add it to the 'children' array of the parent after initializing it.

                if ( !isset($source[$pid]['children']) ) {
                    $source[$pid]['children'] = array();
                }

                $source[$pid]['children'][] = &$s;
            }
        }
    }
    return $nested;
}
```