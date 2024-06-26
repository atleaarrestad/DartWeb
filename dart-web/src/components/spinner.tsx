import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Spinner() {
  return <FontAwesomeIcon icon={faSpinner} className="animate-spin" />;
}

export default Spinner;
