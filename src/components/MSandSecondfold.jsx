import brickMain from "../assets/msand.png";

const MSandSecondfold = () => {
  return (
    <>
      {/* FIRST FOLD */}
      <section className="bricks-intro">
        <div className="bricks-container">

          <div className="bricks-intro-image">
            <img
              src={brickMain}
              alt="Quality Bricks"
            />
          </div>

          <div className="bricks-intro-content">
            <span className="bricks-small-title">
              PRECISION-MADE FOR MODERN CONSTRUCTION

            </span>

            <h2>
              Consistent M Sand for <br />Stronger Builds

            </h2>

            <p>
              Our Manufactured Sand is produced by crushing carefully selected hard stones into fine, well-graded particles suitable for modern construction requirements.

            </p>

            <p>
              Its controlled particle size and consistent texture support better mixing and workability when used in properly designed concrete and masonry applications. The angular particles help create effective bonding with cement paste.

            </p>

            <p>
              Suitable for residential, commercial, and infrastructure projects, our M Sand provides a dependable material solution for strong and efficient construction.
            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              CONTROLLED PARTICLE QUALITY

            </span>

            <h3>Consistent Texture in Every Load
</h3>

            <p>
              Our M Sand is processed to achieve a uniform particle profile for dependable construction use. Consistent grading supports better mixing, improved workability, and reliable project results.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              STRONGER MATERIAL BONDING

            </span>

            <h3>Made for Reliable Construction
</h3>

            <p>
              The angular texture of manufactured sand supports effective bonding with cement paste when used with a correctly designed mix. It is suitable for concrete, block work, and other construction applications.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              A RESPONSIBLE ALTERNATIVE

            </span>

            <h3>Supporting Sustainable Construction
</h3>

            <p>
              Manufactured sand reduces dependence on naturally sourced river sand. Its controlled production and dependable availability make it a practical choice for present-day construction projects.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default MSandSecondfold;