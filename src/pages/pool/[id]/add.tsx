import { useHeaderHeight } from "@atoms";
import AddPool from "@views/AddPool";
import React from "react";

const AddPoolPage = () => {
  const [headerHeight] = useHeaderHeight();
  return (
    <div style={{ marginTop: headerHeight }}>
      <AddPool />
    </div>
  );
};

export default AddPoolPage;
