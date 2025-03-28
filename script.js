// Función para cargar un componente (HTML, CSS y JS)
function cargarComponente(ruta, contenedorId) {
  fetch(`${ruta}/${contenedorId}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error al cargar ${ruta}/${contenedorId}.html: ${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      // Insertar el HTML en el contenedor
      document.getElementById(contenedorId).innerHTML = html;

      // Cargar el CSS del componente
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `${ruta}/${contenedorId}.css`;
      document.head.appendChild(link);

      // Cargar el JS del componente
      const script = document.createElement("script");
      script.src = `${ruta}/${contenedorId}.js`;
      document.body.appendChild(script);
    })
    .catch((error) => console.error(`Error al cargar el componente ${contenedorId}:`, error));
}

// Cargar los componentes al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
  cargarComponente("components/header", "header"); // Carga el encabezado
  cargarComponente("components/menu", "menu"); // Carga el menú
  cargarComponente("components/footer", "footer"); // Carga el footer
});