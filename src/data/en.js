import imageCover01 from '../images/cover-01.jpg'
import imageCover02 from '../images/cover-02.jpg'
import imageCover03 from '../images/cover-03.jpg'
import favicon32x32 from '../images/favicon-32x32.png'
import favicon16x16 from '../images/favicon-16x16.png'

export const meta = {
  website: 'https://lamhieu.info',
  lang: 'en',
  title: 'lamhieu - yep, never give up.',
  keywords:
    'lamhieu, lamhieu-vk, _lamhieu, never give up, html, css, liser, ciser, nodejs, react, php, mysql, javascript, es6, mongodb, developer, designer, lap trinh vien, lập trình viên, lam hieu, lâm hiếu',
  image: [imageCover01, imageCover02, imageCover03],
  description:
    "I'm a programmer, I love my job. I always want to bring people with useful products with the best quality",
  favicon: {
    '16x16': favicon16x16,
    '32x32': favicon32x32
  }
}

export const header = {
  name: 'Lam Hieu',
  text: ' a developer'
}

export const socialMedia = {
  facebook: 'https://fb.com/lamhieu.me',
  twitter: 'https://twitter.com/_lamhieu',
  'github-alt': 'https://github.com/lamhieu-vk',
  skype: 'skype:lamhieu@outlook.com?call',
  envelope: 'mailto:lamhieu.vk@gmail.com'
}

export const sections = {
  intro: {
    color: '#1E88E5',
    icon: 'comment',
    title: 'Introducation',
    messages: [
      {
        by: 'guest',
        content: [{ markdown: 'come to **lamhieu.info** 😶' }]
      },
      {
        by: 'author',
        content: [
          { markdown: 'welcome to my home 😆' },
          { markdown: 'wish you a good day!' },
          { markdown: 'well ! do you want to know anything about me?' }
        ]
      },
      {
        by: 'guest',
        content: [{ markdown: 'so 😳 who are you?' }]
      },
      {
        by: 'author',
        content: [{ markdown: "I'm **Hieu**, Lam Hieu!" }]
      },
      {
        by: 'guest',
        content: [{ markdown: 'could you talk about yourself 🤔' }]
      },
      {
        by: 'author',
        content: [
          { markdown: 'oh great!' },
          {
            markdown:
              "I'm a  programmer. I love my job. I always wants to bring people with useful products with the best quality. I love participate in the program community. I love watch your speeches go ahead to reinfrorce my little knowledge 🤓, so it's great to learn something from you 😆"
          },
          {
            markdown:
              'I have a great passion for programming 💻. It seemed to have panetrated my mind when i knew it. my opportunity to programer was a coincidental day when I learned  elementary. Gradually 🎓, I knew it and I realized that it was my passion 👨‍💻'
          },
          {
            markdown:
              'programming is my passion. so my life will be boring without it 😙'
          },
          {
            markdown:
              "I don't like people judging people or qualifications through degrees, it's completely pointless to me, at least for now 🤧 !"
          },
          {
            markdown:
              'if someone could take the moon for you, I could do the same. give me a chance, I will show you what I can do ... 🤝'
          }
        ]
      },
      {
        by: 'guest',
        content: [{ markdown: "what's your hobby?" }]
      },
      {
        by: 'author',
        content: [
          {
            markdown:
              "my hobbies is simple. that's particularly for art photography 📸, movie 🎞, listen to music 🎶, read books 📚, travel 🏍 and so on.... 😝"
          }
        ]
      }
    ]
  },
  info: {
    color: '#00897b',
    icon: 'credit-card',
    title: 'Info',
    messages: [
      {
        by: 'guest',
        content: [{ markdown: "so what's your hometown? 🤔" }]
      },
      {
        by: 'author',
        content: [
          {
            markdown:
              "my hometown is **bac lieu** city. it's an interesting city 😎"
          },
          {
            markdown:
              "by the way, I will introduce myself.  I'm Lam Hieu. my gender is **male**. my nationality is **Vietnam** but I'm **international citizens** 😄"
          },
          {
            markdown:
              "I'm from in **vietnam** so I can speak **vietnamese** very well 🤪. other than **vietnamese**, I'm improving my **english** furthe 😔"
          }
        ]
      },
      {
        by: 'guest',
        content: [{ markdown: 'how old are you?' }]
      },
      {
        by: 'author',
        content: [{ markdown: "I think I'm old but people call me boy 😰" }]
      },
      {
        by: 'guest',
        content: [{ markdown: 'what your favorite quotes?' }]
      },
      {
        by: 'author',
        content: [{ markdown: '**yep, never give up.**' }]
      }
    ]
  },
  portfolios: {
    color: '#7cb342',
    icon: 'share-alt',
    title: 'portfolios',
    messages: [
      {
        by: 'author',
        content: [
          {
            markdown:
              'I often go to technology groups or forums to learn more, it gives me a new perspective on things 😄'
          },
          {
            markdown:
              "ah yep, also have to do some things to contribute to everyone's use ... 😅"
          },
          {
            markdown:
              '## liser  \n[![npm version of liser](https://badge.fury.io/js/liser.svg)](https://npmjs.com/package/liser) [![npm downloads of liser](https://img.shields.io/npm/dm/liser.svg)](https://npmjs.com/package/liser)  \nyou can create new modules and then combine them to create a library of set properties or you can use the existing standard library of [liser](https://github.com/lamhieu-vk/liser). [liser](https://github.com/lamhieu-vk/liser) helps reduce the time spent designing the interface of a web site but still has enough elements such as suitable for different types of monitors and browsers. it also helps to create effects for the site more easily!'
          },
          {
            markdown:
              "## ciser  \n[![npm version of ciser](https://badge.fury.io/js/ciser.svg)](https://npmjs.com/package/ciser) [![npm downloads of ciser](https://img.shields.io/npm/dm/ciser.svg)](https://npmjs.com/package/ciser)  \nit's considered as an upgrade from tachyons, which adds new properties and new intermediate values to the library, and adds new effects and features.!"
          },
          {
            markdown:
              '## giccos social network \n this is a set of social networking code I made in the learning process of languages such as **php & mysql**, **bash**, **javascript**, **css & html**,... by implementing this code, I learned a lot of new stuff, like how to secure a website? how to handle large data? how should the database design be optimized? safely save data and minimize storage, and so many other things that I learned in the process of doing it!'
          },
          {
            markdown:
              '## 10+ website \n I have participated in building more than 10+ websites by businesses, partners in different development in different areas!'
          },
          {
            markdown:
              '## 2+ web builder \n these are tools to make website development easier, in other words, it is the tool for people to create and develop a website faster manually many times.!'
          }
        ]
      }
    ]
  },
  experience: {
    color: '#f4511e',
    icon: 'object-ungroup',
    title: 'Experience',
    messages: [
      {
        by: 'guest',
        content: [
          {
            markdown: "I'm quite curious about your work 😐"
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            progress: {
              title: 'front-end',
              items: [
                {
                  name: 'html & css',
                  value: 90
                },
                {
                  name: 'javascript (react, jquery,...) - es6/es7',
                  value: 85
                }
              ]
            }
          },
          {
            progress: {
              title: 'back-end',
              items: [
                {
                  name: 'php',
                  value: 75
                },
                {
                  name: 'mysql',
                  value: 60
                },
                {
                  name: 'nodejs',
                  value: 65
                },
                {
                  name: 'mongodb',
                  value: 45
                }
              ]
            }
          },
          {
            progress: {
              title: '...',
              items: [
                {
                  name: 'caching',
                  value: 60
                },
                {
                  name: 'ffmpeg',
                  value: 45
                },
                {
                  name: 'imagick',
                  value: 55
                },
                {
                  name: 'bash',
                  value: 25
                },
                {
                  name: 'flow / eslint',
                  value: 70
                },
                {
                  name: 'graphql',
                  value: 55
                },
                {
                  name: 'git',
                  value: 45
                },
                {
                  name: 'jest / enzyme',
                  value: 55
                },
                {
                  name: 'design / animations',
                  value: 45
                }
              ]
            }
          },
          {
            markdown:
              "to talk add a bit, the things I listed are things I have experienced. I do not mind learning more about new technologies for my projects. challenging new things always makes me excited. In addition, I'm also a founder of [ciser](https://github.com/lamhieu-vk/ciser), a tool that helps shorten the design time of multi-screen interface in the programming 😆. and another kid I created was [liser](https://www.npmjs.com/package/liser), which is a cli but also contains many css utilities, you can use it to create your own css library file 👍"
          }
        ]
      }
    ]
  },
  skills: {
    color: '#ffb300',
    icon: 'lightbulb-o',
    title: 'Skills',
    messages: [
      {
        by: 'guest',
        content: [
          {
            markdown: 'in addition to the above, what else can you tell me?'
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            markdown: 'ahh, I have some basic soft skills too... 😅'
          },
          {
            progress: {
              items: [
                {
                  name: 'communication',
                  value: 85
                },
                {
                  name: 'creation',
                  value: 90
                },
                {
                  name: 'critical thinking',
                  value: 75
                },
                {
                  name: 'learning spirit',
                  value: 85
                },
                {
                  name: 'analytical skills',
                  value: 80
                },
                {
                  name: 'teamwork',
                  value: 77.5
                }
              ]
            }
          }
        ]
      }
    ]
  },
  education: {
    color: '#5e35b1',
    icon: 'university',
    title: 'Education',
    messages: [
      {
        by: 'guest',
        content: [
          {
            markdown:
              "it seems like you haven't talked about you studied yet? 🤔"
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            markdown:
              "actually, my learning was also nothing special at all and it's like this ..."
          },
          {
            timeline: [
              {
                title: 'high school graduate',
                subtitle: 'Ganh Hao high school',
                date: '🤷‍♂️ - 07/2017'
              }
            ]
          }
        ]
      }
    ]
  },
  workplaces: {
    color: '#546e7a',
    icon: 'suitcase',
    title: 'Workplaces',
    messages: [
      {
        by: 'guest',
        content: [
          {
            markdown: "so what's about your work?"
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            markdown:
              'when I graduated from high school, I decided to stop my studies and pursure my passion... until now 🤓'
          },
          {
            timeline: [
              {
                title: 'founder',
                subtitle: 'giccos',
                date: '03/2015 - 10/2016',
                description:
                  'this is a social network development project that is implemented by me personally to analyze, learn how the system works, serve as user with high traffic, ensure stability. and best user experience. this is a personal project while I was a high school student, it opened up to me a new perspective on object-oriented programming'
              }
            ],
            progress: {
              items: [
                {
                  name: 'front-end (html & css, js, jquery,...)',
                  value: 35
                },
                {
                  name: 'back-end (php & mysql)',
                  value: 50
                },
                {
                  name: '... (imagick, ffmpeg, bash,...)',
                  value: 15
                }
              ]
            }
          },
          {
            timeline: [
              {
                title: 'developer',
                subtitle: 'connected jsc',
                date: '07/2017 - 02/2018',
                description:
                  'in my work environment I learned a lot in terms of knowledge and ability to think and analyze problems. we (me + 1) work together on over 20 different large and small projects. we develop tools to simplify the development of a website but still optimize the features and performance required'
              }
            ],
            progress: {
              items: [
                {
                  name: 'front-end (html & css, js, react,...)',
                  value: 70
                },
                {
                  name: 'back-end (nodejs & mongodb)',
                  value: 30
                }
              ]
            }
          },
          {
            markdown:
              "currently, I am researching and cultivating my work experience, if you are interested, please contact me 🤙. it's great to learn something new from you 👏"
          },
          {
            markdown:
              'or if I fit a certain business location you are looking for, please contact me 😙 very happy to cooperate with people 🤓'
          }
        ]
      }
    ]
  },
  contact: {
    color: '#6D4C41',
    icon: 'user',
    title: 'Contact',
    messages: [
      {
        by: 'guest',
        content: [
          {
            markdown: 'how can I contact you? 🤔'
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            markdown: "well 😶 ! this's my contact imformation..."
          },
          {
            markdown: '### contact',
            contact: [
              {
                icon: 'home',
                href: '#',
                label: 'website',
                value: 'lamhieu.info'
              },
              {
                icon: 'phone',
                href: 'tel:0946083033',
                label: 'phone',
                value: '+84 946 083 033'
              },
              {
                icon: 'envelope',
                href: 'mailto:lamhieu.vk@gmail.com',
                label: 'email',
                value: 'lamhieu.vk@gmail.com'
              },
              {
                icon: 'facebook',
                href: 'https://fb.com/lamhieu.me',
                label: 'facebook',
                value: 'fb/lamhieu.me'
              },
              {
                icon: 'twitter',
                href: 'https://twitter.com/_lamhieu',
                label: 'twitter',
                value: 'twitter/_lamhieu'
              },
              {
                icon: 'github-alt',
                href: 'https://github.com/lamhieu-vk',
                label: 'github',
                value: 'github/lamhieu-vk'
              },
              {
                icon: 'skype',
                href: 'skype:lamhieu@outlook.com?call',
                label: 'skype',
                value: 'lamhieu@outlook.com'
              },
              {
                icon: 'flickr',
                href: 'https://flic.kr/ps/31jJWn',
                label: 'flickr',
                value: 'flickr/lamhieu'
              }
            ]
          },
          {
            markdown: 'contact me when you need help 👍'
          }
        ]
      },
      {
        by: 'guest',
        content: [
          {
            markdown: 'yeah, I will contact you soon...'
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            markdown: 'ohh yeah, thanks for watching 😆'
          },
          {
            note:
              'style with [liser](https://www.npmjs.com/package/liser), desgined by Lam Hieu'
          },
          {
            switchLanguge: {
              text: 'view at other languages',
              items: [
                {
                  href: '/',
                  label: 'vietnamese'
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
