import brickMain from "../assets/red_bricks.png";

const RedBricksSecondfold = () => {
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
TRADITIONAL MATERIAL. TRUSTED PERFORMANCE.
            </span>

            <h2>
              Quality Red Bricks for<br/> Stronger Walls

            </h2>

            <p>
             Our red clay bricks are carefully manufactured to provide dependable strength, uniform shape, and lasting performance for everyday construction needs.




            </p>

            <p>
              Made from selected clay and properly fired under controlled conditions, these bricks develop the hardness and stability required for reliable masonry work. Their textured surface supports effective bonding with mortar during wall construction.

            </p>

            <p>
              Ideal for residential buildings, commercial spaces, compound walls, partitions, and renovation projects, our red bricks offer a trusted and versatile solution for quality construction.
            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
DEPENDABLE MASONRY STRENGTH
            </span>

            <h3>Built for Long-Term Performance
</h3>

            <p>
              Properly manufactured and fired red bricks provide reliable strength and stability for masonry construction. They are suitable for creating durable walls across residential and commercial projects.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
CONSISTENT SHAPE AND FINISH
            </span>

            <h3>Better Alignment. Cleaner Walls.
</h3>

            <p>
              Our red bricks are selected for consistent size, straight edges, and a uniform finish. This supports accurate placement, balanced mortar joints, and cleaner wall construction.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              VERSATILE BUILDING MATERIAL

            </span>

            <h3>Suitable for Multiple Applications
</h3>

            <p>
             From internal partitions and exterior walls to compound walls and renovation work, red bricks provide a practical solution for a wide variety of building requirements.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default RedBricksSecondfold;