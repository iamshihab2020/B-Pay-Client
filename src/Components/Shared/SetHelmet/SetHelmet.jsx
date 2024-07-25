
import PropTypes from 'prop-types'; 
import { Helmet } from "react-helmet-async";

const SetHelmet = ({title}) => {
  return (
    <Helmet>
      <title>B-Pay | {title}</title>
    </Helmet>
  );
}

SetHelmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SetHelmet