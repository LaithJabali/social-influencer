import React, { createContext, useEffect, useState } from 'react';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';

const InfluencerContext = createContext();

export const InfluencerProvider = ({ children }) => {
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

  return <InfluencerContext.Provider value={influencersData}>{children}</InfluencerContext.Provider>;
};

export default InfluencerContext;
