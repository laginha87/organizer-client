
import Text from '~components/Common/Text'

interface Props {
  component: React.FC,
  loading: boolean,
  size?: 'small' | 'medium' | 'large'
}
export const Loading = ({ component: Component, loading, size = 'medium' }: Props) => {
  if (loading) {
    return <Text size={size}>Loading</Text>
  }

  return <Component />
}
