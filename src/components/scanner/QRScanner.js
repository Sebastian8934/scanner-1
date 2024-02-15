import React, { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = React.forwardRef((props, ref) => {
  const [result, setResult] = useState('');
  const [facingMode, setFacingMode] = useState('environment'); // 'environment' para cámara trasera, 'user' para cámara frontal
  const qrRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const switchCamera = () => {
    setFacingMode((prevFacingMode) => (prevFacingMode === 'environment' ? 'user' : 'environment'));
  };

  return (
    <div>
      <QrReader
        ref={qrRef}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
        facingMode={facingMode}
      />
      <button onClick={switchCamera}>Switch Camera</button>
      <p>{result}</p>
    </div>
  );
});

export default QRScanner;
