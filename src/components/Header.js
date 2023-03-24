import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
//반응형 구조
/**
 *  가로 640px 미만이면
 *  가로 1024px 미만 한번
 * 가로 1024 이상 한번 78+44
 */
const HeaderContainer = styled.div`
  width: 100vw;
  height: 122px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  /* position: fixed;
  top: 0;
  left: 0; */
`;
const HeaderSection1 = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  align-items: center;

  div {
    flex-basis: 140.72px;
    a {
      width: 104.72px;
      height: 100%;
      font-size: 20px;
      font-weight: 700;
      line-height: 26px;
      color: rgb(26, 26, 26);
      text-decoration: none;
    }
  }

  .search-box {
    height: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    p {
      font-size: 20px;
      font-weight: 700;
      line-height: 26px;
      color: rgb(26, 26, 26);
      margin-right: 16px;
    }
    p:nth-child(2) {
      margin-right: 36px;
    }
    div.search-area {
      flex-basis: 380px;
      height: 36px;
      background-color: #f8f8f8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        width: max-content;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: rgb(162, 162, 162);
        padding: 15px;
      }
      span {
        margin-right: 10px;
        font-size: 20px;
      }
    }
    @media screen and (max-width: 1024px) {
      .media-p {
        display: none;
      }
    }
  }

  .login-box {
    /* flex-basis: 221px; */
    height: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: rgb(12, 12, 12);

    display: flex;
    align-items: center;

    .side-menu {
      display: flex;
      margin-right: 24px;
      p {
        width: max-content;
      }
      p:nth-child(1) {
        margin-right: 24px;
      }
      @media screen and (max-width: 1024px) {
        .media-p {
          display: none;
        }
      }
    }
    .login {
      width: max-content;
      @media screen and (max-width: 640px) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .search-box {
      display: flex;
      .media-p {
        display: none;
      }
      .search-area {
        flex-grow: 1;
      }
    }
    .login-box {
      display: none;
    }
  }
`;
const HeaderSection2 = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  div {
    span {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      color: rgb(12, 12, 12);
      margin-right: 28px;
    }
  }
  div.category {
    width: 140.72px;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  div.empty-area {
    flex-grow: 1;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderSection1>
          <div>
            <a href="#">CLASS101</a>
          </div>
          <div className="search-box">
            <p className="media-p">구독</p>
            <p className="media-p">스토어</p>
            <div className="search-area">
              <p>찾으시는 취미가 있나요?</p>
              <span>
                <FiSearch />
              </span>
            </div>
          </div>

          <div className="login-box">
            <div className="side-menu">
              <p className="media-p">크리에이터 지원</p>
              <p className="media-p">기업교육</p>
            </div>
            <div className="login">
              <p className="media-p">로그인</p>
            </div>
          </div>
        </HeaderSection1>
        <HeaderSection2>
          <div className="category">
            <span className="media-p">전체 카테고리 ▾</span>
          </div>
          <div>
            <span>101아카데미</span>
            <span>이벤트</span>
          </div>
          <div className="empty-area"></div>
        </HeaderSection2>
      </HeaderContainer>
    </>
  );
};
export default Header;
