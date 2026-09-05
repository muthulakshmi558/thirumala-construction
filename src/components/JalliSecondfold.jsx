import brickMain from "../assets/jalli.png";

const JalliSecondfold = () => {
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
STRONG AGGREGATES FOR SOLID FOUNDATIONS
            </span>

            <h2>
              Quality Jalli for Reliable <br/>Concrete Work

            </h2>

            <p>
              Our construction-grade Jalli is produced from carefully selected hard stone and processed into uniformly sized coarse aggregates for dependable building applications.

            </p>

            <p>
             Its angular shape and textured surface support effective interlocking with cement paste and fine aggregates when used in a properly designed concrete mix. Correctly graded Jalli also helps create a dense and stable concrete structure.

            </p>

            <p>
              The material is screened to maintain consistent particle size and remove unwanted dust, soil, and oversized pieces. This supports better batching, mixing, placement, and overall construction quality.

            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
ANGULAR STONE STRENGTH
            </span>

            <h3>Better Interlocking in Concrete
</h3>

            <p>
              The crushed and angular profile of Jalli supports strong mechanical interlocking within a properly proportioned concrete mix. This helps create a stable aggregate framework for dependable construction.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              SCREENED FOR CONSISTENCY

            </span>

            <h3>Uniform Size for Better Mixing
</h3>

            <p>
              Our Jalli is screened to maintain consistent particle sizes and minimise unwanted dust and impurities. Uniform grading supports accurate batching and efficient concrete preparation.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              GRADES FOR MULTIPLE APPLICATIONS

            </span>

            <h3>The Right Aggregate for Every Job
</h3>

            <p>
              Different Jalli sizes can be supplied for foundations, RCC work, slabs, flooring bases, roads, landscaping, and drainage. The required grade should be selected according to the application and project specification.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default JalliSecondfold;