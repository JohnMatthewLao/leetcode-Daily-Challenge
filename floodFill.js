// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.
var floodFill = function(image, sr, sc, newColor) {
    let colorAtPosition = image[sr][sc];
    if(newColor ===colorAtPosition) {
        return image
    }
    const recursion = (image, sRow, sColumn, newColor) => {
        let up, down ,left , right;
        if (image[sRow-1]) {
            up = image[sRow-1][sColumn]
        }
        if (image[sRow+1]) {
            down = image[sRow+1][sColumn]
        }
        if(image[sRow]) {
            left = image[sRow][sColumn-1]
            right = image[sRow][sColumn+1]
        }
        debugger;
        image[sRow][sColumn] = newColor;
             if(up !== colorAtPosition && down !== colorAtPosition && left !==colorAtPosition && right !== colorAtPosition) {
            return;
        }
        if(up === colorAtPosition) {
            recursion(image, sRow-1, sColumn, newColor)
        }
        if(down === colorAtPosition) {
            recursion(image, sRow+1, sColumn, newColor)
        }
        if(left === colorAtPosition) {
            recursion(image, sRow, sColumn-1, newColor)
        }
        if(right === colorAtPosition) {
            recursion(image, sRow, sColumn+1, newColor)

        }
        if(right ===undefined || left===undefined || up === undefined || down === undefined){
            return;
        }
    }
  recursion(image, sr, sc, newColor)
    return image;
};