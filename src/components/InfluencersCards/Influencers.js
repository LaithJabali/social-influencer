import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import InfluencersCards from './InfluencersCards';
import ResponsiveInfluencersCards from './ResponsiveInfluencersCards';
import InfluencerContext from '../InfluencersContext';

const Influencers = () => {
  const influencersData = useContext(InfluencerContext);
  const isMobile = useMediaQuery({ maxWidth: 1200 });

  return isMobile ? (
    <ResponsiveInfluencersCards influencersData={influencersData} />
  ) : (
    <InfluencersCards influencersData={influencersData} />
  );
};

export default Influencers;
