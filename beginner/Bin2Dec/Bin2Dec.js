function convert(){
    var binary = document.getElementById("binary").value;
    if(binary==='') return alert("Please enter the number")
    binary.split('').map((char) => {
        console.log(typeof(char));
        console.log(typeof("0"));
        console.log(typeof('0'));
        if(char !== "0" && char !== "1"){
            return alert("Please enter the correct number");
        }
    });
    var decimal = parseInt(binary, 2);
    document.getElementById("decimal").value = decimal;
    return true;
}