import React from "react";

import BannerImg from "../../../../assets/hero_img.jpg";

const Banner = () => {
    return (
        <div className="hero bg-[#1313131f] rounded-3xl min-h-[80vh] px-26">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                <img
                    src={BannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-6xl leading-20 font-bold font-playfair mb-12">
                        Books to freshen up
                        <br /> your bookshelf
                    </h1>
                    <button className="btn bg-1 text-white!">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
