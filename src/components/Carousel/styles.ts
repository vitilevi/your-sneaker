import styled from 'styled-components';

export const CarouselContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarouselSelectors = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 0;
  background-color: transparent;
  gap: 30px;
  margin-top: 32px;

  .counter {
    font-weight: 700;
    font-size: 50px;
    color: #3c3c3c;
    background-color: transparent;
    z-index: 1;
  }
`;

type CarouselArrowProps = {
  showButton: boolean
}

export const CarouselArrowContainer = styled.button<CarouselArrowProps>`
  outline: none;
  background-color: transparent;
  border: none;
  z-index: 3;
  cursor: pointer;
  visibility: ${(props: CarouselArrowProps) => (!props.showButton ? 'hidden' : '')};

  .selector-up {
    transform: rotate(180deg);
    margin-bottom: 100px;
  }

  .selector-down {
    margin-top: 100px;
  }
`;
