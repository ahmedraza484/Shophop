import aboutImg from "../assets/about-img.png";
import { Gem, Truck, Headset } from "lucide-react";

const About = () => {
  return (
    <section className="about-section">
      <div className="content-left">
        <img src={aboutImg} alt="Fashion models" />
      </div>

      <div className="content-right">
        <div className="about-title">
          <h1>About Us</h1>
        </div>

        <p>
          At Shophop, we believe fashion is more than just clothing — it's a way
          to express your personality and confidence. Our mission is to bring
          you the latest fashion trends, premium-quality products, and timeless
          styles at affordable prices. Whether you're dressing for work, a
          casual day out, or a special occasion, we've got something perfect for
          you.
        </p>

        <div className="feature-icon">
          <div className="feature-item">
            <Gem />
            <p>
              Premium
              <br />
              Quality
            </p>
          </div>

          <div className="feature-item">
            <Truck />
            <p>
              Fast & Reliable
              <br />
              Delivery
            </p>
          </div>

          <div className="feature-item">
            <Headset />
            <p>
              Customer
              <br />
              Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
