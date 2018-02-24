import imageCover01 from '../images/cover-01.jpg'
import imageCover02 from '../images/cover-02.jpg'
import imageCover03 from '../images/cover-03.jpg'
import favicon32x32 from '../images/favicon-32x32.png'
import favicon16x16 from '../images/favicon-16x16.png'

export const meta = {
  website: 'https://lamhieu.info',
  lang: 'vi',
  title: 'lamhieu - yep, never give up.',
  keywords:
    'lamhieu, lamhieu-vk, _lamhieu, never give up, html, css, liser, ciser, nodejs, react, php, mysql, javascript, es6, mongodb, developer, designer, lap trinh vien, lập trình viên, lam hieu, lâm hiếu',
  image: [imageCover01, imageCover02, imageCover03],
  description:
    'tôi là một lập trình viên, tôi yêu công việc của mình. tôi luôn mong muốn mang đến cho mọi người những sản phẩm hữu ích với chất lượng tốt nhất',
  favicon: {
    '16x16': favicon16x16,
    '32x32': favicon32x32
  }
}

export const header = {
  name: 'Lâm Hiếu',
  text: 'lập trình viên'
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
        content: [{ markdown: 'tìm đến với **lamhieu.info** 😶' }]
      },
      {
        by: 'author',
        content: [
          { markdown: 'chào mừng đã đến với trang của tôi 😆' },
          { markdown: 'chúc bạn một ngày tốt lành!' },
          { markdown: 'cơ mà bạn muốn biết gì về tôi nhỉ?' }
        ]
      },
      {
        by: 'guest',
        content: [{ markdown: 'eo ơi 😳 cơ mà bạn là ai í nhỉ?' }]
      },
      {
        by: 'author',
        content: [{ markdown: 'tên tôi là **Hiếu**, Lâm Hiếu!' }]
      },
      {
        by: 'guest',
        content: [{ markdown: 'nói cho tôi thêm về bạn đi 🤔' }]
      },
      {
        by: 'author',
        content: [
          { markdown: 'à vâng' },
          {
            markdown:
              'tôi là một lập trình viên, tôi yêu công việc của mình. tôi luôn mong muốn mang đến cho mọi người những sản phẩm hữu ích với chất lượng tốt nhất. tôi thích tham gia các cộng đồng về lập trình, tôi thích xem những bài diễn thuyết của các bạn đi trước để củng cố thêm mớ kiến thức ít ỏi của mình 🤓 nên thật tuyệt nếu được học hỏi thêm gì đó từ bạn 😆'
          },
          {
            markdown:
              'tôi mang trong mình niềm đam mê về lập trình rất lớn, no dường như đã thấm sâu vào cơ thể tôi ngay từ những ngày tôi biết đến nó, cơ duyên tôi tìm đến lập trình 💻 là một ngày rất tình cờ khi tôi còn là một học sinh tiểu học 👨‍🎓, dần dần thì tôi biết nó là đam mê của đời tôi 👨‍💻'
          },
          {
            markdown:
              'vì lập trình với tôi là đam mê nên có lẻ tôi rất khó có thể sống nếu thiếu nó 😙'
          },
          {
            markdown:
              'tôi rất không thích việc người khác đánh giá con người hay trình độ qua nhưng tấm bằng cấp, nó hoàn toàn vô nghĩa với tôi, ít nhất là ở thời điểm hiện tại 🤧 !'
          },
          {
            markdown:
              'nếu một ai đó có thể lấy mặt trăng đưa cho bạn thì tôi cũng có thể làm điều tương tự. hãy cho tôi một cơ hội, tôi sẽ cho bạn thấy những gì tôi có thể làm được... 🤝'
          }
        ]
      },
      {
        by: 'guest',
        content: [{ markdown: 'sở thích của bạn là gì?' }]
      },
      {
        by: 'author',
        content: [
          {
            markdown:
              'sở thích của tôi cũng đơn giản thôi, đó là được chụp ảnh nghệ thuật 📸 xem phim 🎞 nghe nhạc 🎶 đọc sách 📚 du lịch 🏍 và nhiều nhiều thứ khác nữa 😝'
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
        content: [{ markdown: 'bạn đến từ đâu ấy nhỉ? 🤔' }]
      },
      {
        by: 'author',
        content: [
          { markdown: '**bạc liêu** bạn ơi, nơi ấy hơi có bị đỉnh đó nha 😎' },
          {
            markdown:
              'à mà sẵn đây khai luôn, tôi là **nam**, tôi là có quốc tịch **việt nam** 🇻🇳 nhưng được gọi là công dân **quốc tế** í ạ 😄'
          },
          {
            markdown:
              'vì là người việt nên tôi nói tiếng việt rất giỏi 🤪 còn tiếng anh thì tôi đang luyện tập thêm đây ạ 😔'
          }
        ]
      },
      {
        by: 'guest',
        content: [{ markdown: 'à mà bạn bao nhiêu tuổi nhỉ?' }]
      },
      {
        by: 'author',
        content: [{ markdown: 'già lắm rồi nên không nói đâu bạn ơi 😰' }]
      },
      {
        by: 'guest',
        content: [{ markdown: 'trích dẫn yêu thích của bạn là gì?' }]
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
              'tôi rất thường hay tham gia các nhóm hoặc diễn đàn về công nghệ để được học hỏi thêm nhiều thứ khác, nó cho tôi một cái nhìn mới mẻ hơn về mọi việc 😄'
          },
          {
            markdown:
              'à vâng, tôi cũng có tập tành làm vài thứ để đóng góp cho mọi người sử dụng ấy ạ... 😅'
          },
          {
            markdown:
              '## liser  \n[![npm version of liser](https://badge.fury.io/js/liser.svg)](https://npmjs.com/package/liser) [![npm downloads of liser](https://img.shields.io/npm/dm/liser.svg)](https://npmjs.com/package/liser)  \nbạn có thể tạo mới những mô-đun sau đó kết hợp chúng tạo lên một tệp thư viện các thuộc tính định sẵng hoặc có thể sử dụng thư viện chuẩn có sẵn của [liser](https://github.com/lamhieu-vk/liser). [liser](https://github.com/lamhieu-vk/liser) giúp giảm thời gian thiết kế giao diện một trang web nhưng vẫn đảm bảo được đầy đủ các yếu tố như phù hợp với nhiều loại màn hình và trình duyệt khác nhau. ngoài ra nó còn giúp tạo nhưng hiệu ứng cho trang web một cách dễ dàng hơn!'
          },
          {
            markdown:
              '## ciser  \n[![npm version of ciser](https://badge.fury.io/js/ciser.svg)](https://npmjs.com/package/ciser) [![npm downloads of ciser](https://img.shields.io/npm/dm/ciser.svg)](https://npmjs.com/package/ciser)  \nnó được coi như là một bản nâng cấp của tachyons, nó bổ sung thêm các thuộc tính mới và những giá trị trung gian mới cho thư viện này, ngoài ra nó còn được bổ sung thêm các hiệu ứng và nhiều đặc trưng mới khác!'
          },
          {
            markdown:
              '## giccos social network \n đây là một bộ mã nguồn mạng xã hội được tôi thực hiện trong quá trình học tập về các ngôn ngữ **php & mysql**, **bash**, **javascript**, **css & html**,... qua việc thực hiện bộ mã nguồn này, tôi học tập được rất nhiều thứ mới, như việc làm thể nào để bảo mật một trang web? làm thế nào để xử lí dữ liệu lớn? cơ sở dữ liệu nên thiết kế thế nào thì tối ưu? lưu dữ dữ liệu người dùng sao cho an toàn và giảm thiếu tối đa dung lượng,... và còn rất rất nhiều thứ khác mà tôi học được trong quá trình thực hiện nó!'
          },
          {
            markdown:
              '## 10+ website \n tôi đã xây dựng tham gia xây dựng hơn 10+ website do các doanh nghiệp, đối tác phát triển khác nhau trong nhiều lĩnh vực khác nhau!'
          },
          {
            markdown:
              '## 2+ web builder \n đây là những công cụ để giúp việc phát triển website trở nên dễ dàng hơn, hay nói cách khác thì nó là công cụ để người khác tạo và triển trang một trang web nhanh hơn cách thủ công rất nhiều lần!'
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
            markdown:
              'tôi hơi tò mò về kinh nghiệm trong công việc của bạn đấy 😐'
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
              'nói thêm một chút, những thứ tôi liệt kê là những thứ đã làm qua và tôi không ngại nếu được học hỏi thêm về những công nghệ mới nếu các dự án của tôi thực hiện cần đến nó, học hỏi thêm những thứ mới là một trong những điều tuyệt vời ấy mà tôi thích 🤩. ngoài ra, tôi còn là người lập kiêm hỗ trợ của [ciser](https://www.npmjs.com/package/ciser), một công cụ giúp rút ngắn thời gian thiết kế giao diện đa màn hình trong lập trình, một công cụ rất hữu ít nếu bạn sử dụng 😆. và một đứa nhóc nữa cũng được mình tạo ra là [liser](https://www.npmjs.com/package/liser), đây là một bộ dịch (cli) nhưng cũng chứa trong đó nhiều css utility, bạn có thể sử dụng nó để tạo ra một file css library cho riêng bạn 👍'
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
            markdown:
              'ngoài những thứ kể trên, bạn còn có gì cho tôi biết thêm không?'
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            markdown: 'à, tôi còn có vài kỹ năng mềm cơ bản nữa ấy... 😅'
          },
          {
            progress: {
              items: [
                {
                  name: 'giao tiếp',
                  value: 85
                },
                {
                  name: 'sáng tạo',
                  value: 90
                },
                {
                  name: 'tư duy phản biện',
                  value: 75
                },
                {
                  name: 'tinh thần học hỏi',
                  value: 85
                },
                {
                  name: 'kỹ năng phân tích',
                  value: 80
                },
                {
                  name: 'làm việc nhóm',
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
              'cơ mà hình như bạn chưa nói về việc học của mình thì phải? 🤔'
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            markdown:
              'thật ra thì việc học của tôi cũng chẳng có gì đặt biệt cả và nó thế này...'
          },
          {
            timeline: [
              {
                title: 'tốt nghiệp trung học',
                subtitle: 'trường thpt gành hào',
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
            markdown: 'thế còn công việc của bạn thì sao?'
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            markdown:
              'sau khi học xong trung học, tôi quyết định tạm dừng con đường học tập mà đi theo đuổi đam mê ngay lúc đó... đến tận hôm nay luôn ạ 🤓'
          },
          {
            timeline: [
              {
                title: 'người sáng lập & phát triển',
                subtitle: 'giccos',
                date: '03/2015 - 10/2016',
                description:
                  'đây là dự án phát triển mã nguồn mạng xã hội được thực hiện bởi cá nhân tôi nhầm phân tích, tìm hiểu cách thức hoạt động của hệ thống lớn, phục vụ như người người dùng với số lượng truy cập cao, đảm bảo tính ổn định và trãi nghiệm người dùng tốt nhất. đây là dự án cá nhân trong lúc tôi còn là một học sinh cấp ba, nó mở ra cho tôi một cách nhìn mới về lập trình hướng đối tượng'
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
                title: 'lập trình viên',
                subtitle: 'connected jsc',
                date: '07/2017 - 02/2018',
                description:
                  'tại môi trường làm việc nơi đây tôi được học hỏi thêm rất nhiều về mặt kiến thức lẫn khả năng tư duy phân tích vấn đề. chúng tôi (tôi + 1) cùng nhau làm việc hơn 20 dự án lớn nhỏ khác nhau, chúng tôi phát triển công cụ giúp đơn giản hóa việc phát triển một website nhưng vẫn tối ưu hóa những tính năng và hiệu năng cần thiết'
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
              'hiện tại tôi đang nghiên cứu và trao dồi thêm kinh nghiệm làm việc của mình, nếu bạn muốn hợp tác với tôi thì có thể liên lạc với tôi theo thông tin cuối trang 🤙 và thật tuyệt vời nếu được học hỏi thêm những điều thú vị từ bạn 👏'
          },
          {
            markdown:
              'hoặc nếu tôi phù hợp với vị trí nào đó doanh nghiệp bạn đang tìm kiếm, hãy liên lạc cho tôi 😙 rất sẵn lòng được hợp tác với mọi người 🤓'
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
            markdown: 'tôi có thể liên lạc với bạn bằng cách nào? 🤔'
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            markdown: 'à vâng 😶 đây là thông tin liên lạc của tôi...'
          },
          {
            markdown: '### thông tin liên lạc',
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
            markdown: 'liên lạc với tôi khi bạn cần sự giúp đỡ 👍'
          }
        ]
      },
      {
        by: 'guest',
        content: [
          {
            markdown: 'à vâng, tôi sẽ liên lạc với bạn sớm thôi...'
          }
        ]
      },
      {
        by: 'author',
        content: [
          {
            markdown: 'ohh yeah, cảm ơn vì đã ghé thăm nhà tôi 😆'
          },
          {
            note:
              'giao diện bởi [liser](https://www.npmjs.com/package/liser), thiết kế bởi Lâm Hiếu'
          },
          {
            switchLanguge: {
              text: 'xem ở ngôn ngữ khác',
              items: [
                {
                  href: '/en',
                  label: 'tiếng anh'
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
