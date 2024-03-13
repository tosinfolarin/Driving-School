/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const ShowMeTellMe = () => {
    const iDropdowns = [
                { isOpen: false, question: "1. Tell me how you’d check that the brakes are working before starting a journey.", answer: "Brakes should not feel spongy or slack. Brakes should be tested as you set off. Vehicle should not pull to one side." },
                { isOpen: false, question: "2. Tell me where you’d find the information for the recommended tyre pressures for this car and how tyre pressures should be checked.?", answer: "Manufacturer’s guide, use a reliable pressure gauge, check and adjust pressures when tyres are cold, don’t forget spare tyre, remember to refit valve caps." },
                { isOpen: false, question: "3. Tell me how you make sure your head restraint is correctly adjusted so it provides the best protection in the event of a crash.", answer: "The head restraint should be adjusted so the rigid part of the head restraint is at least as high as the eye or top of the ears, and as close to the back of the head as is comfortable. Note: Some restraints might not be adjustable." },
                { isOpen: false, question: "4. Tell me how you’d check the tyres to ensure that they have sufficient tread depth and that their general condition is safe to use on the road.", answer: "No cuts and bulges, 1.6mm of tread depth across the central three-quarters of the breadth of the tyre, and around the entire outer circumference of the tyre." },
                { isOpen: false, question: "5. Tell me how you’d check that the headlights and tail lights are working. You don’t need to exit the vehicle.", answer: "Explain you’d operate the switch (turn on ignition if necessary), then walk round vehicle (as this is a ‘tell me’ question, you don’t need to physically check the lights)." },
                { isOpen: false, question: "6. Tell me how you’d know if there was a problem with your anti-lock braking system.", answer: "Warning light should illuminate if there is a fault with the anti-lock braking system." },
                { isOpen: false, question: "7. Tell me how you’d check the direction indicators are working. You don’t need to exit the vehicle.", answer: "Explain you’d operate the switch (turn on ignition if necessary), and then walk round vehicle (as this is a ‘tell me’ question, you don’t need to physically check the lights).                " },
                { isOpen: false, question: "8. Tell me how you’d check the brake lights are working on this car.", answer: "Explain you’d operate the brake pedal, make use of reflections in windows or doors, or ask someone to help." },
                { isOpen: false, question: "9. Tell me how you’d check the power-assisted steering is working before starting a journey.", answer: "If the steering becomes heavy, the system may not be working properly. Before starting a journey, 2 simple checks can be made. Gentle pressure on the steering wheel, maintained while the engine is started, should result in a slight but noticeable movement as the system begins to operate. Alternatively turning the steering wheel just after moving off will give an immediate indication that the power assistance is functioning." },
                { isOpen: false, question: "10. Tell me how you’d switch on the rear fog light(s) and explain when you’d use it/them. You don’t need to exit the vehicle.", answer: "Operate switch (turn on dipped headlights and ignition if necessary). Check warning light is on. Explain use." },
                { isOpen: false, question: "11. Tell me how you switch your headlight from dipped to main beam and explain how you’d know the main beam is on", answer: "Operate switch (with ignition or engine on if necessary), check with main beam warning light." },
                { isOpen: false, question: "12. Open the bonnet and tell me how you’d check that the engine has sufficient oil.", answer: "Identify dipstick/oil level indicator, describe check of oil level against the minimum and maximum markers." },
                { isOpen: false, question: "13. Open the bonnet and tell me how you’d check that the engine has sufficient engine coolant. You don’t need to exit the vehicle.", answer: "dentify high and low level markings on header tank where fitted or radiator filler cap, and describe how to top up to correct level." },
                { isOpen: false, question: "14. Open the bonnet and tell me how you’d check that you have a safe level of hydraulic brake fluid.", answer:"Identify reservoir, check level against high and low markings." },
            ];

            const [dropdowns, setDropdowns] = useState(iDropdowns);

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

        <div className="flex-test">

        <div className="flex-one testVid">
        <iframe width="650" height="365" src="https://www.youtube.com/embed/uh8slnP76-w" title="&#39;Show me, tell me&#39;: tell me questions 2024: official DVSA guide" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <h1> 'Show Me' Questions </h1>
        <p>
            When it’s safe to do so, can you show me how you wash and clean the rear windscreen? <br /><br />
            When it’s safe to do so, can you show me how you wash and clean the front windscreen?<br/> <br />
            When it’s safe to do so, can you show me how you’d switch on your dipped headlights? <br /><br />
            When it’s safe to do so, can you show me how you’d set the rear demister?<br /><br />
            When it’s safe to do so, can you show me how you’d operate the horn?<br /><br />
            When it’s safe to do so, can you show me how you’d demist the front windscreen?<br /><br />
            When it’s safe to do so, can you show me how you’d open and close the side window?
        </p>
        </div>
        

        <div className="flex-child testText">
            
                <div>
                    <h1> 'Tell Me' Questions</h1>
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
                    </div>
                    
                    </div>
                    
                    </div>
                );


}
 
export default ShowMeTellMe;