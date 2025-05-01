// Fecha objetivo (YYYY-MM-DDTHH:MM:SS)
const fechaObjetivo = new Date("2025-10-18T21:00:00");

const timerDias = document.querySelector(".timer_dias")
const timerHoras = document.querySelector(".timer_horas")
const timerMinutos = document.querySelector(".timer_minutos")

const timerSegundos = document.querySelector(".timer_segundos")





const timer = setInterval(()=>{
  const fechaActual = new Date();
  const diferencia = fechaObjetivo - fechaActual
  
  
  if(diferencia <= 0){
    clearInterval(timer)

  }else{

  const diasTotales = (diferencia / 60000) / 1440 
  
  const horasTotales = (diasTotales - Math.floor(diasTotales)) * 24
  
  const minutosTotales = (horasTotales - Math.floor(horasTotales)) * 60
  
  const segundosTotales = (minutosTotales - Math.floor(minutosTotales)) * 60
  
  
  const dias = Math.floor(diasTotales)
  const horas = Math.floor(horasTotales)
  const minutos = Math.floor(minutosTotales)
  const segundos = Math.floor(segundosTotales)

  
  timerDias.textContent = dias
  timerHoras.textContent = horas
  timerMinutos.textContent = minutos
  timerSegundos.textContent = segundos

  }
  
}, 1000)


// ----------------------------------------------------------------





const observer = new IntersectionObserver((entries, observerInstance)=>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible")
        observerInstance.unobserve(entry.target)
      }
    })
})
  
observer.observe(document.querySelector(".form_container"))
observer.observe(document.querySelector(".imagen_container"))
observer.observe(document.querySelector(".button_play"));



// ----------------------------------------------------------------


const botonIngresar = document.querySelector(".button_ingresar")

botonIngresar.addEventListener("click", ()=>{
  document.querySelector(".container_general").style.display = "block";
  document.querySelector(".button_play").style.display = "block";
  document.querySelector(".intro_container").style.display = "none"
  document.getElementById("audio").play()
  document.getElementById("audio").volume = 0.6
})


const buttonPlay = document.querySelector(".button_play")

buttonPlay.addEventListener("click", ()=>{
  if(!document.getElementById("audio").paused){

    document.getElementById("audio").pause()
    buttonPlay.textContent = "►"
  }else{
    document.getElementById("audio").play()
    buttonPlay.textContent = "II"
  }
})



const url = "https://sheetdb.io/api/v1/ci7qtrldeezk9"

const form = document.getElementById("invitacionForm")



form.addEventListener("submit", (e)=>{
  e.preventDefault()
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      data: { 
        Nombre: document.getElementById('Nombre').value,
        Apellido: document.getElementById('Apellido').value,
        Personas: document.getElementById('Personas').value } 
      })
  })
  .then(r => r.json())
  .then(d => alert("Gracias por confirmar tu asistencia!\nTe esperamos"))
  .catch(e => console.error(e));
})
