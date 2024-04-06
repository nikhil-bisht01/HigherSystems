import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const YourComponent = () => {
  const [captchaValue, setCaptchaValue] = useState('');

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div>
      {/* Your other form fields */}
      <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        onChange={handleCaptchaChange}
      />
      {/* Your submit button */}
    </div>
  );
};

export default YourComponent;
