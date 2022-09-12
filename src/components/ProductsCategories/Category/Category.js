import { Link } from "react-router-dom"

const Category = ({id, name}) => {
    return (
      <Link to={`/Productos/${name}`}>
        <button className="button-category">{name}</button>
      </Link>
    )
}
  
export default Category