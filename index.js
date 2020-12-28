window.onload = () => {
    document.querySelector(".arrow-right").addEventListener("click", clickRight);
    document.querySelector(".arrow-left").addEventListener("click", clickLeft);
    document.querySelector(".send-button").addEventListener("click", showNotification);
    document.body.addEventListener("click", e => closeModal(e));
  };

  const imgsModal = document.querySelectorAll('.project-img')
  const projects =  Array.from(document.querySelectorAll(".project")) 
  const modal = projects.forEach(element => {
    const index = projects.findIndex(el => el === element)
    element.addEventListener("click", () => openModal(index));
  });
   
  
  const project1 = document.querySelector('#project1')
  const project2 = document.querySelector('#project2')
  const project3 = document.querySelector('#project3') 
  const project4 = document.querySelector('#project4')
  const project5 = document.querySelector('#project5')
  /** Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */
  function clickRight(){
    const container = document.querySelector('.window')
     container.scrollLeft +=  container.offsetWidth

    const observer = new IntersectionObserver(entrys => {
      const entry = entrys[0].intersectionRatio === 1
      if(entry){
        project1.setAttribute("tabindex", "-1")
        project2.setAttribute("tabindex", "-1")
        project4.setAttribute("tabindex", "0")
        project5.setAttribute("tabindex", "0")
      }
    }, { threshold: 1})

    observer.observe(project5)
  }
  /** Esta funcion se llama cuando la persona hace click en la fecha izquierda del carousel para navegar a la izquierda */
  function clickLeft() {
    const container = document.querySelector('.window')
    container.scrollLeft -= container.offsetWidth
    const observer = new IntersectionObserver(entrys => {
      const entry = entrys[0].intersectionRatio === 1
      if(entry){
        project1.setAttribute("tabindex", "0")
        project2.setAttribute("tabindex", "0")
        project4.setAttribute("tabindex", "-1")
        project5.setAttribute("tabindex", "-1")
      }
    }, { threshold: 1})

    observer.observe(project1)
  }
  
  /** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
  function showNotification() {
    document.querySelector(".notification").style.display = "flex";
    setTimeout(function() {
      document.querySelector(".notification").style.display = "none";
    }, 3000);
  }
  
  /** Esta funcion se llama cuando la persona hace click en cualquier porjecto del carousel */
  function openModal(e) {

    const image = imgsModal[e].src
    console.log(image)

    document.querySelector(".modal-container").style.display = "flex";
    document.querySelector('.modal-project-image').setAttribute('src',`${image}`)
  }
  
  /** Esta funcion se llama para cerrar el modal */
  function closeModal(e) {
    // si el click occurio dentro del las imagenes del carousel o dentro del modal, no se cierra el modal
    if (
      e.target.className.includes("project") ||
      e.target.className === "modal"
    ) {
      return;
    } else {
      document.querySelector(".modal-container").style.display = "none";
    }
  }
  



 /*  

   function clickRight(){
    let container = document.querySelector('.project-container')  //SE OBTIENE EL OBJECTO CONTENEDOR DE LOS PROJECTOS
    let move = parseInt(getComputedStyle(container).left)   //SE VERIFICA CUANTOS PIXELES TIENEN ASIGNADOS A LA IZQUIERA/DERECHA POR SU POSITION: "RELATIVE"
    if(move < -280){
      return            //Si es menor que 280 (tamaño de cada projecto/imagen)se quitan 280 pixeles hacia la izquierda lo cual solo permitira hacer scroll 2 veces 
    }
    const newMove = move - 280
    container.style.left = `${newMove}px`   
  }  */