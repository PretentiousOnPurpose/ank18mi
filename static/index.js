var msg = document.querySelector("#msgBtn");
var msgModal = document.querySelector("#defuseModal");
var abort = document.querySelector("#abort");
var abortModal = document.querySelector("#abortModal");
var close = document.querySelectorAll(".close");
var abortMsg = document.querySelector("#abortMsg");
var abortVerdict = document.querySelector("#abortVerdict");
var submitBtn = document.querySelector("#submitBtn");
var abort_pass = document.querySelector("#abort_pass");
var BLINK = document.querySelector("#BLINK");
var min = document.querySelector("#min");
var se = document.querySelector("#se");
var finalResult;

close[0].onclick = function () {
    msgModal.style.display = "none";
};

close[1].onclick = function () {
    abortModal.style.display = "none";
};

msg.onclick = function () {
    console.log("CLICKED_MSG");
  msgModal.style.display = "flex";
};

abort.onclick = function () {
    console.log("CLICKED_ABORT");
  abortModal.style.display = "flex";
};

// window.onclick = function() {
//   if (event.target === msgModal) {
//       msgModal.style.display = "none";
//   } else if (event.target === abortModal) {
//       abortModal.style.display = "none";
//   }
// };

submitBtn.onclick = function () {
    if (abort_pass.value !== "") {
        var req = new XMLHttpRequest();
        req.open("POST", "http://127.0.0.1:5000/abort", true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.onreadystatechange = function () {
            if (req.readyState === 4 && req.status === 200) {
                finalResult = req.responseText;
                if (finalResult === "1") {
                    abortVerdict.innerHTML = "Accepted";
                    abortVerdict.style.color = "#0072FF";
                    setTimeout(abortMissile, 1000);
                } else {
                    abortVerdict.innerHTML = "Denied";
                    abortVerdict.style.color = "#ff2120";
                }
            }
        };
        req.send("abort_pass=" + abort_pass.value);
        abortVerdict.style.fontSize = "2.25rem";
    }
};

function X_blast() {
    var req = new XMLHttpRequest();
    req.open("POST", "http://127.0.0.1:5000/uxp", true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            var xU = req.responseText.toString();
            xU = xU.split(" ");
            min.innerHTML = xU[0];
            se.innerHTML = xU[1];
        }
    }
}
setInterval(X_blast, 1000);
function abortMissile() {
    abort.style.backgroundColor = "#2aff48";
    abort.innerHTML = "Aborted";
    abort.onclick = function() {return false;};
    abort.style.cursor = "auto";
    BLINK.innerHTML = "Self Destruction mode: Missile destroyed";
    BLINK.style.animation = "none";
    close[1].click()
}

abortMsg.innerHTML = "Enter the passcode to deactivate the missile.";
