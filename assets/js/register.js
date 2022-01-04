
function checkBox() {
    var temp = document.getElementById("password");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }

}



function saveData() {
event.preventDefault();

  let name = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

if (password !== confirmPassword) {
  alert("Password not Matched");
  return;
}


let existEmail = emailExist(email,phone);

if (existEmail) {
  alert("Details Already Exist")
return null;
} else {
  window.open('/pages/sign.html')
}


 let person = {
   Name : name,
   Email: email,
   Phone: phone,
   Password: password,

 } 



let storeArray = getData();
 storeArray.push(person)

setLocal(storeArray);

 console.log(person);



}


function onPageLoad() {
  let pageLoad = getData();
  if (pageLoad == null) {
    setLocal([]);
  }
}


function setLocal(param1) {
  
  let toString = JSON.stringify(param1);
  localStorage.setItem("userDetails",toString)
}

function getData() {
let dataFrom = localStorage.getItem('userDetails');
let parseData = JSON.parse(dataFrom)
return parseData; 
}

function emailExist(userEmail,userPhone) {
  let checkArray = JSON.parse(localStorage.getItem("userDetails"));
  let isExist = false;
  
  for (let i = 0; i < checkArray.length; i++) {
    const element = checkArray [i];

    let verifyEmail = element.Email;
    let verifyPhone = element.Phone;
    
    if (userEmail == verifyEmail || userPhone == verifyPhone) {
isExist=true;
break;    }
    
  }
  return isExist;
}


onPageLoad();

