let input = document.getElementsByClassName('input')[0];
    
function insert(num) {
    input.value = input.value + num;
}

function clean() {
    input.value = "";
}

function back() {
    let exp = input.value;
    input.value = exp.substring(0,exp.length-1); /*str.substring(start [, end])
    Возвращает часть строки между start и end. */
}
function equal() {
    let exp = input.value;
    if(exp) {
        input.value = eval(exp); // принимает в себе строку и вычисляет её
    }
}