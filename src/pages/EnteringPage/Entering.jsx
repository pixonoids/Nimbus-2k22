import './Entering.scss';
import useHideNavigation from '../../hooks/utils/useHideNavigation';
const Entering = (props) => {
  useHideNavigation();
  return (
    <div className="Entering">
      <div className="heading">Nimbus 2k22</div>
      <div className="text-loop">
        <div className="content__container">
          <ul className="content__container__list">
            <li className="content__container__list__item">स्वागत ।</li>
            <li className="content__container__list__item">Welcome.</li>
            <li className="content__container__list__item">خوش آمدید</li>
            <li className="content__container__list__item">வரவேற்பு</li>
            <li className="content__container__list__item">bienvenue</li>
            <li className="content__container__list__item">ようこそ</li>
            <li className="content__container__list__item">સ્વાગત છે</li>
            <li className="content__container__list__item">স্বাগত</li>
            <li className="content__container__list__item">സ്വാഗതം</li>
          </ul>
        </div>
      </div>

      <div
        className="enter-button"
        onClick={() => {
          props.setEnteringState(false);
        }}
      >
        Enter
      </div>
      <div className="footer">Ⓒ Copyright: Nimbus 2k22</div>
    </div>
  );
};
export default Entering;
