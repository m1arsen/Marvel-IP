import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"
import ErrorMessage from "../../errorMessage/ErrorMessage"

import './404.scss';

const Page404 = () => {
  return (
    <div>
      <Helmet>
        <meta
        name="description"
        content={`Page not found`}
        />
        <title>Page not found</title>
      </Helmet>
      <ErrorMessage/>
      <p className="notFound__message">doesn't exist</p>
      <Link to="/Marvel-IP" className="notFound__backBtn">Back to main page</Link>
    </div>
  )
}

export default Page404;