let fecha = new Date();
salida = document.querySelector("#salida");

window.onload = () => {
    document.querySelector("#fechaHoy").addEventListener("click", mostrarFechaHoy);
    document.querySelector("#diaHoy").addEventListener("click", mostrarDia);
    document.querySelector("#mesActual").addEventListener("click", mostrarMes);
    document.querySelector("#anioActual").addEventListener("click", mostrarAnio);
    document.querySelector("#fechaCompleta").addEventListener("click", mostrarFechaCompleta);
    document.querySelector("#horaLocal").addEventListener("click", mostrarHora);
}

function mostrarFechaHoy() {
    document.querySelector("#salida").textContent = fecha.toLocaleDateString(); //Muestra la fecha según el formato local.
}

function mostrarDia() {
    salida.textContent = "Hoy es " + fecha.getDate(); //Muestra el  día actual del mes.
}

function mostrarMes() {
    salida.textContent = "El mes es " + fecha.getMonth() + 1; //Muestra el mes atual en numero, pero enero = 0 (por eso se le añade +1, para que enero = 1).  
}

function mostrarAnio() {
    salida.textContent = "El año es " + fecha.getFullYear(); //Muestra el año atual en numero.
}

function mostrarFechaCompleta() { //Esto nos permitirá devovler la fecha completa
    salida.textContent = "La fecha de hoy es: " + fecha.toLocaleString
        ("ES-es", {
            weekday: "long", //Nombre dia semana
            year: "numeric", //Año
            month: "long", //Mes
            day: "numeric" //Día
        }).toUpperCase();
}

// Un 
function mostrarHora() {
    const intervalID = setInterval(() => {
        let now = new Date();
        document.querySelector("#salida").innerHTML = now.toLocaleTimeString("es-ES")
    }) //Por defecto se actualiza cada 1000 milisegundos (1 segundo).
    document.querySelector("#pararHora").addEventListener("click", ()=>{
        clearInterval(intervalID);
    });
}