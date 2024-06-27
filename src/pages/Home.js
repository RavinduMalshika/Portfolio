import { useEffect, useState } from "react";

const Home = () => {
    const [selectedTheme, setSelectedTheme] = useState("auto")

    useEffect(() => {
        let themeSelections = document.getElementsByClassName("themes")[0].childNodes;
        console.log(themeSelections);
        themeSelections.forEach(themeSelection => {
            themeSelection.addEventListener("click", function () {
                setSelectedTheme(themeSelection.id)
            })
        })
    }, [])

    useEffect(() => {
        console.log("Theme Loaded")
        themeChanged()
    }, [selectedTheme])

    const themeChanged = () => {
        let theme = selectedTheme
        console.log("called")
        switch (theme) {
            case "light": {
                document.documentElement.setAttribute("data-bs-theme", theme);
                break;
            }
            case "dark":
                document.documentElement.setAttribute("data-bs-theme", theme);
                break;
            case "auto":
                document.documentElement.setAttribute("data-bs-theme", (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
                break;

        }
    }

    return (
        <div className="container-fluid">
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" id="navBar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                            <div class="vr"></div>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedTheme == "light" && <i class="bi bi-brightness-high"></i>}
                                    {selectedTheme == "dark" && <i class="bi bi-moon-fill"></i>}
                                    {selectedTheme == "auto" && <i class="bi bi-circle-half"></i>}
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end themes">
                                    <li id="light"><a class="dropdown-item theme-selection" onClick={themeChanged("light")}>
                                        <i class="bi bi-brightness-high"></i> Light
                                    </a></li>
                                    <li id="dark"><a class="dropdown-item theme-selection" onClick={themeChanged("dark")}>
                                        <i class="bi bi-moon-fill"></i> Dark
                                    </a></li>
                                    <li id="auto"><a class="dropdown-item theme-selection" onClick={themeChanged("auto")}>
                                        <i class="bi bi-circle-half"></i> Auto
                                    </a></li>
                                </ul>
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
                                    <i className="bi bi-github btn btn-light rounded-5" style={{ fontSize: "2rem" }} role="button" />
                                </a>
                            </li>

                            <li className="list-group-item p-0">
                                <a>
                                    <i className="bi bi-linkedin btn btn-light rounded-5" style={{ fontSize: "2rem" }} role="button" />
                                </a>
                            </li>
                            <li className="list-group-item p-0">
                                <a>
                                    <i className="bi bi-twitter-x btn btn-light rounded-5" style={{ fontSize: "2rem" }} role="button" />
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