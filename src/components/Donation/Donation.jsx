import { useEffect, useState } from "react";
import { getStoredCardId } from "../../util/LocalStorage";
import { useLoaderData } from "react-router-dom";
import DonatedCard from "../DonatedCard/DonatedCard";

const Donation = () => {

    const cards = useLoaderData();
    const [displayCard, setDisplayCard] = useState([]);
    const [display, setDisplay] = useState(4);

    useEffect(() => {
        const cardsId = getStoredCardId();
        if (cards.length > 0) {
            const array = [];
            for (let id of cardsId) {
                const card = cards.find(card => card.id == id);
                if (card) {
                    array.push(card)
                }
            }
            setDisplayCard(array);
        }
    }, [cards]);

    const handleShowAll = () => {
        setDisplay(displayCard.length);
    }

    return (
        <div className="container mx-auto pt-28 px-3 md:px-0">
            {
                displayCard.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        displayCard?.slice(0, display).map(card => <DonatedCard key={card.id} card={card}></DonatedCard>)
                    }
                </div> : <div className="
                ">Not Donated Yet</div>
            }
            <div className={`flex justify-center py-5 ${displayCard.length <= 4 && 'hidden' } ${display === displayCard.length && 'hidden'}`}>
                <button onClick={handleShowAll} className={`btn`}>Show All</button>
            </div>
        </div>
    );
};

export default Donation;