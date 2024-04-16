import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <h1>Esto es react</h1>
    </StrictMode>
);