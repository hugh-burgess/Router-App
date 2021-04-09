import { useHistory } from "react-router-dom";

export default function HomeButton() {
  const history = useHistory();
  function handleOnClick() {
    // history.goBack();
    history.push("/");
  }

  return (
    <div>
      <br />
      <button onClick={handleOnClick}>Home</button>
    </div>
  );
}
