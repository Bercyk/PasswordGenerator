const strengthEl = document.getElementById("strength-el")
let passwordStrength = strengthEl.valueAsNumber

const passwordsEl = [
    passwordElOne = document.getElementById("password-el-one"),
    passwordElTwo = document.getElementById("password-el-two"),
    passwordElThree = document.getElementById("password-el-three"),
    passwordElFour = document.getElementById("password-el-four")
]

const charArray = [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "!@#$%^&*()_-+={}|:;,.<>/?~"
]

function subtractStrength(){

    if(passwordStrength > 5){
        passwordStrength --
        strengthEl.valueAsNumber = passwordStrength
    }
    else{
        alert("Password can't contain less than 5 characters")
    }
}

function addStrength(){

    if(passwordStrength < 15){
        passwordStrength ++
        strengthEl.valueAsNumber = passwordStrength
    }
    else{
        alert("Max 15 characters")
    }
}

function deleteBackgroundImage() {
    for (let i = 0; i < passwordsEl.length; i++){
        passwordsEl[i].style.backgroundImage = "none";
    }
}

function startGenerate() {
    deleteBackgroundImage()
    for(let i = 0; i < passwordsEl.length; i++){
        passwordsEl[i].value = generatePassword();
    }
}

function generatePassword() {

    let passwordArray = []
    for(let i = 0; i < passwordStrength; i++){
        let charType = Math.floor(Math.random()*charArray.length)
        let charTypesLength = charArray[charType].length
        let passwordChar = charArray[charType].charAt(Math.floor(Math.random()*charTypesLength))
        passwordArray.push(passwordChar)
    }
    let generatedPassword = passwordArray.join('')
    passwordArray = null
    return generatedPassword
}

function copyPassword() {
    
}

window.onclick = e => {
    for(let i = 0; i < passwordsEl.length; i++){
        if(e.target === passwordsEl[i]){
            navigator.clipboard.writeText(passwordsEl[i].value)
            alert("Password copied to clipboard")
        }
    }
} 