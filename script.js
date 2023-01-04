const notifications = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".buttons .btn");

//objeto de mensagens para cada botão
const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Succes: This a success toast.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Error: This a error toast.",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Warning: This a warning toast.",
  },
  info: {
    icon: "fa-circle-info",
    text: "Info: This a info toast.",
  },
};
const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) {
    clearTimeout(toast.timeoutId);
  }
  setTimeout(() => toast.remove(), 500); // remove depois de 500ms
};
const creatToast = (id) => {
  // Pega o icone e o texto com base no id passado
  const { icon, text } = toastDetails[id];
  const toast = document.createElement("li"); // criar um novo elemento Li
  toast.className = `toast ${id}`; // definindo a classe
  toast.innerHTML = `<div class="column">
                      <i class="fa-solid ${icon}"></i>
                      <span> ${text}</span>
                  </div>
                  <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast);

  //Definindo o tempo de duração para remover o lembrete
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

//Adicionando um "ouvinte" de evento de click em cada botão
buttons.forEach((btn) => {
  btn.addEventListener("click", () => creatToast(btn.id));
});
