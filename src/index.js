
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react'
import './style.css'
import { createRoot } from "react-dom/client";

import Main from "./main";
import Aside from "./aside";

import Single from './single';
import Basic from "./layout/basic";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const feather = require('feather-icons');

setTimeout ( () => {
    feather.replace();
}, 1000);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="col-md-8 py-4">
                        <Main></Main>
                    </div>
                    <div className="col-md-4 py-4">
                        <Aside></Aside>
                    </div>
                </>
            },
            {
                path: "detalle/:slug",
                element: <Single />,
            },
        ],
    },
]);


const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
