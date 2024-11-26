import React from "react";
import Layout from "../../layout/Layout";

export default function CVPAGE() {
  return (
    <Layout>
      <div className="w-full bg-gray-700 py-8 flex justify-center items-center">
        {/* Responsive Embed */}
        <div
          className="bg-white shadow-lg border border-gray-300"
          style={{
            width: "90%", // Adjusts width based on the screen
            maxWidth: "794px", // Maximum width (A4 size in pixels)
            aspectRatio: "210 / 297", // Maintains A4 aspect ratio
          }}
        >
          <embed
            src="./Resume.pdf"
            className="w-full h-full"
            type="application/pdf"
          />
        </div>
      </div>
    </Layout>
  );
}
