import React from 'react';


const useMediaQuery = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    function mqChange(mq: any) {
      setIsMobile(mq.matches);
    }
    React.useEffect(() => {
        const mq = window.matchMedia('screen and (max-width: 900px)');
        mq.addEventListener('change',mqChange);
        mqChange(mq);
    
        return () => {
          mq.removeEventListener('change', mqChange);
        };
      }, []);

      return isMobile;
}

export default useMediaQuery;