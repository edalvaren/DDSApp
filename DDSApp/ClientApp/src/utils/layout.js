


const Sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const media = Object.keys(Sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${Sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
