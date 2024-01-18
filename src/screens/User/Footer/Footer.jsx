import React from 'react';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/croppedlogo.png';
import './Footer.css';
const Footer = () => {
  return (
    <>
      <div className="mainfooter">
        <div className="footercontent">
          <div className="phonecon">
            {/* <img src={Logo} alt="Logo" /> */}
            <div className="mardivcontentlink">
              <p>
                Ramtek Shri Shantinath Digambar Jain Mandir - Nagpur
                <br />
                District, Maharashtra, India (श्री शांतीनाथ दिगंबर जैन मंदिर)
                <br />
              </p>
            </div>
          </div>

          <div className="phonecon">
            <Typography
              variant="h6"
              style={{ fontWeight: '400', marginBottom: '20px' }}
            >
              हमसे जुड़ें
            </Typography>
            <div className="mardivcontentlink">
              <Link to="/rental">facebook</Link>
              <Link to="/rental"> twitter </Link>
              <Link to="/rental"> google</Link>
              <Link
                to="https://instagram.com/shreebadebaba?igshid=OGQ2MjdiOTE="
                target="_blank"
              ></Link>
              <Link to="/https://www.youtube.com/c/ShreeBadeBaba">Youtube</Link>
            </div>
          </div>
          {/* <div className="phonecon">
            <Typography
              variant="h6"
              style={{ fontWeight: '400', marginBottom: '20px' }}
            >
              पृष्ठ
            </Typography>
            <div className="mardivcontentlink">
              <Link to="/#">≈ श्री बड़े बाबा</Link>
              <Link to="/#">≈ आचार्य श्री</Link>
              <Link to="/#">≈ कुण्डलपुर</Link>
              <Link to="/#">≈ जैन धर्म</Link>
              <Link to="/#">≈ संपर्क</Link>
            </div>
          </div> */}
          <div className="phonecon">
            <Typography
              variant="h6"
              style={{ fontWeight: '400', marginBottom: '20px' }}
            >
              हमसे संपर्क करें​
            </Typography>
            <div className="mardivcontentlink">
              <p>
                <CallIcon />
                मंत्री :- 9407909950
              </p>
              <p>
                <CallIcon />
                कार्यालय :- 07823299298, 93018 54671
              </p>
              <p>
                <EmailIcon />
                techjainit@gmail.com
              </p>
              <p>developed by techjain.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
