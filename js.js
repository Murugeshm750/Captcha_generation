function cap(){
    var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','y','z'];
    var a = alpha[Math.floor(Math.random()*62)];
    var b = alpha[Math.floor(Math.random()*62)];
    var c = alpha[Math.floor(Math.random()*62)];
    var d = alpha[Math.floor(Math.random()*62)];
    var e = alpha[Math.floor(Math.random()*62)];
    var f = alpha[Math.floor(Math.random()*62)];
    // var g = alpha[Math.floor(Math.random()*62)];
    // var h = alpha[Math.floor(Math.random()*62)];
    // var i = alpha[Math.floor(Math.random()*62)];
    // var j = alpha[Math.floor(Math.random()*62)];
    // var k = alpha[Math.floor(Math.random()*62)];
    // var l = alpha[Math.floor(Math.random()*62)];
    // var m = alpha[Math.floor(Math.random()*62)];
    // var n = alpha[Math.floor(Math.random()*62)];
    // var o = alpha[Math.floor(Math.random()*62)];
    // var p = alpha[Math.floor(Math.random()*62)];
    // var q = alpha[Math.floor(Math.random()*62)];
    // var r = alpha[Math.floor(Math.random()*62)];
    // var s = alpha[Math.floor(Math.random()*62)];
    // var t = alpha[Math.floor(Math.random()*62)];
    // var u = alpha[Math.floor(Math.random()*62)];
    // var v = alpha[Math.floor(Math.random()*62)];
    // var w = alpha[Math.floor(Math.random()*62)];
    // var x = alpha[Math.floor(Math.random()*62)];
    // var y = alpha[Math.floor(Math.random()*62)];
    // var z = alpha[Math.floor(Math.random()*62)];

    var sum = a+b+c+d+e+f;
    document.getElementById("capt").value = sum;

}

document.getElementById("loginForm").addEventListener("submit",validCap);


function validCap(){
    var String1 = document.getElementById('capt').value;
    var String2 = document.getElementById('textinput').value;

    if (String1 === String2) {

        // document.getElementById('loginForm').submit();

         document.querySelector('.alert').style.display = "block";
         document.querySelector('.alert-error').style.display = "none";
        return true;

    }
    else {

     setTimeout(() => {
            document.querySelector('.alert-error').style.display = "block";
            document.querySelector('.alert').style.display = "none";
          });
        return false;

    }


}
