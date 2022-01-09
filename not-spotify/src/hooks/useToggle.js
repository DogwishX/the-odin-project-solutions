import { useState } from "react";

function useToggle(defaultValue) {
  const [isToggled, setIsToggled] = useState(defaultValue);

  function toggle() {
    setIsToggled(!isToggled);
  }

  return [isToggled, toggle];
}

export default useToggle;
