import { HTMLAttributes } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  padding: 1rem;
  background-color: #2657ba;
  color: white;
  display: flex;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  > h1 {
    margin: 0 1rem 0 0;
    padding-right: 1rem;
    border-right: 1px solid white;
  }
`;

export function Header(props: HTMLAttributes<HTMLElement>) {
  return <StyledHeader>{props.children}</StyledHeader>;
}

export default Header;
