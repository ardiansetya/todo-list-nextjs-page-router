import React from 'react'
import FormTodo from './FormTodo';
import TableTodo from './TableTodo';
import AdminLayout from './layout';

const Main = () => {
  return (
  <AdminLayout>
      <FormTodo />
      <TableTodo />
    </AdminLayout>
  );
}

export default Main