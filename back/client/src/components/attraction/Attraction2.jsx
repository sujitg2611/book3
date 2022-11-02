import './attraction.css';
import maharashtraPic from '../../Images/sujit places/maharashtra.jpg';
import manipurPic from '../../Images/sujit places/manipur.jpg';
import nagalandPic from '../../Images/sujit places/nagaland.jpg';
import { useNavigate } from 'react-router-dom';

const Attraction2 = () => {
  const searchMaharashtra = () => {
    navigate('/Maharashtra');
  };
  const searchManipur = () => {
    navigate('/Manipur');
  };
  const searchNagaland = () => {
    navigate('/Nagaland');
  };
  const navigate = useNavigate();
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={maharashtraPic}
          alt=""
          className="featuredImg"
          onClick={searchMaharashtra}
        />
        <div className="featuredTitle">
          <h1>Maharashtra</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={manipurPic}
          alt=""
          className="featuredImg"
          onClick={searchManipur}
        />
        <div className="featuredTitle">
          <h1>Manipur</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={nagalandPic}
          alt=""
          className="featuredImg"
          onClick={searchNagaland}
        />
        <div className="featuredTitle">
          <h1>Nagaland</h1>
        </div>
      </div>
    </div>
  );
};

export default Attraction2;
