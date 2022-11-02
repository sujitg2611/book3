import './attraction.css';
import mumbaiPic from '../../Images/Mumbai.jpg';
import bangalorePic from '../../Images/Bangalore.jpg';
import goaPic from '../../Images/Goa.jpg';

const Attraction8 = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={mumbaiPic} alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Mumbai</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={goaPic} alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Goa</h1>
          <h2>223 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={bangalorePic} alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Bangalore</h1>
          <h2>323 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Attraction8;
