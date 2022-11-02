import './attraction.css';
import gujaratPic from '../../Images/sujit places/gujarat.jpg';
import himachalPradeshPic from '../../Images/sujit places/himachal pradesh.jpg';
import karnatakaPic from '../../Images/sujit places/karnataka.webp';
import { useNavigate } from 'react-router-dom';

const Attraction1 = () => {
  const searchGujarat = () => {
    navigate('/Gujarat');
  };
  const searchHimachalPradesh = () => {
    navigate('/HimachalPradesh');
  };
  const searchKarnataka = () => {
    navigate('/Karnataka');
  };
  const navigate = useNavigate();
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={gujaratPic}
          alt=""
          className="featuredImg"
          onClick={searchGujarat}
        />
        <div className="featuredTitle">
          <h1>Gujarat</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={himachalPradeshPic}
          alt=""
          className="featuredImg"
          onClick={searchHimachalPradesh}
        />
        <div className="featuredTitle">
          <h1>Himachal Pradesh</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={karnatakaPic}
          alt=""
          className="featuredImg"
          onClick={searchKarnataka}
        />
        <div className="featuredTitle">
          <h1>Karnataka</h1>
        </div>
      </div>
    </div>
  );
};

export default Attraction1;
