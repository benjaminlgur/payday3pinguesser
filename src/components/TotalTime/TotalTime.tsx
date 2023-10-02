import humanizeDuration from "humanize-duration";

interface Props {
  miliseconds: number;
}

const TotalTime = ({ miliseconds }: Props) => {
  const duration = humanizeDuration(miliseconds);
  return (
    <p className="centered-container">
      {"It should take " +
        duration +
        " plus time to input codes to guess the code in the worst case."}
    </p>
  );
};

export default TotalTime;
