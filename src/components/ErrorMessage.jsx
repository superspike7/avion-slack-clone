export default function ErrorMessage({ errors }) {
  return (
    <div className="border border-red-500 list-inside p-2 rounded-lg my-4">
      {errors.map((error, idx) => {
        return (
          <li className="text-red-500 text-lg font-semibold" key={idx}>
            {error}
          </li>
        );
      })}
    </div>
  );
}
