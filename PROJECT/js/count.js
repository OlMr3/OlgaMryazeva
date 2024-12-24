var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('button_plus');
var minusBtn = document.getElementById('button_minus');
plusBtn.onclick = function () {
    var qty = parseInt(numCount.value);
    var min = parseInt(min);
    var max = parseInt(max);
    if (qty < 10) {
        qty = qty + 1;
    } else {
        qty = 10;
    }
    numCount.value = qty;
}
minusBtn.onclick = function () {
    var qty = parseInt(numCount.value);
    var min = parseInt(min);
    var max = parseInt(max);
    if (qty > 1) {
        qty = qty - 1;
    } else {
        qty = 1;
    }
    numCount.value = qty;
}