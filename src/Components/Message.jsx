import { useRouteInfo } from "../hooks/useRouteInfo"

export const Message = () => {
  const {message, iconClass} = useRouteInfo()
  return (
    <div className="intro text-center">
      <span className="intro_big_icon"><i className={iconClass}></i></span>
      <p className="intro_mensaje mb-0" data-aos="fade-left"><span className="intro_icon p-1"><i className={iconClass}></i></span> {message}</p>
    </div>
  )
}
