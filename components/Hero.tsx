"use client";
import { getHero } from "@/libs/graphqlQueries";
import React, { FC, useState, useEffect } from "react";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const [hero, setHero] = useState({ title: "", content: "" });
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    try {
      const allMenuItems = await getHero();
      setHero(allMenuItems.data.page);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Mark loading as complete
    }
  };

  return (
    <div style={{ backgroundColor: "#e9ecef" }}>
      <div className="container2" style={{ padding: "80px 0" }}>
        <div className="row">
          <div className="col">
            {isLoading ? (
              <div className="text-center">
                <div className="spinner-border " role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                <p
                  className="display-3"
                  style={{ fontWeight: "300 !important" }}
                >
                  {hero.title}
                </p>
                <div className="mb-3">
                  {hero.content?.replace(/<[^>]+>/g, "")}
                </div>
                <button className="btn btn-primary btn-lg">Learn more »</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
