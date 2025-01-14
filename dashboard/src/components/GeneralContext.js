import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const [buyWindowData, setBuyWindowData] = useState(null);

  const handleOpenBuyWindow = (uid, price) => {
    setBuyWindowData({ uid, price });
  };

  const handleCloseBuyWindow = () => {
    setBuyWindowData(null);
  };

  const renderBuyActionWindow = () => {
    if (!buyWindowData) return null;
    const { uid, price } = buyWindowData;
    return <BuyActionWindow uid={uid} price={price} />;
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {children}
      {renderBuyActionWindow()}
    </GeneralContext.Provider>
  );
};

GeneralContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralContext;
