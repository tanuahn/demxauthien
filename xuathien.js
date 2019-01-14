function binSearch(arr, data) {
    for (var i = 0; i < arr.length; i++){
        if(arr[i] == data){
            return true;
        }
    }
}

// function binSearch(arr, n, data) {
//     var left = 0;
//     var right = n - 1;
//     while (left <= right) {
//         var mid = (left + right) / 2;
//         if (data == arr[mid]) {
//             return mid;
//         }
//         else
//             if (data < arr[mid]) {
//                 right = mid - 1;
//             }
//             else
//                 if (data > mid + 1) {
//                     left = mid +1;
//                 }
//     }
//     return -1;
// }
function dispArr(arr) {
    for (var i = 0; i < arr.length; i++){
        document.write(arr[i] + "");
        if (i%10 == 9){
            document.write("\n");
        }
    }
    if (i%10 == 0){
        document.write("\n");
    }
}
function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1){
        ++count;
        for (var i = position - 1; i > 0; i--){
            if (arr[i] == data){
                count++;
            }
            else{
                break;
            }
        }
        for (var i =position + 1; i < arr.length; i++){
            if (arr[i] == data){
                count++;
            }
            else {
                break;
            }
        }
    }
    return count;
}
var nums = [];
for (var i =0; i < 100; i++){
    nums[i] = Math.floor(Math.random() * 101);

}

dispArr(nums);
var val = parseInt(prompt("Enter a value to count: "));
var retVal = count(nums, val);
document.write("Fount " + retVal + " occurrences of " + val + ".");