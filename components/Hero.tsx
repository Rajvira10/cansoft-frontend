import { getHero } from "@/libs/graphqlQueries";

const Hero = async ({}) => {
  const hero = await getHero();

  return (
    <div style={{ backgroundColor: "#e9ecef" }}>
      <div className="container2" style={{ padding: "80px 0" }}>
        <div className="row">
          <div className="col">
            <p className="display-3" style={{ fontWeight: "300 !important" }}>
              {hero.title}
            </p>
            <div className="mb-3">{hero.content?.replace(/<[^>]+>/g, "")}</div>
            <button className="btn btn-primary btn-lg">Learn more »</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
