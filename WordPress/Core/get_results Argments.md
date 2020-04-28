`wpdb`'s `get_results` method takes an optional second argument that lets you specify how the data is returned. The default return is an object. But you can also set it to...

OBJECT - result will be output as a numerically indexed array of row objects.

OBJECT_K - result will be output as an associative array of row objects, using first column's values as keys (duplicates will be discarded).

```
Array
(
    [Approach] => stdClass Object
        (
            [post_title] => Approach
        )

    [Text Her to Bed] => stdClass Object
        (
            [post_title] => Text Her to Bed
        )

    [Date Blueprint] => stdClass Object
        (
            [post_title] => Date Blueprint
        )

    [Converse] => stdClass Object
        (
            [post_title] => Converse
        )

    [Checkpoints] => stdClass Object
        (
            [post_title] => Checkpoints
        )

    [Arouse] => stdClass Object
        (
            [post_title] => Arouse
        )

    [Attract] => stdClass Object
        (
            [post_title] => Attract
        )

)
```

ARRAY_A - result will be output as an numerically indexed array of associative arrays, using column names as keys.
```
Array
(
    [0] => Array
        (
            [post_title] => Approach
        )

    [1] => Array
        (
            [post_title] => Text Her to Bed
        )

    [2] => Array
        (
            [post_title] => Date Blueprint
        )

    [3] => Array
        (
            [post_title] => Converse
        )

    [4] => Array
        (
            [post_title] => Checkpoints
        )

    [5] => Array
        (
            [post_title] => Arouse
        )

    [6] => Array
        (
            [post_title] => Attract
        )

)
```
ARRAY_N - result will be output as a numerically indexed array of numerically indexed arrays.