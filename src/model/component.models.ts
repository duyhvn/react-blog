export interface AppModel {
    Navigation: NavigationModel;
    Header: { paragraph: '', title: '', learnMoreBtn: '' };
    Features: {
        info: {};
        list: [];
    };
    About: { Why: any[]; Why2: any[]; sectionTitle:''; aboutText: ''; paragraph: '' };
    Services: {
        info: {};
        list: [];
    };
    Gallery: {
        info: {};
        list: [];
    };
    Testimonials: {
        info: {};
        list: [];
    };
    Team: {
        info: {};
        list: [];
    };
    Contact: {};
    Footer: {
        copyright: '',
        website: '',
        orgName: ''
    };
}

export interface AboutProps {
    data: {
        sectionTitle: string;
        aboutText: string;
        paragraph: string;
        Why: any[];
        Why2: any[];
    };
}

export interface ContactProps {
    data: {
        sectionTitle: string;
        sectionTitleDesc: string;
        contactItem: string;
        addressTitle: string;
        address: string;
        phoneTitle: string;
        phone: string;
        emailTitle: string;
        email: string;
        facebook: string;
        twitter: string;
        youtube: string;
        sendLabelBtn: string;
    };
}

export interface NavigationModel {
    navHeader: {
        label: string,
        href: string,
    }

    menus: {
        label: string,
        href: string,
    }[]
}