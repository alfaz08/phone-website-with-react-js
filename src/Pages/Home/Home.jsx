import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import Phones from "../../Components/PhoneCard/PhoneCard";

const Home = () => {
  const phones= useLoaderData();
  return (
    <div>
     <Banner></Banner>
     <Phones phones={phones}></Phones>
    </div>
  );
};

export default Home;