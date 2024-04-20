document.addEventListener('DOMContentLoaded', function () {

    // rather than looking for it all the time, you could just create an enum and change this once than updating every line
    const github = {
        repo: 'https://github.com/lapce/lapce',
        windows: 'Lapce-windows.msi',
        linux: 'Lapce-linux.tar.gz',
        macos: 'Lapce-macos.dmg'
    }

    // there is no need to check for dom content loaded if you use defer inside html. Defer makes sure the script pauses until the dom loaded
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (let i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', () => {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', () => {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', () => {
                for (let j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // to avoid variables being reached outside of scope, ES6 guides recommend the use of let and const for variables. "var" is only available for backwards compatibility
    let OSName = "mac";
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

    const download = document.querySelector("#download");
    switch (OSName) {
        case "win":
            download.innerText = "Download for Windows";
            download.setAttribute("href", `${github.repo}/releases/latest/download/${github.windows}`)
            break;
        case "mac":
            download.innerText = "Download for macOS";
            download.setAttribute("href", `${github.repo}/releases/latest/download/${github.macos}`)
            break;
        case "linux":
            download.innerText = "Download for Linux";
            download.setAttribute("href", `${github.repo}/releases/latest/download/${github.linux}`)
            break;
    }
    
    const stars = () =>
	fetch(`https://api.github.com/repos/lapce/lapce`)
	.then((res) => res.json())
	.then((starred) => document.querySelector("#stars").innerText = starred.stargazers_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    stars()
});
