import { urlConstants } from '@/src/text/urlConstants';
import { useEffect } from 'react';

const Events = () => {
  useEffect(() => {
    // Perform the redirection
    window.location.href = urlConstants.meetup;
  }, []);

  return null;
};

export default Events;