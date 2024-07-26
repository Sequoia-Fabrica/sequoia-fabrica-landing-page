
import { urlConstants } from '@/src/text/urlConstants';
import { useEffect } from 'react';

const Donate = () => {
  useEffect(() => {
    // Perform the redirection
    window.location.href = urlConstants.donateOC;
  }, []);

  return null;
};

export default Donate;