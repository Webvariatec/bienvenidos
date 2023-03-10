
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_b2c01wp";
  const templateID = "template_pd4dic3";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Correo enviado");
      limpiar();
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
  function limpiar(){
    console.log('Correo enviado');
    form.reset();
    return false;
  }
});
