import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import Heading from "../components/Heading";
import { GoTools } from "../components/Icons";
import styles from "./Skills.module.css";

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            id
            name
            tech
            icon {
              childImageSharp {
                fixed(width: 20, height: 20) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <section id="skills">
      <Heading icon={GoTools} title="Skills" />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {data.allSkillsJson.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className={`${styles.skill} md:mr-5 wow fadeIn`}
            style={{
              animationDelay: `${index * 100 + 100}ms`,
            }}
          >
            <div className="flex items-center">
              <GatsbyImage
                className="w-5 h-5 mr-5"
                {...node.icon.childImageSharp}
              />
              <div>
                <h7 className="text-s font-semibold leading-none">
                  {node.name}
                </h7>
                <h6
                  className="mt-2 leading-none"
                  style={{ fontSize: "0.75rem" }}
                >
                  ({node.tech})
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
