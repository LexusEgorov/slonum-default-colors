import './styles/styled-checkbox.css';

type StyledCheckboxProps = {
  id: number;
};

function StyledCheckbox({id} : StyledCheckboxProps) : JSX.Element {
  return (
    <>
      <input type="checkbox" className='styled-checkbox' id={`styled-checkbox-${id}`} name={`styled-checkbox-${id}`}
        onChange={() => {console.log('check!')}}
      />
      <label htmlFor={`styled-checkbox-${id}`} className='styled-checkbox__label'></label>
    </>
  )
}

export default StyledCheckbox;
