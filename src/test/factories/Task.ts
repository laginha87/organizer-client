let ID_SEQ = 1
export const Task = (props = {}) => {
  return {
    id: (ID_SEQ++).toFixed(),
    dificulty: 'easy',
    ickyness: 'chicken',
    duration: 'short',
    priority: 'high',
    title: 'Title',
    description: 'Description',
    __typename: 'Task',
    ...props
  }
}
