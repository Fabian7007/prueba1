console.log("Footer cargado correctamente.");

// Función para compartir la página
function sharePage() {
  // Copia el enlace de la página al portapapeles
  const pageUrl = window.location.href;
  navigator.clipboard.writeText(pageUrl).then(() => {
    // Muestra la notificación
    const notification = document.getElementById("shareNotification");
    notification.style.display = "block";

    // Oculta la notificación después de 3 segundos
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  });
}

// Función para copiar el enlace al portapapeles
function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// Función para mostrar una notificación animada
function showCopyNotification() {
  const notification = document.createElement("div");
  notification.className = "copy-notification";
  notification.textContent = "¡Enlace copiado al portapapeles!";
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  setTimeout(() => {
    notification.classList.remove("show");
    notification.classList.add("hide");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Función para manejar el clic en los íconos sociales
function handleIconClick(event, url) {
  event.preventDefault(); // Evita la redirección inmediata
  const target = event.currentTarget;

  // Agrega una clase temporal para la animación
  target.classList.add("clicked");

  // Espera 300ms (duración de la animación) antes de redirigir
  setTimeout(() => {
    window.location.href = url; // Redirige al enlace
    target.classList.remove("clicked"); // Limpia la clase después de la animación
  }, 300);
}

// Asigna la función a los íconos sociales
document.addEventListener("DOMContentLoaded", () => {
  const socialIcons = document.querySelectorAll(".social-icons a");
  socialIcons.forEach((icon) => {
    const url = icon.href; // Obtiene el enlace del ícono
    icon.addEventListener("click", (event) => handleIconClick(event, url));
  });
});