import useFetch from '../../hooks/useFetch';
import './featured.css';
import mumbaiPic from '../../Images/Mumbai.jpg';
import goaPic from '../../Images/Goa.jpg';
import bangalorePic from '../../Images/Bangalore.jpg';

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=mumbai,bangalore,goa'
  );

  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className="featuredItem">
            <img src={mumbaiPic} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src={goaPic} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={bangalorePic} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Goa</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
