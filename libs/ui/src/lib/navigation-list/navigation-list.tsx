import { HTMLAttributes } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavigationListProps {}

const StyledNavigationList = styled.div`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export function NavigationList(props: HTMLAttributes<HTMLElement>) {
  return (
    <StyledNavigationList role={'navigation'}>
      <ul>{props.children}</ul>
    </StyledNavigationList>
  );
}

export default NavigationList;
