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




