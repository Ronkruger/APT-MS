import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <Spinner
    animation="border"
    role="status"
    variant="primary"
    style={{
        width: '50px',
        height: '50px',
        margin: 'auto',
        display: 'block',
    }}
    >

    </Spinner>
  );
};

export default Loader