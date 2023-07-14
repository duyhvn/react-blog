import React from "react";
import { NavigationModel } from "../model/component.models";

interface NavigationProps {
    data: NavigationModel
}

export const Navigation: React.FC<NavigationProps> = ({data}) => {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                    >
                        {" "}
                        <span className="sr-only">Toggle navigation</span>{" "}
                        <span className="icon-bar"/>{" "}
                        <span className="icon-bar"/>{" "}
                        <span className="icon-bar"/>{" "}
                    </button>
                    <a className="navbar-brand page-scroll" href={data.navHeader.href}>
                        {data.navHeader.label}
                    </a>{" "}
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        {data? data.menus.map((d: any, i) => (
                            <li key={i}>
                                <a href={d.href} className="page-scroll">{d.label}</a>
                            </li>
                          )) : "Loading..."}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
