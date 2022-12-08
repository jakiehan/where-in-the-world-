import React, { memo } from "react";
import { StyledControls } from "./Controls.styled";
import Search from "../Search/Search";
import CustomSelect from "../CustomSelect/CustomSelect";

const Controls = () => {
  const options = {
    title: "Filter by Region",
    optionsMap: ["Africa", "America", "Asia", "Europe", "Oceania"],
  };

  return (
    <StyledControls>
      <Search />
      <CustomSelect options={options} />
    </StyledControls>
  );
};

export default memo(Controls);
