import { useState } from 'react';
import './Products.scss'
import DataTable from '../../components/DataTable/DataTable';
import Add from '../../components/Add/Add';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { productRows } from '../../data';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 , },
  
  { field: "img", headerName: 'Avatar', width: 100,
   renderCell: (params)=>{
      return <img src={params.row.img || "noavatar.png"} alt="" />
  }},

  


  {
    field: 'productName',
    type: 'string',
    headerName: 'Product name',
    width: 150,
    editable: true,
  },

  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 100,
    editable: true,
  },

    { 
      field: 'availability',
      headerName: 'Availability',
      width: 260 ,
      type: "boolean",
       
      
       },

       
  
];

const Products = () => {
  
  const [Open, setOpen] = useState(false);


  return (
    <div className='user'>
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="product" columns={columns} rows={productRows}/>
      {Open && <Add slug="product" setOpen={setOpen} columns={columns}/>}
    </div>
  )
  
}

export default Products
