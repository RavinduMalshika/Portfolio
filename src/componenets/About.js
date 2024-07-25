const About = ({ description, skills }) => {
    return (
        <div className="col-auto">
            <div className="row" style={{ height: 56 }}></div>
            <h1 className="d-block row font-face-content-semibold mt-1">ABOUT ME</h1>
            <div className="row justify-content-center">
                <hr className="border border-primary border-3" style={{ width: 10 }} />
            </div>

            <div className="row d-none md-block" style={{ height: 40 }}></div>

            <div className="row">
                <div className="description row col-md-6 p-5 pb-1 pb-md-5 font-face-content-regular">
                <h2 className="font-face-content-semibold mb-3">Get to know me!</h2>
                    <p>
                        {description[0]}
                    </p>
                    <p>
                        {description[1]}
                    </p>
                </div>

                <div className="skills row col-md-6 p-5 pt-1 pt-md-5">
                    <h2 className="font-face-content-semibold mb-3">My Skills</h2>

                    <div className="d-flex flex-wrap justify-content-start">
                        {skills.map((skill, index) => (
                            <span className="d-block font-face-content-semibold bg-primary rounded px-3 py-3 mb-3 me-1 me-lg-2">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;