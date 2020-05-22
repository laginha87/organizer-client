
import Text from '~components/Common/Text'
import TextInput from '~components/Inputs/TextInput'
import { Formik, Form } from 'formik'
import TextareaInput from '~components/Inputs/TextareaInput'
import { useTaskEnums } from '~components/Task/useTaskEnums'
import { Loading } from '~components/Common/Loading'
import SelectInput from '~components/Inputs/SelectInput'
import { useMemo, FC } from 'react'

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

  return (
    <Formik onSubmit={() => { }} initialValues={initialValues}>
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
      </Form>
    </Formik>
  )
}

export default NewProject
