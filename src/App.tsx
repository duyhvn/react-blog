import React, { useEffect, useState } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Team } from "./components/our_team";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});


interface props {
    Header: { paragraph: string | undefined; title: string | undefined };
    Features: any[];
    About: { Why: any[]; Why2: any[]; paragraph: string | undefined };
    Services: any[];
    Gallery: any[];
    Testimonials: any[];
    Team: any[];
    Contact: {
            address: '',
            phone: '',
            email: '',
            facebook: '',
            twitter: '',
            youtube: '',
        
    };
}

const App: React.FC = () => {
    const [landingPageData, setLandingPageData] = useState<props>({
        Header: { paragraph: undefined, title: undefined },
        Features: [],
        About: { Why: [], Why2: [], paragraph: undefined },
        Services: [],
        Gallery: [],
        Testimonials: [],
        Team: [],
        Contact:  {
                address: '',
                phone: '',
                email: '',
                facebook: '',
                twitter: '',
                youtube: '',
            }
        },
    );
    useEffect(() => {
        setLandingPageData(JsonData as props);
    }, []);

    return (
        <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
        </div>
    );
};

export default App;