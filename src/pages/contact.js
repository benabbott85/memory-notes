import React from "react"


function Contact(){
    return(
        <>
        <h1>Contact Us</h1>
        <div>
            <form>
            <p>Name: <input type="text" placeholder="Your Name Here"/></p>
            <p>Email: <input type="text" placeholder="Your Email Here"/></p>
            <button type="submit">Send</button>

            </form>
        </div>
        </>
    )


}

export default Contact