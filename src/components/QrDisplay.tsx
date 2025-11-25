import React from "react";
import QRCode from "react-qr-code";

interface QrDisplayProps {
  value: string;
}

const QrDisplay: React.FC<QrDisplayProps> = ({ value }) => {
  return (
    <div style={{ background: "white", padding: "12px", display: "inline-block" }}>
      <QRCode value={value} size={180} />
    </div>
  );
};

export default QrDisplay;