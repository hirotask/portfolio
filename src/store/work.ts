import germanyImage from '../assets/german.jpg'
import actImage from '../assets/act.jpg'
import portfolioImage from '../assets/portfolio.png'
import expirationImage from '../assets/expiration.png'
import gakucomImage from '../assets/gakucom.png'
import tech10Image from '../assets/tech10.jpg'

export interface Work {
  image: string
  title: string
  tags: string
  date: string
  description: string
}

const works: Work[] = [
  {
    image: germanyImage,
    title: 'ドイツ研修',
    tags: '',
    date: '',
    description:
      'くずまき高原国際交流推進協議会主催の欧州視察（ドイツ研修）に参加しました。異文化に触れ、自らの視野が広がった貴重な体験でした。',
  },
  {
    image: actImage,
    title: '演劇サークル長経験',
    tags: 'Circle',
    date: '2024.03',
    description:
      '大学在学中は演劇サークルに所属し、サークル長を務めていました。',
  },
  {
    image: portfolioImage,
    title: 'ポートフォリオの作成',
    tags: 'Programming, Web',
    date: '2024.08',
    description:
      'Reactを用いてポートフォリオの作成を行いました。ワイヤーフレーム作成はFigmaを利用しました。' +
      '2023年頃Javascriptで作成しましたが、2024年8月に言語をTypescriptに変更し、バンドラーもwebpackからviteに移行しました',
  },
  {
    image: expirationImage,
    title: '『賞味期限管理アプリ』リリース',
    tags: 'Programming, Mobile App',
    date: '',
    description:
      '『東北Tech道場』というイベントで、Flutterを用いて『賞味期限管理アプリ』を2人で作成しました。バックエンドはFirebaseを用いています。',
  },
  {
    image: gakucomImage,
    title: '『ガクコム！』リリース',
    tags: 'Programming, Web',
    date: '',
    description:
      '『滝沢イノベーションチャレンジ』というイベントで、学生のためのイベント掲載サイト『ガクコム！』を製作しました。' +
      '残念ながら運用メンバーの卒業と共にサービスを終了してしまいましたが、この『ガクコム！』の開発で初めてAWSを触り、インフラにも興味関心をもつきっかけになりました。',
  },
  {
    image: tech10Image,
    title: '東北Tech道場10周年イベント',
    tags: 'Programming, Mobile App, LT',
    date: '',
    description:
      '『東北Tech道場』というイベントの10周年記念で、渋谷Googleオフィスにて『賞味期限管理アプリ』に関するプレゼンを行いました。',
  },
]

export function getWork(id: number): Work {
  return works[id]
}

export function getWorks(): Work[] {
  return works
}
