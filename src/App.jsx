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
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
