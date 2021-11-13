import {FwButton} from "@freshworks/crayons/react";
export default Test

function Test () {
  const handleClick = (e: any) => alert("Button Clicked")
  return (<>
  <FwButton onClick={handleClick}>Button</FwButton>
  <FwButton color="secondary"> OK </FwButton>
  <FwButton color="danger"> Don't Click </FwButton>
  <FwButton color="link"> Link Button </FwButton>
  <FwButton color="text"> Plain Text Button </FwButton>
  </>)
}

