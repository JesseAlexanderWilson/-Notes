```php+HTML
<?php
add_action(
    'admin_head',
    function () {
        ?>
        <style>
            .ajax-editor-update .CodeMirror {
                height: 750px !important;
            }
        </style>
        <?php
    }
);
?>
```