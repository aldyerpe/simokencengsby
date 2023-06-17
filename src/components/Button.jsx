export default function Button (props) {
  const {label, tema = 'bg-[#373737] text-white', tipe} = props;
  return (
    <button className={tema + ' px-4 py-2 rounded-md ring-2 ring-[#373737] font-semibold min-w-[100px]'} type={tipe} {...props}>
    {label}
    </button>
  )
}
