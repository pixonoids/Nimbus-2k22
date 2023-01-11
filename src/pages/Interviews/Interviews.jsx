import { InterviewCard } from '../../components/molecules/InterviewCard/InterviewCard';
import { teamnameleftblock } from './interviewData';
import { teamnamerightblock } from './interviewData';
import './Interviews.scss';

const Interviews = () => {
  return (
    <div className="interviews">
      <div className="interview-heading">
        {/* <img src="./images/nimbus-white.png" alt="" /> */}
        <h1>Freshmen Interviews</h1>
      </div>
      <div className="interview-container">
        <div className="left-block">
          {teamnameleftblock.map((item, index) => (
            <InterviewCard
              key={index}
              interviewName={item.interviewName}
              href={item.href}
            />
          ))}
        </div>
        <div className="pixo-logo-interview">
          <img src="./images/nimbus-white.png" width="175px" alt="" />
        </div>
        <div className="right-block">
          {teamnamerightblock.map((item, index) => (
            <InterviewCard
              key={index}
              interviewName={item.interviewName}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interviews;
