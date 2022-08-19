function getStarted(em){
    let email = document.getElementById(em).value;
    flag1=flag2=0
    console.log("started"+email)
    for(let z of email)
    {
        if(z=='@')
        {
            console.log("@ detectd")
            flag1=1
        }
        
        if(z=='.')
        {
            console.log(". detectd")
            flag2=1
        }

    }
    if(flag1==1 && flag2==1)
    alert("Hola! This will take you to Login or Register Page.")
    else
    alert("Enter a Valid email!")
}

function signIn(){
    alert("This will take you to SignIn Page!")
}