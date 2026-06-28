import React from "react";
import Card from "./Card";

const ScrollTrigger = () => {
  
    return (
    <Card>
      <div className="w-full flex flex-col gap-10">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-start gap-2.5">
          <h2 className="text-(--primary-txt) text-4xl font-bold">
            GSAPScrollTrigger
          </h2>
          <p className="text-(--accent-txt) text-xl font-semibold">
            The <span className="text-amber-500">morphSVG</span> plugin allows
            you to morph any SVG path into another, regardless of point count.
          </p>
        </div>

        
      </div>
    </Card>
  );
};

export default ScrollTrigger;
