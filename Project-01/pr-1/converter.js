// Distance
function mtr(){
    let mtr = parseInt(document.getElementById('mtr').value);
    let feet = mtr * 3.281;
    document.getElementById('ot-feet').innerHTML = "Feet : "+ feet;
}

function feet(){
    let feet = parseInt(document.getElementById('feet').value);
    let mtr = feet * 0.3048;
    document.getElementById('op-mtr').innerHTML = "Mtr : "+ mtr;
}

function km(){
    let mtr = parseInt(document.getElementById('in-mtr').value);
    let km = mtr / 1000;
    document.getElementById('op-km').innerHTML = "Km : "+ km;
}

function ktom(){
    let km = parseInt(document.getElementById('km').value);
    let mtr = km * 1000;
    document.getElementById('ot-mtr').innerHTML = "Mtr : " + mtr;
}

// Currancy

function ind(){
    let usd = parseInt(document.getElementById('usd').value);
    let ind = usd * 83.477;
    document.getElementById('ot-ind').innerHTML = "Indian Rupee : "+ ind;
}

function usd(){
    let ind = parseInt(document.getElementById('ind').value);
    let usd = ind * 0.01198;
    document.getElementById('ot-usd').innerHTML = "USD $ : "+ usd;
}

function eur(){
    let eur = parseInt(document.getElementById('eur').value);
    let usd = eur * 1.07633;
    document.getElementById('op-usd').innerHTML = "USD $ : "+ usd;
}

function cad(){
    let cad = parseInt(document.getElementById('cad').value);
    let eur = cad * 0.67824;
    document.getElementById('ot-eur').innerHTML = "EURO : "+ eur;
}

// Temperature

function f(){
    let fahren = parseInt(document.getElementById('in-f').value);
    let celsius = (fahren - 32)*5/9;
    document.getElementById('ot-c').innerHTML = "Celsius : "+ celsius;
}

function c(){
    let celsius = parseInt(document.getElementById('in-c').value);
    let fahren = (celsius * 9/5)+32;
    document.getElementById('ot-f').innerHTML = "Fahren : "+ fahren;
}

function k(){
    let kelvin = parseInt(document.getElementById('in-k').value);
    let fahren = (kelvin - 273.15)*9/5 + 32;
    document.getElementById('f').innerHTML = "Fahren : "+ fahren;
}

function ctok(){
    let celsius = parseInt(document.getElementById('c').value);
    let kelvin = celsius + 273.15;
    document.getElementById('ot-k').innerHTML = "Kelvin : "+ kelvin;
}
