let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy estudiante de Ingeniería en Computación de la Universidad Autónoma del Estado de México')
  .pauseFor(200)
  .deleteChars(10)
  .start();
