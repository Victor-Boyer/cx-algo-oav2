function bubbleSort(array) {
    
    for(let i=0; i < array.length; i++) {
        for(let i=0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                var element = array[i]
                array[i] = array[i+1]
                array[i+1] = element
            }
        }
    }

    return array

}

var a = ['9', '8', '7', '6', '5', '4', '3', '2', '1']
console.log(a);
console.log(bubbleSort(a));