import React from "react";
import "antd/dist/antd.css";
import "./headerStatus.css";
import { Layout } from "antd";

import HeaderPicturre from "../img/map.svg";


const { Header } = Layout;

export default class Headers extends React.Component {
  render() {
    return (
      <div
        className="headerStatus"
        style={{ position: "fixed" }}
      >
          <img src={HeaderPicturre} alt="header surat"/>
          <div className="headerStatusComp">
                    saskalk
          </div>
        
      </div>
    );
  }
}
