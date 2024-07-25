const Project = ({ name, description }) => {
    return (
        <div className="row bg-white border border-primary border-2 rounded-5 mx-4 mb-5 p-3">
            <h2 className="row font-face-content-medium">{name}</h2>
            
            <div className="row">
                <p className="col-md row">Insert Graphic</p>
                <p className="col-md row font-face-content-regular">{description}</p>
            </div>
        </div>
    );
}

export default Project;