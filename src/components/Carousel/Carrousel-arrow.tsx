import { ButtonHTMLAttributes } from 'react';
import { CarouselArrowContainer } from './styles';
import { DIRECTION_LEFT, DIRECTION_RIGHT } from '../../utils/consts';
import { CaretCircleLeft, CaretCircleRight } from 'phosphor-react';

type CarrouselArrowProps = {
  direction: typeof DIRECTION_LEFT | typeof DIRECTION_RIGHT;
  showButton: boolean;
  callback: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CarouselArrow({
  direction,
  showButton,
  callback,
  ...rest
}: CarrouselArrowProps) {
  const arrowPosition =
    direction === DIRECTION_LEFT ? (
      <CaretCircleLeft size={32} color='#bdbdbdaa' weight='fill' />
    ) : (
      <CaretCircleRight size={32} color='#bdbdbdaa' weight='fill' />
    );

  return (
    <CarouselArrowContainer
      showButton={showButton}
      onClick={callback}
      {...rest}>
      {arrowPosition}
    </CarouselArrowContainer>
  );
}
