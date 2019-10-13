function ans() {
    var a = $("#answer");
    var arrayA = [10, 112, 82, 13, 67, 12];
    var arrayB = [91, 12, 65, 21, 10, 91, 16, 75];
    var pointerA = 0,pointerB = 0,mergedArray = [];
    arrayA.sort(function(a,b){return a-b;});
    arrayB.sort(function(a,b){return a-b;});
    while(pointerA < arrayA.length && pointerB < arrayB.length) {
        if(arrayA[pointerA] <= arrayB [pointerB]) {
            mergedArray.push(arrayA[pointerA]);
            pointerA++;
        }
        else {
            mergedArray.push(arrayB[pointerB]);
            pointerB++;
        }
    }
    while(pointerA < arrayA.length) {
        mergedArray.push(arrayA[pointerA]);
        pointerA++;
    }
    while(pointerB < arrayB.length) {
        mergedArray.push(arrayB[pointerB]);
        pointerB++;
    }
    a.append(mergedArray.join(', '));
}

window.onload = function() {
    ans();
}