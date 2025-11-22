import React from 'react';
import QRCode from 'qrcode.react';

export default function QrDisplay({ qrValue }: { qrValue: string }) {
  // if qrValue looks like data URL, show img
  if (qrValue.startsWith('data:')) {
    return <img src={qrValue} alt="QR" style={{width:180,height:180}} />;
  }
  // otherwise render QR canvas from value
  return (
    <div>
      <h4>Tu QR para check-in</h4>
      <QRCode value={qrValue} size={180} includeMargin />
    </div>
  );
}
