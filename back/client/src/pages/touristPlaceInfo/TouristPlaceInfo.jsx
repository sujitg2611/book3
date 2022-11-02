import './touristPlaceInfo.css';
import AndhraPradeshInfo from '../../components/attractionPages/AndhraPradeshInfo';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import BiharInfo from '../../components/attractionPages/BiharInfo';
import GoaInfo from '../../components/attractionPages/GoaInfo';
import Gujarat from '../../components/attractionPages/Gujarat';
import HimachalPradeshInfo from '../../components/attractionPages/HimachalPradeshInfo';
import Karnataka from '../../components/attractionPages/Karnataka';
import Maharashtra from '../../components/attractionPages/Maharashtra';
import UttarPradesh from '../../components/attractionPages/UttarPradesh';

const TouristPlaceInfo = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="homeContainer">
        <AndhraPradeshInfo />
        <BiharInfo />
        <GoaInfo />
        <Gujarat />
        <HimachalPradeshInfo />
        <Karnataka />
        <Maharashtra />
        <UttarPradesh />
      </div>
    </div>
  );
};

export default TouristPlaceInfo;
