
export const Alert = ({alertMessage, alertClass, closeAlert}) => {
  return (
    <div className="alert-wrapper">
      <div className={`alert alert-${alertClass} alert-dismissible`}>
        <p className="mb-0">{alertMessage}</p>
        <button type="button" className="btn-close" onClick={closeAlert}  aria-label="Close"></button>
      </div>
    </div>
  )
}
