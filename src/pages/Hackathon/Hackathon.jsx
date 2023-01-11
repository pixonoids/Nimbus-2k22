import CountdownTimer from '../../components/organisms/CountdownTimer/CountdownTimer';
import './Hackathon.scss';
import '/src/components/molecules/HackathonSponsorCard/HSponsorCard';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Faq from 'react-faq-component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CalenderCard } from '../../components/molecules/';
import { FAQ } from './data';
import { usePostDiscord } from '../../hooks/api/discord';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { FormField } from '../../components';
import useHideNavigation from '../../hooks/utils/useHideNavigation';
import { HSponsorCard } from '../../components/molecules/HackathonSponsorCard/HSponsorCard';

export default function Hackathon() {
  const discordMutation = usePostDiscord();

  //EFFECTS
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

  // FUNCTIONS
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

  //RENDER
  return (
    <div
      className="Hackathon"
      style={{ backgroundImage: `url(./images/hack-back-2.jpg)` }}
    >
      {/* home page */}
      <div className="HackathonFirstPage">
        {/* <div>
          <img src="./images/hackksks (1).png" alt="" />
        </div> */}
        <div className="HackathonHome">
          <div className="HackathonHeading">OCCULTICA 2K22</div>
          <div className="HackathonMotto">Reinforcing the imaginary</div>
          {/* <div className="HackathonDate">17th-24th February, 2022</div> */}
          <div>
            <div
              className="apply-button"
              data-hackathon-slug="occultica-reinforcing-the-imaginary"
              data-button-theme="light"
            ></div>
          </div>
        </div>
      </div>
      <CountdownTimer countdownTimestampMs={1648837799000} />
      <div className='alert'>
        Occultica 2k22 is live!
        you can still register...
      </div>
      <div className="AboutUsHackathon" data-aos="fade-right">
        <h3>About Us</h3>
        <div className="AboutUsContent">
          <p>
            NIMBUS 2K22 presents you with another riveting journey of hacks and
            ideas, "OCCULTICA: Reinforcing the Imaginary", where you can turn
            your imagination into reality and you won't even realize how quickly
            120 hours fly by. This event is the second-ever hackathon of NIMBUS
            followed by XPLORE’21. In the whirlwind of ideas and challenges,
            joys and faints, pull up your team’s best ideas and harness the zeal
            to transfigure them into innovation. This year, the theme delves
            into the realm of the metaverse, so most of the problem statements
            and projects will revolve around it.
            <br />
            <br />
            This event is open to all students, regardless of their year or
            branch. This is an initiative to give students a platform to solve
            some of the most pressing issues we face in our daily lives,
            instilling a culture of product innovation and a problem-solving
            mindset in the process.
          </p>
        </div>
      </div>
      <div className="TimelineHackathon" data-aos="fade-left">
        <h1>Timeline</h1>
        <div className="parent">
          <CalenderCard
            className="left"
            number="1"
            date="14 February 2022"
            heading="Registration starts for Occultica 2k22"
            desc="The wait is finally over! All students from any domain and year are welcome to register."
          />
          <CalenderCard
            className="right"
            number="1"
            date="1 April 2022"
            heading="Registration ends"
            desc="The registration process ends. Gather all your creativity and get ready as Occultica is about to begin."
          />
          <CalenderCard
            className="left"
            number="1"
            date="2 April 2022 - 6 April 2022"
            heading="Hackathon starts"
            desc="Buckle up with your energy and enthusiasm as a 5-day hackathon begins. Demonstrate your ingenuity by coming up with the best project that prevails!"
          />
          <CalenderCard
            className="right"
            number="1"
            date="9 April 2022 - 10 April 2022"
            heading="Evaluation of projects"
            desc="The project will be evaluated by our honorable judges based on the judging criteria."
          />
        </div>
      </div>
      <div className="ProblemStatementHackathon" data-aos="fade-right">
        <h1>Problem Statements</h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="problem-name">METAVERSE</SwiperSlide>
          <SwiperSlide className="problem-name">Data security</SwiperSlide>
          <SwiperSlide className="problem-name">
            Industrial training
          </SwiperSlide>
          <SwiperSlide className="problem-name">Recreation</SwiperSlide>
          <SwiperSlide className="problem-name">BLOCKCHAIN</SwiperSlide>
          <SwiperSlide className="problem-name">Hack-a-Block </SwiperSlide>
          <SwiperSlide className="problem-name">Healthcare</SwiperSlide>
          <SwiperSlide className="problem-name">OPEN INNOVATION</SwiperSlide>
        </Swiper>
        <a
          href="https://api.festnimbus.com/uploads/Question_Occultica2k22.pdf"
          target={'_blank'}
          rel="noreferrer"
        >
          Link to problem statements
        </a>
      </div>
      <div className="SponsorDivHackathon" data-aos="fade-right">
        <h1 className="SponsorDivHackathonHeading">Sponsors</h1>
        <HSponsorCard
          className="SponsorHackathon"
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
          gold="Hackathon Gold Sponsors"
          silver="Hackathon Silver Sponsors"
        />
      </div>
      <div className="rules">
        <h1>Rules</h1>
        <p>
          You must be acquainted with the rules and regulations of Occultica
          2k22 in order to participate in the hackathon. <br />
          <a
            href="https://api.festnimbus.com/uploads/rules-occultica2k22.pdf"
            target={'_blank'}
            rel="noreferrer"
          >
            Rules and Regulations
          </a>
        </p>
      </div>
      <div className="faqs" data-aos="fade-left">
        <h1>FAQ</h1>
        <div className="faq-container">
          <div className="faq-style-wrapper">
            <Faq data={FAQ} styles={styles} />
          </div>
        </div>
      </div>
      <div className="FooterHackathon" data-aos="fade-right">
        <div className="contactHackathon">
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
                  <button type="submit">Submit</button>
                  <div>
                    {discordMutation.isError && 'Something went wrong!'}
                    {discordMutation.isSuccess && 'Message Sent.'}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  bgColor: 'transparent',
  rowTitleColor: '#999',
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
