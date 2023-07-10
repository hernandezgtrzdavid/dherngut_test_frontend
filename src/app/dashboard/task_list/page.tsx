import { Metadata } from 'next';
import * as React from 'react';
import DataTable from './task_table/page';


export const metadata: Metadata = {
    title: '[COOPEUCH] Listado de Tareas',
  }

export default function Page() {
  return (
    <div>
      <h1>TABLA DE TAREAS</h1>
      <DataTable/>
    </div>
  );
};