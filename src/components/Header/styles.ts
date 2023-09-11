import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { appearAnimation } from '../../styles/animations';

export const HeaderContainer = styled.header`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 16px;
  animation: ${appearAnimation} ease-in 1s;

  @media ${breakpoints.sm} {
    gap: 0;
    align-items: flex-start;
    flex-direction: row;
  }

  @media ${breakpoints.lg} {
    padding: 48px 0;
  }
`;

export const LeftHeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 270px;
  list-style-type: none;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 22px;

  @media ${breakpoints.lg} {
    font-size: 1.125rem;
  }

  ul {
    display: flex;
    li {
      margin: 0 10px;
      padding: 0 15px 5px 15px;
      display: block;
      cursor: pointer;

      &:active {
        transform: scale(0.9);
      }

      &.selected {
        border-bottom: 2px solid #fff;
      }
    }
    li:first-child {
      margin-left: 0;
    }
    li:last-child {
      margin-right: 0;
    }
  }
`;

export const CenterHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;

  @media ${breakpoints.md} {
    margin-right: 64px;
  }

  @media ${breakpoints.lg} {
    font-size: 18px;
  }

  span {
    font-weight: 400;
    margin-right: 2px;
    color: #bdbdbdaa;
  }

  img {
    margin-top: 12px;
    width: 45px;

    @media ${breakpoints.lg} {
      font-size: 1.125rem;
      width: 64px;
      margin-top: 20px;
    }
  }
`;

export const RightHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 158px;
  max-height: 22px;
  gap: 30px;

  svg {
    cursor: pointer;
    
    &:active {
      transform: scale(0.9);
    }
  }
`;
