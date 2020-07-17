# Is Row Unique

## Formula

```JavaScript
=ARRAYFORMULA(
    IF(
        A2:A100 = "",
        "",
        COUNTIF(
            A2:A100,
            $A$2:A100
        )
    )
)
```
```javascript
=ARRAYFORMULA(
    IF(
        A2:A100 = "",
        "",
        COUNTIF(
            A2:A,
            $A$2:A
        )
    )
)
```

##  Conditional Formating

Apply to range:

```JavaScript
A3:A100
```
```JavaScript
A3:A
```

###  Positive

Row is Unique

####  Even

Custom formula is:
```JavaScript
=AND(
    ISEVEN( ROW() ),
    ISNUMBER( $A:A ),
    $A:A=1
)
```
Formatting Style:
```javascript
#c4e2a0
```

####  Odd

Custom formula is:

```JavaScript
=AND(
    ISODD( ROW() ),
    ISNUMBER( $A:A ),
    $A:A=1
)
```

Formatting Style:

```javascript
#8bc34a
```

###  Negative

Row is Not Unique

####  Even

Custom formula is:

```JavaScript
=AND(
    ISEVEN( ROW() ),
    ISNUMBER( $A:A ),
    $A:A>1
)
```

Formatting Style:

```javascript
#f68ab0
```

####  Odd

Custom formula is:

```JavaScript
=AND(
    ISODD( ROW() ),
    ISNUMBER( $A:A ),
    $A:A>1
)
```

Formatting Style:

```javascript
#e91d63
```

###  Neutral

Row is Empty

####  Even

Custom formula is:

```JavaScript
=AND(
    ISEVEN( ROW() ),
    ISNUMBER( $A:A ),
    $A:A<1
)
```

Formatting Style:

```javascript
#fce8b2
```

####  Odd

Custom formula is:

```JavaScript
=AND(
    ISODD( ROW() ),
    ISNUMBER( $A:A ),
    $A:A<1
)
```

Formatting Style:

```javascript
#f7cb4d
```
