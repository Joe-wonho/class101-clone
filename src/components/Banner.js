//가로 1024 이상 = 최대높이 350px 최소높이 231px
// 가로 640px 미만이면 높이 378px 고정

import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: gray;
  width: 100vw;
  min-height: 231px;
  max-height: 350px;
  margin-bottom: 64px;

  @media screen and (max-width: 640px) {
    width: 100vw;
    height: 378px;
  }
`;

const Banner = () => {
  return (
    <>
      <BannerContainer />
    </>
  );
};

export default Banner;
