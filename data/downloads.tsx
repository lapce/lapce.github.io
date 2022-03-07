const downloads = [
  {
    img: {
      src: '/img/linux-logo.png',
      alt: 'Linux Logo',
    },
    files: [
      {
        search: 'Lapce-linux.tar.gz',
        name: '.tar.gz',
        label: '64 bit',
      },
    ],
  },
  {
    img: {
      src: '/img/windows-logo.png',
      alt: 'Windows Logo',
    },
    files: [
      {
        search: 'Lapce-windows.msi',
        name: 'System Installer',
        label: '64 bit',
      },
      {
        search: 'Lapce-portable.zip',
        name: 'Portable',
        label: '64 bit',
      },
    ],
  },
  {
    img: {
      src: '/img/apple-logo.svg',
      alt: 'Apple Logo',
    },
    files: [
      {
        search: 'Lapce-macos.dmg',
        name: '.dmg',
        label: 'Universal',
      },
    ],
  },
]

export default downloads
