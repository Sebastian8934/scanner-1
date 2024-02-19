import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner, Html5Qrcode } from 'html5-qrcode';

function App() {

  const [result, setResult] = useState();

  // useEffect(() => {
  //   function onScanSuccess(decodedText, decodedResult) {
  //     // handle the scanned code as you like, for example:
  //     console.log(`Code matched = ${decodedText}`, decodedResult);
  //   }
    
  //   function onScanFailure(error) {
  //     // handle scan failure, usually better to ignore and keep scanning.
  //     // for example:
  //     console.warn(`Code scan error = ${error}`);
  //   }
    
  //   let html5QrcodeScanner = new Html5QrcodeScanner(
  //     "reader",
  //     { fps: 10, qrbox: {width: 250, height: 250} },
  //     /* verbose= */ false);
  //   html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  // });

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      setResult(decodedText)
      // console.log(decodedText);
      // console.log(decodedResult);
        /* handle success */
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    // If you want to prefer back camera
    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
  }, [])
  
  const stopCamera = () => {
    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode.stop().then((ignore) => {
      // QR Code scanning is stopped.
    }).catch((err) => {
      // Stop failed, handle it.
    });
  }

  return (
    <>
      <div id="reader" width="600px"></div>
      <div>
        <button onClick={stopCamera}>detener camara</button>
      </div>
      <div>
        {result}
      </div>
    </>
  );
}

export default App;
