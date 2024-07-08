const Project = ({name, description}) => {
    return(
        <div className="row bg-white rounded m-2 p-3">
            <h2>{name}</h2>

            <p>{description}</p>
        </div>
    );
}

export default Project;