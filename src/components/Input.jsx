export default function Input(props) {
  const { id, label, tipe } = props;
  return (
    <div className='flex items-center justify-between w-full'>
      <label className='font-semibold' htmlFor={id}>
        {label}
      </label>
      <input
        className='w-[260px] rounded-md'
        id={id}
        type={tipe}
        name={id}
        autoComplete='off'
      />
    </div>
  );
}
