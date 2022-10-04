import logo from "../src/assets/images.jfif";

const nav = (
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary text-white fixed-top">
        <div className="container">
        <img src={logo} className=" rounded-circle" style ={{height:`60px` }} />
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="#" class="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#" class="nav-link">mune</a></li>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="navbarDropdownMenuLink">about</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a href="#" class="dropdown-item"></a>call us</li>
                            <li><a href="#" class="dropdown-item"></a>who us</li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="#" className="nav-link">contact</a></li>
                </ul>
            </div>
        </div >
    </nav >);


const Nav = () => {
    return nav;
}
export default Nav;