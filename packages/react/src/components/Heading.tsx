import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

// Primeira forma de declarar
export type HeadingProps = ComponentProps<typeof Heading> & { as?: ElementType }

// Segunda forma de declarar.
// export interface TextProps extends ComponentProps<typeof Text> {
//   as?: ElementType
// }

// Alterando o nome dos componentes dentro do storybook para o nome desejado
Heading.displayName = 'Heading'
