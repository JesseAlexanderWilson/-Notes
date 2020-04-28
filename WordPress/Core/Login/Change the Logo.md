```css+php
function my_login_logo() { ?>
    <style>
        body.login {
            background: #222222;
        }
        body.login div#login h1 a {
            background-image: url('images/logo.png');
            background-size: 180px;
            background-position: center;
            width: 180px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );
```