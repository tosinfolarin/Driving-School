// import Navbar from "./Navbar";
// import Home from "./Home";
// import BookNow from "./BookNow";
import {useState} from "react";

const FAQs = () => {

    const initialDropdowns = [
        { isOpen: false, question: "How many lessons would it take for me to be ready to take a driving test?", answer: "According to the Driving Standards Agency (DSA), the average time would be 45 hours of professional lessons, supplemented with around 20 hours of private practice." },
        { isOpen: false, question: "How do I know I can trust Trinity Driving School?", answer: "To find a good instructor, it is important to look for driving instructors who are registered with the DVSA and display a green badge in their vehicle. At Trinity we pride ourselves in ensuring instructors are DVSA registered and regularly undergo training." },
        { isOpen: false, question: "How do I apply for my provisional driving license?", answer: "You can apply for a provisional driving license online via the official government website or by completing a D1 application form, which is available from the Post Office. Follow this link to proceed with the process: https://www.gov.uk/apply-first-provisional-driving-licence" },
        { isOpen: false, question: "Can I drive without L-Plates?", answer: "As a learner driver in the UK you are required to display L-Plates on the front and back of the vehicle. As well as it being a legal requirement, it is also a safety measure to alert other drivers of your provisional status." },
        { isOpen: false, question: "What are common mistakes made during driving tests?", answer: "Common mistakes include: Not checking your blind spots, changing lanes without indicating, improper and infrequent mirror use. and not following the traffic signs correctly. Although you can be failed for the obvious of driving too fast, you can also be failed for driving too slow." },
        { isOpen: false, question: "How do I improve my driving confidence?", answer: "At Trinity, we pride ourselves in helping learners develop significantly in confidence. We usually follow a certain teaching structure increasing complexity of lessons as you become more confident, ensuring you are ready for the test day once it comes." },

    ];

    const [dropdowns, setDropdowns] = useState(initialDropdowns);

    const toggleDropdown = (index) => {
        const updatedDropdowns = dropdowns.map((dropdown, i) => {
            if (i === index) {
                return { ...dropdown, isOpen: !dropdown.isOpen };
            }
            return dropdown;
        });
        setDropdowns(updatedDropdowns);
    };

    return (
        <div>
            <h1 className="FAQs">Frequently Asked Questions</h1>
            {dropdowns.map((dropdown, index) => (
                <li className="dropdown-item" key={index}>
                    <button className="dropbtn" onClick={() => toggleDropdown(index)}>
                        <h3>{dropdown.question}</h3>
                        <div className="downarrow">
                            <img src="src/images/downarrow.svg" alt="Arrow" />
                        </div>
                    </button>
                        
                    <div className={`dropdown-content ${dropdown.isOpen ? 'show' : ''}`}>
                        <p>
                            {dropdown.answer}
                        </p>
                    </div>
                </li>
            ))}
        </div>
    );
}


export default FAQs;