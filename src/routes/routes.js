import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {LoadingOutlined} from '@ant-design/icons';
import history from "./history";
import {  NotFound,Login, Welcome, SignUp, Home, Zayawka, Shertler, Soraglar, Tradings, Taryh, Status, TaryhInside, zayawkaUgratmak, harytGozlemek, harytSatynAlmak, hytaydaWekilchilik, beylekiHyzmatlar, Success } from "../pages/index";

import ScrollIntoView from "./ScrollIntoView";
import { Loading } from "../components/loading";
 

const PrivateRoute = lazy(() => import("./PrivateRoute"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const App = () => {
  // history.listen((location, action) => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // });
  return (
    <BrowserRouter history={history}>
      <ScrollIntoView>
        <Suspense fallback={<LoadingOutlined />}>
          <Switch>
            <PrivateRoute
              restricted={true}
              component={Welcome}
              path="/"
              exact
            />

            <PrivateRoute 
            restricted={false} 
            component={Welcome} 
            path="/" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            login={true}
            component={Login} 
            path="/login" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            login={true}
            component={SignUp} 
            path="/sign-up" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={Home} 
            path="/home" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={Zayawka} 
            path="/zayawka" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={zayawkaUgratmak} 
            path="/zayawkaUgratmak" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={harytGozlemek} 
            path="/harytGozlemek" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={harytSatynAlmak} 
            path="/harytSatynAlmak" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={hytaydaWekilchilik} 
            path="/wekilchilik" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={beylekiHyzmatlar} 
            path="/beyleki" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={Shertler} 
            path="/shertler" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={Soraglar} 
            path="/soraglar" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={Tradings} 
            path="/tradings" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={Taryh} 
            path="/taryh" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={TaryhInside} 
            path="/taryhInside" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={Success} 
            path="/success" 
            exact 
            />
            <PrivateRoute 
            restricted={false} 
            component={NotFound} 
            path="/notfound" 
            exact 
            />
            <PublicRoute 
            restricted={false} 
            component={Status} 
            path="/status" 
            exact 
            />
            

           

            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </ScrollIntoView>
    </BrowserRouter>
  );
};

export default App;
