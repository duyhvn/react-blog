import React, { useEffect, useState } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Team } from "./components/team";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { useGetAppConfig } from "./services/api-hooks";
import { Footer } from "./components/footer";
import {AppModel, NavigationModel} from "./model/component.models";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});


const App: React.FC = () => {

    const [post, fetchState, getAppConfig] = useGetAppConfig();

    let [landingPageData, setLandingPageData] = useState<AppModel>({
            Navigation: {
                navHeader: {},
                menus: []
            } as NavigationModel,
            Header: {paragraph: '', title: '', learnMoreBtn: ''},
            Features: {
                info: {},
                list: []
            },
            About: {Why: [], Why2: [], sectionTitle: '', aboutText:'', paragraph: ''},
            Services: {
                info: {},
                list: []
            },
            Gallery: {
                info: {},
                list: []
            },
            Testimonials: {
                info: {},
                list: []
            },
            Team: {
                info: {},
                list: []
            },
            Contact: {},
            Footer: {
                copyright: '',
                website: '',
                orgName: ''
            }
        },
    );
    useEffect(() => {
        getAppConfig(2).then()
    }, []);

    if (post) {
        landingPageData = JSON.parse(post.secretKey);
    }

    return (
        <div>
            <Navigation data={landingPageData.Navigation}/>
            <Header data={landingPageData.Header}/>
            <Features data={landingPageData.Features}/>
            <About data={landingPageData.About}/>
            <Services data={landingPageData.Services}/>
            <Gallery data={landingPageData.Gallery}/>
            <Testimonials data={landingPageData.Testimonials}/>
            <Team data={landingPageData.Team}/>
            <Contact data={landingPageData.Contact}/>
            <Footer data={landingPageData.Footer}/>
        </div>
    );
};

export default App;