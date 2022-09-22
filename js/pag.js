let arrayReserva= [];
let arrayReservaSala=[];

class entrenamientoFuncional {
  constructor(id,day,hour,reserved) {
    this.id= id;
    this.day= day;
    this.hour= hour;
    this.reserved= reserved;
} };

const funcional1= new entrenamientoFuncional (10, "Lunes","8:00", false);
const funcional2= new entrenamientoFuncional (20, "Martes", "8:00", false);
const funcional3= new entrenamientoFuncional (30, "Miércoles", "8:00", false);
const funcional4= new entrenamientoFuncional (40, "Jueves", "8:00", false);
const funcional5= new entrenamientoFuncional (50, "Viernes","8:00", false);


let actividadesFuncional=[ ];
actividadesFuncional.push(funcional1);
actividadesFuncional.push(funcional2);
actividadesFuncional.push(funcional3);
actividadesFuncional.push(funcional4);
actividadesFuncional.push (funcional5);



function salaEntrenamiento (id,day,hour,reserved) {    
    this.id= id;
    this.day= day;
    this.hour= hour;
    this.reserved= reserved;
};

const sala1= new salaEntrenamiento (60, "Lunes","8:00", false);
const sala2= new salaEntrenamiento (70, "Martes","8:00", false);
const sala3= new salaEntrenamiento (80, "Miercoles","8:00", false);
const sala4= new salaEntrenamiento (90, "Jueves","8:00", false);
const sala5= new salaEntrenamiento (100, "Viernes","8:00", false);


let activdadesSala =[];

activdadesSala.push(sala1);
activdadesSala.push(sala2);
activdadesSala.push(sala3);
activdadesSala.push(sala4);
activdadesSala.push(sala5);

//MOSTRAR LAS ACTIVIDADES DE ENTRENAMIENTO FUNCIONAL Y EVENTO BOTONES
//IMPRIMIR CARTAS
function mostrarActividades(entrenamientoFuncional) {
  const contenedorDeActividades = document.getElementById("contenedor");
  
  actividadesFuncional.forEach(entrenamientoFuncional => {
  console.log(entrenamientoFuncional);
  
  const divActividad = document.createElement("div");
  divActividad.classList.add ("actividad");
  divActividad.innerHTML=  `  <p> ${entrenamientoFuncional.day} Hora ${entrenamientoFuncional.hour}</p>`;
  contenedorDeActividades.appendChild(divActividad);
  console.log(entrenamientoFuncional);
  
  const botonVerDetalle = crearBotonVerDetalle(entrenamientoFuncional)
  divActividad.appendChild(botonVerDetalle);
  contenedorDeActividades.appendChild(divActividad);
}
)
};

function mostrarDetalle(entrenamientoFuncional){
  arrayReserva.push(entrenamientoFuncional)
  console.log(arrayReserva);
  localStorage.setItem("reserva", JSON.stringify(entrenamientoFuncional));
  entrenamientoFuncional.length >0 ? entrenamientoFuncional: entrenamientoFuncional = JSON.parse(localStorage.getItem("reserva"))
  console.log(entrenamientoFuncional);
  const contenedorDeActividadFuncional = document.getElementById("contenedor-funcional");
  var item;
  arrayReserva.map(entrenamientoFuncional=> item= `
  <h3>Entrenamiento Funcional</h3>
  <p> ${entrenamientoFuncional.day}</p>
  <p>${entrenamientoFuncional.hour}</p> `)
  console.log(item);
  contenedorDeActividadFuncional.innerHTML = item ;
  
}

function crearBotonVerDetalle(entrenamientoFuncional){
  console.log(entrenamientoFuncional);
  const button = document.createElement("button");
  button.innerText = "Reservar";
  button.addEventListener("click", () => {  button.innerHTML=`reservado`
  mostrarDetalle(entrenamientoFuncional);
  }
  )
  return button;
}


mostrarActividades(entrenamientoFuncional)

//MOSTRAR ACTIVIDADES DE SALA ENTRENAMIENTO Y EVENTO BOTONES
function mostrarActividadesSala(salaEntrenamiento) {
  const contenedorDeActividades1 = document.getElementById("contenedor1");
  activdadesSala.forEach(salaEntrenamiento => {
  console.log(salaEntrenamiento);
  const divActividadSala = document.createElement("div");
  divActividadSala.classList.add ("actividadSala");
  divActividadSala.innerHTML=  `  <p> ${salaEntrenamiento.day} Hora ${salaEntrenamiento.hour}</p>`;
  contenedorDeActividades1.appendChild(divActividadSala);
  const botonVer = crearBotonVerSala(salaEntrenamiento)
  divActividadSala.appendChild(botonVer);
  contenedorDeActividades1.appendChild(divActividadSala);
  }
  )
};
function crearBotonVerSala(salaEntrenamiento){
  const button2 = document.createElement("button");
  button2.innerText = "Reservar";
  button2.addEventListener("click", () => {  button2.innerHTML=`reservado`
    mostrarDetalleSala(salaEntrenamiento);
    })
  return button2;
}
function mostrarDetalleSala(salaEntrenamiento){
  arrayReservaSala.push(salaEntrenamiento)
  console.log(arrayReservaSala);
  localStorage.setItem("reservaSala", JSON.stringify(salaEntrenamiento));
  salaEntrenamiento.length >0 ? salaEntrenamiento: salaEntrenamiento = JSON.parse(localStorage.getItem("reservaSala"))
  const contenedorDeActividadSala = document.getElementById("contenedor-sala");
  var item;
  arrayReserva.map(salaEntrenamiento=> item= `
  <h3>Entrenamiento Funcional</h3>
  <p> ${salaEntrenamiento.day}</p>
  <p>${salaEntrenamiento.hour}</p> `)
  console.log(item);
  contenedorDeActividadSala.innerHTML = item ;
  

    
}mostrarActividadesSala(salaEntrenamiento)




 
