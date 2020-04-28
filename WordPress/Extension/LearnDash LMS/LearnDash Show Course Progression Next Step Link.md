```php
<?php

/**
* LearnDash Show Course Progression Next Step Link
*
* By default LearnDash will hide the next link on Lessons/Topics until they
* are completed by the user. Using this filter you can override this default
* logic.
*
*@link https://www.learndash.com/support/docs/developers/hooks-and-filters/
*/

add_filter('learndash_show_next_link', 'learndash_show_next_link_proc', 10, 3);
function learndash_show_next_link_proc($show_next_link = false, $user_id = 0, $post_id = 0)
{
	// Example 1) Check if user is admin or group_leader
	if ((user_can($user_id, 'administrator')) || (user_can($user_id, 'group_leader')))
	{
		$show_next_link = true;
	}

	// Example 2) Check post type
	// $post_type = get_post_type( $post_id );
	// if ( $post_type == 'sfwd-lessons')
	//    $show_next_link = true;

	return $show_next_link;
}
```