import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <nav className="bg-primary-700">
      <div className="container" data-type="wide">
        <ul className="flex-group" role='list'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="games">Games</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav