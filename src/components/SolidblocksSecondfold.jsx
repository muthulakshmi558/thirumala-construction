import SolidBlock from "../assets/solid_blocks.png";

const SolidblockSecondfold = () => {
  return (
    <>
      {/* FIRST FOLD */}
      <section className="bricks-intro">
        <div className="bricks-container">

          <div className="bricks-intro-image">
            <img
              src={SolidBlock}
              alt="Quality Bricks"
            />
          </div>

          <div className="bricks-intro-content">
            <span className="bricks-small-title">
                ENGINEERED FOR LASTING STRENGTH
            </span>

            <h2>
              Solid Strength for Reliable <br/> Construction

            </h2>

            <p>
              Our solid concrete blocks are manufactured using a carefully controlled blend of cement, quality aggregates, and water to deliver dependable strength and a consistent finish.

            </p>

            <p>
              Their dense and robust structure makes them a practical choice for residential buildings, commercial spaces, boundary walls, foundations, and other demanding masonry applications.

            </p>

            <p>
              Every block is produced with attention to accurate dimensions, surface quality, and uniformity. This helps improve wall alignment, supports smoother construction, and reduces unnecessary material wastage during installation.

            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              BUILT FOR TOUGH APPLICATIONS

            </span>

            <h3>Dependable Strength and Stability
</h3>

            <p>
              The dense construction of our solid blocks provides dependable strength for demanding masonry work. They are suitable for projects where durability, structural stability, and long-term performance are important.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
PRECISION IN EVERY BLOCK
            </span>

            <h3>Consistent Size. Cleaner Construction.
</h3>

            <p>
              Our solid blocks are manufactured with close attention to shape, dimensions, and finish. Their uniform profile supports better wall alignment, cleaner joints, and an efficient construction process.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
A PRACTICAL BUILDING SOLUTION
            </span>

            <h3>Reliable Performance for Every Project
</h3>

            <p>
              Suitable for homes, commercial buildings, foundations, boundary walls, and industrial applications, our solid blocks offer a versatile and dependable solution for modern construction requirements.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default SolidblockSecondfold;