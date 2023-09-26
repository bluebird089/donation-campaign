const Banner = () => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: 'url(../../../public/Banner.png)' }}>
            <div className="hero-overlay bg-white bg-opacity-95"></div>
            <div>
                <h1 className="text-4xl font-bold text-black">I Grow By Helping People In Need</h1>
            </div>
        </div>
    );
};

export default Banner;