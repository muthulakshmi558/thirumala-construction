import brickMain from "../assets/quarry_stone.png";

const QuarryStonesecondfold = () => {
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
NATURAL STONE FOR HEAVY-DUTY CONSTRUCTION
            </span>

            <h2>
              Strong Quarry Stone for <br/>Stable Foundations

            </h2>

            <p>
              Our quarry stones are carefully selected from durable natural rock to provide strength, stability, and dependable performance for demanding construction applications.

            </p>

            <p>
              The irregular shape and rough surface of each stone support effective interlocking when properly packed and laid. This makes quarry stone a practical material for foundations, retaining structures, compound walls, and other heavy masonry work.

            </p>

            <p>
              Suitable for residential, commercial, infrastructure, and landscaping projects, our quarry stone offers a strong and versatile material solution for long-lasting construction.
            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
NATURAL STONE STRENGTH
            </span>

            <h3>Built for Demanding Applications
</h3>

            <p>
              Selected from durable natural rock, quarry stone provides the strength and stability required for foundations, retaining walls, compound walls, and other heavy masonry applications.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
ROUGH INTERLOCKING SURFACE
            </span>

            <h3>Stable Placement and Bonding
</h3>

            <p>
              The irregular shape and textured surface of quarry stones support effective interlocking when correctly arranged. Proper packing and mortar application help create strong and stable stonework.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
VERSATILE CONSTRUCTION USE
            </span>

            <h3>From Foundations to Landscaping
</h3>

            <p>
              Quarry stones can be used for foundation work, retaining structures, boundary walls, drainage layers, erosion control, road bases, and decorative landscaping based on the selected stone size.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default QuarryStonesecondfold;