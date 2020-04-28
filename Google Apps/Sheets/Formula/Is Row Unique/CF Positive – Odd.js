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