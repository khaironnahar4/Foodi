import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./Router/router";
import { RouterProvider } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
