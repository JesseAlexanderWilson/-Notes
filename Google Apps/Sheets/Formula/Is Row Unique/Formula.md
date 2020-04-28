#  Negative Even
``` javascript
=ARRAYFORMULA(
    IF(
        ISBLANK( A2:A100 ),
        0,
        COUNTIF(
            A2:A100,
            $A$2:A100
        )
    )
)
```

