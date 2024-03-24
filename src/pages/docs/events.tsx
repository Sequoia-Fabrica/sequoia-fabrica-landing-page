import { urlConstants } from '@/src/text/urlConstants';
import { useEffect } from 'react';

const Events = () => {
  useEffect(() => {
    // Perform the redirection
    window.location.href = urlConstants.bookWhen;
  }, []);

  return null;
};

export default Events;