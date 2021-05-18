import { media, theme } from '@src/styles';
import styled from 'styled-components';

export default styled.p`
  font-size: 1.7rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  color: var(--primary-color);
  font-family: ${theme.fonts.Lato};
  ${media.phablet`
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  `}
`;