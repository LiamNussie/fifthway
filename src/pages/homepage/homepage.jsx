import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./homepage.scss";
import Info from "./info/info";
import Projects from "./projects/projects";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="hero">
                <Navbar />
                <div className="cont">
                    <p className="para">Fifthwall is a full service, integrated design and marketing agency, based in Lagos, committed to creating value and sustainable growth for the property sector. </p>
                </div>
            </div>
            <Info />
            <Projects />
            <div data-aos="fade-up" className="exper">
                <p className="title">Our Expertise</p>
                <div className="cont">
                    <p className="top">Shaping the brands that build our future.</p>
                    <p className="para">Fifthwall, has a vast degree of experience across several disciplines which keep our ideas fresh and our thinking ahead of its time. Working with real estate developers, agents, architects, property specialist and industry stakeholders; we help shape concepts through strategic storytelling, engaging visuals and innovative technologies that leave a lasting impression. </p>
                    <p className="more">Learn More</p>
                </div>
            </div>
            <div className="banner"></div>
            <div data-aos="fade-up" className="about">
                <p className="title">A Multidisciplinary Approach</p>
                <div className="cont">
                    <p className="para">Fifthwall is a blend of creative thinkers, strategists and artists who thrive on collaborative relationships. Our multidisciplinary nature and comprehensive suite of specialised integrated services makes us a model partner for our clients.</p>
                    <p className="para">Our people work to position each project in the most desirable, refined, and elevated way possible, as a result transforming them into some of the most distinctive properties and products to market.</p>
                    <p className="more">Learn More</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;