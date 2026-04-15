import { createRoot } from "react-dom/client";
import { StrictMode } from "react"; 
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        <FrameworkListSearchFilter />
        <ResponsiveDesign />
     

    </div>
  </StrictMode>
);