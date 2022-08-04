import { generateId } from '../../utils/util';
import './styles/styled-input.css';

type StyledInputProps = {
  type: string;
  placeholder: string;
}

function StyledInput({type, placeholder} : StyledInputProps ) : JSX.Element {
  const id = generateId();
  return (
    <input type={type} className='styled-input' name={`styled-input-${id}`} id={`styled-input-${id}`} placeholder={placeholder}/>
  )
}

export default StyledInput;
