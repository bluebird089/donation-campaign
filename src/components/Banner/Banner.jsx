import PropTypes from 'prop-types'

const Banner = ({handleSubmit}) => {   
    return (
        <div className="hero h-[300px] md:h-[500px]" style={{ backgroundImage: 'url(../assets/Banner.png)' }}>
            <div className="hero-overlay bg-white bg-opacity-95"></div>
            <div>
                <h1 className="text-lg md:text-4xl font-bold text-black">I Grow By Helping People In Need</h1>
                <form onSubmit={handleSubmit} className="flex justify-center mt-3">
                    <input className="border w-3/5 rounded-lg pl-2 rounded-r-none" placeholder="Search Here..." type="text" name="text" id="" />
                    <button className="btn hover:bg-[#b83035] bg-[#FF444A] border-none rounded-l-none text-white">Search</button>
                </form>
            </div>
        </div>
    );
};

Banner.propTypes ={
    handleSubmit: PropTypes.func.isRequired
}

export default Banner;