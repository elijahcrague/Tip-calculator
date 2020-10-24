function calc() {
    var bill = Number(document.getElementById('bill').value);
    var tip = Number(document.getElementById('tip').value)
    var people = Number(document.getElementById('amtOfPeople').value)
    var total_bill = (bill * tip) / people;

    document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);         
}
