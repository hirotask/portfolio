/**
 * Aboutページ
 */
import { DefaultContainer } from "../templates/DefaultContainer";
import { MyIcon } from "../atoms/MyIcon";
import styled from "styled-components";

export const AboutPage = () => {
  const aboutme = [
    "名前: 波紫寛斗",
    "所属大学: 岩手県立大学　ソフトウェア情報学部",
    "ニックネーム: hirotask",
    "Twitter: @Hirotask_",
    "誕生日: 2001年5月24日",
  ];

  const career = [
    "2018/01 Minecraftのプラグイン制作を始める",
    "2018/11 葛巻町主催ドイツ研修 参加",
    "2020/03 岩手県立葛巻高等学校　卒業",
    "2020/04 岩手県立大学　ソフトウェア情報学部　入学",
    "2020/09 基礎教養入門2にて初めてのチーム開発ジョイン",
    "2021/08 滝沢イノベーションチャレンジ　１回目の参加",
    "2021/08 葛巻町プログラミング教室　企画したがコロナの影響で中止",
    "2021/09 プロジェクト演習1にて、「車の問題解決アプリ」の開発",
    "2022/05 「東北Tech道場」ジョイン＆Androidアプリ開発開始",
    "2022/07 Minecraftのプラグインチーム開発開始",
  ];

  return (
    <DefaultContainer title={"About"}>
      <Wrapper>
        <MyIcon size={200} />
        <Aboutme>
          {aboutme.map((msg, key) => (
            <p key={key}>{msg}</p>
          ))}
          <Career>
            {career.map((msg, key) => (
              <p key={key}>{msg}</p>
            ))}
          </Career>
        </Aboutme>
      </Wrapper>
    </DefaultContainer>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Aboutme = styled.div`
  margin-left: 120px;
  font-size: 28px;
`;

const Career = styled.div`
  margin-top: 30px;
  color: #444444;
  font-size: 18px;
`;
