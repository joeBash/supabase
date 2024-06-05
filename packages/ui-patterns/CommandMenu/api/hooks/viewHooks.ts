import { useSnapshot } from 'valtio'

import { useCommandContext } from '../../internal/Context'

const useToggleCommandMenu = () => {
  const { viewState } = useCommandContext()
  const { toggleOpen } = useSnapshot(viewState)
  return toggleOpen
}

export { useToggleCommandMenu }
