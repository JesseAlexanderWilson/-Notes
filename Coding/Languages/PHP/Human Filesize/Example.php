$file_path      = getcwd() . '/wp-content/plugins/activemember360/css/datatables_editor_ext.css';
$filesize       = filesize($file_path);
$human_filesize = human_filesize($filesize);

echo $human_filesize;