import Link from 'next/link';
import { Avatar, Box, Container, NavLink, Spinner } from 'theme-ui';

import { useScrollNavVisibility } from '../../hooks/useScrollNavVisibility';
import { useUserInfoContext } from '../../context/UserInfo';
import { Logo } from '../Icons/Logo';

const commonStyleAvatar = {
  margin: 10,
  width: 48,
  height: 48,
};

export const Menu = () => {
  const { data, isLoading, error } = useUserInfoContext();
  const avatar = data?.avatar;

  const isNavbarVisible = useScrollNavVisibility();

  return (
    <Box
      as="menu"
      sx={{
        position: 'fixed',
        top: isNavbarVisible ? '0' : '-100px',
        left: '0',
        width: '100%',
        background: 'rgb(255, 255, 255)',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0 0 10px',
        display: 'flex',
        transition: 'top 0.6s',
      }}
      data-testid="navigition-bar"
    >
      <Container p={10} sx={{ flex: '1 auto' }}>
        <NavLink as={Link} href="/en/US">
          <Logo />
        </NavLink>
        <NavLink as={Link} href="/en/US/product" pl={20}>
          Product
        </NavLink>
        <NavLink as={Link} href="/en/US/about" pl={20}>
          About
        </NavLink>
      </Container>
      {!isLoading && avatar && !error && (
        <Avatar
          src={avatar}
          data-testid="usericon"
          sx={{
            ...commonStyleAvatar,
            padding: 1,
            backgroundColor: '#d8d8d8',
          }}
        />
      )}{' '}
      {isLoading && (
        <Spinner sx={commonStyleAvatar} data-testid="usericon-spinner" />
      )}
    </Box>
  );
};
