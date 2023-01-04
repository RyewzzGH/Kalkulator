function suma() {
    let a = document.getElementById("sumaA").value;
    let b = document.getElementById("sumaB").value;
    let c = document.getElementById("sumaC").value;
    let score = parseInt(a) + parseInt(b) + parseInt(c);
    document.getElementById("score1").innerHTML = score;
}

function avg() {
    let a = document.getElementById("avgA").value;
    let b = document.getElementById("avgB").value;
    let c = document.getElementById("avgC").value;
    let score = (parseInt(a) + parseInt(b) + parseInt(c)) / 3;
    document.getElementById("score2").innerHTML = score;
}

function policz() {
    let a = document.getElementById("sumaA2").value;
    let b = document.getElementById("sumaB2").value;
    let c = document.getElementById("sumaC2").value;
    let score = parseInt(a) + parseInt(b) + parseInt(c);
    let score2 = parseInt(a) - parseInt(b) - parseInt(c);
    let score3 = parseInt(a) * parseInt(b) * parseInt(c);
    document.getElementById("score3").innerHTML = "Suma: " + score + "<br>Różnica: " + score2 + "<br>Iloczyn: " + score3;
}

function pierwiastek() {
    let a = document.getElementById("pierwiastek").value;
    let score = Math.sqrt(a);
    document.getElementById("score4").innerHTML = score;
}

function pK() {
    let a = document.getElementById("pK").value;
    let score = a * a;
    document.getElementById("score5").innerHTML = score;
}

function pP() {
    let a = document.getElementById("pPa").value;
    let b = document.getElementById("pPb").value;
    let c = document.getElementById("pPc").value;
    let score = 2 * (a * b + a * c + b * c);
    document.getElementById("score6").innerHTML = score;
}

function pKo() {
    let a = document.getElementById("pKo").value;
    let score = a*a*Math.PI;
    let score2 = a*2*Math.PI;
    document.getElementById("score7").innerHTML = "Pole: " + score + " Obwód: " + score2;
}

function oil() {
    let a = document.getElementById("oil").value;
    let score = 360/(100/8)*a; 
    document.getElementById("score8").innerHTML = score;
}

function oil2() {
    let a = document.getElementById("oil1").value;
                let b = document.getElementById("oil2").value;
                            let c = document.getElementById("oil3").value;
    let score = (b/(100/a))*c;
    document.getElementById("score9").innerHTML = score;
}

function lokata() {
    let a = document.getElementById("lokata").value;
    let score = a*0.08-(a*0.08*0.09);
    document.getElementById("score10").innerHTML = score;
}
