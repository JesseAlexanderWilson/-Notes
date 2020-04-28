
```sql
DELETE pm
FROM wp_postmeta pm
LEFT JOIN wp_posts wp
	ON wp.ID = pm.post_id
WHERE wp.ID IS NULL
```