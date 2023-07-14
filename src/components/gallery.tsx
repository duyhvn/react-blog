import { Image } from "./image";
import React from "react";

interface GalleryProps {
  data: {
    info: {
      sectionTitle:string;
      sectionTitleDesc:string;
    },
    list: any[]
  };
}

export const Gallery: React.FC<GalleryProps> = ({ data }) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{data? data.info.sectionTitle : "loading"}</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data? data.list.map((d: any, i: number) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
}
