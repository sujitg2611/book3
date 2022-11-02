import './attraction.css';
import odishaPic from '../../Images/sujit places/odisha.jpg';
import rajasthanPic from '../../Images/sujit places/rajasthan.jpg';
import tamilNaduPic from '../../Images/sujit places/tamilnadu.jpg';
import { useNavigate } from 'react-router-dom';

const Attraction3 = () => {
  const searchOdisha = () => {
    navigate('/Odisha');
  };
  const searchRajasthan = () => {
    navigate('/Rajasthan');
  };
  const searchTamilNadu = () => {
    navigate('/TamilNadu');
  };
  const navigate = useNavigate();
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={odishaPic}
          alt=""
          className="featuredImg"
          onClick={searchOdisha}
        />
        <div className="featuredTitle">
          <h1>Odisha</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={rajasthanPic}
          alt=""
          className="featuredImg"
          onClick={searchRajasthan}
        />
        <div className="featuredTitle">
          <h1>Rajasthan</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={tamilNaduPic}
          alt=""
          className="featuredImg"
          onClick={searchTamilNadu}
        />
        <div className="featuredTitle">
          <h1>Tamil</h1>
          <h1>Nadu</h1>
        </div>
      </div>
    </div>
  );
};

export default Attraction3;
