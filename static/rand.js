var temp = document.querySelector("#temp span");
var turb = document.querySelector("#turb span");
var stab = document.querySelector("#stab span");
var strike = document.querySelector("#strike span");
var pluto = document.querySelector("#pluto span");
var radius = document.querySelector("#radius span");

temp_init = parseFloat(temp.innerHTML);
turb_init = parseFloat(turb.innerHTML);
stab_init = parseFloat(stab.innerHTML);
strike_init = parseFloat(strike.innerHTML);
radius_init = parseFloat(radius.innerHTML);

function updateParams() {
    if (abort.innerHTML !== "Aborted") {
        temp.innerHTML = temp_init + parseInt(15 * Math.random());
        turb.innerHTML = turb_init + parseInt(40 * Math.random());
        stab.innerHTML = stab_init + parseInt(15 * Math.random());
        strike.innerHTML = strike_init + parseInt(10 * Math.random());
        radius.innerHTML = radius_init + parseInt(1.5 * Math.random());
    } else {
        temp.innerHTML = "NOT AVAILABLE";
        turb.innerHTML = "NOT AVAILABLE";
        stab.innerHTML = "NOT AVAILABLE";
        strike.innerHTML = "NOT AVAILABLE";
        pluto.innerHTML = "NOT AVAILABLE";
        radius.innerHTML = "NOT AVAILABLE";
    }
}

setInterval(updateParams, 50);
