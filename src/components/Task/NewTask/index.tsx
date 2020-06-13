
import { useMutation } from '@apollo/react-hooks'
import CreateTask from '~components/Task/NewTask/CreateTaskMutation.graphql'
import { useTaskEnums } from '~components/Task/useTaskEnums'
import { Formik, Form } from 'formik'
import { TaskFormFields } from '~components/Task/TaskFormFields'

export const NewTaskPage = () => {
  const [createTask] = useMutation(CreateTask)

  const handleSubmit = async (task) => {
    await createTask({
      variables: {
        input: {
          task
        }
      }
    })
  }

  const initialValues = {
    description: '',
    title: '',
    priority: 'medium',
    dificulty: 'medium',
    ickyness: 'tepid',
    duration: 'normal'
  }

  const { isLoading, ...enums } = useTaskEnums()
  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    <div className='container mx-auto'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <TaskFormFields
            {...enums}
          />
          <div className='flex'>
            <button type='submit' className='bg-indigo-200 px-4 py-2'>Create Task</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
