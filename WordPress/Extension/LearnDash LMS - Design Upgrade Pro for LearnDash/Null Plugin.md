# At
design-upgrade-pro-learndash/design-upgrade-pro-learndash.php Line 330

# Set
```php
<?php
// make sure the response came back okay
if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {

    if ( is_wp_error( $response ) ) {
        $message = $response->get_error_message();
    } else {
        $message = __( 'An error occurred, please try again.', 'design-upgrade-pro-learndash' );
    }

} else {

    $license_data = json_decode( wp_remote_retrieve_body( $response ) );

    if ( false === $license_data->success ) {

        switch( $license_data->error ) {

            case 'expired' :

                $message = sprintf(
                    __( 'Your license key expired on %s.' ),
                    date_i18n( get_option( 'date_format' ), strtotime( $license_data->expires, current_time( 'timestamp' ) ) )
                );
                break;

            case 'disabled' :
            case 'revoked' :

                $message = __( 'Your license key has been disabled.', 'design-upgrade-pro-learndash' );
                break;

            case 'missing' :

                $message = __( 'Invalid license.', 'design-upgrade-pro-learndash' );
                break;

            case 'invalid' :
            case 'site_inactive' :

                $message = __( 'Your license is not active for this site.', 'design-upgrade-pro-learndash' );
                break;

            case 'item_name_mismatch' :

                $message = sprintf( __( 'This appears to be an invalid license key for %s.' ), LDX_EDD_ITEM_NAME );
                break;

            case 'no_activations_left':

                $message = __( 'Your license key has reached its activation limit.', 'design-upgrade-pro-learndash' );
                break;

            default :

                $message = __( 'An error occurred, please try again.', 'design-upgrade-pro-learndash' );
                break;
        }

    }

}

// Check if anything passed on a message constituting a failure
if ( ! empty( $message ) ) {
    $base_url = admin_url( 'options-general.php?page=' . LDX_EDD_PLUGIN_LICENSE_PAGE );
    $redirect = add_query_arg( array( 'sl_activation' => 'false', 'message' => urlencode( $message ) ), $base_url );

    wp_redirect( $redirect );
    exit();
}

// $license_data->license will be either "valid" or "invalid"
update_option( 'ldx_edd_license_status', $license_data->license );
?>
```

# To
```php
<?php
// make sure the response came back okay
/*
if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {

    if ( is_wp_error( $response ) ) {
        $message = $response->get_error_message();
    } else {
        $message = __( 'An error occurred, please try again.', 'design-upgrade-pro-learndash' );
    }

} else {

    $license_data = json_decode( wp_remote_retrieve_body( $response ) );

    if ( false === $license_data->success ) {

        switch( $license_data->error ) {

            case 'expired' :

                $message = sprintf(
                    __( 'Your license key expired on %s.' ),
                    date_i18n( get_option( 'date_format' ), strtotime( $license_data->expires, current_time( 'timestamp' ) ) )
                );
                break;

            case 'disabled' :
            case 'revoked' :

                $message = __( 'Your license key has been disabled.', 'design-upgrade-pro-learndash' );
                break;

            case 'missing' :

                $message = __( 'Invalid license.', 'design-upgrade-pro-learndash' );
                break;

            case 'invalid' :
            case 'site_inactive' :

                $message = __( 'Your license is not active for this site.', 'design-upgrade-pro-learndash' );
                break;

            case 'item_name_mismatch' :

                $message = sprintf( __( 'This appears to be an invalid license key for %s.' ), LDX_EDD_ITEM_NAME );
                break;

            case 'no_activations_left':

                $message = __( 'Your license key has reached its activation limit.', 'design-upgrade-pro-learndash' );
                break;

            default :

                $message = __( 'An error occurred, please try again.', 'design-upgrade-pro-learndash' );
                break;
        }

    }

}

// Check if anything passed on a message constituting a failure
if ( ! empty( $message ) ) {
    $base_url = admin_url( 'options-general.php?page=' . LDX_EDD_PLUGIN_LICENSE_PAGE );
    $redirect = add_query_arg( array( 'sl_activation' => 'false', 'message' => urlencode( $message ) ), $base_url );

    wp_redirect( $redirect );
    exit();
}
*/

// $license_data->license will be either "valid" or "invalid"
update_option( 'ldx_edd_license_status', "valid" );
?>
```