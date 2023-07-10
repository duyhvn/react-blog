import React from "react";

type TestimonialProps = {
    data: { name: string; img: string; text: string }[];
};

export const Testimonials: React.FC<TestimonialProps> = ({ data }) => {
    return (
        <div id="testimonials">
            <div className="container">
                <div className="section-title text-center">
                    <h2>What our clients say</h2>
                </div>
                <div className="row">
                    {data
                        ? data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-4">
                                <div className="testimonial">
                                    <div className="testimonial-image">
                                        <img src={d.img} alt="" />
                                    </div>
                                    <div className="testimonial-content">
                                        <p>"{d.text}"</p>
                                        <div className="testimonial-meta">- {d.name}</div>
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
