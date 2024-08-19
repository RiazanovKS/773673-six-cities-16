import { ROUTE_PATHS } from '@/consts/routes';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const UnauthorizedUser: FC = () => (
  <li className="header__nav-item user">
    <Link
      to={ROUTE_PATHS.LOGIN}
      className="header__nav-link header__nav-link--profile"
    >
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__login">Sign in</span>
    </Link>
  </li>
);
