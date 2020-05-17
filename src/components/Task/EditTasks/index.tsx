import React, { FC, useMemo } from 'react'
import { CreateTaskInput } from '__generated__/globalTypes'
import { useTaskEnums } from '~components/Task/useTaskEnums'
import { Loading } from '~components/Common/Loading'
import { HorizontalList } from '~components/Common/List'
import { Formik, Form } from 'formik'
import SelectInput from '~components/Inputs/SelectInput'

const allSame = (array: any[], prop: string) => array.every((val, i, arr) => val[prop] === arr[0][prop]) && array[0][prop]
interface Props {
  tasks: CreateTaskInput[],
  projects: any[]
}
export const EditTasks: FC<Props> = ({ tasks, projects }) => {
  const { ickynesses, dificulties, durations, priorities, isLoading } = useTaskEnums()

  const initialValues = useMemo(() => {
    if (tasks.length === 0) {
      return {}
    }
    return {
      ickyness: allSame(tasks, 'ickyness'),
      dificulty: allSame(tasks, 'dificulty'),
      duration: allSame(tasks, 'duration'),
      priority: allSame(tasks, 'priority'),
      project: allSame(tasks, 'project')
    }
  }, [tasks])
  return (
    <div>
      <Loading
        size='small'
        component={() =>
          <Formik initialValues={initialValues} onSubmit={() => { }}>
            <Form>
              <HorizontalList>
                <SelectInput label='Ickyness' name='ickyness' options={ickynesses} />
                <SelectInput label='Dificulty' name='dificulty' options={dificulties} />
                <SelectInput label='Duration' name='duration' options={durations} />
                <SelectInput label='Priority' name='priority' options={priorities} />
                <SelectInput label='Project' name='project' options={projects.map(({ name, id }) => ({ label: name, value: id }))} />
              </HorizontalList>
            </Form>
          </Formik>}
        loading={isLoading}
      />

    </div>)
}
