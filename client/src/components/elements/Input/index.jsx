const Input = ({ placeholder, id, type, value, register }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    {...register(id)}
  />
);
export default Input;
