import React, { useEffect } from 'react';

const ExternalLink = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null;
};

export default ExternalLink;
