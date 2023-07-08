import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '[COOPEUCH] Eliminador de Tareas',
  }

  export default function Page() {
    return (
      <div>
        <div>Elimine una tarea COOPEUCH</div>
        <></>
        <div>
          <Form></Form>
        </div>
      </div>
      )
  }

  export function Form() {
    return (
      <form action="/api/form" method="post">
        <div>
          <label htmlFor="postContent">Identificador de Tarea</label>
          <input type="text"/>
        </div>
    
        <div>
          <button type="submit">Borrar Tarea</button>
        </div>
      </form>
    )
  }