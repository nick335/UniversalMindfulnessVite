
interface props {
  inputLabel: string,
  inputDescInfo: string,
}

const InputDesc = ({ inputLabel, inputDescInfo }: props) => {
  return (
    <div className="font-inter">
      <h4 className="font-semibold text-[#1D2B4F] capitalize">{inputLabel}</h4>
      <p className="text-sm text-[#8692A6] mt-2">{inputDescInfo} </p>
    </div>
  )
}

export default InputDesc
