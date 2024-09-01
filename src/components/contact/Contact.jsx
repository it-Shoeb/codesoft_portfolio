import "./contact.css";

export default function Contact() {
    return(
        <>
        <div className="contact">
            <div className="contact-container">
                <div className="contact-lhs">
                    <img src="https://picsum.photos/150/150" alt="" />
                </div>
                <div className="contact-rhs">
                    <h1 className="contact-heading">Reach Out to Me!</h1>
                    <p>Discuss a project or just want to say Assalam walikum in my inbox is open for all</p>
                    <h3 className="profile">Reactjs Front End Developer | Backend Learner | Graphic Designer | Good Listener</h3>
                    <p>Aurangabad, MS, IN</p>
                    <div className="social-container">
                        <i class="ri-github-fill"></i>
                        <i class="ri-linkedin-box-fill"></i>
                        <i class="ri-instagram-fill"></i>
                        <i class="ri-facebook-circle-fill"></i>
                        <i class="ri-whatsapp-fill"></i>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}