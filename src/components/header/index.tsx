import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserInfo, AuthorizationStatus } from '@/types/user';
import { AuthorizedUser } from './ui/authorized-user';
import { UnauthorizedUser } from './ui/unauthorized-user';
import { userSelector } from '@/store/user';

const Header = () => {
  const authorizationStatus = useSelector(userSelector.authorizationStatus);
  const user = useSelector(userSelector.info);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to="/"
              className="header__logo-link header__logo-link--active"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <AuthorizedUser user={user as UserInfo} />
              ) : (
                <UnauthorizedUser />
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
