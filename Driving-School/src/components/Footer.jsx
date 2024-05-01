import WhatsappLogo from "@/images/WhatsappLogo.jpeg"
import emaillogo from "@/images/emaillogo.webp"
import Instagramlogo from "@/images/Instagramlogo.webp"


const Footer = () => {
    return ( 
        <div className="Footer">
            <h1>
                <img src={WhatsappLogo} alt="Whatsapp Logo" className="WhatsappLogo" aria-hidden="true" /> 
                {/* "src/images/WhatsappLogo.jpeg" */}
                <span aria-label="Whatsapp">Whatsapp:</span> 07719768425 &nbsp; &nbsp;
                <img src={emaillogo} alt="Email Logo" className="EmailLogo" aria-hidden="true" />
                {/* "src/images/emaillogo.webp" */}
                <span aria-label="Email">Email:</span> osinfolt@roehampton.ac.uk  &nbsp; &nbsp;
                <img src={Instagramlogo.webp} alt="Instagram Logo" className="InstagramLogo" aria-hidden="true" />
                {/* "src/images/Instagramlogo.webp" */}
                <span aria-label="Instagram">Instagram:</span> @TrinityDrivingSchool &nbsp; &nbsp;
            </h1>
        </div>
    );
}
 
export default Footer;
