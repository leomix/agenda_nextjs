import Link from "next/link"
import { useRouter } from "next/router"

const navigation = () => {
    const router = useRouter()
    return (

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                      <Link href="/"> 
                        <a className="navbar-brand">Navbar</a>
                      </Link>
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                            <a className={`nav-link ${router.pathname == "/" ? "active" : ""}`} aria-current="page" href="#">Home</a>
                            </Link>
                          
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                              <a className={`nav-link ${router.pathname == "/about" ? "active" : ""}`}>About</a>

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services">
                              <a className={`nav-link ${router.pathname == "/services" ? "active" : ""}`} >Services</a>
                            </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
                </nav>
    
          
    )
}

export default navigation
