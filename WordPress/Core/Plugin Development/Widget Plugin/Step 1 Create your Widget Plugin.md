# Create your Widget Plugin

Open now the folder wp-content/plugins.

This where you are going to add your plugin. Create a new directory and call it `widget-plugin` (actually, this name can be whatever you want).

Even if our plugin will only have one single file, it’s always better to use a folder for each plugin.

In your directory, create a new file called `widget-plugin.php` (this name can be changed too), and open it.

We are now about to add our first lines of code.

The definition of a plugin under WordPress follows some rules that you can read here on the codex.

Here is how WordPress defines a plugin:

```
<?php

/*
Plugin Name: Name Of The Plugin
Plugin URI:  http://URI_Of_Page_Describing_Plugin_and_Updates
Description: A brief description of the Plugin.
Version:     The Plugin's Version Number, e.g.: 1.0
Author:      Name Of The Plugin Author
Author URI:  http://URI_Of_The_Plugin_Author
License:     A "Slug" license name e.g. GPL2
*/

?>
```
So, we have to modify this code to make it fit our needs:
```
<?php

/*
Plugin Name: My Widget Plugin
Plugin URI:  http://www.wpexplorer.com/create-widget-plugin-wordpress/
Description: This plugin adds a custom widget.
Version:     1.0
Author:      AJ Clarke
Author URI:  http://www.wpexplorer.com/create-widget-plugin-wordpress/
License:     GPL2
*/

?>
```

Save your file.

By only adding code to our `widget-plugin.php` file we have created a plugin! Well, for now the plugin doesn’t do anything, but WordPress recognizes it.

To make sure it’s the case, go your administration, and go under `Plugins` menu.

If your plugin appears in the plugins list you’re good, otherwise make sure you followed my instructions and try again.

You can now activate the plugin.