import brickMain from "../assets/cement.png";

const CementSecondfold = () => {
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
              THE FOUNDATION OF EVERY STRONG BUILD

            </span>

            <h2>
              Quality Cement for Dependable<br/> Construction

            </h2>

            <p>
              We supply quality cement selected to support strength, consistency, and dependable performance across a wide range of construction requirements.

            </p>

            <p>
              When combined with correctly graded aggregates, clean water, and an appropriate mix design, cement forms a strong binding material for concrete and masonry applications. Its consistent quality supports better mixing, placement, and finishing at the construction site.

            </p>

            <p>
              From foundations and columns to brickwork, plastering, flooring, and general repairs, our cement supply provides a reliable solution for residential, commercial, and infrastructure projects.
            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              CONSISTENT BINDING PERFORMANCE

            </span>

            <h3>Strength Starts with the Right Mix
</h3>

            <p>
              Quality cement creates an effective bond between sand and aggregates when used with the correct proportions. This supports dependable strength and durability across concrete and masonry applications.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              SUITABLE FOR EVERY BUILDING STAGE

            </span>

            <h3>One Essential Material, Many Uses
</h3>

            <p>
              Cement is suitable for foundations, columns, beams, slabs, masonry mortar, plastering, flooring, and repair work when the appropriate cement type and mix design are selected.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              CAREFULLY STORED AND SUPPLIED

            </span>

            <h3>Quality Protected Until Delivery
</h3>

            <p>
              Proper storage helps protect cement bags from moisture, hardening, and contamination. Our supply process focuses on securely packed and properly handled material for reliable on-site use.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default CementSecondfold;