// Burger menus
document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    var OSName = "mac";
    const navApp = navigator.userAgent.toLowerCase();
    switch (true) {
        case (navApp.indexOf("win") != -1):
            OSName = "win";
            break;
        case (navApp.indexOf("mac") != -1):
            OSName = "mac";
            break;
        case (navApp.indexOf("linux") != -1):
            OSName = "linux";
            break;
        case (navApp.indexOf("x11") != -1):
            OSName = "linux";
            break;
    }
    const download = document.getElementById("download");
    switch (OSName) {
        case "win":
            download.innerText = "Download for Windows";
            download.setAttribute("href", "https://github.com/lapce/lapce/releases/download/v0.0.11/Lapce-windows.msi")
            break;
        case "mac":
            download.innerText = "Download for macOS";
            download.setAttribute("href", "https://github.com/lapce/lapce/releases/download/v0.0.11/Lapce-macos.dmg")
            break;
        case "linux":
            download.innerText = "Download for Linux";
            download.setAttribute("href", "https://github.com/lapce/lapce/releases/download/v0.0.11/Lapce-linux.tar.gz")
            break;
    }
});
