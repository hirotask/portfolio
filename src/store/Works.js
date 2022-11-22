import WorkCategory from "../util/WorkCategory";
import tech10 from "../assets/img/tech10.jpg";
import germany from "../assets/img/germany.JPG";

const Works = [
    {
        category: WorkCategory.MOBILE_APPS,
        imgSrc: tech10,
        title: "東北Tech道場10周年イベント",
        description: "『東北Tech道場』というイベントの10周年記念で、渋谷Googleオフィスにて製作中のモバイルアプリに関するプレゼンを行いました。"
    },
    {
        category: WorkCategory.OTHERS,
        imgSrc: germany,
        title: "ドイツ研修",
        description: "くずまき高原国際交流推進協議会主催の欧州視察（ドイツ研修）に参加しました。異文化に触れ、自らの視野が広がった貴重な体験でした。"
    }
]

export default Works;