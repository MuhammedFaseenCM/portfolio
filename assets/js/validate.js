function validateForm() {
    let x = document.forms["myForm"]["w3lName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }