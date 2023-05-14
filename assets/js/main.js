// there is no need to check for dom content loaded if you use defer inside html. Defer makes sure the script pauses until the dom loaded

document.addEventListener("DOMContentLoaded", function () {
  // rather than looking for it all the time, you could just create an enum and change this once than updating every line

  const github = {
    repo: "https://github.com/lapce/lapce",
    windows: "Lapce-windows.msi",
    linux: "Lapce-linux.tar.gz",
    macos: "Lapce-macos.dmg",
  };

  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");
  const download = document.querySelector("#download");

  if (burger.length && menu.length) {
    burger.forEach((burgerElement) => {
      burgerElement.addEventListener("click", () => {
        menu.forEach((menuElement) => {
          menuElement.classList.toggle("hidden");
        });
      });
    });
  }

  const closeMenu = () => {
    menu.forEach((menuElement) => {
      menuElement.classList.toggle("hidden");
    });
  };

  if (close.length) {
    close.forEach((closeElement) => {
      closeElement.addEventListener("click", closeMenu);
    });
  }

  if (backdrop.length) {
    backdrop.forEach((backdropElement) => {
      backdropElement.addEventListener("click", closeMenu);
    });
  }

  const navApp = navigator.userAgent.toLowerCase();

  const setDownload = (innerText, release) => {
    download.innerText = innerText;
    download.setAttribute(
      "href",
      `${github.repo}/releases/latest/download/${release}`
    );
  };

  switch (true) {
    case navApp.indexOf("win") !== -1:
      setDownload("Download for Windows", github.windows);
      break;
    case navApp.indexOf("mac") !== -1:
      setDownload("Download for macOS", github.macos);
      break;
    case navApp.indexOf("linux") !== -1 || navApp.indexOf("x11") !== -1:
      setDownload("Download for Linux", github.linux);
      break;
  }
});
