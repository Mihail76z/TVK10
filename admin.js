// ХЭШ пароля (пример: пароль = tvk10)
const PASSWORD_HASH = "8f3d0a6f1a7e1e8a5c6d3a5c5d4e2a5e";

// простая хэш-функция
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(16);
}

function login() {
  const input = document.getElementById("pass").value;
  if (hash(input) === PASSWORD_HASH) {
    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";
  } else {
    alert("Неверный пароль");
  }
}

function setAir(state) {
  fetch("config.json")
    .then(r => r.json())
    .then(cfg => {
      cfg.onAir = state;
      alert("⚠️ На GitHub Pages файл config.json нужно менять вручную!");
    });
}
