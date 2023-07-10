import React from 'react';

export default function Page() {
    return (
      <div>
        <div>Cree una nueva tarea COOPEUCH</div>
        <></>
        <div>
          <form method="POST" action="http://localhost:8081/task-test-be/task-maintainer/save-task">
          <div>
            <label>Descripción de la tarea</label>
            <textarea name="description" required></textarea>
          </div>
        
          <div>
            <label htmlFor="activeTask">Tarea Vigente</label>
            <input type="checkbox" id="activeTask" name="activeTask" />
          </div>
          <div>
            <button type="submit">Crear Tarea</button>
          </div>
        </form>
        </div>
      </div>
      )
  }

