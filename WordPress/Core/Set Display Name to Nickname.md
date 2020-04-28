# Code
```css+php
function my_force_display_name_as_nickname() {
    if( current_user_can('editor') || current_user_can('administrator') ) { return; }
    
    $current_user_id = get_current_user_id();
    $user_meta       = get_user_meta($current_user_id);
    $nickname        = $user_meta['nickname'][0];
    
    // profile_update is called by wp_update_user, so we need to remove it before call, to avoid infinite recursion
    remove_action( 'profile_update', 'bb_force_display_name_as_nickname', 10 ); 
     
    wp_update_user(
        array(
            'ID'           => $current_user_id,
            'display_name' => $nickname
        )
    );
    add_action( 'profile_update', 'bb_force_display_name_as_nickname', 10 );
}
add_action('profile_update', 'bb_force_display_name_as_nickname');

add_action( 'wp_head', function () { ?>
	<style>

		.wpum-account-page .fieldset-user_displayname {
			display: none;
		}

	</style>
<?php } );
```

- [x] Run snippet everywhere
- [ ] Only run in administration area
- [ ] Only run on site front-end
- [ ] Only run once

Priority: 10

