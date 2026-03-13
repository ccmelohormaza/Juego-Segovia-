function estaResuelta(id) {
  return localStorage.getItem(`parada_${id}`) === "ok";
}

function obtenerParada(id) {
  return PARADAS.find(parada => parada.id === id);
}

function actualizarBotones() {
  const botones = document.querySelectorAll(".boton-circular");

  botones.forEach(boton => {
    const id = Number(boton.dataset.id);
    const parada = obtenerParada(id);

    if (!parada) return;

    const imagenActual = estaResuelta(id) ? parada.imagenOk : parada.imagenBoton;

    boton.style.setProperty("--img", `url('${imagenActual}')`);
    boton.classList.toggle("completada", estaResuelta(id));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarBotones();

  const btnReiniciar = document.getElementById("reiniciar");
  btnReiniciar.addEventListener("click", () => {
    localStorage.clear();
    actualizarBotones();
  });
});