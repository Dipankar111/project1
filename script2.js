function saveToLocalStorage(event) {
  
    event.preventDefault();
   
     const name= event.target.username.value;
     const email = event.target.emailId.value;
     //localStorage.setItem('name', name);
     //localStorage.setItem('email', email);
     
     const obj = {
      name,
      email,
     }
   
     localStorage.setItem(obj.name, JSON.stringify(obj))
     saveInfo(obj)
   
   }
  
    function saveInfo(user){
    let parentNode = document.getElementById('listOfUser');
    let childHTML = `<li> ${user.name} - ${user.email}</li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
    }