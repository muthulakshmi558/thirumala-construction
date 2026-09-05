import brickMain from "../assets/gravel.png";

const GravelSecondfold = () => {
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
DEPENDABLE GROUNDWORK FOR EVERY PROJECT
            </span>

            <h2>
              Quality Gravel for Stable and <br/>Efficient Construction

            </h2>

            <p>
              Our construction-grade gravel is carefully selected and screened to provide a dependable material solution for groundwork, drainage, road preparation, and landscaping applications.

            </p>

            <p>
              The combination of durable stone particles and suitable grading helps create a stable layer when the material is properly spread and compacted. It supports effective load distribution and prepares the ground for subsequent stages of construction.

            </p>

            <p>
              Gravel also allows water to move through the gaps between particles, making suitable grades useful for drainage beds and areas where surface-water management is required.

            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
STABLE BASE PREPARATION
            </span>

            <h3>Support from the Ground Up
</h3>

            <p>
              When properly spread and compacted, graded gravel creates a stable supporting layer for pathways, flooring bases, driveways, road work, and other groundwork applications.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
EFFECTIVE DRAINAGE SUPPORT
            </span>

            <h3>Helps Manage Excess Water
</h3>

            <p>
              The spaces between gravel particles allow water to pass through the layer. Suitable gravel grades can be used around foundations, landscape areas, and drainage systems to support water movement.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
VERSATILE OUTDOOR MATERIAL
            </span>

            <h3>Practical for Multiple Applications
</h3>

            <p>
              Gravel is suitable for road bases, pathways, driveways, drainage beds, landscaping, filling, and site preparation. The required material size and grading can be selected according to each application.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default GravelSecondfold;