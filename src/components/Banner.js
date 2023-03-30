//가로 1024 이상 = 최대높이 350px 최소높이 231px
// 가로 640px 미만이면 높이 378px 고정

import styled from 'styled-components';
import bannerArr from '../assets/banner/bannerArr';

const BannerSection = styled.div`
  background-color: gray;
  width: 100vw;
  min-height: 225px;
  max-height: 450px;
  margin-bottom: 64px;

  /* @media screen and (max-width: 640px) {
    width: 100vw;
    height: 378px;
  } */
`;

const BannerContainer = styled.div`
  display: flex;
  width: 300vw;
  .etc {
    width: 100vw;
    display: flex;
  }
`;
const BannerImg = styled.div`
  width: 57%;
  background-color: blue;
`;
const BannerItem = styled.div`
  width: 43%;
  padding-top: 56px;
  background-color: red;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */

  .title {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: rgb(255, 255, 255);
  }
  .sub-title {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.6);
  }
  .banner-bar {
    margin-top: 25px;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      font-weight: 400;
    }
    span::after {
      content: '';
      width: 70%;
      background: rgba(0, 0, 0, 0.35);
      height: 1px;
      font-size: 0px;
      line-height: 0px;
      margin: 0px 16px;
    }
    button {
      font-size: 20px;
      font-weight: 700;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      background-color: transparent;
    }
  }
  @media screen and (min-width: 1024px) {
    .title {
      font-size: 34px;
      font-weight: 700;
      line-height: 44px;
    }
    .sub-title {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
    }
  }
`;

const Banner = () => {
  return (
    <>
      <BannerSection>
        <BannerContainer>
          <div className="etc">
            <BannerImg></BannerImg>
            <BannerItem>
              <div className="title">
                내일배움카드로
                <br />
                클래스 무료수강하세요
              </div>
              <div className="sub-title">
                2023년 K-디지털 <br />
                기초역량훈련은 오픈 준비중입니다!
              </div>
              <div className="banner-bar">
                <span>01 | 03</span>
                <button>〈</button>
                <button>〉</button>
              </div>
            </BannerItem>
          </div>
          <div className="etc">
            <BannerImg></BannerImg>
            <BannerItem>
              <div className="title">
                평생교육바우처로
                <br />
                1년 동안 무료 수강하기
              </div>
              <div className="sub-title">
                평생교육 희망카드로
                <br /> 연간 구독 결제가 가능해요!
              </div>
              <div className="banner-bar">
                <span>02 | 03</span>
                <div st>-</div>
                <button>〈</button>
                <button>〉</button>
              </div>
            </BannerItem>
          </div>
          <div className="etc">
            <BannerImg></BannerImg>
            <BannerItem>
              <div className="title">
                LOVERS #1
                <br />
                이연이라는 잭팟
              </div>
              <div className="sub-title">이연’으로 어디까지 갈 수 있을까</div>
              <div className="banner-bar">
                <span>03 | 03</span>
                <div st>-</div>
                <button>〈</button>
                <button>〉</button>
              </div>
            </BannerItem>
          </div>
        </BannerContainer>
      </BannerSection>
    </>
  );
};

export default Banner;
