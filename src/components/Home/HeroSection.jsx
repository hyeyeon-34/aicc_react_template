import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 gap-10">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tight text-neutral-700 dark:text-neutral-300 font-semibold text-center">
        AceDot Build Tools{' '}
        <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="text-center text-neutral-400 max-w-4xl font-customFontKr lg:text-lg mb:text-sm ">
        모든 국민은 보건에 관하여 국가의 보호를 받는다. 의원을 제명하려면
        국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 모든 국민은 헌법과
        법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.
        국회의원과 정부는 법률안을 제출할 수 있다. 국무총리 또는 행정각부의 장은
        소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는
        부령을 발할 수 있다.
      </p>
      <div className="flex gap-4">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={` font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
              idx === 0 &&
              'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className="flex mt-10 gap-4 justify-center flex-col md:flex-row items-center">
        <video autoPlay muted loop className="vid md:w-1/3 ">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-1/3 ">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
