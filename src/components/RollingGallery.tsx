import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'framer-motion';
import './RollingGallery.css';

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  const [isHovering, setIsHovering] = useState(false);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = faceCount > 0 ? (cylinderWidth / faceCount) * 1.5 : 0;
  const dragFactor = 0.05;
  const radius = faceCount > 0 ? cylinderWidth / (2 * Math.PI) : 0;

  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: 'spring', stiffness: 60, damping: 20, mass: 0.1, ease: 'easeOut' }
    });
  };

  const transform = useTransform(rotation, value => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    let interval;
    if (autoplay && !isHovering) {
      interval = setInterval(() => {
        const currentRotation = rotation.get();
        const nextRotation = currentRotation - 360 / faceCount;
        
        controls.start({
          rotateY: nextRotation,
          transition: { duration: 2, ease: 'linear' }
        });
        rotation.set(nextRotation);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [autoplay, isHovering, controls, rotation, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsHovering(false);
    }
  };

  if (faceCount === 0) {
    return <div className="gallery-container"><p>No images to display.</p></div>;
  }

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`
              }}
            >
              <img src={url} alt="gallery" className="gallery-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
