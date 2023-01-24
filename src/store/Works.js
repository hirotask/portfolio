import act from '../assets/img/act.jpg';
import expiration from '../assets/img/expiration.png';
import gakucom from '../assets/img/gakucom.png';
import germany from '../assets/img/germany.JPG';
import portfolio from '../assets/img/portfolio.png';
import tech10 from '../assets/img/tech10.jpg';
import WorkCategory from '../util/WorkCategory';

const Works = [
  {
    category: WorkCategory.OTHERS,
    imgSrc: germany,
    title: 'ドイツ研修',
    description:
      'くずまき高原国際交流推進協議会主催の欧州視察（ドイツ研修）に参加しました。異文化に触れ、自らの視野が広がった貴重な体験でした。',
    link: '/',
  },
  {
    category: WorkCategory.OTHERS,
    imgSrc: act,
    title: '演劇サークル長経験',
    description:
      '大学在学中は演劇サークルに所属し、サークル長を務めていました。',
    link: '/',
  },
  {
    category: WorkCategory.OTHERS,
    imgSrc: portfolio,
    title: 'ポートフォリオの作成',
    description:
      'Reactを用いてポートフォリオの作成を行いました。ワイヤーフレーム作成はFigmaを利用しました。状態管理に苦労しましたが、なんとか完成させることができました。',
    link: '/',
  },
  {
    category: WorkCategory.MOBILE_APPS,
    imgSrc: tech10,
    title: '東北Tech道場10周年イベント',
    description:
      '『東北Tech道場』というイベントの10周年記念で、渋谷Googleオフィスにて製作中のモバイルアプリに関するプレゼンを行いました。',
    link: '/',
  },
  {
    category: WorkCategory.OTHERS,
    imgSrc: gakucom,
    title: '『ガクコム！』リリース',
    description:
      '『滝沢イノベーションチャレンジ』というイベントで、学生のためのイベント掲載サイト『ガクコム！』を製作しました。',
    link: 'https://www.gakucom.com/',
  },
  {
    category: WorkCategory.MOBILE_APPS,
    imgSrc: expiration,
    title: '『賞味期限管理アプリ』リリース',
    description:
      '『東北Tech道場』というイベントで、Flutterを用いて『賞味期限管理アプリ』を2人で作成しました。バックエンドはFirebaseを用いています。',
    link: 'https://play.google.com/store/apps/details?id=jp.exm.expiration_manager&pli=1',
  },
];

export default Works;
