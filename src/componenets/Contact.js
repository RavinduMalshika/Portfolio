const Contact = () => {
    return (
        <div className="col">
            <div className="row" style={{ height: 56 }}></div>
            <h1 className="d-block row font-face-content-semibold mt-1">CONTACT</h1>
            <div className="row justify-content-center">
                <hr className="border border-primary border-3" style={{ width: 10 }} />
            </div>
            <form
                className="col-5 m-auto"
                action="https://formspree.io/f/mnnaqvng"
                method="POST"
            >
                <label className="row mb-3">
                    Your name:
                    <input className="form-control border border-primary" name="name" placeholder="Enter Your Name"/>
                </label>
                <label className="row mb-3">
                    Your email:
                    <input className="form-control border border-primary" type="email" name="email" placeholder="Enter Your Email"/>
                </label>
                <label className="row mb-3">
                    Your message:
                    <textarea className="form-control border border-primary" name="message" placeholder="Enter Your Message" rows="6" style={{ resize: "none" }}></textarea>
                </label>
                
                <button className="btn btn-primary" type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;