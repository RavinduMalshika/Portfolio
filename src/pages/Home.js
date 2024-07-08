import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import About from "../componenets/About";
import Project from "../componenets/Project";

const Home = () => {
    const [selectedTheme, setSelectedTheme] = useState("auto");
    const [firstNameCenter, setFirstNameCenter] = useState(0);
    const [lastNameCenter, setLastNameCenter] = useState(0);
    const [lastNameContentWidth, setLastNameContentWidth] = useState(0);

    const titleRRef = useRef(null);
    const titleMRef = useRef(null);

    var horizontalCenter
    if (window.innerWidth > 768) {
        horizontalCenter = (window.innerWidth / 2) - 90;
    } else {
        horizontalCenter = window.innerWidth / 2;
    }

    var verticalCenter = window.innerHeight / 2;

    const topSvgVariants = {
        initial: {
            scale: 4,
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
                scale: { delay: 4.5, duration: 1.5 },
                x: { delay: 4.5, duration: 1.5 },
                y: { delay: 1, duration: 5, times: [0, 0.05, 0.1, 0.7, 1], stiffness: 100 },
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
                strokeWidth: { delay: 4.5, duration: 1.5 },
                pathLength: { delay: 1.5, duration: 3 }
            }
        }
    }

    const bottomSvgVariants = {
        initial: {
            scale: 2,
            x: (horizontalCenter - 60),
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
                scale: { delay: 4.5, duration: 1.5 },
                x: { delay: 4.5, duration: 1.5 },
                y: { delay: 1, duration: 5, times: [0, 0.05, 0.1, 0.7, 1], stiffness: 100 },
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
                pathLength: { delay: 1.5, duration: 3 },
                strokeWidth: { delay: 4.5, duration: 3 }
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
                pathLength: { delay: 1.5, duration: 3 },
                strokeWidth: { delay: 4.5, duration: 3 },
                x: { delay: 4.5, duration: 3 },
            }
        }
    }

    const screenContentsVariants = {
        initial: { opacity: 0 },
        final: {
            opacity: 1,
            transition: { delay: 6, duration: 3 }
        }
    }

    const navBarVariants = {
        initial: { y: -100 },
        final: {
            y: 0,
            transition: { delay: 6, duration: 0.5 }
        }
    }

    useEffect(() => {
        let themeSelections = document.getElementsByClassName("themes")[0].childNodes;
        console.log(themeSelections);
        themeSelections.forEach(themeSelection => {
            themeSelection.addEventListener("click", function () {
                setSelectedTheme(themeSelection.id)
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
        console.log("Theme Loaded");
        themeChanged();
    }, [selectedTheme]);

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
                            <div className="vr"></div>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedTheme == "light" && <i className="bi bi-brightness-high"></i>}
                                    {selectedTheme == "dark" && <i className="bi bi-moon-fill"></i>}
                                    {selectedTheme == "auto" && <i className="bi bi-circle-half"></i>}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end themes">
                                    <li id="light"><a className="dropdown-item theme-selection" onClick={themeChanged("light")}>
                                        <i className="bi bi-brightness-high"></i> Light
                                    </a></li>
                                    <li id="dark"><a className="dropdown-item theme-selection" onClick={themeChanged("dark")}>
                                        <i className="bi bi-moon-fill"></i> Dark
                                    </a></li>
                                    <li id="auto"><a className="dropdown-item theme-selection" onClick={themeChanged("auto")}>
                                        <i className="bi bi-circle-half"></i> Auto
                                    </a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </motion.nav>

            <div data-bs-spy="scroll" data-bs-target="#navBar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollSpy" tabIndex="0">
                <div className="row align-items-center bg-primary min-vh-100" id="home">
                    <motion.div className="col-auto bg-white rounded-5 m-3 p-0 align-items-center d-none d-md-block"
                        variants={screenContentsVariants}
                        initial="initial"
                        animate="final">
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
                    </motion.div>

                    <div className="col-12 col-md-8">
                        <motion.div className="row ms-1"
                            variants={screenContentsVariants}
                            initial="initial"
                            animate="final">
                            <p className="p-0">HEY, I'M</p>
                        </motion.div>

                        <div className="row ms-1">
                            <motion.svg className="col-auto p-0 m-auto" ref={titleRRef} height="110" width="66" xmlns="http://www.w3.org/2000/svg"
                                variants={topSvgVariants}
                                initial="initial"
                                animate="final"
                            >
                                <motion.path
                                    d="M 5 105 L 5 5 M 15 105 L 15 5 C 75 5 75 30 15 55 L 60 105"
                                    style={{ fill: "none", stroke: "black", strokeLinecap: "round", strokeLinejoin: "round" }}
                                    strokeWidth="8"
                                    variants={topPathVariants}
                                    initial="initial"
                                    animate="final" />

                            </motion.svg>

                            <motion.p className="col font-face-mmd fs-1 ps-0 m-0" id="firstNameContent"
                                variants={screenContentsVariants}
                                initial="initial"
                                animate="final">
                                AVINDU
                            </motion.p>
                        </div>

                        <div className="row ms-1">
                            <motion.svg className="col-auto p-0 m-auto" ref={titleMRef} height="110" width="120" xmlns="http://www.w3.org/2000/svg"
                                variants={bottomSvgVariants}
                                initial="initial"
                                animate="final"
                            >
                                <motion.path
                                    d="M 15 105 L 15 5"
                                    style={{ fill: "none", stroke: "black", strokeLinecap: "round", strokeLinejoin: "round" }}
                                    strokeWidth="8"
                                    variants={bottomLinePathVariants}
                                    initial="initial"
                                    animate="final"
                                />
                                <motion.path
                                    d="M 25 105 L 25 5 L 70 55 L 115 5 L 115 105"
                                    style={{ fill: "none", stroke: "black", strokeLinecap: "round", strokeLinejoin: "round" }}
                                    strokeWidth="8"
                                    variants={bottomLetterPathVariants}
                                    initial="initial"
                                    animate="final"
                                />
                            </motion.svg>

                            <motion.p className="col font-face-mmd fs-1 ps-0 m-0" id="lastNameContent"
                                variants={screenContentsVariants}
                                initial="initial"
                                animate="final">
                                ALSHIKA
                            </motion.p>
                        </div>

                        <motion.div className="row ms-1"
                            variants={screenContentsVariants}
                            initial="initial"
                            animate="final">
                            <p>I am a passionate software developer with a knack for turning complex problems into elegant solutions. Welcome to my portfolio, where you can explore my journey, projects, and the skills I’ve honed along the way.</p>
                        </motion.div>
                    </div>

                    <motion.div className="col-2 d-none d-md-block"
                        variants={screenContentsVariants}
                        initial="initial"
                        animate="final">
                        <p>Gotta put some graphics here</p>
                    </motion.div>
                </div>



                <div className="row align-items-center bg-secondary min-vh-100" id="about">

                    <About
                        description={["I'm a beginner Full Stack Software Engineer passionate about building and managing both the front-end and back-end of websites, web applications and software. Check out some of my work in the Projects section.", "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me."]}
                        skills={["Java", "SpringBoot", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "SASS", "GIT", "Github", "Responsive Design", "Terminal"]}
                    />

                </div>

                <div className="row align-items-center bg-success min-vh-100" id="projects">

                    <h1>Projects</h1>

                    <div className="col">
                        <Project
                            name="Portfolio"
                            description="Welcome to my portfolio! This site showcases my journey and projects as a beginner Full Stack Software Engineer. Built using React, it leverages the power of Bootstrap and Sass for sleek and responsive design. The foundation of the site is constructed with HTML and JavaScript, while animations are brought to life with Framer Motion. Explore my work and see how I bring ideas to life through code!"

                        />

                        <Project
                            name="Game Hub"
                            description="Welcome to GameHub, a dynamic and interactive gaming platform built with Angular. Designed with a focus on responsive design, GameHub ensures a seamless and enjoyable experience across all devices. Our current offering, Tic Tac Toe, comes alive with smooth animations, making every move delightful and engaging."

                        />

                        <Project
                            name="Just Tuner"
                            description="Introducing Just Tuner, the ultimate online radio app built with Kotlin Jetpack Compose. With Just Tuner, you can connect to any radio station around the globe, bringing the world of music, news, and entertainment to your fingertips. Experience a sleek and modern interface designed for effortless navigation and enjoy seamless streaming from your favorite stations worldwide. Tune in, discover new sounds, and stay connected with Just Tuner!"

                        />
                    </div>
                </div>
                <div className="row align-items-center bg-warning min-vh-100" id="contact">
                    <form
                        action="https://formspree.io/f/mnnaqvng"
                        method="POST"
                    >
                        <label>
                            Your email:
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Your message:
                            <textarea name="message"></textarea>
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;