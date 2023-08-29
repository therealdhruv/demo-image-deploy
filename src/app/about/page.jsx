"use client";
import React from "react";
import { Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";
import InterestsCard from "./InterestsCard";
import { interestsData } from "../../utils/constants";

const Page = () => {

  return (
    <>
      <div className="about-container">
        <section id="about">
          <Heading className="sub-heading" size="md" my={3} >
            ABOUT
          </Heading>
          <div className="about-layout-container">
            <Image
              className="profile-image"
              objectFit="shrink"
              src="/images/profile.png"
              alt="profile-image"
            />

            <div>
              <Heading size="xl" mb={3} >
                👋 Hey there
              </Heading>
              <br />
              <p>
                I&apos;m <span className="name">Vaheed</span>, a passionate software
                developer. I specialize in{" "}
                <span className="tech">Web Development</span>, crafting seamless
                user experiences and robust backend solutions. With a knack for
                problem-solving, I thrive on creating elegant code that makes an
                impact. I&apos;m always exploring new tools and techniques to
                stay at the forefront of the ever-evolving tech landscape.
              </p>
              <br />
              <p>
                📫 Open to collaborations and exciting projects, I&apos;m eager
                to connect with fellow developers and tech enthusiasts.
                Let&apos;s build something amazing together!
              </p>
              <p>
                Happy coding! 🖥️
                <br />
              </p>
            </div>
          </div>
        </section>

        <section id="interests">
          <Heading className="sub-heading" size="md" my={3} >
            INTERESTS
          </Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          >
            {interestsData.map((data, index) => {
              return (
                <InterestsCard
                  interest={data.interest}
                  icon={data.icon}
                  key={index}
                />
              );
            })}
          </SimpleGrid>
        </section>
      </div>
    </>
  );
};

export default Page;
