import "./navbar.scss"
import Sidebar from "../sidebar/sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar/>

      <div className="wrapper">
        <span>Lema Dev</span>
        <div className="social">
          <img src="facebook.png" alt="" />
          <img src="instagram.png" alt="" />
          <img src="youtube.png" alt="" />
          <img src="dribbble.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar