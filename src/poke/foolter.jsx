import { Component } from "react";

class Fluter extends Component {
    render() {
        return (
            <>
                <footer className="bg-light text-center text-lg-start">
                    {/* <!-- Copyright --> */}
                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        © 2020 Copyright:
                        <a className="text-dark" href="https://Pokemon.co.id/">Pokemon.co.id</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
            </>
        )
    }
}
export default Fluter;