const Home = () => {

    return (
        <div className="container-fluid">
            <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary" id="navBar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Resume</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <div data-bs-spy="scroll" data-bs-target="#navBar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollSpy" tabIndex="0">
                <div className="row align-items-center bg-primary min-vh-100" id="home">
                    <div className="col-auto bg-white rounded-5 m-3 p-0 align-items-center">
                        <ul className="btn-group-vertical p-0 m-0">
                            <li className="list-group-item p-0">
                                <a>
                                    <i className="bi bi-github btn btn-light rounded-5" style={{ fontSize: "2rem" }} role="button"/>
                                </a>
                            </li>

                            <li className="list-group-item p-0">
                                <a>
                                    <i className="bi bi-linkedin btn btn-light rounded-5" style={{ fontSize: "2rem" }} role="button"/>
                                </a>
                            </li>
                            <li className="list-group-item p-0">
                                <a>
                                    <i className="bi bi-twitter-x btn btn-light rounded-5" style={{ fontSize: "2rem" }} role="button"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col bg-secondary">
                        <h1>RAVINDU</h1>
                        <h1>MALSHIKA</h1>
                    </div>

                </div>

                <div className="row align-items-center bg-secondary min-vh-100" id="about"></div>
                <div className="row align-items-center bg-success min-vh-100" id="projects"></div>
                <div className="row align-items-center bg-warning min-vh-100" id="contact"></div>
            </div>
        </div>
    )
}

export default Home;