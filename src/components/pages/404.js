import { Link } from "react-router-dom"
import ErrorMessage from "../errorMessage/ErrorMessage"

const Page404 = () => {
  return (
    <div>
      <ErrorMessage/>
      <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>doesn't exist</p>
      <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/Marvel-IP">Back to main page</Link>
    </div>
  )
}

export default Page404;