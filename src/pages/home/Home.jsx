import React from "react";
import "./Home.scss";
import { Featured } from "../../components/featured/Featured";
import { TrustedBy } from "../../components/trustedBy/TrustedBy";
import { cards, projects } from "../../data";
import { Slide } from "../../components/slide/Slide";
import { CatCard } from "../../components/catCard/CatCard";
import { Features } from "../../components/features/Features";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
export const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <Features />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard card={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};
