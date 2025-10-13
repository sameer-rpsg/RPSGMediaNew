import React from 'react';
import styles from '@/components/home/Home.module.css';

const BrandAdvertismentBanner = () => {
  return (
    <div className={styles.BrandAdvertismentBanner_container}>
      <h1 className={styles.BrandAdvertismentBanner_heading}>
        PREMIUM BRANDS ADVERTISE HERE. <br />
        YOU SHOULD TOO.
      </h1>
      <div className={styles.BrandAdvertismentBanner_cardContainer}>
        <div className={styles.BrandAdvertismentBanner_card}></div>
        <div className={styles.BrandAdvertismentBanner_card}></div>
        <div className={styles.BrandAdvertismentBanner_card}></div>
      </div>
    </div>
  );
};

export default BrandAdvertismentBanner;
