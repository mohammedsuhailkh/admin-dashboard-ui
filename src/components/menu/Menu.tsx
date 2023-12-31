import './Menu.scss'
import { Link } from 'react-router-dom'
import {menu} from '../../data'

const Menu = () => {
  return (
    <div className='menu'>


      {/* //mapping each element from the menu array */}

      {menu.map((item) =>(


      <div className="item" key={item.id}>
        <span className="title">{item.title}</span>


        {/* mapping htrough each of the child array */}
        {item.listItems.map((listItem) =>(
        
        <Link to={listItem.url} className='listItem' key={listItem.id}>
        <img src={listItem.icon} alt="" />
        <span className="ListItemTitle">{listItem.title}</span>
        </Link>
        
        ))}
      </div>    


))}


    </div>
  )
}

export default Menu
