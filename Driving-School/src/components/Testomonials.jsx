import PassingPic2 from "@/images/PassingPic2.png"
import PassingPic from "@/images/PassingPic.png"
import ipassed from "@/images/ipassed.jpeg"
import PassingPic3 from "@/images/PassingPic3.png"
import PassingPic4  from "@/images/PassingPic4.png"
import you from "@/images/you.jpeg"


const Testimonials = () => {
    return ( 
        <div className= "all-testimonials">
        <div className ="testimonials" role="list">
            <div className="testimonial-item" role="listitem" aria-labelledby="testimonial1">
                <div className="student-img-container">
                    <img src={PassingPic2} alt='student picture' className="student-img"/>
                    {/* src/images/PassingPic2.png */}
                    
                </div>
                <div className="testimonial-text-container">
                    <p className="testimonial-text" id="testimonial1"> I have tried a few other local driving schools but Trinity is by far the best. I am pleased to say I was able to pass first time.</p>
                </div>
            </div>

            <div className="testimonial-item" role="listitem" aria-labelledby="testimonial2">
                <div className="student-img-container">
                <img src={PassingPic} alt='student picture' className="student-img"/>
                {/* 'src/images/PassingPic.png' */}
                </div>
                <div className="testimonial-text-container">
                    <p className="testimonial-text"> Trinity provided a safe space for me to drive and feel comfortable to ask any question related to driving. I am very grateful for the support.</p>
                </div>
            </div>

            <div className="testimonial-item" role="listitem" aria-labelledby="testimonial3">
                <div className="student-img-container">
                <img src={ipassed} alt='student picture' className="student-img"/>
                {/* 'src/images/ipassed.jpeg'  */}
                </div>
                <div className="testimonial-text-container">
                    <p className="testimonial-text"> I am very pleased with the way my driving lessons have gone. I was able to score very highly in my theory exam and passed the practical without any faults. </p>
                </div>
            </div>
        </div>
        
        <div className ="testimonials">
            <div className="testimonial-item">
                <div className="student-img-container">
                <img src={PassingPic3} alt='student picture' className="student-img"/>
                {/* 'src/images/PassingPic3.png' */}
                </div>
                <div className="testimonial-text-container">
                    <p className="testimonial-text"> Not only did Trinity help me with my practical exam, there was a lot of support when it came preparing for my theory exam as well.</p>
                </div>
            </div>

            <div className="testimonial-item">
                <div className="student-img-container">
                <img src={PassingPic4} alt='student picture' className="student-img"/>
                {/* 'src/images/PassingPic4.png' */}
                </div>
                <div className="testimonial-text-container">
                    <p className="testimonial-text"> I had failed a few times with other driving schools but once I switched to Trinity, I understood the difference in quality and I was able to pass with my first attempt.</p>
                </div>
            </div>

            <div className="testimonial-item">
                <div className="student-img-container">
                    <img src={you} alt='student picture' className="student-img" />
                    {/* 'src/images/you.jpeg' */}

                </div>
                <div className="testimonial-text-container">
                    <p className="testimonial-text"> BE THE NEXT SUCCESS STORY! </p>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Testimonials;