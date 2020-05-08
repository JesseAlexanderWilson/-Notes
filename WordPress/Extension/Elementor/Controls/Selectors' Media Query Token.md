```php
<?php

'selectors' => [
    '{{WRAPPER}} .element'               => 'background-color: {{VALUE}};', //any media size
    '(desktop){{WRAPPER}} .element'      => 'background-color: {{VALUE}};', 
    '(tablet){{WRAPPER}} .element-other' => 'background-color: {{VALUE}};',
    '(mobile){{WRAPPER}} .element-other' => 'background-color: {{VALUE}};',
],
```