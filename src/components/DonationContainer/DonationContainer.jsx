import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";
import PropTypes from 'prop-types'

const DonationContainer = ({ searchedInput }) => {

    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    const dataToMap = searchedInput ? searchedInput : donations;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4 container mx-auto">
            {
                dataToMap.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

DonationContainer.propTypes = {
    searchedInput: PropTypes.array
}

export default DonationContainer;