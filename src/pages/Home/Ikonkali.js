import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function Ikonkali() {
  return (
    <div>
      <h1>Salom</h1>

      <FontAwesomeIcon icon={solid("user-secret")} />

      <FontAwesomeIcon icon={brands("facebook")} />
    </div>
  );
}

export default Ikonkali;
