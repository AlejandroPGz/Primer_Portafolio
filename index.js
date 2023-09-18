
const text = "Welcome to my portfolio! I'm a full-stack programmer and I'm ready to code amazing ideas!"; // Aquí puedes ingresar el texto que deseas mostrar
const speed = 50; // Velocidad de escritura en milisegundos
let i = 0;

// scroll
 const elementosAnimar = document.querySelectorAll('.to-animate')
 console.log(elementosAnimar);


  function typeWriter() {
  if (i < text.length) {
      document.getElementById("main-span").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    };
  }

  const observerOptions = {
    root: null,
    threshold: 0.5 // Cambia este valor según tus necesidades
  };
  
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        link.classList.add("activado");
      } else {
        link.classList.remove("activado");
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
  document.querySelectorAll("main").forEach((section) => {
    observer.observe(section);
  });

window.onload = typeWriter;
      
      // function typeWriter() {
      //   if (i < text.length) {
      //     document.getElementById("main-span").textContent += text.charAt(i);
      //     i++;
      //     setTimeout(typeWriter, speed);
      //   } else {
      //     setTimeout(deleteText, 6000); // Espera 6 segundos antes de borrar el texto
      //   }
      // }
      
      // function deleteText() {
      //   if (i >= 0) {
      //     document.getElementById("main-span").textContent = text.slice(0, i);
      //     i--;
      //     setTimeout(deleteText, speed);
      //   } else {
      //     i = 0;
      //     setTimeout(typeWriter, speed); // Comienza el ciclo nuevamente
      //   }
      // }
