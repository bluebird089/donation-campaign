import { useState } from "react";
import Banner from "../Banner/Banner";
import DonationContainer from "../DonationContainer/DonationContainer";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const [searchedInput, setSearchedInput] = useState();
    const datas = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchedInputText = e.target.text.value.toLowerCase();
        if(searchedInputText === ''){
            return;
        }
        const filteredDatas = datas.filter(data => data.category.toLowerCase() === searchedInputText);
        setSearchedInput(filteredDatas);
    }

    return (
        <div>
            <Banner handleSubmit={handleSubmit}></Banner>
            <DonationContainer searchedInput={searchedInput}></DonationContainer>
        </div>
    );
};

export default Home;