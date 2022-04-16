import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
          <LogoWrapper><Logo /></LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding: 21px 0 21px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  
  display: flex;
  flex-direction: row;
  align-content: center;
`;

const LogoWrapper = styled.div`
  flex: 1;
`

const Nav = styled.nav`
  flex: 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  
  &:first-of-type {
    color: ${COLORS.secondary};
  }
  
`;

export default Header;
