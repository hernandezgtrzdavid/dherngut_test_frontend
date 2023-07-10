import React from 'react';


  export default function Page() {
    return (
      <div>
        <div>Elimine una tarea COOPEUCH</div>
        <></>
        <div>
        <form method="DELETE" action="http://localhost:8081/task-test-be/task-maintainer/delete-task">
        <div>
          <label>Id Tarea</label>
          <input type="number" name="taskId" />
        </div>
        <div>
          <button type="submit">Borrar Tarea</button>
        </div>
      </form>
        </div>
      </div>
      )
  }