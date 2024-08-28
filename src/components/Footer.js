import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
// import a from "next/link";
const Footer = () => {
  return (
    <div className="homepage-footer-main-container">
      {/* <div className="footer"> */}
      <div className="footer-container">
        <div className="footer-cont">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Crpto-Hunter</h3>
              <div className="footer-text">
                <a href={"/aboutus"}>About us</a>
                <a href={"/privacypolicy"}>Privacy Policy</a>
                <a href={"/termsandconditions"}>Terms & Conditions</a>
                <a href={"/faq"}>FAQ</a>
                {/* <a href={"/aboutus"}>About us</a>
                <a href={"/aboutus"}>About us</a> */}
              </div>
            </div>
            {/* <div className="footer-column">
              <h5>Customer</h5>
              <div className="footer-text">
                {/* <a href={"/categories"}>Categories</a> */}
                {/* <a href={"/contactus"}>Contact us</a> */}
                {/* <a href={"/blog"}>Blog</a> */}
              {/* </div> */}
            {/* </div> */} 
            <div className="footer-column">
              <h3>Crypto Api</h3>
              <div className="footer-text">
                <a href={"/register"}>Coin Gecko API</a>
                <a href={"/register"}>NewsData.io</a>

              </div>
            </div>

            <div className="footer-column">
              <h3>Newsletter</h3>
              <div className="footer-text">
                <p>
                  Sign up for our newsletter to receive updates regarding crypto news and crypto prices. Stay informed and never miss
                  out on an update you need!
                </p>
                <div className="search">
                  <input type="search" placeholder="Email Address..." />
                  <button>GO</button>
                </div>
                 <div className="footer-icons">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <p>&copy;Shivam Rajotiya - Crypto Hunter</p>
        {/* <div className="footer-icons">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
