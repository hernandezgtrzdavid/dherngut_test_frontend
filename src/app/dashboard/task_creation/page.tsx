import { Metadata } from 'next'
import { useId, useState } from 'react';

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

  const [user, setUser] = useState("")
  const [description, setDescription] = useState("")
  const [creationDate, setCreationDate] = useState("")
  const [valid, setValid] = useState("")

  interface  FormDataType {
    user: string,
    description: string,
    creationDate: string,
    valid: boolean
  }




  const responseBody: FormDataType = {user: "", description: "", creationDate: "0", valid: false}

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    responseBody.user = user
    responseBody.lastName = lastName
    responseBody.age = age
    console.log(JSON.stringify(responseBody))
    //Form submission happens here
}

  export function Form() { 
    const postTextAreaId = useId();
    return (
      <form onSubmit={onSubmitHandler}>
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