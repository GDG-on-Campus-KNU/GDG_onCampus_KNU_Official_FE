import { NavLink, Form } from 'react-router-dom';

import { BASE_URI } from '../../constants/URI';

const MainNavigation = () => {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/gdscknu'>로고</NavLink>
          </li>
          <li>
            <NavLink to='/gdscknu/introduce'>동아리 소개</NavLink>
          </li>
          <li>
            <NavLink to='/gdscknu/apply'>지원하기</NavLink>
          </li>
          <li>
            <NavLink to='/gdscknu/techblog/:tech'>테크블로그</NavLink>
          </li>
          <li>
            <NavLink to='/gdscknu/community'>커뮤니티</NavLink>
          </li>
          {accessToken ? (
            <>
              <li>
                <Form action={`${BASE_URI}/api/auth/logout`} method='post'>
                  <button>로그아웃</button>
                </Form>
              </li>
              <li>
                <NavLink to='/gdscknu/mypage'>마이페이지</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to='/gdscknu/signin'>로그인</NavLink>
              </li>
              <li>
                <NavLink to='/gdscknu/signup'>회원가입</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
