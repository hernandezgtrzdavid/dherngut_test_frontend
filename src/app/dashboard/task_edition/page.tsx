import { Metadata } from 'next'
import { useId } from 'react';

export const metadata: Metadata = {
    title: '[COOPEUCH] Editor de Tareas',
  }

  export default function Page() {
    return (
      <div>
        <div>Edite una tarea COOPEUCH</div>
        <></>
        <div>
          <Form></Form>
          <EditingForm></EditingForm>
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
          <button type="submit">Cargar Tarea</button>
        </div>
      </form>
    )
  }

  export function EditingForm() {
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
          <button type="submit">Editar Tarea</button>
        </div>
      </form>
    )
  }