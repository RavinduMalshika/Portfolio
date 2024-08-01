import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import About from "../componenets/About";
import Project from "../componenets/Project";
import Contact from "../componenets/Contact";
import portfolioDesktopDark from "../assets/portfolio-desktop-dark.png";
import portfolioDesktopLight from "../assets/portfolio-desktop-light.png";
import portfolioMobileDark from "../assets/portfolio-mobile-dark.png";
import portfolioMobileLight from "../assets/portfolio-mobile-light.png";
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/javascript.svg";
import sassLogo from "../assets/sass.svg";
import reactLogo from "../assets/react.svg";
import bootstrapLogo from "../assets/bootstrap.svg";
import motionLogo from "../assets/framer-motion.svg";
import githubLogo from "../assets/github.svg";

const Home = () => {
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [firstNameCenter, setFirstNameCenter] = useState(0);
    const [lastNameCenter, setLastNameCenter] = useState(0);

    const titleRRef = useRef(null);
    const titleMRef = useRef(null);
    const isFirstRender = useRef(true);

    var horizontalCenter
    if (window.innerWidth > 768) {
        horizontalCenter = (window.innerWidth / 2) - 90;
    } else {
        horizontalCenter = window.innerWidth / 2;
    }

    var verticalCenter = window.innerHeight / 2;

    const topSvgVariants = {
        initial: {
            scale: window.innerWidth >= 768 ? 4 : 8,
            x: (horizontalCenter - 31),
            y: 0,
            opacity: 0,
            transformOrigin: "center"
        },
        final: {
            scale: 1,
            x: 0,
            y: [0, -firstNameCenter, verticalCenter - firstNameCenter, verticalCenter - firstNameCenter, 0],
            opacity: 1,
            transition: {
                scale: { delay: 3.5, duration: 1.5 },
                x: { delay: 3.5, duration: 1 },
                y: { delay: 1, duration: 3.5, times: [0, 0.05, 0.1, 0.7, 1], stiffness: 100 },
                opacity: { delay: 1.5, duration: 0 }
            }
        },
    }

    const topPathVariants = {
        initial: {
            strokeWidth: 4,
            pathLength: 0,
        },
        final: {
            strokeWidth: 8,
            pathLength: 1,
            transition: {
                strokeWidth: { delay: 3.5, duration: 1.5 },
                pathLength: { delay: 1.5, duration: 2 }
            }
        }
    }

    const bottomSvgVariants = {
        initial: {
            scale: window.innerWidth >= 768 ? 2 : 4,
            x: window.innerWidth >= 768 ? (horizontalCenter - 60) : (horizontalCenter - 46),
            y: 0,
            opacity: 0,
            transformOrigin: "center"
        },
        final: {
            scale: 1,
            x: 0,
            y: [0, -lastNameCenter, verticalCenter - lastNameCenter + 110, verticalCenter - lastNameCenter + 100, 0],
            opacity: 1,
            transition: {
                scale: { delay: 3.5, duration: 1.5 },
                x: { delay: 3.5, duration: 1 },
                y: { delay: 1, duration: 3.5, times: [0, 0.05, 0.1, 0.7, 1], stiffness: 100 },
                opacity: { delay: 1.5, duration: 0 }
            }
        },
    }

    const bottomLinePathVariants = {
        initial: {
            x: -10,
            strokeWidth: 8,
            pathLength: 0
        },
        final: {
            strokeWidth: 8,
            pathLength: 1,
            transition: {
                pathLength: { delay: 1.5, duration: 2 },
                strokeWidth: { delay: 3.5, duration: 3 }
            }
        }
    }

    const bottomLetterPathVariants = {
        initial: {
            strokeWidth: 8,
            pathLength: 0,
            x: 0
        },
        final: {
            x: -10,
            strokeWidth: 8,
            pathLength: 1,
            transition: {
                pathLength: { delay: 1.5, duration: 2 },
                strokeWidth: { delay: 3.5, duration: 3 },
                x: { delay: 3.5, duration: 1.5 },
            }
        }
    }

    const screenContentsVariants = {
        initial: { opacity: 0 },
        final: {
            opacity: 1,
            transition: { delay: 4.5, duration: 2 }
        }
    }

    const navBarVariants = {
        initial: { y: -100 },
        final: {
            y: 0,
            transition: { delay: 4.5, duration: 0.5 }
        }
    }

    const openExternalLink = (url) => {
        window.open(url, '_blank');
        console.log("external link clicked");
    }

    useEffect(() => {
        console.log(" use effect ran");
        if (localStorage.getItem("theme") != null) {
            setSelectedTheme(localStorage.getItem("theme"));
        }

        console.log(localStorage.getItem("theme"));

        let themeSelections = document.getElementsByClassName("themes")[0].childNodes;
        console.log(themeSelections);
        themeSelections.forEach(themeSelection => {
            themeSelection.addEventListener("click", function () {
                setSelectedTheme(themeSelection.id);
            })
        });

        if (titleRRef.current) {
            const { top, right, bottom, left, width, height } = titleRRef.current.getBoundingClientRect();
            console.log('R position and size:', { top, right, bottom, left, width, height });
            console.log("vertical center: " + verticalCenter)
            console.log("center point of R: " + (top + (height / 2)));
            setFirstNameCenter(top + (height / 2));

        }

        if (titleMRef.current) {
            const { top, right, bottom, left, width, height } = titleMRef.current.getBoundingClientRect();
            console.log('M position and size:', { top, right, bottom, left, width, height });
            setLastNameCenter(top + (height / 2));
        }

    }, [])

    useEffect(() => {
        if (isFirstRender == true) {
            isFirstRender = false;
            return;
        }
        themeChanged();
        console.log("theme select ran");
    }, [selectedTheme]);

    const themeChanged = () => {
        let theme = selectedTheme;
        localStorage.setItem("theme", selectedTheme);
        console.log(localStorage.getItem("theme"))

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
        <div className="container-fluid background-home">
            <motion.nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" id="navBar"
                variants={navBarVariants}
                initial="initial"
                animate="final">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">Ravindu Malshika</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Resume</a>
                            </li>
                            <div className="vr d-none d-lg-block"></div>
                            <hr className="d-block d-lg-none" />
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedTheme == "light" && <i className="bi bi-brightness-high"></i>}
                                    {selectedTheme == "dark" && <i className="bi bi-moon-fill"></i>}
                                    {selectedTheme == "auto" && <i className="bi bi-circle-half"></i>}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end themes">
                                    <li id="light"><a className="dropdown-item theme-selection" onClick={() => themeChanged("light")}>
                                        <i className="bi bi-brightness-high"></i> Light
                                    </a></li>
                                    <li id="dark"><a className="dropdown-item theme-selection" onClick={() => themeChanged("dark")}>
                                        <i className="bi bi-moon-fill"></i> Dark
                                    </a></li>
                                    <li id="auto"><a className="dropdown-item theme-selection" onClick={() => themeChanged("auto")}>
                                        <i className="bi bi-circle-half"></i> Auto
                                    </a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </motion.nav>

            <div data-bs-spy="scroll" data-bs-target="#navBar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollSpy" tabIndex="0">
                <div className="row align-items-center min-vh-100" id="home">
                    <motion.div className="col-1 rounded-5 p-0 align-items-center d-none d-md-block"
                        variants={screenContentsVariants}
                        initial="initial"
                        animate="final">
                        <div className="d-inline-block bg-tertiary ms-2 rounded-5">
                            <ul className="btn-group-vertical my-1 p-0">
                                <li className="list-group-item p-0">
                                    <a>
                                        <i className="bi bi-github btn btn-tertiary rounded-5" style={{ fontSize: "2rem" }} role="button" onClick={() => openExternalLink("https://github.com/RavinduMalshika/")} />
                                    </a>
                                </li>

                                <li className="list-group-item p-0">
                                    <a>
                                        <i className="bi bi-linkedin btn btn-tertiary rounded-5" style={{ fontSize: "2rem" }} role="button" onClick={() => openExternalLink("https://www.linkedin.com/in/ravindumalshika/")}/>
                                    </a>
                                </li>
                                <li className="list-group-item p-0">
                                    <a>
                                        <i className="bi bi-twitter-x btn btn-tertiary rounded-5" style={{ fontSize: "2rem" }} role="button" onClick={() => openExternalLink("https://x.com/PRM_Fernando")} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <div className="col-12 col-md-9 col-lg-8">
                        <motion.div className="row ps-3"
                            variants={screenContentsVariants}
                            initial="initial"
                            animate="final">
                            <p className="p-0 font-face-content-regular fs-4">HEY, I'M</p>
                        </motion.div>

                        <div className="d-flex flex-nowrap row align-items-center ps-3">
                            <div className="row align-items-center p-0 m-0" style={{ width: window.innerWidth >= 768 ? 66 : 33, height: window.innerWidth >= 768 ? 110 : 55 }}>
                                <motion.svg
                                    className="col-auto p-0 m-0" ref={titleRRef}
                                    viewBox="0 0 66 110"
                                    xmlns="http://www.w3.org/2000/svg"
                                    variants={topSvgVariants}
                                    initial="initial"
                                    animate="final"
                                >
                                    <motion.path
                                        className="svg-name"
                                        d="M 5 105 L 5 5 M 15 105 L 15 5 C 75 5 75 30 15 55 L 60 105"
                                        strokeWidth="8"
                                        variants={topPathVariants}
                                        initial="initial"
                                        animate="final"
                                    />
                                </motion.svg>
                            </div>

                            <motion.p className="col font-face-title fs-1 ps-0 m-0" id="firstNameContent"
                                variants={screenContentsVariants}
                                initial="initial"
                                animate="final">
                                AVINDU
                            </motion.p>
                        </div>

                        <div className="d-flex flex-nowrap row align-items-center ps-3">
                            <div className="row align-items-center p-0 m-0" style={{ width: window.innerWidth >= 768 ? 120 : 60, height: window.innerWidth >= 768 ? 110 : 55 }}>
                                <motion.svg className="col-auto p-0 m-0" ref={titleMRef} viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg"
                                    variants={bottomSvgVariants}
                                    initial="initial"
                                    animate="final"
                                >
                                    <motion.path
                                        className="svg-name"
                                        d="M 15 105 L 15 5"
                                        strokeWidth="8"
                                        variants={bottomLinePathVariants}
                                        initial="initial"
                                        animate="final"
                                    />
                                    <motion.path
                                        className="svg-name"
                                        d="M 25 105 L 25 5 L 70 55 L 115 5 L 115 105"
                                        strokeWidth="8"
                                        variants={bottomLetterPathVariants}
                                        initial="initial"
                                        animate="final"
                                    />
                                </motion.svg>
                            </div>

                            <motion.p className="col font-face-title fs-1 ps-0 m-0" id="lastNameContent"
                                variants={screenContentsVariants}
                                initial="initial"
                                animate="final">
                                ALSHIKA
                            </motion.p>
                        </div>

                        <motion.div className="row ps-3"
                            variants={screenContentsVariants}
                            initial="initial"
                            animate="final">
                            <p className="p-0 font-face-content-regular fs-4">I am a passionate software developer with a knack for turning complex problems into elegant solutions. Welcome to my portfolio, where you can explore my journey, projects, and the skills I’ve honed along the way.</p>
                        </motion.div>
                    </div>

                    <motion.div className="col-2 col-lg-3 align-items-center d-none d-md-block"
                        variants={screenContentsVariants}
                        initial="initial"
                        animate="final">
                        {/* <p>Insert graphic here</p> */}
                    </motion.div>
                </div>

                <motion.div className="row align-items-center min-vh-100" id="about"
                    variants={screenContentsVariants}
                    initial="initial"
                    animate="final">
                    <div className="d-none d-lg-block col-1" />
                    <div className="col-12 col-lg-10">
                        <About
                            description={["I'm a beginner Full Stack Software Engineer passionate about building and managing both the front-end and back-end of websites, web applications and software. Check out some of my work in the Projects section.", "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me."]}
                            skills={["Java", "SpringBoot", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "SASS", "GIT", "Github", "Terminal", "Responsive Design"]}
                        />
                    </div>
                    <div className="d-none d-lg-block col-1" />
                </motion.div>

                <motion.div className="row align-items-center min-vh-100" id="projects"
                    variants={screenContentsVariants}
                    initial="initial"
                    animate="final">
                    <div className="row mt-1" style={{ height: 56 }}></div>

                    <h1 className="font-face-content-semibold mb-0">PROJECTS</h1>
                    <div className="row justify-content-center">
                        <hr className="title-decoration" />
                    </div>

                    <div className="col">
                        <Project
                            name="Portfolio"
                            description="Welcome to my portfolio! This site showcases my journey and projects as a beginner Full Stack Software Engineer. Built using React, it leverages the power of Bootstrap and Sass for sleek and responsive design. The foundation of the site is constructed with HTML and JavaScript, while animations are brought to life with Framer Motion. Explore my work and see how I bring ideas to life through code!"
                            tools={[
                                ["HTML", htmlLogo],
                                ["CSS", cssLogo],
                                ["JavaScript", jsLogo],
                                ["React", reactLogo],
                                ["Bootstrap", bootstrapLogo],
                                ["SASS", sassLogo],
                                ["Framer Motion", motionLogo],
                                ["Github", githubLogo]
                            ]}
                            websiteLink="https://ravindumalshika.github.io/Portfolio/"
                            githubLink="https://github.com/RavinduMalshika/Portfolio"
                            desktopDark={portfolioDesktopDark}
                            desktopLight={portfolioDesktopLight}
                            mobileDark={portfolioMobileDark}
                            mobileLight={portfolioMobileLight}
                        />

                        <Project
                            name="Game Hub"
                            description="Welcome to GameHub, a dynamic and interactive gaming platform built with Angular. Designed with a focus on responsive design, GameHub ensures a seamless and enjoyable experience across all devices. Our current offering, Tic Tac Toe, comes alive with smooth animations, making every move delightful and engaging."
                            tools={[]}
                        />

                        <Project
                            name="Just Tuner"
                            description="Introducing Just Tuner, the ultimate online radio app built with Kotlin Jetpack Compose. With Just Tuner, you can connect to any radio station around the globe, bringing the world of music, news, and entertainment to your fingertips. Experience a sleek and modern interface designed for effortless navigation and enjoy seamless streaming from your favorite stations worldwide. Tune in, discover new sounds, and stay connected with Just Tuner!"
                            tools={[]}
                        />
                    </div>
                </motion.div>

                <motion.div className="row align-items-center min-vh-100" id="contact"
                    variants={screenContentsVariants}
                    initial="initial"
                    animate="final">
                    <Contact />
                </motion.div>
            </div>

            <div className="footer row bg-black text-white pt-5 pb-2">
                <div className="col-lg-2 col-md-1 col-0" />
                <div className="col-lg-8 col-md-10 col-12">
                    <div className="row">
                        <div className="col-10">
                            <p><b>Ravindu Malshika Fernando</b></p>
                            <p>A Full Stack Software Enginner</p>
                        </div>
                        <div className="col-2">
                            <b>Social</b>
                            <div className="d-flex mt-2">
                                <i className="bi bi-github me-3" role="button" onClick={() => openExternalLink("https://github.com/RavinduMalshika/")} />
                                <i className="bi bi-linkedin me-3" role="button" onClick={() => openExternalLink("https://www.linkedin.com/in/ravindumalshika/")} />
                                <i className="bi bi-twitter-x me-3" role="button" onClick={() => openExternalLink("https://x.com/PRM_Fernando")} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="text-center">Made by <a>Ravindu Malshika</a></p>
                </div>
                <div className="col-lg-2 col-md-1 col-0" />
            </div>
        </div>
    )
}

export default Home;