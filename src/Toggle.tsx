import './ToggleStyles.css';
export const Toggle = (props:any) => {
    
    const handleToggle = (event:any) => {

        const isChecked = event.target.checked;
        if (isChecked) {
          props.onFormSwitch('TableManual');
        } else {
          props.onFormSwitch('Table13C');
        }
      };

    return (
        <>
         <div className='option'>
      <p>13C Route</p>
      <label className='switch'>
        <input type='checkbox' onChange={handleToggle} />
        <span className='slider' />
      </label> 
      <p>Create Own Route</p> 
    </div>
        </>
       );
}
export default Toggle;