```js
(function () {
    tinymce.PluginManager.add('twitter_button_plugin', function (editor, url) {
        editor.addButton('mce_tweet_button', {
            title: 'Insert tweet',
            icon: 'insert-tweet is-dashicon dashicons dashicons-twitter',
            onPostRender: function () {
                jQuery( '.is-dashicon' ).css( 'font-family', 'dashicons' );
            },
            onclick: function() {
                ...
            }
        });
    });
})();
```