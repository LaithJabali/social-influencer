import React, { useEffect, useState } from 'react';
import CardsCarousel from '../InfluencersCards/CardsCarousel';
import styles from './InfluencerStatistics.module.css';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';

const MoreCards = () => {
  const [influencersData, setInfluencersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const influencersCollectionRef = collection(db, 'influencers');

      const unsubscribe = onSnapshot(influencersCollectionRef, (querySnapshot) => {
        const influencers = [];
        querySnapshot.forEach((doc) => {
          influencers.push({ id: doc.id, ...doc.data() });
        });
        setInfluencersData(influencers);
      });

      return unsubscribe;
    };

    fetchData();
  }, []);

  const responsiveSettings = [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className={styles.moreCards}>
      <h1 className={styles.title}>LOOKING FOR MORE?</h1>
      <h2 className={styles.subtitle}>Other Influencers You May Like</h2>
      <CardsCarousel cardsData={influencersData} responsiveSettings={responsiveSettings} />
    </div>
  );
};

export default MoreCards;