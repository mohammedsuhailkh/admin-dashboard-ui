import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../components/DataTable/DataTable'
import './User.scss'
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../components/Add/Add';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 , },
  
  { field: "img", headerName: 'Avatar', width: 100,
   renderCell: (params)=>{
      return <img src={params.row.img || "noavatar.png"} alt="" />
  }},

  


  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    width: 100,
    editable: true,
  },
  {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 60,
    editable: true,
  },
  {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
      type: 'string',
    },
    {
      field: 'job',
      type: 'string',
      headerName: 'Job',
      width: 150,
      editable: true,
    },
    { 
      field: 'status',
      headerName: 'Status',
      width: 90 ,
      type: "boolean",
       
      
       },

       
  
];

const User = () => {

 const [Open, setOpen] = useState(false);


  return (
    <div className='user'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New Users</button>
      </div>
      <DataTable slug="user" columns={columns} rows={userRows}/>
      {Open && <Add slug="user" setOpen={setOpen} columns={columns}/>}
    </div>
  )
}

export default User
