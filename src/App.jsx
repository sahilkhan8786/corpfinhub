import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/onboarding/sign-in";
import SignUp from "./pages/onboarding/sign-up";
import SignPersonalDetails from "./pages/onboarding/sign-personal-details";
import SignBusinessDetails from "./pages/onboarding/sign-business-details";
import ForgotPassword from "./pages/onboarding/forgot-password";
import ResetPassword from "./pages/onboarding/reset-password";
import SignupCompleted from "./pages/onboarding/sign-up-completed";
import Maintenance from "./pages/onboarding/Maintenance";
import Page404 from "./pages/onboarding/page404";
import Desktop1 from "./pages/onboarding/desktop-1";
import Home from "./pages/Home";
import SellerListingDetailsPage from "./pages/midmarket_Seller/SellerListingDetailsPage";
import MidMarketLandingPage from "./pages/landing_pages/MidMarketLandingPage";
import MasterLandingPageEarlyStage from "./pages/landing_pages/MasterLandingPageEarlyStage";
import DashboardSeller from "./pages/midmarket_Seller/DashboardSeller";
import BuyersEvaluation from "./pages/midmarket_Seller/BuyersEvaluation";
import StartupSellerLisitngDetailsPage from "./pages/startup_seller/StartupSellerLisitngDetailsPage";
import MyListingStartupSeller from "./pages/startup_seller/MyListingStartupSeller";
import EvaluateBuyerStartupSeller from "./pages/startup_seller/EvaluateBuyerStartupSeller";
import EvaluateBuyerStartupSellerResponse from "./pages/startup_seller/EvaluateBuyerStartupSellerResponse";
import ResponsePopup from "./pages/startup_seller/ResponsePopup";
import MidmarketSellerOverview from "./pages/midmarket_Seller/MidmarketSellerOverview";
import StartSellerOverview from "./pages/startup_seller/StartupSellerOverview";
import BuysideLandingPage from "./pages/landing_pages/BuysideLandingPage";
import SellSideLandingPage from "./pages/landing_pages/SellSideLandingPage";
import PricingPlans from "./pages/landing_pages/PricingPlans";
import Contacts from "./pages/landing_pages/Contacts";
import FAQ from "./pages/landing_pages/FAQ";
import AboutUs from "./pages/landing_pages/AboutUs";
import StartupLandingPageEarlyStage from "./pages/landing_pages/StartupLandingPageEarlyStage";
import InvestorLandingPageEarlyStage from "./pages/landing_pages/InvestorLandingPageEarlyStage";
import MasterLandingpage from "./pages/landing_pages/MasterLandingpage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/sign-up-completed',
    element: <SignupCompleted />
  },
  {
    path: '/sign-peronal-details',
    element: <SignPersonalDetails />
  },
  {
    path: '/sign-business-details',
    element: <SignBusinessDetails />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/maintenance',
    element: <Maintenance />
  },
  {
    path: '/not-found',
    element: <Page404 />
  },
  {
    path: '/desktop',
    element: <Desktop1 />
  },
  {
    path: '/seller-listing-details',
    element: <SellerListingDetailsPage />
  },
  {
    path: '/dashboard-seller',
    element: <DashboardSeller />
  },
  {
    path: '/buyers-evaluation',
    element: <BuyersEvaluation />
  },
  {
    path: '/midmarker-seller-overview',
    element: <MidmarketSellerOverview />
  },
  {
    path: '/start-up-seller-listing-page',
    element: <StartupSellerLisitngDetailsPage />
  },
  {
    path: '/my-lisitng-start-up-seller',
    element: <MyListingStartupSeller />
  },
  {
    path: '/evaluate-buyer-start-up-seller',
    element: <EvaluateBuyerStartupSeller />
  },
  {
    path: '/evaluate-buyer-start-up-seller-response',
    element: <EvaluateBuyerStartupSellerResponse />
  },
  {
    path: '/start-up-seller-overview',
    element: <StartSellerOverview />
  },
  {
    path: '/buyside-landing-page',
    element: <BuysideLandingPage />
  },
  {
    path: '/sellside-landing-page',
    element: <SellSideLandingPage />
  },
  {
    path: '/pricing-plans',
    element: <PricingPlans />
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
  {
    path: '/faq',
    element: <FAQ />
  },
  {
    path: '/about-us',
    element: <AboutUs />
  },
  {
    path: '/start-ip-landing-page-early-stage',
    element: <StartupLandingPageEarlyStage />
  },
  {
    path: '/investor-landing-page-early-stage',
    element: <InvestorLandingPageEarlyStage />
  },
  {
    path: '/master-landing-page',
    element: <MasterLandingpage />
  },
  {
    path: '/response-popup',
    element: <ResponsePopup />
  },
  {
    path: '/midmarket-landing-page',
    element: <MidMarketLandingPage />
  },
  {
    path: '/master-landing-page-early-stage',
    element: <MasterLandingPageEarlyStage />
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
