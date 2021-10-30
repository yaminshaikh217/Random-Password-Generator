
function Generate() {

    const input = document.getElementById('password')
    const charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$(){}[]'
    let password = ''
    let passwordlength = 11

    for (let i = 0; i < passwordlength; i++) {

        let random = (Math.floor(Math.random() * charset.length));
        password += charset.substring(random, random + 1)
        input.value = password

    }





}

