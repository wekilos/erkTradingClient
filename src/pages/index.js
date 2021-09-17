import { lazy } from "react";


export const NotFound = lazy(() => import("./404/404"));
export const Success = lazy(() => import("./404/success"));
export const Welcome = lazy(()=>import('./login/home'));
export const Login = lazy(()=>import('./login/login'));
export const SignUp = lazy(()=>import('./login/sign-up'));
export const Home = lazy(()=>import("./home/home"));
export const Zayawka = lazy(()=>import("./zayawka/zayawka"));
export const Shertler = lazy(()=>import("./shertler/shertler"));
export const Soraglar = lazy(()=>import("./Soraglar/soraglar"));
export const Tradings = lazy(()=>import("./tradings/tradings"));
export const Taryh = lazy(()=>import("./Yuklering Taryhy/taryh"));
export const TaryhInside = lazy(()=>import("./Yuklering Taryhy/taryhInside"));
export const Status = lazy(()=>import("./Status/status"));
export const zayawkaUgratmak = lazy(()=>import("./zayawka/zayawkaUgratmak"));
export const harytGozlemek = lazy(()=>import("./zayawka/harytGozlemek"));
export const harytSatynAlmak = lazy(()=>import("./zayawka/harytSatynAlmak"));
export const hytaydaWekilchilik = lazy(()=>import("./zayawka/hytaydaWekilchilik"));
export const beylekiHyzmatlar = lazy(()=>import("./zayawka/beylekiHyzmatlar"));



