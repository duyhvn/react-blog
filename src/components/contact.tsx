import React, { useState } from "react";
import emailjs from "emailjs-com";

interface ContactProps {
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

interface State {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC<ContactProps> = (props) => {
  const initialState: State = {
    name: "",
    email: "",
    message: "",
  };
  const [{ name, email, message }, setState] = useState<State>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target as HTMLFormElement, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2> {props.data ? props.data.sectionTitle : "Get In Touch..."}</h2>
                <p>{props.data ? props.data.sectionTitleDesc : "Please fill out the form below to send us an email and we will get back to you as soon as possible..."}</p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={4}
                      placeholder="Message"
                      required
                      onChange={handleChange}
                  />
                  <p className="help-block text-danger"/>
                </div>
                <div id="success"/>
                <button type="submit" className="btn btn-custom btn-lg"> {props.data? props.data.sendLabelBtn : "Send Message"} </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>{props.data ? props.data.contactItem : "Contact Info"}</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"/> {props.data ? props.data.addressTitle : "Address"}
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"/> {props.data ? props.data.phoneTitle : "Phonr"}
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"/> {props.data? props.data.emailTitle: "Email"}
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"/>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"/>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
