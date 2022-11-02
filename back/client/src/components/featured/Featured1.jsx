import useFetch from '../../hooks/useFetch';
import './featured.css';
import gujaratPic from '../../Images/sujit places/gujarat.jpg';
import himachalPradeshPic from '../../Images/sujit places/himachal pradesh.jpg';
import karnatakaPic from '../../Images/sujit places/karnataka.webp';

const Featured1 = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=gujarat,himachal,karnataka'
  );

  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className="featuredItem">
            <img src={gujaratPic} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Gujarat</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src={himachalPradeshPic} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Himachal Pradesh</h1>
              <h2>{data[4]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={karnatakaPic} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Karnataka</h1>
              <h2>{data[5]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured1;
