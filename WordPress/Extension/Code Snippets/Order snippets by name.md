# Code
```js+php
add_filter( 'code_snippets/list_table/default_orderby', function () {
    return 'name';
} );
```

- [ ] Run snippet everywhere
- [x] Only run in administration area
- [ ] Only run on site front-end
- [ ] Only run once

Priority: 10

# Description
Order snippets by name by default in the snippets table. You can remove it, or edit it to add your own content.

# Tags
`code-snippets-plugin`