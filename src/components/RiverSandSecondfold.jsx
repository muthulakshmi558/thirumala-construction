import brickMain from "../assets/riversand.png";

const RiverSandSecondfold = () => {
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
NATURALLY GRADED FOR QUALITY CONSTRUCTION
            </span>

            <h2>
             Reliable River Sand for Better<br/> Workability

            </h2>

            <p>
              Our quality river sand is carefully sourced and screened to provide clean, naturally graded particles suitable for a wide range of construction applications.

            </p>

            <p>
             Its naturally rounded particle profile supports smooth mixing and good workability in mortar and concrete. The balanced texture helps materials spread evenly and makes on-site application more convenient.

            </p>

            <p>
              The sand is processed to remove unwanted oversized particles and visible impurities, helping maintain a consistent supply for dependable construction work.

            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              NATURALLY SMOOTH PARTICLES

            </span>

            <h3>Improved Mixing and Workability
</h3>

            <p>
              The naturally rounded particles of river sand support smooth mixing and easier application. This makes it a practical material for masonry mortar, plastering, flooring, and suitable concrete work.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              SCREENED FOR CONSISTENCY

            </span>

            <h3>Cleaner Material for Better Results
</h3>

            <p>
              Our river sand is carefully screened to remove oversized particles and visible unwanted materials. Consistent particle quality supports uniform mixing and dependable on-site performance.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              VERSATILE CONSTRUCTION USE

            </span>

            <h3>One Material, Multiple Applications
</h3>

            <p>
              Suitable for residential and commercial projects, river sand can be used for masonry, plastering, flooring, and approved concrete applications based on the required grading and mix design.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default RiverSandSecondfold;