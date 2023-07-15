import { useState } from "react";
import iconsillu from "../array/iconsillu";
import iconsfront from "../array/iconsfront";
import iconsback from "../array/iconsback";


const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const iconillustration = iconsillu.map(icon => {
    return (
      <div className="image-wrap">
        <img src={`${process.env.PUBLIC_URL}/icon-illustration/${icon}.svg`} alt="" />
      </div>)
  })
  const iconfront = iconsfront.map(icon => {
    return (
      <div className="image-wrap">
        <img src={`${process.env.PUBLIC_URL}/icon-front/${icon}.svg`} alt="" />
      </div>)
  })
  const iconback = iconsback.map(icon => {
    return (
      <div className="image-wrap">
        <img src={`${process.env.PUBLIC_URL}/icon-back/${icon}.svg`} alt="" />
      </div>)
  })


  return (
    <div className="container-tab">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Front-end
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Back-end
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Illustration
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >

          <div className="image-container">
            {iconfront}
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="image-container">
            {iconback}
          </div>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="image-container">
            {iconillustration}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tab;