fetch("config.json")
  .then(r => r.json())
  .then(cfg => {
    const c = document.getElementById("content");
    if (cfg.onAir) {
      c.innerHTML = `
        <h2>Прямой эфир</h2>
        <iframe
          src="https://player.twitch.tv/?channel=omnus_tv_76reg&parent=${location.hostname}"
          width="854" height="480" allowfullscreen>
        </iframe>`;
    } else {
      c.innerHTML = `<div class="offline">
        Конец эфира интернет-вещания
      </div>`;
    }
  });
