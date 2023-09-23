let dis = document.getElementById("display");
function equal() {
    let res = eval(dis.value);
    dis.value = res;
}

function sqrt(){
    let res = Math.sqrt(eval(dis.value));
    dis.value = res;
}
function log10(){
    let res = Math.log10(eval(dis.value));
    dis.value = res;
}