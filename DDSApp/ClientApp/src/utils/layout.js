import styled, { css } from 'styled-components';
import rem from './rem';


export const Sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}
export const media = Object.keys(Sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${Sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const BodyWrapper = styled.div`
  width: 100%;
  text-align: left;
  margin: ${rem(40)} 0;

  ${media.desktop`max-width: 900px;`}
  ${media.tablet`max-width: 700px;`}
  ${media.phone`max-width: 500px;`}
`;
