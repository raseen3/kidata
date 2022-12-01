function Contact() {
    return (
    <div className="Contact">
        <div className="page-card">
            <p>
                <h1 className="title">Contact Us</h1>
                <p><strong>Thank you for taking time to contact us! Please provide the following information:</strong></p>
                <br></br>
                <br></br>
            </p>
        </div>
        <div className="contact-card">
            <form action='http://localhost:8080/post/feedback' method='Post' className = 'send'>
                <section id='info'>
                    <label for='name'><strong>Name</strong></label>
                    <br></br>
                    <br></br>
                    <br></br>
                    <input type='text' name='name' id='name' ></input>
                    <br></br>
                    <br></br>
                    <label for='email'><strong>Email</strong></label>
                    <br></br>
                    <br></br>
                    <input type='text' id='email' name='email' ></input>
                    <br></br>
                    <br></br>
                    <label for='questiontype'><strong>Question Type</strong></label>
                    <br></br>
                    <br></br>
                    <select id='questiontype' name='questiontype'>
                        <option value='content'>Content</option>
                        <option value='advise'>Advice</option>
                        <option value='bugreport'>Bug</option>
                    </select>
                    <br></br>
                    <br></br>

                    <label for='question'><strong>Question</strong></label>
                    <br></br>
                    <br></br>
                    <textarea id='question' name='question' rows='10' cols='50'>
                        Please write the feedback here...
                    </textarea>
                
                    <br></br>
                    <input type='submit' value='Send'></input>
                    <br></br>
                    <br></br>

                </section>
            </form>
        </div>
    </div>

    )
  }
  
  export default Contact;