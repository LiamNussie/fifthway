import { useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar2 from "../../components/navbar2/navbar2";
import "./services.scss";
import Template from "./template/template";

const Services = () => {
    const [page, setPage] = useState("branding");
    return (
        <div className="services">
            <Navbar2 />
            <ul className="nav">
                <li onClick={() => setPage("branding")} className={page === "branding" ? "active" : null}>Branding</li>
                <li onClick={() => setPage("digital")} className={page === "digital" ? "active" : null}>Digital</li>
                <li onClick={() => setPage("integrated")} className={page === "integrated" ? "active" : null}>Integrated Marketing</li>
                <li onClick={() => setPage("visualization")} className={page === "visualization" ? "active" : null}>Visualisation</li>
                <li onClick={() => setPage("architecture")} className={page === "architecture" ? "active" : null}>Architecture Consulting</li>
            </ul>
            {page === "branding" && <Template />}
            {/* {page === "commercial" && <ReuseTemplate bg={Commercial} sideText="Open for business" topText="We re-envision commercial spaces, with the aim of attracting a diverse mix of tenants transforming it into a destination. We craft brand narratives that weave together the people, the place, and the product in an effort to address the complex process of choosing a location to operate your business. The end result is a far more personal approach to a commercial office campaign—one that is dynamic and adapts to cultural and neighbourhood trends." bottomText="Our highly specialised team of creatives, media planners and production managers are capable of executing standout campaigns that respond accurately to the demands of any project, offering sound advice, and anticipating future marketing needs." />}
            {page === "hospitality" && <ReuseTemplate bg={Hospitality} sideText="Elevated hospitality brand experiences" topText="From the overall concept to the finest details, in hospitality, everything matters. Every hotel and resort in existence, from small boutique properties through to large-scale all inclusives and everything in between, has a brand presence. We build great strategy, visual identity and a diverse platform of integrated marketing materials to create brand experiences that resonate. Our deep level of creative thinking and proven expertise leads to truly one-of-a-kind, industry-leading campaigns." bottomText="Guest experience extends beyond your premises, and is integral to your ongoing communications. As visceral emotional creatures, humans are fond of ideas, stories, concepts and even products that appeal to the coveted emotional nerve in them. We help create an emotive brand that connects and resonates with your audience, optimise the development of your brand loyalty and create guests for life." />}
            {page === "place" && <ReuseTemplate bg={Place} sideText="A place brand reflects what a place currently is and inspires what it can be in the future" topText="In a world where the movement of people, capital and ideas is more fluid than ever, a strong place brand is more important than ever. We capture the spirit of a destination, bringing character to the communities we shape- creating placemaking experiences, people remember." bottomText="The long-term prosperity and growth of a place- a country, city or community, depends very much on how others see it. A place's brand, image and received perception are critical to success. We develop targeted marketing strategies designed to drive visitor numbers and enable the place stand out against global and local competition. " />}
            {page === "corporate" && <ReuseTemplate bg={Corporate} sideText="Branding with purpose- for real estate, corporates and architectural firms" topText="We’re your partner in defining and articulating your brand as an entity that meets the changed expectations people now have for any organisation – whether they’re considering becoming a customer or a member of your team. We work with both new and established businesses looking to re-invent themselves." bottomText="We believe that every brand should have a purpose. Uniting strategy with intuition, vision with business, we pinpoint the visceral spirit of why a brand exists and breathe life into it. By putting purpose first, and working as a strategic and creative resource to our clients, we align every step of the process to reveal a brand’s highest potential." />}
            {page === "luxury" && <ReuseTemplate bg={Luxury} sideText="Luxury at its finest" topText="Luxury home buyers expect extraordinary homes. At Fifthwall, we help you dive into the mind of luxury buyers to build a brand that resonates with them. From design to eloquent storytelling, our team of marketing and branding experts is ready to give your brand the luxurious finish it deserves- to make a lasting impression on your prospective buyers." bottomText="A luxury brand needs to live, breathe, and create an essence. That essence is delivered through visual expressions, tangibility, and consistent language. Details also develop emotion, exclusivity and status. Luxury is about innovation and quality. It is not about showing off, but about being authentic." />} */}
            <Footer />
        </div>
    )
}

export default Services;