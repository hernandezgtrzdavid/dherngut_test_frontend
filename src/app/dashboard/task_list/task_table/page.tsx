'use client'

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID Tarea', type: 'number', width: 70 },
  { field: 'user', headerName: 'Usuario', width: 130 },
  { field: 'description', headerName: 'Descripción', width: 130 },
  { field: 'creationDate', headerName: 'Fecha de creación', width: 90 },
  { field: 'valid', headerName: 'Tarea Valida', type: 'boolean', width: 160 }
];

const rows = [
  { id: 1, user: 'David Hernandez', description: 'Cursar credito', creationDate: '2022/07/04 13:45', valid: true },
  { id: 2, user: 'Sebastian Vasquez', description: 'Finiquitar credito', creationDate: '2023/04/07 11:45', valid: true },
  { id: 3, user: 'Roberto Gomez', description: 'Cursar credito', creationDate: '2022/07/04 14:45', valid: false },
  { id: 4, user: 'Sebastian Vasquez', description: 'Cursar credito', creationDate: '2023/06/04 13:45', valid: true },
  { id: 5, user: 'David Hernandez', description: 'Cursar credito', creationDate: '2022/07/04 13:45', valid: true }
];


export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}