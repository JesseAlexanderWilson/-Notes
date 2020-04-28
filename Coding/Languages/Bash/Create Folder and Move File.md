```bash
for file in "$@";
do
	if [[ -f "$file" ]];
	then
		cd "$(dirname "$file")"
    	mkdir "${file%.*}"
    	mv "$file" "${file%.*}"
	fi
done
```

