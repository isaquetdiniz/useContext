import React, { createContext, useContext, useState } from 'react';

const testeContext = createContext(null);

export function ({ children }) {
  const [alerts, setAlerts] = useState([]);
  const addAlert = (alert) => {
    setAlerts((prevAlerts) => {
      return [...prevAlerts, alert];
    });
  };
  return (
    <SnackbarContext.Provider value={addAlert}>
      {children}
      <SnackBarContainer listAlerts={alerts} />
    </SnackbarContext.Provider>
  );
}

SnackBarProvider.propTypes = {
  children: PropTypes.element,
};

export const SnackBarConsumer = SnackbarContext.Consumer;
export const useSnackBar = () => useContext(SnackbarContext);
