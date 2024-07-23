// document.getElementById('emailForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const emailInput = document.getElementById('email')
//     const email = emailInput.value;
//     const errormessage = document.getElementById('errormessage')
//     if (emailPattern.test(email)) {
//         errormessage.style.display = 'none';
//         alert('cc')
//     }else{
//         errormessage.style.display = 'block';
//     }

// })




document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const errorMessage = document.getElementById('errorMessage');
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailPattern.test(email)) {
      errorMessage.style.display = 'none';
      alert('вы успешно зарегистрировались')
    } else {
      errorMessage.style.display = 'block';
      alert('исправьте ошибки')
    }
  });

