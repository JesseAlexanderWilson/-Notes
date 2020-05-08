# Bloginfo Shortcode

## Version 1

```php
<?php
/**
 * Plugin Name: Bloginfo Shortcode
 * Description: Allows bloginfo() as a shortcode.
 * Author: Giuseppe Mazzapica
 * Author URI: http://gm.zoomlab.it
 * License: MIT
 */

add_shortcode('bloginfo', function($atts) {

   $atts = shortcode_atts(array('filter'=>'', 'info'=>''), $atts, 'bloginfo');

   $infos = array(
     'name', 'description',
     'wpurl', 'url', 'pingback_url',
     'admin_email', 'charset', 'version', 'html_type', 'language',
     'atom_url', 'rdf_url','rss_url', 'rss2_url',
     'comments_atom_url', 'comments_rss2_url',
   );

   $filter = in_array(strtolower($atts['filter']), array('raw', 'display'), true)
     ? strtolower($atts['filter'])
     : 'display';

   return in_array($atts['info'], $infos, true) ? get_bloginfo($atts['info'], $filter) : '';
});
```

### Source

https://wordpress.stackexchange.com/questions/173871/how-to-display-the-site-name-in-a-wordpress-page-or-post

## Version 2

The bloginfo() function in WordPress gives you access to lots of useful information about your site. See [the complete list](https://codex.wordpress.org/Template_Tags/bloginfo). To access all these values from inside Page/Post content itself, we can make a shortcode to return the values. Add this to your functions.php file in your theme:

```php
function digwp_bloginfo_shortcode( $atts ) {
   extract(shortcode_atts(array(
       'key' => '',
   ), $atts));
   return get_bloginfo($key);
}
add_shortcode('bloginfo', 'digwp_bloginfo_shortcode');
```

Now you can output any of the values by calling that shortcode with “key”. For example, the name of your site:

```html
[bloginfo key='name']
```

Or directly to images in your theme folder:

```html
<img src="[bloginfo key='template_url']/images/logo.jpg" alt="[bloginfo key='name'] logo" />
```

- ‘**name**‘ – Displays the “Site Title” set in Settings > General. This data is retrieved from the “blogname” record in the [wp_options table](https://codex.wordpress.org/Database_Description#Table:_wp_options).
- ‘**description**‘ – Displays the “Tagline” set in Settings > General. This data is retrieved from the “blogdescription” record in the [wp_options table](https://codex.wordpress.org/Database_Description#Table:_wp_options).
- ‘**wpurl**‘ – Displays the “WordPress address (URL)” set in Settings > General. This data is retrieved from the “siteurl” record in the [wp_options table](https://codex.wordpress.org/Database_Description#Table:_wp_options). Consider echoing [site_url()](https://developer.wordpress.org/reference/functions/site_url/) instead, especially for multi-site configurations using paths instead of subdomains (it will return the root site not the current sub-site).
- ‘**url**‘ – Displays the “Site address (URL)” set in Settings > General. This data is retrieved from the “home” record in the [wp_options table](https://codex.wordpress.org/Database_Description#Table:_wp_options). Consider echoing [home_url()](https://developer.wordpress.org/reference/functions/home_url/) instead.
- ‘**admin_email**‘ – Displays the “E-mail address” set in Settings > General. This data is retrieved from the “admin_email” record in the [wp_options table](https://codex.wordpress.org/Database_Description#Table:_wp_options).
- ‘**charset**‘ – Displays the “Encoding for pages and feeds” set in Settings > Reading. This data is retrieved from the “blog_charset” record in the [wp_options table](https://codex.wordpress.org/Database_Description#Table:_wp_options). **Note:** this parameter always echoes “UTF-8”, which is the default encoding of WordPress.
- ‘**version**‘ – Displays the WordPress Version you use. This data is retrieved from the `$wp_version` variable set in `wp-includes/version.php`.
- ‘**html_type**‘ – Displays the Content-Type of WordPress HTML pages (default: “text/html”). This data is retrieved from the “html_type” record in the [wp_options table](https://codex.wordpress.org/Database_Description#Table:_wp_options). Themes and plugins can override the default value using the `pre_option_html_type` filter.
- ‘**text_direction**‘ – Displays the Text Direction of WordPress HTML pages. Consider using [is_rtl()](https://developer.wordpress.org/reference/functions/is_rtl/) instead.
- ‘**language**‘ – Displays the language of WordPress.
- ‘**stylesheet_url**‘ – Displays the primary CSS (usually *style.css*) file URL of the active theme. Consider echoing [get_stylesheet_uri()](https://developer.wordpress.org/reference/functions/get_stylesheet_uri/) instead.
- ‘**stylesheet_directory**‘ – Displays the stylesheet directory URL of the active theme. (Was a local path in earlier WordPress versions.) Consider echoing [get_stylesheet_directory_uri()](https://developer.wordpress.org/reference/functions/get_stylesheet_directory_uri/) instead.
- ‘**template_url**‘ / ‘**template_directory**‘ – URL of the active theme’s directory. Within child themes, both get_bloginfo(‘template_url’) and [get_template()](https://developer.wordpress.org/reference/functions/get_template/) will return the *parent* theme directory. Consider echoing [get_template_directory_uri()](https://developer.wordpress.org/reference/functions/get_template_directory_uri/) instead (for the parent template directory) or [get_stylesheet_directory_uri()](https://developer.wordpress.org/reference/functions/get_stylesheet_directory_uri/) (for the child template directory).
- ‘**pingback_url**‘ – Displays the Pingback XML-RPC file URL (*xmlrpc.php*).
- ‘**atom_url**‘ – Displays the Atom feed URL (*/feed/atom*).
- ‘**rdf_url**‘ – Displays the RDF/RSS 1.0 feed URL (*/feed/rfd*).
- ‘**rss_url**‘ – Displays the RSS 0.92 feed URL (*/feed/rss*).
- ‘**rss2_url**‘ – Displays the RSS 2.0 feed URL (*/feed*).
- ‘**comments_atom_url**‘ – Displays the comments Atom feed URL (*/comments/feed*).
- ‘**comments_rss2_url**‘ – Displays the comments RSS 2.0 feed URL (*/comments/feed*).
- ‘**siteurl**‘ – Deprecated since version 2.2. Echo [home_url()](https://developer.wordpress.org/reference/functions/home_url/), or use bloginfo(‘url’).
- ‘**home**‘ – Deprecated since version 2.2. Echo [home_url()](https://developer.wordpress.org/reference/functions/home_url/), or use bloginfo(‘url’).

### Source

https://css-tricks.com/snippets/wordpress/bloginfo-shortcode/