import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from './VisionMisionValue.module.css'
const VisionMissionValue = () => {
  const visionMissionValues = [
    {
      title: "Our Vision",
      description:
        "Transforming the digital landscape through innovative software solutions that redefine the way individuals and organizations engage with technology, fostering efficiency, empowerment, and sustainable growth for the future.",
    },
    {
      title: "Our Mission",
      description:
        "Empowering businesses and individuals worldwide by delivering cutting-edge software solutions that enhance productivity, streamline processes, and drive digital transformation, while prioritizing security, reliability, and customer satisfaction as the cornerstone of our mission.",
    },
    {
      title: "Our Values",
      description:
        "SkyNetix Software Solutions Pvt. Ltd. is driven by a commitment to innovation, integrity, customer satisfaction, collaboration, and excellence while embracing adaptability and social responsibility as core values.",
    },
  ];

  return (
    <Box className={styles.videoBackgroundWrapper}>
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div>

      <Container maxWidth="lg" className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" className={styles.heading}>
            Vision, Mission & Values
          </Typography>
        </motion.div>

        <Box className={styles.timeline}>
          <Box className={styles.verticalLine} />

          {visionMissionValues.map((item, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });

            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                ref={ref}
                className={`${styles.cardContainer} ${
                  isLeft ? styles.left : styles.right
                }`}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Box className={styles.circle} />

                <Box className={styles.card}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                  >
                    <Typography variant="h4" className={styles.cardTitle}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={styles.cardDescription}
                    >
                      {item.description}
                    </Typography>
                  </motion.div>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default VisionMissionValue;
