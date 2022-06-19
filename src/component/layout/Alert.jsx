import { useContext } from "react"
import {FaExclamationCircle} from 'react-icons/fa'
import AlertContext from "../../context/alert/AlertContext"

function Alert() {
    const {alert} = useContext(AlertContext)

  return alert !== null && (
    <div className="flex items-start mb-4 space-x-2 items-center">
        {alert.type === 'error' && (
            <FaExclamationCircle style={{color: 'rgb(238 98 100)'}}/>
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong>
        </p>
    </div>
  )
}

export default Alert
