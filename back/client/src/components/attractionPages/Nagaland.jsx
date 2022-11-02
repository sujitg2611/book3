import './images.css';
import Dinapur from '../../Images/dimapur - nagaland.webp';
import Khonama from '../../Images/khonama village - nagaland.jpg';
import Kohima from '../../Images/kohima - nagaland.jpg';
import kohima from '../../Images/kohima- nagaland.webp';
import Wokha from '../../Images/wokha - nagaland.jpg';
const Nagaland = () => {
  return (
    <div>
      <h1>Nagaland</h1>
      <p>
        Nagaland offers unending exploration possibilities from heritage
        villages to wildlife sanctuaries. Beautifully nestled amidst the lush
        and verdant sub-tropical and sub-alpine climate, Nagaland treasures an
        overabundance of wild flora and fauna and even some medicinal plants.
        Nagaland is a beautiful destination in India and it stores some popular
        places to visit. You can soak in the freshness of fine scent in the air,
        the calming yet buzzing sound of wild cicadas and beautiful rolling
        ranch lands and white fluffy clouds hovering above. Winters from October
        to February are an ideal time to visit Nagaland. Nagaland is famous for
        its Naga shawls, cane carpets, Naga silk Mekhela and bamboo mugs and
        other such items.
      </p>
      <div className="featured">
        <div className="featuredItem">
          <img src={Dinapur} alt="" className="featuredImg" />
          <div className="featuredTitle">
            <h1>Dinapur</h1>
          </div>
        </div>
        <div className="featuredItem">
          <img src={Khonama} alt="" className="featuredImg" />
          <div className="featuredTitle">
            <h1>Khonama</h1>
          </div>
        </div>
        <div className="featuredItem">
          <img src={Kohima} alt="" className="featuredImg" />
          <div className="featuredTitle">
            <h1>Kohima</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src={kohima} alt="" className="featuredImg" />
          <div className="featuredTitle">
            <h1>Kohima</h1>
          </div>
        </div>
        <div className="featuredItem">
          <img src={Wokha} alt="" className="featuredImg" />
          <div className="featuredTitle">
            <h1>Wokha</h1>
          </div>
        </div>
      </div>
      <p>
        1.Dimapur - nagaland An Insight to Dimapur Tourism Nagaland The gateway
        to Nagaland - Dimapur is a prominent tourist destination where the major
        incoming, and outgoing of tourists takes place because it features the
        only airport and railway station in Nagaland. Despite being modern in
        all sense, in the heart of city one can find many ruins that speak about
        the traces of Dimasa Kachari Kingdom. It is said that Dimapur was the
        capital of the Dimasa Kachari rulers in the medieval era. Also, Kacharis
        were the one gave the region its name - Dimapur. Another unique fact
        associated with the history of Dimapur is that the place was the battles
        ground during the World War II were British India and Imperial Japan
        fought. Dimapur was the center of action between British India and
        Imperial Japan. The battle for Kohima about 77 km from Dimapur is
        considered the turning point for the Japanese retreat from South East
        Asia.
      </p>
      <p>
        2.Khonama village - nagaland 20 Kilometers away from the busy streets of
        Nagaland’s state capital is Khonoma village, overlooking mesmerizing
        paddy fields and hills covered with lush forests. Often described as a
        ‘warrior village’, Khonoma is known for its fierce resistance during the
        British colonial period. There is so much history written in this
        village. Apart from that, Khonoma is also known for its initiatives in
        wildlife conservation. In 1998, the Khonoma Nature Conservation and
        Tragopan Sanctuary (KNCTS) was set up to protect the endangered Blyth’s
        Tragopan and other wildlife and rare plant species in their natural
        habitat. Over the last two decades, bird enthusiasts from around the
        world have come to Khonoma just to spend their days listening to the
        call of the birds and watching them. Khonoma is also the first Green
        Village in Asia. With its naturally blessed resources, intriguing
        history and rich culture, the village is one of the most visited places
        in Nagaland.{' '}
      </p>
      <p>
        3.Kohima - nagaland Kohima is the capital city of Nagaland, thus here
        one can find many things to do like shopping; visiting handful of
        attractions, and historical places, and taking part in colorful
        festivals. Tourists should try to time their visit with the Hornbill
        Festival where 16 Naga tribes showcase their culture at Kisama Village.
        If having extra time at disposal, do go for a long trek to Dzukou
        Valley, approximately 74 kilometers from Kohima. Avoid a trip to Kohima
        around Sunday as mostly attractions remain closed.
      </p>
      <p>
        5.Wokha - nagaland A district headquarters, and a town in the
        mid-western part of Nagaland, Wokha is rich in everything - be its
        minerals, flora and fauna, soil fertility or tourists attractions, and
        that's perhaps the reason why it was declared as 'the land of plenty' by
        the state government of Nagaland. Wokha is contiguous with Assam in the
        West and North, Kohima and Dimapur in the South, Zunheboto in the East
        and Mokokchung in the Northeast. A must visit over a holiday in
        Nagaland, Wokha is mainly filled with beautiful mountain ranges and
        rivers and is known for their vibrant dances and folk songs. Besides, it
        takes pride in being home to Lothas, a major tribe in Nagas.
      </p>
    </div>
  );
};

export default Nagaland;
