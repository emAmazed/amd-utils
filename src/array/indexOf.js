define(function () {

    /**
     * Array.indexOf
     * @version 0.4.0 (2012/10/30)
     */
    function indexOf(arr, item, fromIndex) {
        fromIndex = fromIndex || 0;
        var n = arr.length >>> 0,
            i = fromIndex < 0? n + fromIndex : fromIndex;
        while (i < n) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (arr[i] === item) {
                return i;
            }
            i += 1;
        }
        return -1;
    }

    return indexOf;
});
