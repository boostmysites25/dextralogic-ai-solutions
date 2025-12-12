import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTMTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];

    // Push page view event to GTM dataLayer
    window.dataLayer.push({
      event: 'page_view',
      page_path: location.pathname + location.search,
      page_title: document.title,
      page_location: window.location.href,
    });

    // Also trigger the standard GTM page view if available
    if (window.gtag) {
      window.gtag('config', 'GTM-WMFV6NW3', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return null;
};

export default GTMTracker;

