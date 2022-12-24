// const listAccount = [
//     {
//         username: "22102002",
//         password: "4112021"
//     }
// ]
// let isLogin = !!localStorage.getItem("token") 

// function CheckLogin(){
//     if(isLogin){
//         window.location.href = "index.html"
//     }
// }

// function Login(){
//     let username = document.getElementById("username").value
//     let password = document.getElementById("password").value
//     let checkLogin = listAccount.some(value => value.username === username && value.password === password)
//     if(checkLogin){
//         localStorage.setItem("token", username)
//         isLogin = true
//         CheckLogin()
//     }else {
//         alert("Wrong username or password!!")
//     }
// }

const submit = document.querySelector('input[type="submit"]')
let username = document.getElementById('username')
let password = document.getElementById('password')

submit.onclick = (e) => {
    e.preventDefault()
    if (username.value === '22102002' && password.value === '4112021') {
        window.location.href = '../home/index.html'
    }
}