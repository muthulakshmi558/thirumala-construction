import brickMain from "../assets/septictank_ring.png";

const SeptictankSecondfold = () => {
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
              BUILT FOR RELIABLE SANITATION

            </span>

            <h2>
              Strong Concrete Rings for <br/> Lasting Performance

            </h2>

            <p>
             Our precast concrete septic tank rings are manufactured to provide a strong and practical solution for underground sanitation and wastewater containment systems.

            </p>

            <p>
              Produced using a carefully controlled concrete mix, each ring is designed with consistent dimensions and a durable structure. The circular profile supports even load distribution and helps the assembled tank withstand surrounding soil pressure.

            </p>

            <p>
              The precast design makes transportation, positioning, and installation more convenient when compared with fully cast-in-place construction. Multiple rings can be assembled to achieve the required tank depth based on project needs.

            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              ACCURATE AND UNIFORM SHAPE

            </span>

            <h3>Designed for Better Alignment
</h3>

            <p>
              Consistent circular dimensions help each ring align properly during installation. This supports stable stacking, cleaner joint placement, and a well-structured septic tank assembly.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
FASTER AND FLEXIBLE INSTALLATION
            </span>

            <h3>A Practical Modular Solution
</h3>

            <p>
              The precast ring format simplifies on-site installation and allows the required tank depth to be created using multiple rings. It is a convenient solution for homes, commercial buildings, farms, and rural sanitation projects.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              SUSTAINABLE CONSTRUCTION
            </span>

            <h3>Designed for Better Buildings</h3>

            <p>
              Our manufacturing approach focuses on creating construction
              materials that combine performance with responsible
              production. With reliable strength and long-lasting
              durability, our bricks help create buildings designed for
              the future.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default SeptictankSecondfold;