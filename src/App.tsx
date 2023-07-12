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
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { useGetAppConfig } from "./services/api-hooks";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});


interface props {
    Header: { paragraph: '', title: '' };
    Features: any[];
    About: { Why: any[]; Why2: any[]; paragraph: '' };
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

    const [post, fetchState, getAppConfig] = useGetAppConfig();

    let [landingPageData, setLandingPageData] = useState<props>({
        Header: { paragraph: '', title: '' },
        Features: [],
        About: { Why: [], Why2: [], paragraph: '' },
        Services: [],
        Gallery: [],
        Testimonials: [],
        Team: [],
        Contact: {
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
        getAppConfig(1).then()
    }, []);

    if (post) {
        landingPageData = JSON.parse(post.secretKey);
    }

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