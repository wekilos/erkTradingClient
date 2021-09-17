import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Header from "../components/headerStatus";
import Login from "../pages/login/home";
const { Content } = Layout;


const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        (isLogin())  ? (
          <Layout>
          <Layout className="site-layout">
            {/* <Header /> */}
            <Content
              style={{
                height: "100vh",
                // borderTopLeftRadius: 8,
                // borderTopRightRadius: 8,
              }}
              className="site-layout-background main_content"
            >
              <Component {...props} />
            </Content>
          </Layout>
        </Layout>
        ) : (
          <Layout>
            <Layout className="site-layout">
              <Header />
              <Content
                style={{
                  height: "100vh",
                  backgroundColor:"#F3F3F3"
                }}
                className="site-layout-background main_content"
              >
                <Login />
              </Content>
            </Layout>
          </Layout>
        )
      }
    />
  );
};

export default PublicRoute;
