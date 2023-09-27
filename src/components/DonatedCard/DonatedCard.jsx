import PropTypes from 'prop-types';

const DonatedCard = ({ card }) => {
    const { square_image, card_color, category, category_background, title, title_color, price } = card || {};
    const categoryColor = {
        backgroundColor: category_background
    }
    const color = {
        color: title_color,
        backgroundColor: card_color,
    }
    const btnStyle = {
        backgroundColor: title_color
    }
    return (
        <div style={color} className="flex items-center rounded-xl">
            <div className='w-1/3 md:w-7/12 lg:w-5/12'>
                <img className='w-full' src={square_image} alt="" />
            </div>
            <div className="flex-1 p-1 lg:p-5  lg:space-y-2">
                <div style={categoryColor} className='inline-block px-1 rounded'>
                    <h4 className="font-semibold text-xs sm:text-base">{category}</h4>
                </div>
                <h2 className="font-semibold text-xs text-black sm:text-base lg:text-2xl">{title}</h2>
                <h2 className="font-semibold text-xs md:text-base lg:text-lg">{price}</h2>
                <button style={btnStyle} className="text-white text-sm px-2 py-1 rounded lg:text-lg">View Details</button>
            </div>
        </div>
    );
};

DonatedCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default DonatedCard;