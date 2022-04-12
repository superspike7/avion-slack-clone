export default function ErrorMessage({ errors }) {
  return (
    <div>
      {errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
      })}
    </div>
  );
}
