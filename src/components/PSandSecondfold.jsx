import brickMain from "../assets/psand.png";

const PSandSecondfold = () => {
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
REFINED FOR A SUPERIOR FINISH
            </span>

            <h2>
              Smooth P Sand for Perfect <br /> Plastering

            </h2>

            <p>
             Our Plastering Sand is specially processed to provide the fine and consistent texture required for smooth, neat, and durable wall finishes.

            </p>

            <p>
              Produced from carefully selected stone and processed through controlled crushing and screening, P Sand contains finer particles that support better workability and uniform mortar preparation.

            </p>

            <p>
              Its consistent grading helps the plaster spread evenly across interior and exterior surfaces. When used with the correct mortar mix, it supports improved bonding and helps achieve a clean finish with less surface variation.

            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              FINE AND CONSISTENT TEXTURE

            </span>

            <h3>Created for Smoother Finishes
</h3>

            <p>
              Our P Sand is processed to achieve the fine particle texture required for plastering applications. It helps create an even mortar mix and supports a smoother finish on walls and ceilings.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              BETTER WORKABILITY

            </span>

            <h3>Easy Mixing and Application
</h3>

            <p>
              Consistent grading makes the plastering mix easier to prepare, spread, and level. This supports efficient application and helps workers achieve clean, uniform surfaces.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
QUALITY FOR EVERY SURFACE
            </span>

            <h3>Interior and Exterior Applications
</h3>

            <p>
              Suitable for internal walls, external walls, ceilings, repair work, and renovation projects, our P Sand provides reliable performance across a wide range of plastering requirements.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default PSandSecondfold;