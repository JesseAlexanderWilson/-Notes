```php
<?php

class LearnDash_Course_Navigation_Widget extends WP_Widget {
    
    /**
     * Setup Course Navigation Widget
     */
    function __construct() {
        $widget_ops = array(
            'classname' => 'widget_ldcoursenavigation', 
            'description' => sprintf( esc_html_x( 'LearnDash - %s Navigation. Shows lessons and topics on the current course.', 'LearnDash - Course Navigation. Shows lessons and topics on the current course.', 'learndash' ), LearnDash_Custom_Label::get_label( 'course' ) )
        );
        $control_ops = array(); //'width' => 400, 'height' => 350);
        parent::__construct( 'widget_ldcoursenavigation', sprintf( esc_html_x( '%s Navigation', 'Course Navigation Label', 'learndash' ), LearnDash_Custom_Label::get_label( 'course' ) ), $widget_ops, $control_ops );
    }


    /**
     * Displays widget
     *
     * @since 2.1.0
     *
     * @param  array $args     widget arguments
     * @param  array $instance widget instance
     * @return string          widget output
     */
    public function widget( $args, $instance ) {
        global $learndash_shortcode_used;

        //global $post;
        $post = get_post( get_the_id() );

        if ( ( ! is_a( $post, 'WP_Post' ) ) || ( empty( $post->ID ) ) || ( ! is_single() ) ) {
            return;
        }

        $course_id = learndash_get_course_id( $post->ID );
        if ( empty( $course_id ) ) {
            return;
        }

        //$course_price_type = learndash_get_course_meta_setting( $course_id, 'course_price_type' );
        // If the course price type is not 'open' and the user is not logged in then abort.
        //if ( ( 'open' !== $course_price_type ) && ( ! is_user_logged_in() ) ) {
        //	return;
        //}

        $instance['show_widget_wrapper'] = true;
        $instance['current_lesson_id'] = 0;
        $instance['current_step_id'] = 0;

        $lesson_query_args = array();
        $course_lessons_per_page = learndash_get_course_lessons_per_page( $course_id );
        if ( $course_lessons_per_page > 0 ) {
            if ( in_array( $post->post_type, array( 'sfwd-lessons', 'sfwd-topic', 'sfwd-quiz' ) ) ) {

                $instance['current_step_id'] = $post->ID;
                if ( 'sfwd-lessons' === $post->post_type ) {
                    $instance['current_lesson_id'] = $post->ID;
                } else if ( in_array( $post->post_type, array( 'sfwd-topic', 'sfwd-quiz') ) ) {
                    $instance['current_lesson_id'] = learndash_course_get_single_parent_step( $course_id, $post->ID, 'sfwd-lessons' );
                }

                if ( ! empty( $instance['current_lesson_id'] ) ) {
                    $course_lesson_ids = learndash_course_get_steps_by_type( $course_id, 'sfwd-lessons' );
                    if ( ! empty( $course_lesson_ids ) ) {
                        $course_lessons_paged = array_chunk( $course_lesson_ids, $course_lessons_per_page, true );
                        $lessons_paged = 0;
                        foreach ( $course_lessons_paged as $paged => $paged_set ) {
                            if ( in_array( $instance['current_lesson_id'], $paged_set ) ) {
                                $lessons_paged = $paged + 1;
                                break;
                            }
                        }

                        if ( ! empty( $lessons_paged ) ) {
                            $lesson_query_args['pagination'] = 'true';
                            $lesson_query_args['paged'] = $lessons_paged;
                        }
                    }
                } else if ( in_array( $post->post_type, array( 'sfwd-quiz' ) ) ) {
                    // If here we have a global Quiz. So we set the pager to the max number
                    $course_lesson_ids = learndash_course_get_steps_by_type( $course_id, 'sfwd-lessons' );
                    if ( ! empty( $course_lesson_ids ) ) {
                        $course_lessons_paged = array_chunk( $course_lesson_ids, $course_lessons_per_page, true );
                        $lesson_query_args['paged'] = count( $course_lessons_paged );
                    }
                }
            }
        } else {
            if ( in_array( $post->post_type, array( 'sfwd-lessons', 'sfwd-topic', 'sfwd-quiz' ) ) ) {

                $instance['current_step_id'] = $post->ID;
                if ( 'sfwd-lessons' === $post->post_type ) {
                    $instance['current_lesson_id'] = $post->ID;
                } else if ( in_array( $post->post_type, array( 'sfwd-topic', 'sfwd-quiz') ) ) {
                    $instance['current_lesson_id'] = learndash_course_get_single_parent_step( $course_id, $post->ID, 'sfwd-lessons' );
                }
            }
        }

        extract( $args );

        /**
         * Filter widget title
         *
         * @since 2.1.0
         *
         * @param  string
         */
        $title = apply_filters( 'widget_title', empty( $instance['title'] ) ? '' : $instance['title'], $instance );

        echo $before_widget;

        if ( ! empty( $title ) ) {
            echo $before_title . $title . $after_title;
        }

        learndash_course_navigation( $course_id, $instance, $lesson_query_args );

        echo $after_widget;

        $learndash_shortcode_used = true;
    }


    /**
     * Handles widget updates in admin
     * 
     * @since 2.1.0
     * 
     * @param  array $new_instance
     * @param  array $old_instance
     * @return array $instance
     */
    function update( $new_instance, $old_instance ) {
        $instance = $old_instance;
        
        $instance['title'] 					= 	strip_tags( $new_instance['title'] );		
        
        $instance['show_lesson_quizzes']	= 	isset( $new_instance['show_lesson_quizzes'] ) ? (bool) $new_instance['show_lesson_quizzes'] : false;
        $instance['show_topic_quizzes'] 	= 	isset( $new_instance['show_topic_quizzes'] ) ? (bool) $new_instance['show_topic_quizzes'] : false;
        $instance['show_course_quizzes'] 	= 	isset( $new_instance['show_course_quizzes'] ) ? (bool) $new_instance['show_course_quizzes'] : false;

        return $instance;
    }


    /**
     * Display widget form in admin
     * 
     * @since 2.1.0
     * 
     * @param  array $instance widget instance
     */
    function form( $instance ) {
        $instance = wp_parse_args( (array) $instance, array( 'title' => '' ) );
        $title = strip_tags( $instance['title'] );
        $show_lesson_quizzes 	= isset( $instance['show_lesson_quizzes'] ) ? (bool) $instance['show_lesson_quizzes'] : false;
        $show_topic_quizzes 	= isset( $instance['show_topic_quizzes'] ) ? (bool) $instance['show_topic_quizzes'] : false;
        $show_course_quizzes 	= isset( $instance['show_course_quizzes'] ) ? (bool) $instance['show_course_quizzes'] : false;

        ?>
            <p>
                <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php esc_html_e( 'Title:', 'learndash' ); ?></label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
            </p>
            <p>
                <input class="checkbox" type="checkbox" <?php checked( $show_course_quizzes ); ?> id="<?php echo $this->get_field_id( 'show_course_quizzes' ); ?>" name="<?php echo $this->get_field_name( 'show_course_quizzes' ); ?>" />
                <label for="<?php echo $this->get_field_id( 'show_course_quizzes' ); ?>"><?php echo sprintf( esc_html_x( 'Show %1$s %2$s?', 'Show Course Quizzes?', 'learndash' ), LearnDash_Custom_Label::get_label( 'course' ), LearnDash_Custom_Label::get_label( 'quizzes' ) ); ?></label>
            </p>
            <p>
                <input class="checkbox" type="checkbox" <?php checked( $show_lesson_quizzes ); ?> id="<?php echo $this->get_field_id( 'show_lesson_quizzes' ); ?>" name="<?php echo $this->get_field_name( 'show_lesson_quizzes' ); ?>" />
                <label for="<?php echo $this->get_field_id( 'show_lesson_quizzes' ); ?>"><?php echo sprintf( esc_html_x( 'Show %1$s %2$s?', 'Show Lesson Quizzes', 'learndash' ), LearnDash_Custom_Label::get_label( 'lesson' ), LearnDash_Custom_Label::get_label( 'quizzes' ) ); ?></label>
            </p>
            <p>
                <input class="checkbox" type="checkbox" <?php checked( $show_topic_quizzes ); ?> id="<?php echo $this->get_field_id( 'show_topic_quizzes' ); ?>" name="<?php echo $this->get_field_name( 'show_topic_quizzes' ); ?>" />
                <label for="<?php echo $this->get_field_id( 'show_topic_quizzes' ); ?>"><?php echo sprintf( esc_html_x( 'Show %1$s %2$s?', 'Show Topic Quizzes?', 'learndash' ), LearnDash_Custom_Label::get_label( 'topic' ), LearnDash_Custom_Label::get_label( 'quizzes' ) ); ?></label>
            </p>
<?php /* ?>
            <p>
                <label for="<?php echo $this->get_field_id( 'lessons_per_page' ); ?>"><?php echo sprintf( esc_html_x( '%s per page', 'placeholder: Lessons', 'learndash' ), LearnDash_Custom_Label::get_label( 'lessons' ) ); ?></label>
                <input type="text" id="<?php echo $this->get_field_id( 'lessons_per_page' ); ?>" name="<?php echo $this->get_field_name( 'lessons_per_page' ); ?>" value="<?php echo  $lessons_per_page; ?>" />
            </p>
<?php */ ?>
        <?php
    }

}

add_action( 'widgets_init', function( ) {
    return register_widget("LearnDash_Course_Navigation_Widget");
} );

?>
```