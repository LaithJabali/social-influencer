import React from 'react';
import { useMediaQuery } from 'react-responsive';
import InfluencersCards from './InfluencersCards';
import ResponsiveInfluencersCards from './ResponsiveInfluencersCards';

const Influencers = () => {
  const isMobile = useMediaQuery({ maxWidth: 1700 });

  return isMobile ? <ResponsiveInfluencersCards /> : <InfluencersCards />;
};

export default Influencers;
