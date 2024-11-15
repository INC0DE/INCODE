import {
  incode,
  chromecast,
  disc02,
  facebook,
  figma,
  instagram,
  recording01,
  recording03,
  sliders04,
  react,
  three,
  next,
  node,
  javascript,
  html,
  css,
  tailwind,
  incodeblack,
  titleblack,
  titleincode
} from '../assets';

export const navigation = [
  {
    id: '0',
    title: 'Who are we',
    url: '#who'
  },
  {
    id: '1',
    title: 'technologies',
    url: '#technologies'
  },
  {
    id: '2',
    title: 'portfolio',
    url: '#portfolio'
  },

  {
    id: '3',
    title: 'plans',
    url: '#pricing'
  }
];

export const incodeServices = [
  'Compatibility with any device.',
  'Websites for any sector.',
  'Visual concept, graphic design and branding.',
  'Stay on the Internet with a hosting and a domain .'
];

export const incodeServicesIcons = [recording03, recording01, disc02, chromecast, sliders04];

export const infoProyects = [
  {
    id: '1',
    title: 'Gamification',
    text: 'Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.',
    imageUrl: incode
  },
  {
    id: '2',
    title: 'Gamification',
    text: 'Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.',
    imageUrl: incode
  }
];

export const proyects = [
  {
    id: '1',
    title: 'Apple Clone',
    text: 'It is an apple site that is made with technologies such as React and Three.',
    videoUrl: 'https://www.youtube.com/embed/GKyro1yiNFE?si=p9B1Ww9MYI23jxQk',
    backgroundUrl: titleincode
  },
  {
    id: '2',
    title: 'Music Space',
    text: 'It is a music player that is made with technologies such as React and Tailwind among other libraries.',
    videoUrl: 'https://www.youtube.com/embed/2-NJCP70gso?si=o9qOcQ5gnuyjwhyw',
    backgroundUrl: titleincode
  },
  {
    id: '3',
    title: 'Dashboard',
    text: 'It is a daily life task manager that is made with technologies such as React, Next and Tailwind.',
    videoUrl: 'https://www.youtube.com/embed/RL7l_MxD2A0?si=VfPzs_UpDKtR0HvZ',
    backgroundUrl: titleincode
  },
  {
    id: '4',
    title: 'Nike Clone',
    text: 'Its a nike site that is made with technologies such as React and Tailwind',
    videoUrl: 'https://www.youtube.com/embed/n0pzihFug-k?si=B2K6PvipUI2l5KiB',
    backgroundUrl: titleincode
  }
];

export const frontText =
  'The part users can see and interact with, and which is responsible for presenting the information in an attractive way.';

export const backText = 'It handles the logic and data processing and is invisible to the user.';

export const collabContent = [
  {
    id: '0',
    title: 'Frontend',
    text: frontText
  },
  {
    id: '1',
    title: 'Backend',
    text: backText
  }
];

export const collabApps = [
  {
    id: '0',
    title: 'Figma',
    icon: figma,
    width: 26,
    height: 36
  },
  {
    id: '1',
    title: 'React',
    icon: react,
    width: 34,
    height: 36
  },
  {
    id: '2',
    title: 'JavaScript',
    icon: javascript,
    width: 36,
    height: 28
  },
  {
    id: '3',
    title: 'Node',
    icon: node,
    width: 34,
    height: 35
  },
  {
    id: '4',
    title: 'Next',
    icon: next,
    width: 34,
    height: 34
  },
  {
    id: '5',
    title: 'Three',
    icon: three,
    width: 34,
    height: 34
  },
  {
    id: '6',
    title: 'HTML5',
    icon: html,
    width: 26,
    height: 34
  },
  {
    id: '7',
    title: 'CSS3',
    icon: css,
    width: 38,
    height: 32
  }
];

export const pricing = [
  {
    id: '0',
    title: 'Business.',
    description: 'Static website.',
    price: '5999',
    features: [
      'Static Content.',
      'Page design and unlimited Design changes.',
      'Maintenance.',
      'Hoisting and domain included.'
    ]
  },
  {
    id: '1',

    title: 'Business Black.',
    description: 'Functional pro website.',
    price: '25999',
    features: [
      ' Functional Content.',
      'Page design and unlimited Design changes.',
      'Maintenance.',
      'Hoisting and domain included.',
      'Data Base.'
    ]
  },
  {
    id: '2',
    title: 'Business White.',
    description: 'Functional website.',
    price: '15999',
    features: [
      'Functional Content.',
      'Page design and unlimited Design changes.',
      'Maintenance.',
      'Hoisting and domain included.'
    ]
  }
];

export const technologies = [
  {
    id: '0',
    title: 'JavaScript',
    text: 'JavaScript is a flexible and powerful option for both frontend and backend development, with a community and ecosystem that offers support and resources to improve development productivity and quality.',
    backgroundUrl: './src/assets/benefits/card-1.svg',
    iconUrl: javascript,
    imageUrl: javascript,
    light: true
  },
  {
    id: '1',
    title: 'HTML5',
    text: ' HTML is the foundation on which the web is built. Its simplicity, universal compatibility and ability to work together with CSS and JavaScript make it essential and effective for developing quality web content and applications.',
    backgroundUrl: './src/assets/benefits/card-2.svg',
    iconUrl: html,
    imageUrl: html
  },
  {
    id: '2',
    title: 'CSS3',
    text: 'CSS is essential for designing and enhancing the visual and functional experience of the web, providing control over design, maintaining performance, and allowing web pages to adapt to an ever-changing world of devices.',
    backgroundUrl: './src/assets/benefits/card-3.svg',
    iconUrl: css,
    imageUrl: css,
    light: true
  },
  {
    id: '3',
    title: 'React',
    text: ' React is an excellent choice for its performance, modularity, and the robust community it offers. It is a powerful tool for building modern and scalable user interfaces, whether for web or mobile.',
    backgroundUrl: './src/assets/benefits/card-4.svg',
    iconUrl: react,
    imageUrl: react
  },
  {
    id: '4',
    title: 'Next',
    text: 'Next.js is an excellent choice for modern React applications, as it combines the best of SSR, SSG, and API Routes in one place. This not only simplifies development, but also enables highly optimized, scalable, and SEO-ready applications.',
    backgroundUrl: './src/assets/benefits/card-5.svg',
    iconUrl: next,
    imageUrl: next,
    light: true
  },
  {
    id: '5',
    title: 'Tailwind',
    text: 'Tailwind CSS is a powerful tool that allows you to develop attractive designs in a fast, flexible and optimized way. Offering a methodology of utility classes and customizable configurations, it is ideal for designers and developers looking for efficiency and consistency in their interfaces.',
    backgroundUrl: './src/assets/benefits/card-6.svg',
    iconUrl: tailwind,
    imageUrl: tailwind
  }
];

export const contactUS = [
  {
    id: '1',
    title: 'Instagram',
    urlContact: 'https://www.instagram.com/direct/t/17845898610324322'
  }
];
export const socials = [
  {
    id: '1',
    title: 'Instagram',
    iconUrl: instagram,
    url: 'https://www.instagram.com/incodeweb/'
  },
  {
    id: '2',
    title: 'Facebook',
    iconUrl: facebook,
    url: 'https://www.facebook.com/profile.php?id=61566862540608&mibextid=LQQJ4d'
  }
];
