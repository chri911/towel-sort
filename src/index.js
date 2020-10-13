
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (Array.isArray(matrix)){
        let arr = [];
        let arr1 = [];
        let arr2 = [];
    for (let i = 0; i < matrix.length; i++) {

        if ( i % 2 == 0) {
            arr1 = arr.concat(matrix[i]);
        } else {
            arr2 = arr1.concat(matrix[i].reverse());
            arr = arr2;
        }
    }
    return (matrix.length % 2 == 0) ? arr2 : arr1;
    }
  return [];
}
