const userName = document.querySelector('#username')
const passwordOne = document.querySelector('#password1')
const passwordTwo = document.querySelector('#password2')
const email = document.querySelector('#email')
const buttonClear = document.querySelector('#buttonClear')
const buttonSend = document.querySelector('#buttonSend')
const error = document.querySelector('.error_class')

 
 function clearErrorMessage()
 {
    error.innerHTML = ""
    
 }

 function sendErrorMessage(errorMessage)
 {
    error.innerHTML += errorMessage +`<br>`
 }


function checkMinLength(errorMessage,input,minValue)
{ 
    if(input < minValue)
        if(input != 0)
            sendErrorMessage(`Błąd: Pole ${errorMessage} jest za krótkie (Minimum ${minValue} znaków)`)
        else
            sendErrorMessage(`Błąd: Pole ${errorMessage} jest wymagane`)
    
}

function checkEmail(input)
{ 
    var em = input
    var lengthDomain
    var isMonkey=false,isDot = false;
    for (let i = 0; i < em.length; i++) {
        const element = em[i];

            if(element == '@' && isMonkey == false)
            {
                isMonkey=true;
            
            }

            if(element == '.' && isDot == false)
            {
                isDot=true;
                lengthDomain = (i+1)
            }

                
    }
    if(em.length > 0)
    {
        if(!isMonkey)
            sendErrorMessage('Błąd: Brak znaku "@" w E-mailu')
        if(!isDot)
            sendErrorMessage('Błąd: Brak znaku "." w E-mailu')
        if(em.length - lengthDomain < 2)
            sendErrorMessage('Błąd: Domena E-mail jest nieprawidłowa')
    }
    else
        sendErrorMessage('Błąd: Pole E-mail jest wymagane')

}   


function checkSamePassword(password1,password2)
{
    if(password1 !== password2)
        sendErrorMessage("Błąd: Hasła nie są takie same")   
}

function resetValue()
{
    userName.value = ""
    passwordOne.value = ""
    passwordTwo.value = ""
    email.value = ""
    clearErrorMessage()
}
 
buttonClear.addEventListener('click',e =>{
    e.preventDefault()
    resetValue()   
})
buttonSend.addEventListener('click',e =>{
    e.preventDefault()
    clearErrorMessage() 
    checkMinLength("Nazwa użytkownika",userName.value.length,5)
    checkMinLength("Hasło",passwordOne.value.length,8)
    checkSamePassword(passwordOne.value,passwordTwo.value)
    checkEmail(email.value)
     
})