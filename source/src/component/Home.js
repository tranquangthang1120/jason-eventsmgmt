import { useNavigate } from 'react-router-dom';
import Image1 from '../image/anhnen1.png'
import Image2 from '../image/Aboutus.webp'
import Image3 from '../image/whatourclientsay.webp'
import Image4 from '../image/garden.webp'
import Image5 from '../image/Paula.webp'


function Home() {
    const navigate = useNavigate();
  

  
    const handleToggleContentAboutus = () => {
        navigate('/homes/msi');
      };
    
      const handleToggleContentwhatourclientsay = () => {
        navigate('/homes/whatourclientsay');
      };

  return (
    <div className='blogall'>
       <div class="home">
        <img src={Image1}></img>
        <h3> TYPE OF PARTIES & EVENTS</h3>
        <p>CORPORATE EVENTS

Christmas Parties

Bespoke Corporate Events

Corporate Marquees/Tents

Meetings
Summer Parties
Product Launches</p>
<p>PRIVATE PARTIES

Milestone Birthdays

Themed Events

Special Celebrations

Children/Teen Parties

Seasonal Celebrations

Baby Reveal

Party Venues</p>
WEDDING

Full Wedding Service
Partial Wedding Planning
Wedding Day Management

Unique Venues

Wedding Design

Stunning Marquees

      </div>
      <div class="peach_content">
        <div class="blog_item" onClick={handleToggleContentAboutus}>
        <img src={Image2}></img>
          <div class="peach_overlay">
            <div class="blog_text">
              <h4>About Us</h4>
              <p> We provide all you need for a perfect party whatever the size, theme or location. From the importance of delectable catering, perfect venue sourcing or beautiful marquees, fabulous props, creative floral displays, stunning lighting, music and entertainment.

​

With meticulous attention to detail, whatever the size or budget. Providing you and your guests a unique experience in the UK or Overseas. </p>
          
   
            </div>
          </div>
        </div>
        <div class="blog_item" onClick={handleToggleContentwhatourclientsay}>
        <img src={Image3}></img>
          <div class="peach_overlay">
            <div class="blog_text">
              <h4>What Our Client Say</h4>
              <p>
              60TH BIRTHDAY PARTY
Garden party at a private residence  for 130 guests in Surbiton. 
              </p>
              <img src={Image4}></img>
            </div>
          </div>
        </div>
              <p>
              <h5>Meet Your Party Planner Your organiser</h5>
<img src={Image5}></img>
<h6>Director</h6>

              </p>
            </div>
          </div>
  );
}

export default Home;