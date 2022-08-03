import './styles/styled-input.css';

type StyledInputProps = {
  type: string;
  placeholder: string;
  id: number;
}

function StyledInput({type, placeholder, id} : StyledInputProps ) : JSX.Element {
  return (
    <input type={type} className='styled-input' name={`styled-input-${id}`} id={`styled-input-${id}`} placeholder={placeholder}/>
  )
}

export default StyledInput;
