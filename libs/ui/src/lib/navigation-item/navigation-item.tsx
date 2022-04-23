import { LiHTMLAttributes } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavigationItemProps {}

const StyledNavigationItem = styled.div`
  margin-right: 1rem;
`;

export function NavigationItem(props: LiHTMLAttributes<HTMLLIElement>) {
  return (
    <StyledNavigationItem>
      <h1>Welcome to NavigationItem!</h1>
    </StyledNavigationItem>
  );
}

export default NavigationItem;
