import { useState, useCallback } from 'react';

export const useAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClass, setAlertClass] = useState("");

  const setAlert = useCallback((message, type = "primary") => {
    setShowAlert(true);
    setAlertMessage(message);
    setAlertClass(type);
  }, []);

  const closeAlert = useCallback(() => setShowAlert(false), []);

  return { showAlert, alertMessage, alertClass, setAlert, closeAlert };
};

export const Alert = ({ dismissible, alertMessage, alertClass, ...props }) => {
  /* const handleClose = () => {
    if (props.closeAlert) {
      props.closeAlert(); // Solo se ejecuta si está definido
    } else {
      console.log("No se pasó closeAlert");
    }
  }; */
  let wrapperClass = dismissible ? `alert alert-${alertClass} alert-dismissible` : `alert alert-${alertClass}`
  return (
    <div className="alert-wrapper">
        <div className={wrapperClass}>
          <p className="mb-0">{alertMessage}</p>
          {dismissible && (
            <button type="button" className="btn-close" onClick={props.closeAlert} aria-label="Close"></button>
          )}
        </div>
    </div>
  );
};

