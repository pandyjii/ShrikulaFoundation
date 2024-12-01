import React, { useEffect } from 'react';
import { KlfCalender } from './KlfCalender';
import { KashmirLitFest } from './KashmirLitFest';
import { QRCodeContribution } from './QRCodeContribution';

export const KLF2024 = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <KlfCalender />
      <div className='mt-10'>
        <KashmirLitFest />
      </div>
      <div className='mt-10'>
        <QRCodeContribution />
      </div>
    </div>
  );
};
