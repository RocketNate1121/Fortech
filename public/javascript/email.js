//----------------------------
//---------EMAIL SEND---------
//----------------------------
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "rocketnate1121@gmail.com",
        Password : "N@th@n13l!",
        To : 'rocketnate1121@gmail.com',
        From : document.getElementById("email").value,
        Subject : "CUSTOM BUILD REQUEST",
        Body : "Name: " + document.getElementById("name").value
            + "<br>Email: " + document.getElementById("email").value
            + "<br>Phone Number: " + document.getElementById("phone").value
            + "<br>Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent")
    );
}