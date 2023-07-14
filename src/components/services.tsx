import React from "react";

interface ServicesProps {
  data: {
    info: {
      sectionTitle:string;
      sectionTitleDesc:string;
    },
    list: { name: string; icon: string; text: string; }[]
  };
}

export const Services: React.FC<ServicesProps> = ({data} ) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{data.info.sectionTitle}</h2>
          <p>{data.info.sectionTitleDesc}</p>
        </div>
        <div className="row">
          {data? data.list.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                <i className={d.icon}/>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
