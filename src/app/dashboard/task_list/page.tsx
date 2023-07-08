import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '[COOPEUCH] Listado de Tareas',
  }

  const tasks = [{
    taskId: 1,
    user: 'David Hernandez',
    description: 'Cursar credito',
    creationDate: '2022/07/04 13:45',
    valid: true
  },
  {
    taskId: 2,
    user: 'Sebastian Vasquez',
    description: 'Finiquitar credito',
    creationDate: '2023/04/07 11:45',
    valid: true
  },
  {
    taskId: 3,
    user: 'Roberto Gomez',
    description: 'Cursar credito',
    creationDate: '2022/07/04 14:45',
    valid: false
  },{
    taskId: 4,
    user: 'Sebastian Vasquez',
    description: 'Cursar credito',
    creationDate: '2023/06/04 13:45',
    valid: true
  },
  {
    taskId: 5,
    user: 'David Hernandez',
    description: 'Cursar credito',
    creationDate: '2022/07/04 13:45',
    valid: true
  }]

export default function Page() {
    <div>Listado de tareas COOPEUCH</div>
    const listItems = tasks.map(task =>
      <li key={task.taskId}>
        <p>
          <b>Descripcion : </b>
          {task.description}
        </p>
        <p>
          <b>Usuario creador : </b>
          {task.user}
        </p>
        <p>
          <b>Fecha de creacion : </b>
          {task.creationDate}
        </p>
        <p>
          <b>Valido : </b>
          {task.valid}
        </p>
      </li>
    );
    return <ul>{listItems}</ul>;
  }