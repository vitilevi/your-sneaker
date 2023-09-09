import { User, MagnifyingGlass, ShoppingBag } from 'phosphor-react';
import {
  HeaderContainer,
  LeftHeaderContainer,
  CenterHeaderContainer,
  RightHeaderContainer,
} from './styles';
import Images from '../../assets';
import useContainerSize from '../../hooks/useContainerSize';
import { getScreenBreakpoint } from '../../utils/size';
import {MD, LG, DT, XL} from '../../utils/consts';
import { useFilterContext } from '../../context/filterContext';

export default function Header() {
  const { filter, setFilter } = useFilterContext();
  const { width } = useContainerSize();

  const isScreenBiggerThenMD = [MD, LG, DT, XL].includes(
    getScreenBreakpoint(width) ?? ''
  );

  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <ul>
          <li
            className={filter === 'WOMAN' ? 'selected' : ''}
            onClick={() => setFilter('WOMAN')}>
            WOMAN
          </li>
          <li
            className={filter === 'MEN' ? 'selected' : ''}
            onClick={() => setFilter('MEN')}>
            MEN
          </li>
          <li
            className={filter === '' ? 'selected' : ''}
            onClick={() => setFilter('')}>
            ALL
          </li>
        </ul>
      </LeftHeaderContainer>
      <CenterHeaderContainer>
        <h2>
          <span>YOUR</span>SNEAKER
        </h2>
        <img src={Images.NikeLogo} alt='Nike logo' />
      </CenterHeaderContainer>
      {isScreenBiggerThenMD && (
        <RightHeaderContainer>
          <User size={28} color='#fff' />
          <MagnifyingGlass size={28} color='#fff' />
          <ShoppingBag size={28} color='#fff' />
        </RightHeaderContainer>
      )}
    </HeaderContainer>
  );
}
