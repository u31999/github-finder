import { useEffect, useContext } from "react"
import {useParams} from 'react-router-dom'
import GithubContext from "../context/github/GithubContext"

function User() {
    const {getSingleUser, user} = useContext(GithubContext)
    const params = useParams()

    useEffect(()=> {
        getSingleUser(params.login)
    }, [])
  return (
    <div>
      User
    </div>
  )
}

export default User
