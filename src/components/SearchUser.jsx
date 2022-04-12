export default function SearchUser() {
  return (
    <>
      <label htmlFor="password" className="text-lg">Add A User:</label>
      <Select
        options={userOptions}
        onChange={(opt) => handleSelect(opt)}
        filterOption={createFilter({ ignoreAccents: false })}
      />
    </>
  );
}
