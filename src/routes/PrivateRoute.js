import React, { Suspense } from "react";
import { Route } from "react-router-dom";
// import { NotFound } from "../pages";
import { isLoginAdmin } from "../utils/index";
import { Layout } from "antd";
import Header from "../components/header";
import { Loading } from "../components/loading";
import "antd/dist/antd.css";
import "./style.css";
import Login from "../pages/login/home";
const { Content } = Layout;

const PrivateRoute = ({ component: Component, ...rest},login) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoginAdmin() || login   ? (
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

export default PrivateRoute;
