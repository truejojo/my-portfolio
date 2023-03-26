import { NavLink } from "react-router-dom";
import { FaGithub, FaXingSquare } from "react-icons/fa";

const SocialMediaNav = () => {
  return (
    <div>
      <ul >
          <li>
            <NavLink to="https://github.com/truejojo" target="_blank">
              <FaGithub />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://www.xing.com/profile/Johannes_Vehring2/cv"
              target="_blank"
            >
              <FaXingSquare />
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default SocialMediaNav