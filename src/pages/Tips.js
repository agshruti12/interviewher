import React from 'react';

const Tips = () => {
    const interviewTipStyle = {
        backgroundColor: 'indigo',
        color: 'plum',
        padding: '10px',
        marginBottom: '20px',
      };
    return (
        <div style={interviewTipStyle}>
            <center>
                <header>
                    <h1>InterviewHer's Interview Tips</h1><br />
                </header>
                <h4>InterviewHer is a pioneering organization committed to championing women in STEM (Science, Technology, Engineering, and Mathematics) fields by fostering an inclusive environment where they can thrive. Our mission is to provide women with valuable opportunities for growth, development, and support as they navigate their careers in traditionally male-dominated industries. At InterviewHer, we believe in the power of peer feedback and mentorship to empower women, enabling them to excel in their chosen fields and become leaders in the tech world.</h4>
        
                </center>
                <div className="interview-tips" style={interviewTipStyle}>
        <h2>10 Interview Tips for Success</h2><br />
        <div className="interview-tip" style={interviewTipStyle}>
          <h3>  1. Research the Company</h3>
          <p></p>
          <p>
               Before your interview, conduct thorough research on the company, its culture, values, and recent achievements. Understanding the organization's background demonstrates your genuine interest and commitment.
          </p>
          <p></p>
        </div>
        <div className="interview-tip" style={interviewTipStyle}>
          <h3>  2. Practice Common Questions</h3>
          <p>
               Practice answering common interview questions such as "Tell me about yourself" and "What are your strengths and weaknesses?" Practicing beforehand will help you articulate your responses confidently during the interview.
          </p>
        </div>
        <div className="interview-tip" style={interviewTipStyle}>
          <h3>  3. Dress Appropriately</h3>
          <p>
               Make a positive first impression by dressing professionally and appropriately for the interview. Choose attire that reflects the company's culture while still maintaining a polished appearance.
          </p>
        </div>
        <div className="interview-tip" style={interviewTipStyle}>
          <h3>  4. Arrive Early</h3>
          <p>
               Plan to arrive at least 15-20 minutes early for your interview. Arriving early shows punctuality and allows you time to compose yourself before the interview begins.
          </p>
        </div>
        <div className="interview-tip" style={interviewTipStyle}>
          <h3>  5. Bring Copies of Your Resume</h3>
          <p>
               Always bring multiple copies of your resume to the interview, even if you've already submitted one online. Offering a copy to the interviewer demonstrates preparedness and professionalism.
          </p>
        </div>
        <div className="interview-tip" style={interviewTipStyle}>
          <h3>  6. Prepare Questions</h3>
          <p>
               Prepare thoughtful questions to ask the interviewer about the company, role, and team. Asking questions shows your genuine interest in the position and allows you to gather valuable information.
          </p>
        </div>
        <div className="interview-tip" style={interviewTipStyle}>
          <h3>  7. Highlight Your Achievements</h3>
          <p>
               During the interview, emphasize your relevant achievements and experiences that align with the job requirements. Use specific examples to illustrate your skills and capabilities.
          </p>
        </div>
        <div className="interview-tip" style={interviewTipStyle}>
          <h3>  8. Practice Active Listening</h3>
          <p>
               Listen carefully to the interviewer's questions and respond thoughtfully. Avoid interrupting and ensure your answers address the question effectively.
          </p>
        </div>
        <div className="interview-tip" style={interviewTipStyle}>
          <h3>  9. Show Enthusiasm</h3>
          <p>
               Express enthusiasm and passion for the opportunity during the interview. Demonstrating genuine excitement about the role can leave a lasting impression on the interviewer.
          </p>
        </div>
        <div className="interview-tip" style={interviewTipStyle}>
          <h3>  10. Follow Up</h3>
          <p>
               Send a personalized thank-you email to the interviewer within 24 hours of the interview. Express gratitude for the opportunity and reiterate your interest in the position.
          </p>
        </div>
      </div>
    </div>
    );
}

export default Tips;