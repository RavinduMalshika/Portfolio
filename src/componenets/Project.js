import { useEffect, useState } from "react";

const Project = ({ name, description, tools, websiteLink, githubLink, desktopDark, desktopLight, mobileDark, mobileLight }) => {
    const [attributeValue, setAttributeValue] = useState(document.documentElement.getAttribute('data-bs-theme'));
    const [seeMore, setSeeMore] = useState(false);

    const toggleSeeMore = () => {
        setSeeMore(!seeMore);
    };

    const openExternalLink = (url) => {
        window.open(url, '_blank');
    }

    useEffect(() => {
        const handleAttributeChange = () => {
            setAttributeValue(document.documentElement.getAttribute('data-bs-theme'));
        };

        // Listen for changes
        const observer = new MutationObserver(handleAttributeChange);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });

        // Cleanup observer on unmount
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="row bg-secondary border border-primary border-2 rounded-5 mx-4 mb-5 p-3">
            <h2 className="col-12 font-face-content-medium">{name}</h2>

            <div className="row align-items-center m-0">
                <div className="col-md-6 col-12 p-3">
                    <div className="row">
                        <div className="col-9">
                            <img className="img-fluid" src={attributeValue === "light" ? desktopLight : desktopDark} alt="Desktop scale image" />
                        </div>
                        <div className="col-3">
                            <img className="img-fluid" src={attributeValue === "light" ? mobileLight : mobileDark} alt="Mobile scale image" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 px-2">
                    <p className="font-face-content-regular fs-5">{description}</p>
                    <button className="btn btn-primary rounded-5" id="seeMoreBtn" onClick={toggleSeeMore}>See More {seeMore ? <i class="bi bi-arrow-up-circle-fill" /> : <i class="bi bi-arrow-down-circle-fill" />}</button>
                </div>
            </div>

            {seeMore && (
                <div className="row m-0 p-0 mt-3">
                    <h2>Tools Used</h2>

                    <div className="row m-0 p-0 mt-1">
                        <div className="d-flex flex-wrap col-12 col-md-6 justify-content-start">
                            {tools.map((tool, index) => (
                                <div key={index} className="bg-tertiary border border-primary bg-white rounded-5 p-2 mx-1 mt-1 mb-auto">
                                    <img src={tool[1]} alt="${tool[0]} logo" width={window.innerWidth <= 768 ? 24 : 40} />
                                    <b className=" m-1 ms-2">{tool[0]}</b>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex flex-column justify-content-end col-12 col-md-6 mt-3 mt-md-0">
                            {websiteLink !== "" ?
                                <button className="btn btn-primary mx-auto me-md-0 mb-2" onClick={() => openExternalLink(websiteLink)}>Visit<i class="bi bi-box-arrow-up-right ms-1"></i></button> :
                                <button className="btn btn-primary mx-auto me-md-0 mb-2 disabled">Development in Progress</button>
                            }
                            {githubLink !== "" &&
                                <button className="btn btn-primary mx-auto me-md-0" onClick={() => openExternalLink(githubLink)}>Github Repository <i class="bi bi-github ms-1"></i></button>
                            }
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}

export default Project;