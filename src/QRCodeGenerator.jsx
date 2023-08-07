import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import style from './QRCodeGenerator.module.css';

function QRCodeGenerator() {
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className={style.wrapper}>
            <h1>QR Code Generator</h1>
            <div className={style.QRCodeContainer}>
                <div className={style.QRCodeArea}>
                    <QRCode
                        value={text}
                        fgColor="#FFFFFF"
                        bgColor="#3685FE"
                        size={160}
                        renderAs={text ? "svg" : "canvas"} // Условное рендеринг как SVG или Canvas
                    />

                </div>
                <input
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    placeholder="Enter text to encode"
                    className={style.input_field}
                />
                <p className={style.qr_instructions}>
                    Scan the QR code with your phone's camera or save it for later
                </p>
            </div>
        </div>
    );
}

export default QRCodeGenerator;
