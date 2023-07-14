import React from "react";

interface TeamProps {
  data: {
    info: {
      sectionTitle:string
    },
    list: any[]
  };
}

export const Team: React.FC<TeamProps> = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{props.data ? props.data.info.sectionTitle : "loading"}</h2>
        </div>
        <div id="row">
          {props.data ? props.data.list.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                <div className="thumbnail">
                  <img src={d.img} alt="..." className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
