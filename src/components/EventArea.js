import styled from 'styled-components';
import eventImgArr from '../assets/eventImg/eventImgArr';
/**
 *  가로 640px 미만이면  1개 컨텐츠 마진은 좌우 24 바텀 48 1024미만과 같다
 *  가로 1024px 미만  1개 컨텐츠 마진은 좌우 24 바텀 48
 * 가로 1024 이상 한번 3개 콘텐츠 보여주고 마진은 좌우 32 바텀 72
 */
const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const EventTitle = styled.div`
  // 가로 최소 1024 미만 높이 24
  // 가로 최소 1024 미만 높이 34
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
  }
`;
const EventBannerContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  height: 50px;
  background-color: red;
  div {
  }
`;

const EventArea = () => {
  return (
    <>
      <EventContainer>
        <EventTitle>
          <div className="event-title">진행중인 인기 이벤트</div>
          <div className="event-all">전체 이벤트 보기</div>
        </EventTitle>
        <EventBannerContainer>
          {/* {eventImgArr.map((el, idx) => {
            return (
              <div key={idx}>
                <img className="event-img" src={el}></img>
              </div>
            );
          })} */}
        </EventBannerContainer>
      </EventContainer>
    </>
  );
};

export default EventArea;
