import { GridColDef } from '@mui/x-data-grid';
import './Add.scss'
import CloseIcon from '@mui/icons-material/Close';

type Props ={
    slug : string;
    columns : GridColDef[];
    setOpen :  React.Dispatch<React.SetStateAction<boolean>>;
};


const Add = (props: Props) => {
    const handleSubmit = (e: any)=>{
        e.preventDefault();
    }
  return (
    <div className='add'>
      <div className="modal">
        <span className='close' onClick={()=>props.setOpen(false)}><CloseIcon/></span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
            {props.columns.filter(item=>item.field != "id" && item.field != "img" && item.field != "fullName")
            .map(column=>(
                <div className="item">
                    <label>{column.headerName}</label>
                    <input type={column.type} placeholder={column.field} />

                    
                </div>
                
            ))}
            <button>send</button>
        </form>
      </div>
    </div>
  )
}

export default Add
