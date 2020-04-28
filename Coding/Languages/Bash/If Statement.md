# If Statement

## Format

A basic if statement effectively says, **if** a particular test is true, then perform a given set of actions. If it is not true then don't perform those actions. If follows the format below:

```bash
if [ <some test> ]
then
	<commands>
fi
```
Anything between `then` and `fi` (if backwards) will be executed only if the test (between the square brackets) is true.

## Example

```bash
#!/bin/bash
# Basic if statement

if [ $1 -gt 100 ]
then
	echo Hey that\'s a large number.
	pwd
fi

date
```

-   **Line 4** - Let's see if the first command line argument is greater than 100
-   **Line 6 and 7** - Will only get run if the test on line 4 returns true. You can have as many commands here as you like.
-   **Line 6** - The backslash ` \ ` in front of the single quote ` ' ` is needed as the single quote has a special meaning for bash and we don't want that special meaning. The backslash escapes the special meaning to make it a normal plain single quote again.
-   **Line 8** - `fi` signals the end of the if statement. All commands after this will be run as normal.
-   **Line 10** - Because this command is outside the if statement it will be run regardless of the outcome of the if statement.


## Source

https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php