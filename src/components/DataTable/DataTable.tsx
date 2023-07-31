 import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./DataTable.scss";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";

 type Props = {
    columns : GridColDef[];
    rows : object[];
    slug: string;
 }
 
 const DataTable = (props: Props) => {

    const handleDelete =(id:number)=>{
      // delete the idem
      console.log(id + " has been deleted");
      
    } 


      const actionCol:GridColDef= {
         field: "actions", headerName: 'Actions', width: 100,
        renderCell: (params)=>{
           return <div className="action">
               <Link to={`/${props.slug}/${params.row.id}`}><div className="view"><Edit/></div></Link>
               <div className="delete" onClick={()=>handleDelete(params.row.id)}><DeleteOutline/></div>
               
           </div>
       }
      }

      
      
      
      
// style={{ backgroundColor: statusColor }}
   return (
     <div className="datatable" >
       <DataGrid
       className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionCol]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 12,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        pageSizeOptions={[12]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnMenu
        disableColumnSelector
    
        
      />
     </div>
   )
 }
 
 export default DataTable
 