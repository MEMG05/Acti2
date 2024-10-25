const usuarios = [
  { usuario: "usuario1", correo: "user1@example.com", password: "pass1" },
  { usuario: "usuario2", correo: "user2@example.com", password: "pass2" },
  { usuario: "usuario3", correo: "user3@example.com", password: "pass3" },
];

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const userList = document.getElementById("userList");
const registeredUsers = document.getElementById("registeredUsers");

// Mostrar lista de usuarios
function displayUserList() {
  registeredUsers.innerHTML = "";
  usuarios.forEach((u) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border px-4 py-2">${u.usuario}</td>
      <td class="border px-4 py-2">${u.correo}</td>
    `;
    registeredUsers.appendChild(row);
  });
}

// Tab login
loginTab.addEventListener("click", () => {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

// Tab registro
registerTab.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
});

// Manejo del formulario de inicio de sesión
document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const foundUser = usuarios.find(
    (u) => u.usuario === user && u.password === pass
  );

  if (foundUser) {
    alert(`Bienvenido ${foundUser.usuario}`);
    displayUserList();
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
