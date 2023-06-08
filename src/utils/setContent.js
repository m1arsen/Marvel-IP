import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Skeleton from '../components/skeleton/Skeleton';

const setContent = (marvelProcess, Component, data) => {
  switch(marvelProcess) {
    case 'waiting':
      return <Skeleton/>;
    case 'loading':
      return <Spinner/>;
    case 'confirmed':
      return <Component data={data}/>
    case 'error':
      return <ErrorMessage/>;
    default:
      throw new Error('Unexpected procces state');
  }
}

export default setContent;