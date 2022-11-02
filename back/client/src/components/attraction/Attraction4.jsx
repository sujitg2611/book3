import './attraction.css';
import tripuraPic from '../../Images/sujit places/tripura.jpg';
import uttarPradeshPic from '../../Images/sujit places/uttar pradesh.jpg';
import { useNavigate } from 'react-router-dom';

const Attraction4 = () => {
  const searchTripura = () => {
    navigate('/Tripura');
  };
  const searchUttarPradesh = () => {
    navigate('/Uttarpradesh');
  };
  const navigate = useNavigate();
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={tripuraPic}
          alt=""
          className="featuredImg"
          onClick={searchTripura}
        />
        <div className="featuredTitle">
          <h1>Tripura</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={uttarPradeshPic}
          alt=""
          className="featuredImg"
          onClick={searchUttarPradesh}
        />
        <div className="featuredTitle">
          <h1>Uttar Pradesh</h1>
        </div>
      </div>
    </div>
  );
};

export default Attraction4;
