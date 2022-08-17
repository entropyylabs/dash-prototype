import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        style={{ background: "#000" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div>
        Choose collection: <strong>{data.color}</strong>
      </div>
      <select name="" id="">
        <option value="">
          Collection 1 - 0x63090e54898bBC72293973E58433fa9095E8d555
        </option>
        <option value="">
          Magic punks - 0x02899E377A55F21F13B2615C573F16012a2FF398
        </option>
        <option value="">
          Dev NFTs - 0x5abdadF7A50c98aE944aD2fe8647170be7bC2D9f
        </option>
      </select>
      <Handle
        type="target"
        position="bottom"
        style={{ background: "#000" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </>
  );
});
