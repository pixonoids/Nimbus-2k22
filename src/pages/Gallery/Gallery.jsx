import React, { useEffect, useState } from 'react';
import './Gallery.scss';
import { motion } from 'framer-motion';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetGallery } from '../../hooks/api/gallery';

const imgvarient = {
  hidden: {
    y: 0,
  },
  animate: {
    y: '-500vh',
    transition: {
      duration: 55,
      type: 'tween',

      yoyo: Infinity,
    },
  },
};
export default function Gallery() {
  //STATES

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { data } = useGetGallery();
  const images = data?.reduce((acc, cur) => [...acc, ...cur.urls], []);
  const [imagesformobile, setImagesformobile] = useState(images);

  //EFFECTS

  useEffect(() => {
    const resize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    setImagesformobile(images);
  }, [data]);

  //FUNCTIONS

  const concatenate_same_array = () => {
    const newarray = imagesformobile.concat(images);
    setImagesformobile(newarray);
  };

  //RENDER

  if (!data) return null;
  return (
    <div className="gallery">
      <div className="heading">
        <h3> Gallery</h3>
      </div>
      {screenWidth <= 420 && imagesformobile && (
        <InfiniteScroll
          dataLength={imagesformobile?.length}
          next={concatenate_same_array}
          hasMore={true}
          className="infinite-container"
          style={{ overflowX: 'hidden' }}
        >
          {imagesformobile.map((img, index) => {
            if (index & 1)
              return (
                <motion.img
                  src={img}
                  key={index}
                  className="mobile-img"
                  whileInView={{
                    translateX: [200, 0, 0],
                    scale: 1.1,
                    transition: { duration: 0.8 },
                  }}
                ></motion.img>
              );
            else
              return (
                <motion.img
                  src={img}
                  key={index}
                  className="mobile-img"
                  whileInView={{
                    translateX: [-200, 0, 0],
                    scale: 1.1,
                    transition: { duration: 0.8 },
                  }}
                ></motion.img>
              );
          })}
        </InfiniteScroll>
      )}

      {screenWidth > 420 && (
        <div className="gallery-container">
          {images.map((img, index) => {
            return (
              <motion.img
                drag
                dragElastic={1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                src={img}
                key={index}
                variants={imgvarient}
                animate="animate"
                initial="hidden"
                whileTap={{
                  scale: 1.1,
                  zIndex: 1001,
                  opacity: 1,
                  filter: ' grayscale(0)',
                  transition: { duration: 0.5 },
                }}
                whileDrag={{
                  scale: 1.1,
                  zIndex: 1001,
                  opacity: 1,
                  filter: ' grayscale(0)',
                  transition: { duration: 0.5 },
                }}
                whileHover={{
                  scale: 1.1,
                  zIndex: 1001,
                  opacity: 1,
                  filter: ' grayscale(0)',
                  transition: { duration: 0.5 },
                }}
              ></motion.img>
            );
          })}
        </div>
      )}
    </div>
  );
}
