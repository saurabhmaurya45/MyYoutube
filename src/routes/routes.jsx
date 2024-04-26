import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Index from "../pages/index";
import Testing from "../pages/testing";
import SingleVideo from "../pages/singleVideo";

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
                path: '/testing',
                element: <Testing />
            }
        ]

    }
])

export default routes;