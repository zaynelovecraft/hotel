import axios from "axios";

const push = async () => {
  await axios.post("/api/add-google-date")
};

const success = () => {
  return (
    <div>
      <button onClick={push}>push</button>
    </div>
  );
};

export default success;
