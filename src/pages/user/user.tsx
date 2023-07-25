import DataTable from '../../components/DataTable/DataTable'
import './User.scss'

const User = () => {
  return (
    <div className='user'>
      <div className="info">
        <h1>Users</h1>
        <button>Add New Users</button>
      </div>
      <DataTable/>
    </div>
  )
}

export default User
