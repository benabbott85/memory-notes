import React from "react";
import emailjs from "emailjs-com";



export default function Contact () {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_2cdfh1k', 'template_kl4edzx', e.target, 'user_a22uGxDKlju4sAPyBBnir')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return(

        
        <div>

            <h1 className="forgotpass">Contact Us</h1>
            < div className="containter">
                <form className="forgot"onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        {/* <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Email Address" name="email"/>
                        </div> */}
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="forgotmessage" cols="30" rows ="8" placeholder="Your Message" name="message"/>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Email"></input>
                        </div>
                    </div>
                </form>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
       
    )
}
