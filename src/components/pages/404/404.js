import { Link } from "react-router-dom"
import ErrorMessage from "../../errorMessage/ErrorMessage"

import './404.scss';

const Page404 = () => {
  return (
    <div>
      <ErrorMessage/>
      <p className="notFound__message">doesn't exist</p>
      <Link to="/Marvel-IP" className="notFound__backBtn">Back to main page</Link>
    </div>
  )
}

export default Page404;