import { Metadata } from 'next'
import { useId } from 'react';

export const metadata: Metadata = {
    title: '[COOPEUCH] Creador de Tareas',
  }

export default function Page() {
    return (
      <div>
        <div>Cree una nueva tarea COOPEUCH</div>
        <></>
        <div>
          <Form></Form>
        </div>
      </div>
      )
  }

  export function Form() {
    const postTextAreaId = useId();
    return (
      <form action="/api/form" method="post">
        <div>
          <>
          <label htmlFor={postTextAreaId}>Descripción de la tarea</label>
          <textarea 
            name="postContent"
            rows={4}
            cols={40}
          />
          </>
          
        </div>
      
        <div>
          <label htmlFor="validTask">Vigente</label>
          <input type="checkbox" id="validTask" name="validTask" required />
        </div>
        <div>
          <button type="submit">Crear Tarea</button>
        </div>
      </form>
    )
  }