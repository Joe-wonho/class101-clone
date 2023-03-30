import styled from 'styled-components';
import eventImgArr from '../assets/eventImg/eventImgArr';
import { useState } from 'react';
/**
 *  가로 640px 미만이면  1개 컨텐츠 마진은 좌우 24 바텀 48 1024미만과 같다
 *  가로 1024px 미만  1개 컨텐츠 마진은 좌우 24 바텀 48
 * 가로 1024 이상 한번 3개 콘텐츠 보여주고 마진은 좌우 32 바텀 72
 */
const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const EventTitle = styled.div`
  // 가로 최소 1024 미만 높이 24
  // 가로 최소 1024 미만 높이 34
  margin-bottom: 24px;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .event-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    color: rgb(26, 26, 26);
  }
  .event-all {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    color: rgb(162, 162, 162);
    margin-right: 5px;
  }
  @media screen and (max-width: 1024px) {
    .event-title {
      font-size: 18px;
      line-height: 24px;
    }
    .event-all {
      display: none;
    }
  }
`;
const EventBannerContainer = styled.div`
  overflow: hidden;
  width: 100%;
  .banner-wrapper {
    display: flex;
    width: calc(33.33% * 5);
    min-width: 960px;
    gap: 24px;
    transform: translate(calc(-390px * ${(props) => props.curbanner}));
    transition: 0.5s;
    .item-box {
      img {
        width: 100%;
        max-width: 376px;
        margin-bottom: 10px;
      }
      .img-p1 {
        vertical-align: baseline;
        font-size: 14px;
        font-weight: 700;
        color: rgb(26, 26, 26);
        line-height: 20px;
        letter-spacing: -0.15px;
        margin-bottom: 2px;
      }
      .img-p2 {
        vertical-align: baseline;
        font-size: 11px;
        font-weight: 400;
        color: rgb(26, 26, 26);
        line-height: 16px;
        letter-spacing: -0.15px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100vw;
    .banner-wrapper {
      display: flex;
      width: calc(100vw * 5);
      /* min-width: 960px; */
      /* gap: 0; */
      /* transform: translate(calc(-390px * ${(props) => props.curbanner})); */
      transform: translate(0);
      transition: 0.5s;
      .item-box {
        img {
          width: 98%;
          max-width: 960px;
          margin-bottom: 10px;
        }
        .img-p1 {
          vertical-align: baseline;
          font-size: 14px;
          font-weight: 700;
          color: rgb(26, 26, 26);
          line-height: 20px;
          letter-spacing: -0.15px;
          margin-bottom: 2px;
        }
        .img-p2 {
          display: none;
        }
      }
    }
  }
`;

const BannerBtn = styled.div`
  //1240px 이상일때만 보임
  @media screen and (min-width: 1240px) {
    width: 40px;
    height: 40px;
    position: absolute;
    font-weight: 900;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc((100% - 40px) / 2);

    &.left-btn {
      left: -40px;
    }
    &.right-btn {
      left: 1176px;
    }
  }
  display: none;
`;

const EventArea = () => {
  const [curBanner, setBanner] = useState(0);

  const onClickPrev = () => {
    // currentBanner가 0보다 작으면 움직이면 안된다.
    if (curBanner < 1) {
      return;
    }
    console.log(curBanner);
    setBanner(curBanner - 1);
  };
  const onClickNext = () => {
    //currentBanner가
    console.log(curBanner);

    if (curBanner > eventImgArr.length - 1 - 3) {
      return;
    }
    setBanner(curBanner + 1);
  };

  return (
    <>
      <EventContainer>
        <EventTitle>
          <div className="event-title">진행중인 인기 이벤트</div>
          <div className="event-all">전체 이벤트 보기</div>
        </EventTitle>
        <EventBannerContainer curbanner={curBanner}>
          <div className="banner-wrapper">
            {eventImgArr.map((el, idx) => {
              return (
                <>
                  <div key={idx} className="item-box">
                    <img src={el[0]} alt="슬라이드이미지"></img>
                    <p className="img-p1">{el[1]}</p>
                    <p className="img-p2">{el[2]}</p>
                  </div>
                </>
              );
            })}
          </div>
        </EventBannerContainer>
        {curBanner === 0 ? null : (
          <BannerBtn onClick={onClickPrev} className="left-btn">
            〈
          </BannerBtn>
        )}
        {curBanner === 2 ? null : (
          <BannerBtn onClick={onClickNext} className="right-btn">
            〉
          </BannerBtn>
        )}
      </EventContainer>
    </>
  );
};

export default EventArea;
