# Images

find all files in the uploads directory that are NOT image files. The output is saved in a log file called “uploads-non-binary.log” in your current directory.
```
find public_html/wp-content/uploads/ -type f -not -name "*.jpg" -not -name "*.png" -not -name "*.gif" -not -name "*.jpeg" >uploads-non-binary.log
```

```
find wp-content/uploads/ -type f -not -name "*.jpg" -not -name "*.png" -not -name "*.gif" -not -name "*.jpeg" >uploads-non-binary.log
```