#  IsRowUnique
## TOC
*   [Negative Even](##Negative-Even)
*   [Negative Odd](##Negative-Odd)
*   [Neutral Even](##Neutral-Even)
*   [Neutral Odd](##Neutral-Odd)
*   [Positive Even](##Positive-Even)
*   [Positive Odd](##Positive-Odd)

##  Negative Even
```JavaScript
/* Apply to range */
A3:A100

/* Format rules */
/* Custom formula is */
=AND(
    ISEVEN( ROW() ),
    ISNUMBER( $A:A ),
    $A:A>1
)

/* Formatting Style */
#f68ab0
```

##  Negative Odd
```JavaScript
/* Apply to range */
A3:A100

/* Format rules */
/* Custom formula is */
=AND(
    ISODD( ROW() ),
    ISNUMBER( $A:A ),
    $A:A>1
)

/* Formatting Style */
#e91d63
```

##  Neutral Even
```JavaScript
/* Apply to range */
A3:A100

/* Format rules */
/* Custom formula is */
=AND(
    ISEVEN( ROW() ),
    ISNUMBER( $A:A ),
    $A:A<1
)

/* Formatting Style */
#fce8b2
```

##  Neutral Odd
```JavaScript
/* Apply to range */
A3:A100

/* Format rules */
/* Custom formula is */
=AND(
    ISODD( ROW() ),
    ISNUMBER( $A:A ),
    $A:A<1
)

/* Formatting Style */
#f7cb4d
```

##  Positive Even
```JavaScript
/* Apply to range */
A3:A100

/* Format rules */
/* Custom formula is */
=AND(
    ISEVEN( ROW() ),
    ISNUMBER( $A:A ),
    $A:A=1
)

/* Formatting Style */
#c4e2a0
```

##  Positive Odd
```JavaScript
/* Apply to range */
A3:A100

/* Format rules */
/* Custom formula is */
=AND(
    ISODD( ROW() ),
    ISNUMBER( $A:A ),
    $A:A=1
)

/* Formatting Style */
#8bc34a
```