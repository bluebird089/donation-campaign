import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {
    const { title, image, card_color, category, title_color, category_background } = donation;
    const color = {
        color: title_color,
        backgroundColor: card_color,
    }
    const categoryColor = {
        backgroundColor: category_background
    }
    return (
        <div style={color} className="card card-compact">
            <img className='rounded-t-lg' src={image} alt="Donation-Cover" />
            <div className='p-3'>
                <div style={categoryColor} className='inline-block px-1 rounded'>
                    <h4 className="font-semibold text-sm">{category}</h4>
                </div>
                <h2 className="font-semibold text-lg">{title}</h2>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
}

export default DonationCard;