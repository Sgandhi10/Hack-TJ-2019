var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "phone2action" && password == "takeaction"){
        alert ("Login successfully");
        window.location = "RepChat_Home/index.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        if(attempt != 0){
            alert("Incorrect! You have "+attempt+" attempt(s) left.");
        }
        // Disabling fields after 3 attempts.
        else{
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            alert("You have ran out of atetempts! Please try again later.");
            return false;
        }
    }
}