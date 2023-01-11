import './InterviewCard.scss';

export const InterviewCard = (props) => {
  return (
    <a
      href={props.href}
      target={'_blank'}
      rel="noreferrer"
      className="interviewCard"
    >
      {props.interviewName}
    </a>
  );
};
