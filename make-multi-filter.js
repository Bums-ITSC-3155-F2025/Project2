'use strict';
function MakeMultiFilter(originalArray) {
    const arrayFilterer = function(filterCriteria = undefined, callback = undefined) {
        if(arrayFilterer.originalArray === undefined) {
            arrayFilterer.currentArray = originalArray;
        }

        if(Array.isArray(originalArray)) {
            if((typeof filterCriteria === "function")) {
                arrayFilterer.currentArray.filter(e => filterCriteria(e));
        } else {
            return arrayFilterer.currentArray;
        }
    }

        if((typeof callback === "function")) {
            callback.call(arrayFilterer.originalArray, arrayFilterer.currentArray);
        }

        return arrayFilterer;
    };
    return arrayFilterer;
}
