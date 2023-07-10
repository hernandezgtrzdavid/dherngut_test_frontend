import React from 'react';


  export default function Page() {
    return (
      <div>
        <div>Edite la tarea seleccionada COOPEUCH</div>
        <></>
        <div>
          <form method="POST" action="http://localhost:8081/task-test-be/task-maintainer/save-task">
          
            <div>
              <label>Id Tarea</label>
              <input type="text" name="taskId" readOnly />
            </div>

            <div>
              <label>Descripción de la tarea</label>
              <textarea name="description" required></textarea>
            </div>
            
            <div>
              <label>Fecha de creacion</label>
              <input type="text" name="creationDate" readOnly />
            </div>
            
              <div>
                <label htmlFor="activeTask">Tarea Vigente</label>
                <input type="checkbox" id="activeTask" name="activeTask" />
              </div>
              <div>
                <button type="submit">Actualizar Tarea</button>
              </div>
          </form>
        </div>
      </div>
      )
  }