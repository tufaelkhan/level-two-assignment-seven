export default function FromSubmit({
  children,
  loading,
}: {
  children: string;
  loading?: boolean;
}) {
  return (
    <button className=" btn btn-primary w-full mt-3" type="submit">
      {loading ? (
        <span className=" loading loading-spinner"></span>
      ) : (
        `${children}`
      )}
    </button>
  );
}
