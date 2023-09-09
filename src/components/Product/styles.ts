import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { appearAnimation } from '../../styles/animations';


export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  object-fit: contain;
  justify-content: space-between;
  width: 100%;
  animation: ${appearAnimation} ease-in 1s;
  min-height: 500px;

  @media ${breakpoints.md} {
    text-align: start;
    flex-direction: row;
  }

  img {
    z-index: 2;
    background-color: transparent;
    margin-left: -50px;
    color: transparent;
    max-width: 25rem;
    flex-grow: 0;
    flex-shrink: 0;

    @media ${breakpoints.lg} {
      max-width: 30rem;
    }
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media ${breakpoints.md} {
    flex-basis: 50%;
  }

  @media ${breakpoints.lg} {
    flex-basis: 60%;
  }

  .title {
    letter-spacing: 0.03em;
    margin-bottom: 15px;

    h2 {
      font-size: 1.5rem;
      font-weight: 400;
    }

    span {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    @media ${breakpoints.lg} {
      margin-bottom: 30px;
      h2 {
        line-height: 37px;
        font-size: 1.675rem;
      }
      span {
        line-height: 73px;
        font-size: 3.5rem;
      }
    }

    @media ${breakpoints.dt} {
      margin-bottom: 30px;
      h2 {
        font-size: 1.875rem;
      }
      span {
        font-size: 3.75rem;
      }
    }
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    margin-bottom: 16px;

    @media ${breakpoints.lg} {
      margin-bottom: 30px;
      line-height: 29px;
      font-size: 1.3rem;
    }

    @media ${breakpoints.dt} {
      font-size: 1.5rem;
    }
  }

  .description {
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.03em;
    margin-bottom: 30px;
    max-width: 500px;
    text-align: justify;
    font-size: 0.9rem;

    @media ${breakpoints.lg} {
      font-size: 1rem;
    }
  }

  .info {
    letter-spacing: 0.03em;
    line-height: 20px;
    font-size: 0.9rem;

    @media ${breakpoints.lg} {
      font-size: 1rem;
    }
  }
`;

export const ProductImage = styled.div``;
