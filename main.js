// Arrayni bo‘lish
function chunk(arr, size) {
    let res = [];
    for (let i = 0; i < arr.length; i += size)
        res.push(arr.slice(i, i + size));
    return res;
}
// Ikki array kesishmasi
function intersect(a, b) {
    return a.filter(x => b.includes(x));
}
// Binary search
function bs(arr, t) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        let m = (l + r) >> 1;
        if (arr[m] === t) return m;
        arr[m] < t ? l = m + 1 : r = m - 1;
    }
    return -1;
}
