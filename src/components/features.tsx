import React from "react";

interface FeatureProps {
    data: {
        info: {
            sectionTitle: string
        },
        list: {
            title: string;
            icon: string;
            text: string;
        }[]
    };
}

export const Features: React.FC<FeatureProps> = ({ data } ) => {
    return (
        <div id="features" className="text-center">
            <div className="container">
                <div className="col-md-10 col-md-offset-1 section-title">
                    <h2>{data? data.info.sectionTitle : "loading..."}</h2>
                </div>
                <div className="row">
                    {data? data.list.map((d, i) => (
                            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                                {" "}
                                <i className={d.icon}/>
                                <h3>{d.title}</h3>
                                <p>{d.text}</p>
                            </div>
                        ))
                        : "Loading..."}
                </div>
            </div>
        </div>
    );
};
