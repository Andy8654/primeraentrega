import CategoryItem from "./CategoryItem"
import Container from "./Conteiner"
import MenuButton from "./MenuButton"
import Brand from "./brand"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Brand />  
            <MenuButton />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <CategoryItem isActive = {true} name="Teclados"/>
                </li>
                <li className="nav-item">
                  <CategoryItem isActive = {true} name="Monitores"/>
                </li>
                <li className="nav-item">
                  <CategoryItem isActive = {true} name="Procesadores"/>
                </li>
                <li className="nav-item">
                  <CategoryItem isActive = {true} name="Mouse"/>
                </li>
              </ul>
            </div>
            <Container/>
          </div>
        </nav>
    )
}

export default NavBar;