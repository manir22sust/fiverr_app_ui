import React from "react";
import "./Home.scss";
import { Featured } from "../../components/featured/Featured";
import { TrustedBy } from "../../components/trustedBy/TrustedBy";
export const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
    </div>
  );
};
