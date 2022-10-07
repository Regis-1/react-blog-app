import { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    const handleFeedback = (e) => {
        e.preventDefault();

        const feedback = {email, message};

        if( email && message ) {
            console.log('Sending feedback...');
            console.log(feedback);
        } else {
            
        }

    }

    return (
        <div className="Contact">
            <div className="AboutMe">
                <h2>About us</h2>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <p>Est odio quod sed praesentium ipsa sit incidunt ipsa et voluptatem magnam rem recusandae nesciunt sit sunt omnis vel corporis repudiandae. Et fugit galisum et galisum numquam eos error delectus et sunt voluptatem. Aut nemo quam id ratione necessitatibus sit suscipit asperiores hic quod laboriosam eum enim magnam est cupiditate exercitationem ad dolorem galisum.</p>
            </div>
            <div className="SendInfo">
                <form onSubmit={(e) => handleFeedback(e)}>
                    <div className="FeedbackForm">
                        <div>
                            <h2>Send us Your feedback! 😁</h2>
                            <label htmlFor="senderEmail">Your e-mail:</label>
                        </div>
                        <input required type={"email"} id="senderEmail" onChange={(e) => setEmail(e.target.value)} />
                        <div>
                            <label htmlFor="senderMsg">Message:</label>
                        </div>
                        <textarea required id="senderMsg" onChange={(e) => setMessage(e.target.value)}></textarea>
                        <input type={"submit"} id="submitFeedback" value={"Send feedback!"} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;