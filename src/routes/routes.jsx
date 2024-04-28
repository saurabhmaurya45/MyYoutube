import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Index from "../pages/index";
import Testing from "../pages/testing";
import SingleVideo from "../pages/singleVideo";
import SearchPage from "../pages/searchPage";
import ApiLimitReached from "../pages/apiLimitReached";
import ErrorPage from "../pages/errorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: 'watch/:id',
                element: <SingleVideo />
            },
            {
                path: 'search/',
                element: <SearchPage />
            },
            {
                path: 'limitExceed/',
                element: <ApiLimitReached />
            },
            {
                path: '/testing',
                element: <Testing />
            },
        ],

        errorElement : <ErrorPage />
    }
])

export default routes;