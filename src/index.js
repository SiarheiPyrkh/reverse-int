module.exports = function reverse (n) {
    let arr = [];
  
    for (let i = String(n).length -1; i >= 0; i--) {
        arr.push(String(n)[i]);
    }

    return(parseInt(arr.join('')));
}