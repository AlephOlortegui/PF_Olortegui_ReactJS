import { useEffect } from "react"
import { useRouteInfo } from "../hooks/useRouteInfo"

export const DocTitle = () => {
  const {documentTitle} = useRouteInfo()
  useEffect(() => {
    document.title = documentTitle
  }, [documentTitle])
  
  return null
}
