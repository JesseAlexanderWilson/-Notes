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