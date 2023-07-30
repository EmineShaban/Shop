import "./Contact.css"
function Contact() {



    return (
        <div>
            <img src="https://oldsite.ogicom.bg/wp-content/uploads/2021/04/contact-banner1.jpg"></img>
            <div className="contacts">
                <h3>Phone: <span>+359877673663 </span></h3>
                <h3>Email: <span>emineshaban@icloud.com </span></h3>
                <h3>Adress: <span>Bulgaria, Sofia, st.Priroda 12</span></h3>

            </div>
            <div className="social">
                <h3>Social media</h3>
                <a href=""><img className="soc" src="https://img.freepik.com/free-icon/instagram_318-566796.jpg"></img></a>
                <a href=""><img className="soc" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"></img></a>

            </div>
        </div>

    )
}


export default Contact;



