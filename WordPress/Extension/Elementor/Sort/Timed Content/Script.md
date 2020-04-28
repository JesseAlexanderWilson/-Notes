```js
<script>
    function bb_timed_content_wait() {
        var delay = 5; // Enter the delay in seconds.
    
        return delay * 1000;
    }
    
    function bb_timed_content_execute() {
        var elements = document.getElementsByClassName("bb-timed-content");
    
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.visibility = "visible";
        };
    }
    
    function bb_timed_content() {
        setTimeout( bb_timed_content_execute, parseInt( bb_timed_content_wait() ) );
    }
    
    bb_timed_content();
</script>
```