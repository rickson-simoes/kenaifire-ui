import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

// Primeira forma de declarar
export type TextProps = ComponentProps<typeof Text> & { as?: ElementType }

// Segunda forma de declarar.
// export interface TextProps extends ComponentProps<typeof Text> {
//   as?: ElementType
// }

// Alterando o nome dos componentes dentro do storybook para o nome desejado
Text.displayName = 'Text'
