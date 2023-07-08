import { Metadata } from 'next'


export const metadata: Metadata = {
    title: '[COOPEUCH] Tarea creada',
  }

export default function Page() {
    return (
      <div>
        <div>
          Tarea creada exitosamente, su identificador es : TASK_ID
        </div>
      </div>
      )
  }