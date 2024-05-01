import Road from "@images/Road.jpg"

const Steps = () => {
    return ( 
        
    <div className ="Steps-container">
        <h1>
        1.	Apply for Provisional License: Before learning, it is important to have a provisional licence. This can be obtained through <a href ="https://www.gov.uk/apply-first-provisional-driving-licence" target="_blank">The Official Government Website.  </a>
        </h1>

        <img src={Road} alt="Road-image" className="road-image" />
        {/* 'src/images/Road.jpg' */}

        <h1>
        2.	Book A Theory Test: You can book a theory test online through <a href="https://www.gov.uk/book-theory-test" target="_blank"> The Official DVSA Website. </a> 
        </h1>

        <img src={Road} alt="Road-image" className="road-image" />
        {/* 'src/images/Road.jpg' */}

        <h1>
        3.	Study: Be sure to study the highway code by <a href="https://assets.publishing.service.gov.uk/media/58170307ed915d61c5000000/the-highway-code-traffic-signs.pdf" target="_blank"> clicking here</a> and use our resources to practice by <a href="/test-questions">clicking here</a>. 
        </h1>

        <img src={Road} alt="Road-image" className="road-image" />
        {/* 'src/images/Road.jpg' */}

        <h1>
        4.	Book Driving Lessons:  <a href="book-now"> Book With Trinity Now </a> to prepare for your practical driving exam.
        </h1>

        <img src={Road} alt="Road-image" className="road-image" />
        {/* 'src/images/Road.jpg' */}

        <h1>
        5.	Showcase your newly learnt skill: <a href=" https://www.gov.uk/book-driving-test" target="_blank"> Book A Driving Test </a>
        </h1>
        

    </div>);
}

 
export default Steps;