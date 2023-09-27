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
            <img src={square_image} alt="" />
            <div className="flex-1 p-5  space-y-1">
                <div style={categoryColor} className='inline-block px-1 rounded'>
                    <h4 className="font-semibold text-sm">{category}</h4>
                </div>
                <h2 className="font-semibold text-black text-lg">{title}</h2>
                <h2 className="font-semibold text-lg">{price}</h2>
                <button style={btnStyle} className="btn text-white">View Details</button>
            </div>
        </div>
    );
};

DonatedCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default DonatedCard;