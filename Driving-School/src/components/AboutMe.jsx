import instructorPic from "@/images/instructorPic.png"


const AboutMe = () => {
    return ( 
    
      <div className="aboutme-page">
      <div className="pic-box">
          <img src={instructorPic}  alt="instructor's picture" className="instructor-image" />
          {/* "src/images/instructorPic.png" */}
      </div>
      <div className="flex-c aboutme" role="region" aria-label="About Me">


          Hi, My name is Olu, I have been a driving instructor for over 20 years.
          I have a wealth of experience in teaching students of all ages with varying levels of competency as their starting point.
          I pride myself on my professional nature and non-judgemental approach.
        <br></br>
        <br></br>
          I understand that as a learner, it is very rare for you to have perfect knowledge of driving. With Trinity, no question is a silly question
          and I would like for students to see this as a safe learning environment.
        <br></br>
        <br></br>
          I am open to helping anyone who wants to learn. There is no discrimination with Trinity. Whether you are just turning 17 and have received your provisional licence, coming back from a driving ban or whether you need to 
          renew your licence after the age of 70 and want to get further practice.
        <br></br>
        <br></br>
          Along with teaching you how to drive practically, I am also happy to help with tuition regarding the theory exam. Please feel free to give <a href="/test-questions">our mock theory exam</a> a try.
        <br></br>
        <br></br>
          I look forward to you joining Trinity on your journey to becoming an excellent driver.
    </div>
    
  </div> 
   );
}
 
    

export default AboutMe;

