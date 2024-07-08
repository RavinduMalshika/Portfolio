const About = ({ description, skills }) => {
    return (
        <div>
            <div className="row" style={{height: 40}}></div>
            <h1 className="row text-center">About me</h1>

            <div className="row">
                <div className="description col-6">
                    <p>
                        {description[0]}
                    </p>
                    <p>
                        {description[1]}
                    </p>
                </div>

                <div className="skills col-6">
                    <h2>My Skills</h2>

                    <div className="d-flex flex-wrap">
                        {skills.map((skill, index) => (
                            <p className="d-inline bg-primary rounded p-1 m-2">{skill}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;