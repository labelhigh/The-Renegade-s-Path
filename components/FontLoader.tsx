
import React from 'react';

const FontLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 bg-cover bg-center" style={{ backgroundImage: "url('https://i.meee.com.tw/z9YT6rb.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative z-10 text-center text-white p-8 rounded-lg flex flex-col items-center">
        <i className="fas fa-yin-yang fa-spin text-6xl text-amber-400 mb-6"></i>
        <h2 className="text-2xl text-gray-300 tracking-widest">筆墨丹青，稍待片刻...</h2>
        <p className="text-lg text-gray-400 mt-2">正在載入字體資源</p>
      </div>
    </div>
  );
};

export default FontLoader;
