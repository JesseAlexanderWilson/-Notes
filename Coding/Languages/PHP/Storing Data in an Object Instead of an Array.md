Suppose you wanted to quickly create a new object to hold some data about a book.

You would do something like this:

```php
<?php
$book = new stdClass;

$book->title       = "Harry Potter and the Prisoner of Azkaban";
$book->author      = "J. K. Rowling";
$book->publisher   = "Arthur A. Levine Books";
$book->amazon_link = "http://www.amazon.com/dp/0439136369/";
```
You can then access the data by calling $book->title and so on.

Or what if you wanted to take an array and turn it into an object? You can do that by casting the variable.

```php
<?php
$array = array(
    "title"       => "Harry Potter and the Prisoner of Azkaban",
    "author"      => "J. K. Rowling",
    "publisher"   => "Arthur A. Levine Books",
    "amazon_link" => "http://www.amazon.com/dp/0439136369/"
);
 
$books = (object) $array;
```