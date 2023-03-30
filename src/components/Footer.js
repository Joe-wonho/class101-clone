import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  padding: 40px 12px 64px 0;
  margin-top: 40px;
  border-top: 1px solid rgb(248, 248, 248);
  @media screen and (max-width: 1024px) {
    padding: 0 12px;
    display: flex;
    flex-direction: column;
  }
  /* background-color: blue; */
`;
const Section1 = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
  li {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: rgb(26, 26, 26);
    margin-bottom: 20px;
    &.logo {
      font-size: 20px;
      font-weight: 700;
      line-height: 26px;
    }
    &.logo-desc {
      color: rgb(102, 102, 102);
    }
    &.first-li {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
    .qa-btn {
      border: none;
      border-radius: 3px;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      padding: 0px;
      width: 100%;
      height: 40px;
      margin-bottom: 8px;
      background-color: #f8f8f8;
      cursor: pointer;
      transition: background-color 0.1s ease 0s;
      &:hover {
        background-color: #dfdfdf;
      }
    }
    p {
      color: rgb(162, 162, 162);
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    li {
      .qa-btn {
        width: 90vw;
        margin: auto;
      }
    }
  }
`;
const Section2 = styled.div`
  max-height: 130px;
  margin-top: 80px;
  border-top: 1px solid rgb(248, 248, 248);
  display: flex;
  div {
    margin-top: 24px;
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(162, 162, 162);
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    &.desc-one {
      width: 310px;
      margin-right: 78px;
    }
    &.desc-two {
      flex-grow: 1;
      max-width: 778px;
      display: flex;
      .sone {
        max-width: 724px;
        height: 36px;
        display: flex;
        flex-wrap: wrap;
      }
      .stwo {
        margin-top: 16px;
        font-size: 10px;
        line-height: 12px;
        color: rgb(202, 202, 202);
      }
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    div {
      &.desc-one {
        width: 100%;
        margin: 0;
      }
      &.desc-two {
        width: 100%;
      }
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Section1>
          <div>
            <ul>
              <li className="logo">CLASS101</li>
              <li className="logo-desc">
                클래스101은 모든 사람이 사랑하는 일을 하며
                <br /> 살 수 있도록 세상을 바꾸고자 합니다.
              </li>
              <li>🇰🇷한국어</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="first-li">클래스101</li>
              <li>
                <a href="#">구독 홈</a>
              </li>
              <li>
                <a href="#">기업교육</a>
              </li>
              <li>
                <a href="#">채용</a>
              </li>
              <li>
                <a href="#">도움말</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="first-li">크리에이터</li>
              <li>
                <a href="#">크리에이터 센터</a>
              </li>
              <li>
                <a href="#">정규 클래스 지원하기</a>
              </li>
              <li>
                <a href="#">도움말</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="first-li">고객센터</li>
              <li>
                <button className="qa-btn">문의하기</button>
                <p>오전 10시 ~ 오후 6시 (주말, 공휴일 제외)</p>
              </li>
            </ul>
          </div>
        </Section1>
        <Section2>
          <div className="desc-one">
            <p>CLASS101+ Korea</p>
            <p>CLASS101+ USA</p>
            <p>CLASS101+ Japan</p>
            <p>Instagram</p>
            <p>Youtube</p>
            <p>Facebook</p>
            <p>Naverpost</p>
            <p>Naverblog</p>
            <p>Playstore</p>
            <p>Appstore</p>
          </div>
          <div className="desc-two">
            <div className="sone">
              <p>이용약관</p>
              <p>개인정보 처리방침</p>
              <p>101프라임 이용약관</p>
              <p>기프트카드 및 캐시 이용약관</p>
              <p>환불 정책</p>
              <p>사업자 정보 확인</p>
              <p>단체/기업 교육 문의</p>
              <p>제휴/협력 문의</p>
              <p>PR 관련 문의</p>
              <p>지식재산권 침해 신고 센터</p>
            </div>
            <div className="stwo">
              주식회사 클래스101 | 대표 공대선 | 서울특별시 강남구 테헤란로 302, 1-11층, 13층(역삼동, 위워크타워) |
              ask@101.inc | 전화번호: 1800-2109 | 클라우드 호스팅: Amazon Web Services Korea LLC | 사업자등록번호 :
              457-81-00277 | 통신판매업신고 : 2022-서울강남-02525 | 클래스101은 통신판매중개자로서 중개하는 거래에
              대하여 책임을 부담하지 않습니다.
            </div>
          </div>
        </Section2>
      </FooterContainer>
    </>
  );
};

export default Footer;
