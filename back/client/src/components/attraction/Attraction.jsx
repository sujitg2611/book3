import './attraction.css';
import andhrapradeshPic from '../../Images/sujit places/ANDHRA-PRADESH.jpg';
import biharPic from '../../Images/sujit places/bihar.webp';
import goaPic from '../../Images/Goa.jpg';
import { useNavigate } from 'react-router-dom';

const Attraction = () => {
  const searchAndhraPradesh = () => {
    navigate('/AndhraPradesh');
  };
  const searchBihar = () => {
    navigate('/Bihar');
  };
  const searchGoa = () => {
    navigate('/Goa');
  };
  const navigate = useNavigate();
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={andhrapradeshPic}
          alt=""
          className="featuredImg"
          onClick={searchAndhraPradesh}
        />
        <div className="featuredTitle">
          <h1>Andhra</h1>
          <h1>Pradesh</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={biharPic}
          alt=""
          className="featuredImg"
          onClick={searchBihar}
        />
        <div className="featuredTitle">
          <h1>Bihar</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img src={goaPic} alt="" className="featuredImg" onClick={searchGoa} />
        <div className="featuredTitle">
          <h1>Goa</h1>
        </div>
      </div>
    </div>
  );
};

export default Attraction;
