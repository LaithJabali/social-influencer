import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import InfluencersCards from './InfluencersCards';
import ResponsiveInfluencersCards from './ResponsiveInfluencersCards';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';

const Influencers = () => {
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

  const isMobile = useMediaQuery({ maxWidth: 1200 });

  return isMobile ? (
    <ResponsiveInfluencersCards influencersData={influencersData} />
  ) : (
    <InfluencersCards influencersData={influencersData} />
  );
};

export default Influencers;