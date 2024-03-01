let dis=document.getElementById('inpbox');
function addtolast(value) {
    dis.value+=value;
}
function del() {
    let currentResult = dis.value;
    dis.value = currentResult.slice(0, -1);
}
function ac() {
    dis.value='';
}
function cal(){
        let res=eval(dis.value);
        dis.value=res;
}
function calSquareRoot() {
    var currentValue = parseFloat(dis.value);
    if (!isNaN(currentValue) && currentValue >= 0) {
      dis.value = Math.sqrt(currentValue);
    }
}