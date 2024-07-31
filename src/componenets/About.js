const About = ({ description, skills }) => {
    return (
        <div className="">
            <div className="row" style={{ height: 56 }}></div>
            <h1 className="d-block row font-face-content-semibold mt-1 mb-0">ABOUT ME</h1>
            <div className="row justify-content-center">
                <hr className="title-decoration" />
            </div>

            <div className="row d-none md-block" style={{ height: 40 }}></div>

            <div className="row bg-secondary border border-primary border-2 rounded-5 mt-md-3 p-5 mx-3 mx-md-0">
                <div className="row p-0 m-0">
                    <div className="d-none d-md-block col-6">
                        <h2 className="font-face-content-semibold mb-3">Get to know me!</h2>
                    </div>
                    <div className="d-none d-md-block col-6">
                        <h2 className="font-face-content-semibold mb-3">My Skills</h2>
                    </div>
                </div>
                
                <div className="col-12 col-md-6 font-face-content-regular fs-5">
                    <h2 className="d-block d-md-none font-face-content-semibold mb-3">Get to know me!</h2>
                    <p>
                        {description[0]}
                    </p>
                    <p>
                        {description[1]}
                    </p>
                </div>

                <div className="col-12 col-md-6 font-face-content-semibold">
                    <h2 className="d-block d-md-none mb-3">My Skills</h2>

                    <div className="d-flex flex-wrap justify-content-start">
                        {skills.map((skill, index) => (
                            <span className="d-block bg-tertiary fs-6 border border-primary rounded-4 px-3 py-3 mb-3 me-1 me-lg-2">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;