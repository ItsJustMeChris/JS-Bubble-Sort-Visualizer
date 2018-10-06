var c = document.getElementById("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;

var ctx = c.getContext("2d");

var ints = [];
var index = 0;

const swap = (arr, initialIndex, otherIndex) => {
    let tmp = arr[initialIndex];
    arr[initialIndex] = arr[otherIndex];
    arr[otherIndex] = tmp;
}

const bubbleSort = (arr) => {
    let j;
    for (j = 0; j < arr.length - index - 1; j++)
        if (arr[j] < arr[j + 1])
            swap(arr, j, j + 1);
}

const setup = () => {
    for (let i = 0; i < c.width; i++) 
        ints.push(Math.floor(Math.random() * c.height) + 1);
}

const draw = () => {
    bubbleSort(ints);
    ctx.clearRect(0, 0, c.width, c.height);
    for (let i = 0; i < c.width; i++) {
        ctx.beginPath();
        ctx.moveTo(i, c.height);
        ctx.lineTo(i, ints[i]);
        ctx.stroke();
    }
    index++;
}

setup();
draw();

setInterval(() => {
    draw();
}, 10);
