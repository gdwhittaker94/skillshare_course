// password capture from input element
function checkPassword () {
    var passwordBoxObject = document.getElementById ("passwordBox");
    var passwordEntered = passwordBoxObject.value;
    console.log ("User entered password" , passwordEntered); 
    
    // password checking + allowing/blocking user 
    var sitePassword = "codeclub";
    if (passwordEntered == sitePassword) {
        //allow
        console.log("Allow")
        window.location.assign ("members.html")
    } else
        //block
        console.log("Block")
        //new styling rule
        document.getElementById ("incorrect-password").style.color = "red"
        //adding text to incorrect password element 
        document.getElementById ("incorrect-password").innerHTML = "Incorrect password. Please try again..."		
}