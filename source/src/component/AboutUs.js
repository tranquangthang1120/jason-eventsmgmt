import {Link}  from 'react-router-dom';
import '../css/Aboutus.css'

function AboutUs(){
    return(
        <div>
            <div className="about-us">
        <h1>Introducing Jason EventsMGMT</h1>
        <p>
        Jason EventsMGMT is a professional event organization company in Ho Chi Minh City, Vietnam. We provide full event organization services, including:
        </p>
        <ul>
          <li>Plan and implement events</li>
          <li>Search and book the venue</li>
          <li>Providing event equipment and decorations</li>
          <li>Provide event personnel</li>
          <li>Provides food and entertainment services</li>
        </ul>
        <p>
        Jason EventsMGMT was founded by a team of professional and experienced staff in the field of event organization. We are committed to bringing customers successful and memorable events.
        </p>
        <p>
        Please contact us today for a free consultation about our event organization services.
        </p>
        <div className="call-to-action">
          <Link to="/contact">Contact now</Link>
        </div>
      </div>
        </div>
    );
}
export default AboutUs;