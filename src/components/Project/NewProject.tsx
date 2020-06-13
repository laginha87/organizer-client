
import Text from '~components/Common/Text'
import TextInput from '~components/Inputs/TextInput'
import { Formik, Form } from 'formik'
import TextareaInput from '~components/Inputs/TextareaInput'
import { useTaskEnums } from '~components/Task/useTaskEnums'
import { Loading } from '~components/Common/Loading'
import SelectInput from '~components/Inputs/SelectInput'
import { useMemo, FC, useCallback } from 'react'
import { useMutation } from '@apollo/react-hooks'
import CreateProjectMutation from './CreateProjectMutation.graphql'

const NewProject: FC = () => {
  const {
    ickynesses,
    dificulties,
    durations,
    priorities,
    isLoading
  } = useTaskEnums()

  const initialValues = useMemo(() => ({
    name: '',
    description: '',
    ickyness: !isLoading && ickynesses[1].value,
    dificulty: !isLoading && dificulties[1].value,
    duration: !isLoading && durations[1].value,
    priority: !isLoading && priorities[1].value
  }), [isLoading])

  const [createProject] = useMutation(CreateProjectMutation)

  const handleSubmit = useCallback(
    (project) => {
      return createProject({ variables: { input: { project } } })
    },
    []
  )

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form>
        <Text>New Project</Text>
        <TextInput name='name' label='Name:' />
        <TextareaInput name='description' label='Description:' />
        <Loading
          loading={isLoading}
          component={() =>
            <>
              <SelectInput name='ickyness' options={ickynesses} label='Ickyness' />
              <SelectInput name='dificulty' options={dificulties} label='Dificulty' />
              <SelectInput name='duration' options={durations} label='Duration' />
              <SelectInput name='priority' options={priorities} label='Priority' />
            </>}
        />

        <button type='submit' data-testId='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default NewProject
