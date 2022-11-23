function saveToLocalStorage(event) {
  event.preventDefault();
  const name= event.target.name.value;
  const email = event.target.emailId.value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
}