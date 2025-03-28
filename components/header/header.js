console.log("Encabezado cargado correctamente");

// Función para alternar el menú desplegable en móvil
function toggleMenu() {
  const dropdown = document.getElementById("categoriesDropdown");
  dropdown.classList.toggle("show");
}

// Función para manejar la categoría activa
function setActiveCategory(categoryId) {
  // Elimina la clase "active" de todas las categorías
  const categories = document.querySelectorAll(".categories-list li a, .categories-item a");
  categories.forEach((category) => category.classList.remove("active"));

  // Agrega la clase "active" a la categoría seleccionada
  const activeCategory = document.querySelector(`a[href="#${categoryId}"]`);
  if (activeCategory) {
    activeCategory.classList.add("active");
  }
}

// Función para mostrar una sección específica
function mostrarSeccion(seccionId) {
  // Oculta todas las secciones
  const secciones = document.querySelectorAll(".catalog-section");
  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });

  // Muestra la sección seleccionada
  const seccionSeleccionada = document.getElementById(seccionId);
  if (seccionSeleccionada) {
    seccionSeleccionada.style.display = "block";
  }

  // Actualiza la clase activa en el menú
  setActiveCategory(seccionId);

  // Actualiza la URL con el hash de la sección
  window.location.hash = seccionId;

  // Cierra el menú desplegable en móvil
  const dropdown = document.getElementById("categoriesDropdown");
  dropdown.classList.remove("show");
}

// Agrega eventos a las categorías
document.querySelectorAll(".categories-list li a, .categories-item a").forEach((category) => {
  category.addEventListener("click", (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const targetId = category.getAttribute("href").substring(1); // Obtiene el ID sin el #
    mostrarSeccion(targetId);
  });
});

// Cierra el menú móvil al hacer clic fuera de él
document.addEventListener("click", (event) => {
  const dropdown = document.getElementById("categoriesDropdown");
  const menuToggle = document.querySelector(".menu-toggle");
  if (!dropdown.contains(event.target) && !menuToggle.contains(event.target)) {
    dropdown.classList.remove("show");
  }
});

// Selecciona el encabezado
const header = document.querySelector('.header');