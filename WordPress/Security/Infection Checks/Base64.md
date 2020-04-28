# Base64
This will just list the file names.
```
grep -ril base64 *
```
You can omit the `l` option to see the actual contents of the file where the base64 string occurs.

```
grep -ri base64 *
```

This command searches all files recursively that end with `.php` for the string `base64_decode` and prints the line number so that you can more easily find the context that the string occurs in.
```
grep --include=*.php -rn . -e "base64_decode"
```