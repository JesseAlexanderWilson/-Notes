---
tags: [Notebooks, Notebooks/VisualStudioCode]
title: Mapper
created: '2019-10-31T22:17:34.908Z'
modified: '2019-10-31T22:26:54.044Z'
---

# Mapper
```json
"codemap.php": [
    {
        "pattern": "(?:(?:\\/\\* =+)|(?:\\/\\* +[a-zA-Z-_ ]+$))",
        "clear": "\\/\\*",
        "prefix": "",
        "icon": "none"
    },
    {
        "pattern": "(?:(?:\\/\\* -+)|(?:\\/\\* +[a-zA-Z-_ ]+$))",
        "clear": "\\/\\*",
        "prefix": "",
        "icon": "level1"
    },
    {
        "pattern": "(?:\\/\\* *>* *[a-zA-Z() ]+)",
        "clear": "\\/\\*",
        "prefix": "",
        "icon": "level2"
    },
],
```
