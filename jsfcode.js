      $('.count').counterUp({
        delay:3,
        time:1000
      })
      mybutton = document.getElementById("myBtn");
      window.onscroll=function() {scrollFunction()};

      function scrollFunction(){
        if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
          mybutton.style.display ="block";
        }
        else{
          mybutton.style.display="none"
        }
      }

      function topFunction(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0
      }



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwoNTH9ThHCPKxZIwID5MabLMYgq7Sbs4-Pi6Zh5tP-Y_gwlOuuvqiqeh4GvN2YDBFLfA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Thankyou for your message😊"
        setTimeout(function(){
          msg.innerHTML=""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })