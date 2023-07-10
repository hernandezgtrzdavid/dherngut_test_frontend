'use client'

import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'


const columns = [
    { field: 'taskId', headerName: 'ID Tarea', type: 'number', width: 70 },
    { field: 'description', headerName: 'Descripción', width: 130 },
    { field: 'creationDate', headerName: 'Fecha de creación', width: 90 },
    { field: 'activeTask', headerName: 'Tarea Valida', type: 'boolean', width: 160 }
  ];



const TaskDataGrid= () => {

    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8081/task-test-be/task-maintainer/get-all-task")
          .then((data) => data.json())
          .then((data) => setTableData(data))
    
      }, [])
      console.log('Table Data : ')
      console.log(tableData)

    
    return (
        <div style={{ width: '60%', margin: 'auto', marginTop: '2rem' }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={10}
          autoHeight
          checkboxSelection
        />
      </div>
    )
}

export default TaskDataGrid