import { SelectOptions } from '~types/InputTypes'
import { useEnum } from '~hooks/useEnum'

interface TaskEnums {
  priorities: SelectOptions,
  ickynesses: SelectOptions,
  durations: SelectOptions,
  dificulties: SelectOptions,
  isLoading: boolean,
}

export const useTaskEnums = (): TaskEnums => {
  const [priorities, loadingPriorities] = useEnum('Priority')
  const [ickynesses, loadingIckynesses] = useEnum('Ickyness')
  const [durations, loadingDurations] = useEnum('Duration')
  const [dificulties, loadingDificulty] = useEnum('Dificulty')

  return {
    priorities,
    ickynesses,
    durations,
    dificulties,
    isLoading: loadingPriorities || loadingIckynesses || loadingDurations || loadingDificulty
  }
}
