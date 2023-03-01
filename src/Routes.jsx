import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Homepage = React.lazy(() => import("pages/Homepage"));
const MENUEXTENDERVIEW = React.lazy(() => import("pages/MENUEXTENDERVIEW"));
const LandingPageFive = React.lazy(() => import("pages/LandingPageFive"));
const Reward = React.lazy(() => import("pages/Reward"));
const LandingPageFour = React.lazy(() => import("pages/LandingPageFour"));
const FashionistaCommunity = React.lazy(() =>
  import("pages/FashionistaCommunity")
);
const Community = React.lazy(() => import("pages/Community"));
const LandingPageThree = React.lazy(() => import("pages/LandingPageThree"));
const Logoutscreen = React.lazy(() => import("pages/Logoutscreen"));
const CHOOSEYOURAVATARSUCCESS = React.lazy(() =>
  import("pages/CHOOSEYOURAVATARSUCCESS")
);
const CHOOSEYOURAVATARupdaed = React.lazy(() =>
  import("pages/CHOOSEYOURAVATARupdaed")
);
const LandingPageTwo = React.lazy(() => import("pages/LandingPageTwo"));
const NotificationsViewpage = React.lazy(() =>
  import("pages/NotificationsViewpage")
);
const SignUp = React.lazy(() => import("pages/SignUp"));
const PROFILE = React.lazy(() => import("pages/PROFILE"));
const Notificationspage = React.lazy(() => import("pages/Notificationspage"));
const SavedItemspage = React.lazy(() => import("pages/SavedItemspage"));
const Fashionviewpage = React.lazy(() => import("pages/Fashionviewpage"));
const Searchpage = React.lazy(() => import("pages/Searchpage"));
const HomepageOne = React.lazy(() => import("pages/HomepageOne"));
const SignInPage = React.lazy(() => import("pages/SignInPage"));
const LandingPageOne = React.lazy(() => import("pages/LandingPageOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signinpage" element={<SignInPage />} />
          <Route path="/homepageone" element={<HomepageOne />} />
          <Route path="/searchpage" element={<Searchpage />} />
          <Route path="/fashionviewpage" element={<Fashionviewpage />} />
          <Route path="/saveditemspage" element={<SavedItemspage />} />
          <Route path="/notificationspage" element={<Notificationspage />} />
          <Route path="/profile" element={<PROFILE />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/notificationsviewpage"
            element={<NotificationsViewpage />}
          />
          <Route path="/landingpagetwo" element={<LandingPageTwo />} />
          <Route
            path="/chooseyouravatarupdaed"
            element={<CHOOSEYOURAVATARupdaed />}
          />
          <Route
            path="/chooseyouravatarsuccess"
            element={<CHOOSEYOURAVATARSUCCESS />}
          />
          <Route path="/logoutscreen" element={<Logoutscreen />} />
          <Route path="/landingpagethree" element={<LandingPageThree />} />
          <Route path="/community" element={<Community />} />
          <Route
            path="/fashionistacommunity"
            element={<FashionistaCommunity />}
          />
          <Route path="/landingpagefour" element={<LandingPageFour />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/landingpagefive" element={<LandingPageFive />} />
          <Route path="/menuextenderview" element={<MENUEXTENDERVIEW />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
