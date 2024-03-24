import { BsHouse } from "react-icons/bs";

const convertTime = (time) => {
  const timeParts = time.split(":");

  let hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);

  let meridium = "AM";

  if (hours >= 12) {
    meridium = "PM";

    if (hours > 12) {
      hours -= 12;
    }
  }

  return (
    hours.toString().padStart(2) +
    ":" +
    minutes.toString().padStart(2, "0") +
    " " +
    meridium
  );
};

export default convertTime;
