module.exports = {
  siteTitle: 'Red Lion Engineering',
  siteDescription:
    ' Network InfraStructure and Network Design.',
  siteKeywords:
    'Red Lion, Redlion, RedLion, Network engineer, InfraStructure, network design, cctv, ciso',
  siteUrl: 'https://redlion.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Red Lion',
  location: 'Yangon, Myanmar',
  email: 'redlion@gmail.com',
  github: 'https://github.com/',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/redlionengr/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.facebook.com/redlionengr/',
    },
        {
      name: 'Twitter',
      url: 'https://www.twitter.com/redlionengr/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Our Services',
      url: '/#services',
    },
    {
      name: 'Our Team',
      url: '/#team',
    },
    // {
    //   name: 'Our Projects',
    //   url: '/#projects',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
