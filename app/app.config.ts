export default defineAppConfig({
  appName: 'JairoDev',
  appDescription: 'Portfolio de Jairo Mora, Desarrollador multiplataforma y tecnico especialista en ciberseguridad',
  profilePicture: '/assets/photoJairo.png',
  footerName: 'Jairo Mora',
  email: 'jairomora61@gmail.com',
  twitterUsername: '@',
  phone: '(+34) 616 22 48 78',
  openGraphImage: 'https://canvas.hrcd.fr/social-preview.jpg',
  socials: {
    github: 'https://github.com/jairotrzn',
    linkedin: 'https://www.linkedin.com/in/jairo-mora-enriquez-907bb7273/',
    instagram: 'https://www.instagram.com/jairomora61/',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
