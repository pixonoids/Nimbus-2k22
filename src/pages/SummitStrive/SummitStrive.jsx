import { useEffect } from 'react';
import CountdownTimer from '../../components/organisms/CountdownTimer/CountdownTimer';
import { CalenderCard } from '../../components/molecules/';
import { HSponsorCard } from '../../components/molecules/HackathonSponsorCard/HSponsorCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Faq from 'react-faq-component';
import { FAQ } from './summitdata';
import { usePostDiscord } from '../../hooks/api/discord';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { FormField } from '../../components';
import useHideNavigation from '../../hooks/utils/useHideNavigation';
import './SummitStrive.scss';
const SummitStrive = () => {
  const discordMutation = usePostDiscord();
  useEffect(() => {
    AOS.init();
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleSubmit = (values) => {
    const { name, email, message } = values;
    discordMutation.mutate(
      { channel: 'hackathon', name, email, message },
      {
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };
  return (
    <div
      className="Summitstrive"
      style={{
        backgroundImage: `linear-gradient(to right top, #b27ec1, #a384cf, #8e8cdb, #7493e4, #509aea)`,
      }}
    >
      <div className="SummitStriveFirstPage">
        <div className="SummitStriveHome">
          <div className="SummitStriveHeading">Summit Strive</div>
          <div className="SummitStriveMotto">Avenue of Possibilites</div>
          <div>
            <div
              className="apply-button"
              data-hackathon-slug="summit-strive-avenue-of-possibilities"
              data-button-theme="light"
            ></div>
          </div>
        </div>
      </div>
      <CountdownTimer countdownTimestampMs={1649269799000} />
      <div className="AboutUsSummitStrive">
        <h3>About Us</h3>
        <div className="AboutSummitStriveContent">
          <p>
            Create, work, inspire! These three ideals rooted in young
            imaginative brains are the seeds for the fruit of a better tomorrow.
            Startups have become the new norm and entrepreneurship is the new
            incentive. The first determinant steps for success are the idea and
            understanding of the importance of innovation. And so as to promote
            and live by this virtue we bring you all to an event that will help
            you outshine your potential. NIMBUS 2k22 intends to organize a
            contest for students all throughout the country, with the potential
            to earn fantastic cash prizes. Nearly 40% of start-ups in India have
            faced temporary closure due to the pandemic. The most important
            reason for the failure of Indian start-ups is the lack of innovation
            coupled with the lack of a wider support ecosystem. So, despite the
            distress, the pandemic has provided a once-in-a-lifetime and a
            forced opportunity to start-ups. The start-up event will polish your
            skills and creative thinking.
          </p>
        </div>
      </div>
      <div className="TimelineSummitStrive" data-aos="fade-up">
        <h1>Timeline</h1>
        <div className="parent">
          <CalenderCard
            className="left"
            number="1"
            date="15 March 2022 - 6 April 2022"
            heading="Registration starts for Summit Strive"
            desc="The wait is finally over! All undergraduates and postgraduates from any domain and year are welcome to register."
          />
          <CalenderCard
            className="right"
            number="1"
            date="7 April 2022 - 11 April 2022"
            heading="Summit Strive"
            desc="The registration process ends and video submissions begins. Gather all your creativity and get ready as Summit Strive is about to begin."
          />
          <CalenderCard
            className="left"
            number="1"
            date="15 April 2022 - 16 April 2022"
            heading="Live Final Pitching"
            desc="Live final pitching with presentations will begin."
          />
          <CalenderCard
            className="right"
            number="1"
            date="20 April 2022"
            heading="Result Declarations"
            desc="Final results will be declared."
          />
        </div>
      </div>
      <div className="SponsorDivSummitStrive" data-aos="fade-up">
        <h1 className="SponsorDivSummitStriveHeading">Sponsors</h1>
        <HSponsorCard
          className="SponsorSummitStrive"
          classHeading="colorSponsor2 sponsorTitle"
          image1="./images/Devfolio_Logo-White@2x.png"
          image2="./images/Polygon_Logo-White@2x.png"
          image3="./images/Celo Logo Monochrome Reverse@2x.png"
          image4="./images/Filecoin White.png"
          image5="./images/Tezos_Logo-White.png"
          anchor1="https://devfolio.co/"
          anchor2="https://polygon.technology/"
          anchor3="https://celo.org/"
          anchor4="https://filecoin.io/"
          anchor5="https://tezos.com/ "
          gold="Gold Sponsors"
          silver="Silver Sponsors"
        />
      </div>
      <div className="rules">
        <h1>Rules</h1>
        <p>
          You must be acquainted with the rules and regulations of Summit Strive
          2k22 in order to participate in the event. <br />
          <a
            href="https://api.festnimbus.com/uploads/rules-summitstrive.pdf"
            target={'_blank'}
            rel="noreferrer"
          >
            Rules and Regulations
          </a>
        </p>
      </div>
      <div className="faqs" data-aos="fade-up">
        <h1>FAQ</h1>
        <div className="faq-container">
          <div className="faq-style-wrapper">
            <Faq data={FAQ} styles={styles} />
          </div>
        </div>
      </div>
      <div className="FooterSummitStrive">
        <div className="contactSummitStrive">
          <h1>Contact Us</h1>
          <div className="contact-box">
            <Formik
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
              validationSchema={contactUsSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, values, touched, handleChange }) => (
                <Form>
                  <label htmlFor="">Name</label>
                  <FormField name="name" placeholder="Your Name" />
                  <label htmlFor="">E-mail</label>
                  <FormField name="email" placeholder="example@gmail.com" />
                  <label htmlFor="">Message</label>
                  <FormField
                    component="textarea"
                    name="message"
                    placeholder="Your message"
                  />
                  {!discordMutation.isSuccess && (
                    <button type="submit">Submit</button>
                  )}
                  <div className="msg-feedback">
                    {discordMutation.isError && 'Something went wrong!'}
                    {discordMutation.isSuccess && 'Your Message is Sent.'}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  bgColor: 'transparent',
  rowTitleColor: '#c9c9c9',
  rowContentColor: 'white',
  arrowColor: 'white',
};
const contactUsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().min(2, 'Too Short!').required('Required'),
});
export default SummitStrive;
