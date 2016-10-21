/* eslint-disable jsx-a11y/href-no-hash */
import { storiesOf } from "@kadira/storybook";
import { linkTo } from "@kadira/storybook-addon-links";
import centered from "../.storybook/decorators/centered";

storiesOf("Junction", module)
  .addDecorator(centered)
  .add("Introduction", () => (
    <div className="locked-ends locked-sides soft-double background--light-secondary floating">
      <div className="floating__item text-left one-whole">
        <h1 className="uppercase flush-bottom soft-half-bottom">Junction</h1>
        <a onClick={linkTo("Junction", "Structure")} href="#" className="italic h6">A Compositional Styling Framework</a>
      </div>
    </div>
  ))
  .add("Structure", () => (
    <div className="locked-ends locked-sides soft-double background--light-secondary floating">
      <div className="floating__item text-left one-whole">
        <h1 className="flush-bottom soft-half-bottom">Structure</h1>
        <a href="#" onClick={linkTo("Junction", "Elements")}>
          <h4 className="flush-bottom soft-half-bottom">Elements</h4>
        </a>
        <p>Elements are used to style native html elements and items like native elements (i.e icons). These can vary from headers to images to iframes. Some elements also create helper classes based on the base element.</p>
        <a href="#" onClick={linkTo("Junction", "Components")}>
          <h4 className="flush-bottom soft-half-bottom">Components</h4>
        </a>
        <p>Components are typically made up of multiple (sometimes nested) markup elements. They are styled more for layout and utility than traditional UI libraries. Components are things like cards, grids, and panels.</p>
        <a href="#"onClick={linkTo("Junction", "Helpers")}>
          <h4 className="flush-bottom soft-half-bottom">Helpers</h4>
        </a>
        <p>Helpers is where from most of the magic of the echo architecture comes. These are namespaced for breakpoints, and can be used in conjuction to create complex and unique UI without custom css. An example of some helpers are things like text controls, padding controls, and event position controls.</p>
        <a href="#" onClick={linkTo("Junction", "Overrides")}>
          <h4 className="flush-bottom soft-half-bottom">Overrides</h4>
        </a>
        <p>Used sparingly, overrides allow for forcing a style from higher in the sheet than custom later code. In practice, overrides are rarely needed, but when used, they allow for absolute control over display. An example override is a hidden utility to force an element to not be displayed.</p>
      </div>
    </div>
  ))
  .add("Elements", () => (
    <div className="locked-ends locked-sides soft-double background--light-secondary floating">
      <div className="floating__item text-left one-whole">
        <h1 className="flush-bottom soft-half-bottom">Elements</h1>
        <div className="grid">
          <div className="grid__item one-third@palm-wide-and-up">
            <ul className="soft-left">
              <li onClick={linkTo("Buttons")}>
                <a href="#"><h6>Buttons</h6></a>
              </li>
              <li onClick={linkTo("Social Buttons")}>
                <a href="#"><h6>Social Buttons</h6></a>
              </li>
              <li onClick={linkTo("Form")}>
                <a href="#"><h6>Forms</h6></a>
              </li>
              <li onClick={linkTo("HorizontalRule")}>
                <a href="#"><h6>Horizontal Rule</h6></a>
              </li>
              <li onClick={linkTo("Icons")}>
                <a href="#"><h6>Icons</h6></a>
              </li>
            </ul>
          </div>
          <div className="grid__item one-third@palm-wide-and-up">
            <ul className="soft-left">
              <li onClick={linkTo("Social Icons")}>
                <a href="#"><h6>Social Icons</h6></a>
              </li>
              <li onClick={linkTo("IFrame")}>
                <a href="#"><h6>iFrame</h6></a>
              </li>
              <li onClick={linkTo("Image")}>
                <a href="#"><h6>Images</h6></a>
              </li>
              <li onClick={linkTo("Input")}>
                <a href="#"><h6>Inputs</h6></a>
              </li>
              <li onClick={linkTo("Labels")}>
                <a href="#"><h6>Labels</h6></a>
              </li>
            </ul>
          </div>
          <div className="grid__item one-third@palm-wide-and-up">
            <ul className="soft-left">
              <li onClick={linkTo("Labels")}>
                <a href="#"><h6>Labels</h6></a>
              </li>
              <li onClick={linkTo("Links")}>
                <a href="#"><h6>Links</h6></a>
              </li>
              <li onClick={linkTo("Lists")}>
                <a href="#"><h6>Lists</h6></a>
              </li>
              <li onClick={linkTo("Sections")}>
                <a href="#"><h6>Sections</h6></a>
              </li>
              <li onClick={linkTo("Select")}>
                <a href="#"><h6>Select</h6></a>
              </li>
              <li onClick={linkTo("TextArea")}>
                <a href="#"><h6>TextArea</h6></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Components", () => (
    <div className="locked-ends locked-sides soft-double background--light-secondary floating">
      <div className="floating__item text-left one-whole">
        <h1 className="flush-bottom soft-half-bottom">Components</h1>
        <div className="grid">
          <div className="grid__item one-third@palm-wide-and-up">
            <ul className="soft-left">
              <li onClick={linkTo("Accordions")}>
                <a href="#"><h6>Accordions</h6></a>
              </li>
              <li onClick={linkTo("Background")}>
                <a href="#"><h6>Backgrounds</h6></a>
              </li>
              <li onClick={linkTo("Cards")}>
                <a href="#"><h6>Cards</h6></a>
              </li>
              <li onClick={linkTo("FixedRatios")}>
                <a href="#"><h6>Fixed Ratios</h6></a>
              </li>
              <li onClick={linkTo("Floating")}>
                <a href="#"><h6>Floating</h6></a>
              </li>
            </ul>
          </div>
          <div className="grid__item one-third@palm-wide-and-up">
            <ul className="soft-left">
              <li onClick={linkTo("Grids")}>
                <a href="#"><h6>Grids</h6></a>
              </li>
              <li onClick={linkTo("Inputs")}>
                <a href="#"><h6>Inputs</h6></a>
              </li>
              <li onClick={linkTo("Modals")}>
                <a href="#"><h6>Modals</h6></a>
              </li>
              <li onClick={linkTo("Overlay")}>
                <a href="#"><h6>Overlays</h6></a>
              </li>
              <li onClick={linkTo("Panels")}>
                <a href="#"><h6>Panels</h6></a>
              </li>
            </ul>
          </div>
          <div className="grid__item one-third@palm-wide-and-up">
            <ul className="soft-left">
              <li onClick={linkTo("Progress")}>
                <a href="#"><h6>Progress</h6></a>
              </li>
              <li onClick={linkTo("Toggles")}>
                <a href="#"><h6>Toggles</h6></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Helpers", () => (
    <div className="locked-ends locked-sides soft-double background--light-secondary floating">
      <div className="floating__item text-left one-whole">
        <h1 className="flush-bottom soft-half-bottom">Helpers</h1>
        <div className="grid">
          <div className="grid__item one-third@palm-wide-and-up">
            <ul className="soft-left">
              <li onClick={linkTo("Constrain")}>
                <a href="#"><h6>Constrain</h6></a>
              </li>
              <li onClick={linkTo("Displays")}>
                <a href="#"><h6>Displays</h6></a>
              </li>
              <li onClick={linkTo("Float")}>
                <a href="#"><h6>Float</h6></a>
              </li>
              <li onClick={linkTo("Flush")}>
                <a href="#"><h6>Flush</h6></a>
              </li>
              <li onClick={linkTo("Hard")}>
                <a href="#"><h6>Hard</h6></a>
              </li>
            </ul>
          </div>
          <div className="grid__item one-third@palm-wide-and-up">
            <ul className="soft-left">
              <li onClick={linkTo("Locked")}>
                <a href="#"><h6>Locked</h6></a>
              </li>
              <li onClick={linkTo("Outlines")}>
                <a href="#"><h6>Outlines</h6></a>
              </li>
              <li onClick={linkTo("Push")}>
                <a href="#"><h6>Push</h6></a>
              </li>
              <li onClick={linkTo("Push Back")}>
                <a href="#"><h6>Push Back</h6></a>
              </li>
              <li onClick={linkTo("Rounded Corners")}>
                <a href="#"><h6>Rounded Corners</h6></a>
              </li>
            </ul>
          </div>
          <div className="grid__item one-third@palm-wide-and-up">
            <ul className="soft-left">
              <li onClick={linkTo("Scrollable")}>
                <a href="#"><h6>Scrollable</h6></a>
              </li>
              <li onClick={linkTo("Shapes")}>
                <a href="#"><h6>Shapes</h6></a>
              </li>
              <li onClick={linkTo("Soft")}>
                <a href="#"><h6>Soft</h6></a>
              </li>
              <li onClick={linkTo("Text")}>
                <a href="#"><h6>Text</h6></a>
              </li>
              <li onClick={linkTo("Transitions")}>
                <a href="#"><h6>Transitions</h6></a>
              </li>
              <li onClick={linkTo("Type")}>
                <a href="#"><h6>Type</h6></a>
              </li>
              <li onClick={linkTo("Widths")}>
                <a href="#"><h6>Widths</h6></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ))
  .add("Overrides", () => (
    <div className="locked-ends locked-sides soft-double background--light-secondary floating">
      <div className="floating__item text-left one-whole">
        <h1 className="flush-bottom soft-half-bottom">Overrides</h1>
        <div className="grid">
          <div className="grid__item one-third@palm-wide-and-up">
            <ul className="soft-left">
              <li onClick={linkTo("Hidden")}>
                <a href="#"><h6>Hidden</h6></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ))
  ;
