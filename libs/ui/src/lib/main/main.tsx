import { HTMLAttributes } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MainProps {}

const StyledMain = styled.div`
  padding: 0 1rem;
  width: 100%;
  max-width: 960px;
`;

export function Main(props: HTMLAttributes<HTMLElement>) {
  return <StyledMain>{props.children}</StyledMain>;
}

export default Main;
