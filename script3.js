function saveToLocalStorage(event) {
  
    event.preventDefault();
   
     const Name= event.target.name.value;
     const EmailId = event.target.email.value;
     //localStorage.setItem('name', name);
     //localStorage.setItem('email', email);
     
     let obj = {
      name: Name,
      EmailId: EmailId
     }
   
     obj_serialized = JSON.stringify(obj);
     localStorage.setItem(EmailId, obj_serialized)
   
     showOnScreen(obj)

    }

     function showOnScreen(user){
      document.getElementById('email').value = '';
      document.getElementById('name').value = '';
      if(localStorage.getItem(user.EmailId !== null)){
        removeUserfromScreen(user.email);
        editUser(user.name)
        
      }
    let parentNode = document.getElementById('listOfUser');
    let childHTML = `<li id= ${user.EmailId}> ${user.name} - ${user.EmailId}
          <button onclick= deleteUser('${user.EmailId}')> Delete user </button> 
          <button onclick = editUser('${user.name}','${user.EmailId}')> editUserDetails </button>
           </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
     }

    function deleteUser(email){
      console.log(email)
      localStorage.removeItem(email);
      removeUserfromScreen(email)
    }

    function removeUserfromScreen(email){
      let parentNode = document.getElementById('listOfUser')
      let childNodeToBeDelete = document.getElementById(email);
      parentNode.removeChild(childNodeToBeDelete)
    }

    function editUser(name, EmailId){
      document.getElementById('name').value = name;
      document.getElementById('email').value = EmailId;
      deleteUser(EmailId)
    
    }
  