 import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from "@mui/x-data-grid";
import "./DataTable.scss";
import { DeleteOutline, Edit, } from "@mui/icons-material";

 
 const DataTable = () => {

    // const statusColor = "status" ? 'green' : 'red';

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 , },
        
        { field: "avatar", headerName: 'Avatar', width: 100,
         renderCell: (params)=>{
            return <img src={params.row.img || "noavatar.png"} alt="" />
        }},

        


        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
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
          },
          {
            field: 'job',
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

             { field: "actions", headerName: 'Actions', width: 100,
         renderCell: ()=>{
            return <div className="action">
                <div className="view"><Edit/></div>
                <div className="delete"><DeleteOutline/></div>
                
            </div>
        }},
        
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow',  firstName: 'Jon', age: 35, email: 'jon.snow@example.com', job: 'Lord Commander' ,img: 'https://i.pravatar.cc/150?img=1', status: 'true' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei.lannister@example.com', job: 'Queen', img: 'https://i.pravatar.cc/150?img=2' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'jaime.lannister@example.com', job: 'Knight', img: 'https://i.pravatar.cc/150?img=3', status: 'true'},
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'arya.stark@example.com', job: 'Assassin', img: 'https://i.pravatar.cc/150?img=4', status: 'true' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 56, email: 'daenerys.targaryen@example.com', job: 'Queen', img: 'https://i.pravatar.cc/150?img=5' },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 50, email: 'melisandre@example.com', job: 'Red Priestess', img: 'https://i.pravatar.cc/150?img=6' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'ferrara.clifford@example.com', job: 'Merchant', img: 'https://i.pravatar.cc/150?img=7' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'rossini.frances@example.com', job: 'Composer', img: 'https://i.pravatar.cc/150?img=8' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'harvey.roxie@example.com', job: 'Lawyer', img: 'https://i.pravatar.cc/150?img=9' , status: 'true'},
        { id: 10, lastName: 'Smith', firstName: 'John', age: 28, email: 'john.smith@example.com', job: 'Software Engineer', img: 'https://i.pravatar.cc/150?img=10' },
        { id: 11, lastName: 'Johnson', firstName: 'Emily', age: 39, email: 'emily.johnson@example.com', job: 'Marketing Manager', img: 'https://i.pravatar.cc/150?img=11', status: 'true' },
        { id: 12, lastName: 'Brown', firstName: 'Michael', age: 31, email: 'michael.brown@example.com', job: 'Sales Representative', img: 'https://i.pravatar.cc/150?img=12' , status: 'true'},
        { id: 13, lastName: 'Davis', firstName: 'Emma', age: 22, email: 'emma.davis@example.com', job: 'Graphic Designer', img: 'https://i.pravatar.cc/150?img=13' },
        { id: 14, lastName: 'Garcia', firstName: 'Alex', age: 47, email: 'alex.garcia@example.com', job: 'Financial Analyst', img: 'https://i.pravatar.cc/150?img=14' , status: 'true'},
      ];
      
      
      
      
// style={{ backgroundColor: statusColor }}
   return (
     <div className="datatable" >
       <DataGrid
       className="dataGrid"
        rows={rows}
        columns={columns}
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
 