import { ReactNode } from 'react'
import { tailwindClassNames, TailwindProps } from '~styles'

interface Props extends TailwindProps<never, 'mb' | 'ml'> {
  size?: 'large' | 'medium' | 'small',
  black?: boolean,
  white?: boolean,
  grey?: boolean,
  bold?: boolean,
  light?: boolean,
  children: ReactNode,
}

const SIZES = {
  large: 'text-4xl',
  medium: 'text-2xl',
  small: 'text-xs'
}

const Text = ({ children, size = 'medium', white = false, grey = false, bold, light, ...tailwindProps }: Props) => {
  const color = white ? 'white' : grey ? 'grey' : 'black'
  const weight = bold ? 'font-bold' : light ? 'font-light' : ''
  return (
    <div className={tailwindClassNames(tailwindProps, `text-${color} ${SIZES[size]} ${weight}`)}>
      {children}
    </div>
  )
}

Text.Large = (props) => <Text size='large' {...props} />
Text.Small = (props) => <Text size='small' {...props} />

export default Text
