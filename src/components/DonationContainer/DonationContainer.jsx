import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const DonationContainer = () => {

    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    }, [])

    return (
        <div className="grid grid-cols-4 gap-5 m-5">
            {
                donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default DonationContainer;