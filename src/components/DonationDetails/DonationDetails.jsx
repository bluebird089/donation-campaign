import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
import { saveCardsId } from "../../util/LocalStorage";

const DonationDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const cards = useLoaderData();
    const card = cards.find(card => card.id == idInt);
    const handleDonate = () =>{
        saveCardsId(idInt);
        swal("Done!", "You have donated successfully!", "success");
    }
    const { image, price, title_color, title, description } = card;
    const backGround = {
        backgroundColor: title_color
    }
    return (
        <div className="md:w-4/6 px-5 md:px-0 mx-auto pt-24 pb-5">
            <div className="w-full flex items-center flex-col relative">
                <img className="w-full" src={image} alt="" />
                <div className="bg-[#0B0B0B80] w-full absolute bottom-0 p-3">
                    <button onClick={handleDonate} style={backGround} className="btn border-none text-white">Donate {price}</button>
                </div>
            </div>
            <div className="mx-auto mt-2 space-y-1">
                <h3 className="md:text-3xl font-bold">{title}</h3>
                <p className="md:text-xl">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;