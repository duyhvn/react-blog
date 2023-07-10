import * as React from "react";

interface HeaderProps {
    data: {
        title: React.ReactNode;
        paragraph: React.ReactNode;
    };
}

export class Header extends React.Component<HeaderProps> {
    render(): React.ReactNode {
        const { data } = this.props;
        return (
            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 intro-text">
                                    <h1>
                                        {data ? data.title : "Loading"}
                                        {/* Assuming you want to render a <span> element */}
                                        <span></span>
                                    </h1>
                                    <p>{data ? data.paragraph : "Loading"}</p>
                                    <a
                                        href="#features"
                                        className="btn btn-custom btn-lg page-scroll"
                                    >
                                        Learn More
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};
