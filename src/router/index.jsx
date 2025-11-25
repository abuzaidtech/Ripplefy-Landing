import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/index.jsx";
import LayoutOne from "../components/layout/multi-page/LayoutOne.jsx";
import LayoutThirteen from "../components/layout/multi-page/LayoutThirteen.jsx";
import LayoutTwelve from "../components/layout/multi-page/LayoutTwelve.jsx";
import ErrorPage from "../error-page.jsx";
import AboutUs from "../page/about-us/index.jsx";
import ResetPassword from "../page/auth/ResetPassword.jsx";
import SignIn from "../page/auth/SignIn.jsx";
import SignUp from "../page/auth/SignUp.jsx";
import BlogPage from "../page/blog/index.jsx";
import SingleBlogPage from "../page/blog/SingleBlog.jsx";
import ContactUs from "../page/contact-us/index.jsx";
import HomeOne from "../page/home/HomeOne.jsx";
import Pricing from "../page/pricing/index.jsx";
import ServicePage from "../page/service/index.jsx";
import SingleService from "../page/service/SingleService.jsx";
import ComingSoonPage from "../page/utility/ComingSoon.jsx";
import FaqPage from "../page/utility/Faq.jsx";
import TermsAndConditionPage from "../page/utility/TermsAndCondition.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutOne />,
				children: [
					{
						path: "/",
						element: <HomeOne />,
					},
					{
						path: "about-us",
						element: <AboutUs />,
					},
					{
						path: "contact-us",
						element: <ContactUs />,
					},
					{
						path: "faq",
						element: <FaqPage />,
					},
					{
						path: "terms-and-condition",
						element: <TermsAndConditionPage />,
					},
					{
						path: "error-page",
						element: <ErrorPage />,
					},
					{
						path: "pricing",
						element: <Pricing />,
					},
					{
						path: "blog",
						element: <BlogPage />,
					},
					{
						path: "single-blog",
						element: <SingleBlogPage />,
					},
					{
						path: "service",
						element: <ServicePage />,
					},
					{
						path: "single-service",
						element: <SingleService />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutTwelve />,
				children: [
					{
						path: "coming-soon",
						element: <ComingSoonPage />,
					},
				],
			},
			{
				path: "/",
				element: <LayoutThirteen />,
				children: [
					{
						path: "sign-up",
						element: <SignUp />,
					},
					{
						path: "sign-in",
						element: <SignIn />,
					},
					{
						path: "reset-password",
						element: <ResetPassword />,
					},
				],
			},
		],
	},
]);
