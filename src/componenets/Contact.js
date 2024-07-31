const Contact = () => {
    return (
        <div className="col">
            <div className="row" style={{ height: 56 }}></div>
            <h1 className="d-block row font-face-content-semibold mt-1 mb-0">CONTACT</h1>
            <div className="row justify-content-center">
                <hr className="title-decoration" />
            </div>
            <form
                className="col-10 col-md-8 col-lg-6 m-auto font-face-content-regular fs-6"
                action="https://formspree.io/f/mnnaqvng"
                method="POST"
            >
                <label className="row mb-3">
                    Your name:
                    <input className="form-control border border-primary" name="name" placeholder="Enter Your Name" />
                </label>
                <label className="row mb-3">
                    Your email:
                    <input className="form-control border border-primary" type="email" name="email" placeholder="Enter Your Email" />
                </label>
                <label className="row mb-3">
                    Your message:
                    <textarea className="form-control border border-primary" name="message" placeholder="Enter Your Message" rows="6" style={{ resize: "none" }}></textarea>
                </label>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary" type="submit">Send</button>
                </div>

            </form>
        </div>
    );
}

export default Contact;