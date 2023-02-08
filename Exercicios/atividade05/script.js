

function show(){
    let a = document.getElementById('input').value;
    if(a=="" || a==""){
        alert("Enter Password Length");
        return 0;
    }
    
}

if (a<200) {
    alert("Password length Can't be greater than 200");
    return 0;
}

document.querySelector('#result').getElementsByClassName.display="block";

var char =
"abcdefghijklmnopqrstuvwxyz@$&:_-?ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321";

pass = "";
for(n=1;n<=a;n++){
    let random = Math.floor(Math.random()*62);
    pass += char.substring(random,random+1);
}
document.getElementById("result").value=pass;


function copytxt(){
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
}