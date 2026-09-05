import brickMain from "../assets/interlock_mud_bricks.png";

const InterlockMudSecondfold = () => {
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
SMARTER EARTHEN BUILDING SOLUTIONS
            </span>

            <h2>
              Interlocking Mud Bricks for <br/>Efficient Construction

            </h2>

            <p>
              Our interlocking mud bricks combine natural earth-based materials with a precision-moulded design to support efficient, organised, and visually distinctive wall construction.

            </p>

            <p>
              Each brick is formed with an interlocking profile that helps adjoining units align securely during installation. This systematic arrangement can simplify wall positioning and reduce the need for thick mortar joints when used with the recommended construction method.

            </p>

            <p>
              With accurate planning, suitable foundations, proper moisture protection, and professional installation, interlocking mud bricks offer a practical alternative for modern and environmentally conscious construction.
            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
PRECISION INTERLOCKING DESIGN
            </span>

            <h3>Faster and Cleaner Alignment
</h3>

            <p>
              The specially moulded interlocking profile helps adjoining bricks align accurately during construction. This supports organised installation, uniform wall courses, and a cleaner overall finish.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
NATURAL EARTHEN CHARACTER
            </span>

            <h3>Comfort with a Distinctive Finish
</h3>

            <p>
              The earth-based composition gives walls a warm, natural appearance that works well with exposed architectural designs. Its material character can also support comfortable indoor spaces when incorporated into a properly designed building.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
EFFICIENT MATERIAL USAGE
            </span>

            <h3>A Practical Construction Approach
</h3>

            <p>
              Interlocking brick systems may reduce dependence on thick conventional mortar joints and minimise unnecessary material usage. Their modular form makes them suitable for thoughtfully planned residential and sustainable building projects.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default InterlockMudSecondfold;