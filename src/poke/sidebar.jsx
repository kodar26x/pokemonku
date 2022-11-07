import { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: "aqua !important" }}>
                    <a className="navbar-brand" href="#"><img src="http://pluspng.com/img-png/pokemon-go-png-community-day-png-1195.png" alt="" style={{ height: "50px", width: "80px" }} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Features</a>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Cari Pokemon" aria-label="Search" />
                        </form>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar;