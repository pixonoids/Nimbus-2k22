import React, { useState } from 'react';
import './Menu.scss';
import { motion } from 'framer-motion';
import { CalenderCard } from '../../molecules/';
import { BsInstagram } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { SiDiscord, SiGoogleplay, SiYoutube } from 'react-icons/si';
import { BsDownload } from 'react-icons/bs';
import {
  cardVariant,
  footerVariant,
  imgVariant,
  linkVariant,
  liVariant,
  navbarLVariant,
  navbarRVariant,
  upcomingVariant,
} from './Menu.animations';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router';

export default function Menu(props) {
  const [state, setState] = useState(false);
  // const navigate = useNavigate();
  const [animation, setAnimation] = useState(false);
  const menuHandler = () => {
    setState(!state);
    setAnimation(!animation);
  };

  const handleLink = (link) => {
    // navigate(link);
    setState(false);
    setAnimation(!animation);
  };

  return (
    <div className="menu">
      <button onClick={menuHandler} className={state ? 'open' : 'close'}>
        <svg width="50" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <div className="navbar">
        <motion.div
          variants={navbarLVariant}
          initial={false}
          animate={animation ? 'visible' : 'hidden'}
          className={'navbarL slide'}
        >
          <div className="nav-heading">Nimbus 2k22</div>
          <ul>
            {LINKS.map((link) => (
              <Link key={link.url} to={`${link.url}`}>
                <div onClick={() => handleLink(link.url)}>
                  <motion.li variants={liVariant}>{link.name}</motion.li>
                </div>
              </Link>
            ))}
          </ul>
          <motion.div variants={footerVariant} className="nav-footer">
            {/* <button className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </button> */}
            <div className="arrow-symbol">
              <FaChevronDown />
            </div>
            © Nimbus 2022
          </motion.div>
        </motion.div>
        <motion.div
          variants={navbarRVariant}
          initial={false}
          animate={animation ? 'visible' : 'hidden'}
          className={'navbarR slide'}
        >
          <div className="navbar-logo-img">
            <motion.img
              variants={imgVariant}
              src="./images/n_white.png"
            ></motion.img>

            <motion.div variants={upcomingVariant} className="nav-head">
              Upcoming Events
            </motion.div>
          </div>
          <motion.div variants={cardVariant} className="nav-events">
            <CalenderCard
              className="nav-card"
              date="2 April 2022 - 6 April 2022"
              desc="Reinforcing the imaginary"
              heading="Occultica 2k22"
              card="nav-card-inside"
            />
            <CalenderCard
              className="nav-card"
              date="7 April 2022 - 11 April 2022"
              desc="Avenue of Possibilites"
              heading="SummitStrive 2k22"
              card="nav-card-inside"
            />
          </motion.div>

          <ul className="nav-links">
            <motion.li variants={linkVariant}>
              <a
                href="https://www.linkedin.com/in/fest-nimbus-nith-a56137202/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="links" />
              </a>
            </motion.li>
            <motion.li variants={linkVariant}>
              <a
                href="https://www.instagram.com/festnimbus/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="links" />
              </a>
            </motion.li>

            <motion.li variants={linkVariant}>
              <a
                href="https://www.facebook.com/festnimbus"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook className="links" />
              </a>
            </motion.li>
            <motion.li variants={linkVariant}>
              <a
                href="https://www.youtube.com/c/FestNimbusNITH/videos"
                target="_blank"
                rel="noreferrer"
              >
                <SiYoutube className="links" />
              </a>
            </motion.li>
            <motion.li variants={linkVariant}>
              <a
                href="https://discord.gg/BhJpqWVmfn"
                target="_blank"
                rel="noreferrer"
              >
                <SiDiscord className="links" />
              </a>
            </motion.li>
            <motion.li variants={linkVariant}>
              <a
                href="https://api.festnimbus.com/uploads/brochure.pdf"
                target="_blank"
                download
                rel="noreferrer"
              >
                <BsDownload className="links" />
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

const LINKS = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/about',
    name: 'About Us',
  },

  {
    url: '/occultica2k22',
    name: 'Occultica2k22',
  },
  {
    url: 'summitstrive',
    name: 'Summit Strive',
  },
  {
    url: '/gallery',
    name: 'Gallery',
  },
  {
    url: '/contact',
    name: 'Contact Us',
  },
  {
    url: '/sponsors',
    name: 'Sponsors',
  },
  {
    url: '/team',
    name: 'Team',
  },
  // {
  //   url: '/schedule',
  //   name: 'Schedule',
  // },
  {
    url: '/clubs',
    name: 'Clubs & Projects',
  },
  {
    url: '/events',
    name: 'Events',
  },
  {
    url: '/megaevents',
    name: 'Mega Events',
  },
  {
    url: '/lectures',
    name: 'Lectures',
  },
  {
    url: '/workshops',
    name: 'Workshops',
  },
];
