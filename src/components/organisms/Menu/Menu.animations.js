//variants for left panel
export const navbarLVariant = {
  hidden: {
    y: '-100%',
    transition: {
      staggerChildren: 0.1,

      staggerDirection: -1,
      duration: 0.5,
      delay: 0.5,
    },
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.5,
      damping: 25,
      stiffness: 200,
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

export const liVariant = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
      staggerChildren: 0.2,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const footerVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};
//varients for right panels
export const navbarRVariant = {
  hidden: {
    x: '+100vw',
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.5,
      stiffness: 50,
      staggerChildren: 0.2,
      delayChildren: 0.6,
    },
  },
};
export const imgVariant = {
  hidden: {
    rotate: 45,
    opacity: 0,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transitoin: {
      duration: 2,
    },
  },
};
export const upcomingVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export const cardVariant = {
  hidden: {
    y: '100vh',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
export const linkVariant = {
  hidden: {
    y: '+100vh',
    opacity: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
