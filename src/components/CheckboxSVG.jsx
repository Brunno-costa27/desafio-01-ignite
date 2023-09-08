import { useState } from 'react';

export function CheckboxSVG({ customKeyIsComplete, onChangeTrue }) {

 
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    
    onChangeTrue(customKeyIsComplete)
    setIsChecked(!isChecked);
  };


  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleCheckbox}
      style={{
        width: '24px',
        height: '24px',
        cursor: 'pointer',
        transition: 'stroke 0.3s',
      }}
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        fill={isChecked ? '#5E60CE' : 'transparent'}
        stroke={isChecked ? '#5E60CE' : '#4EA8DE'}
        strokeWidth="2"
        style={{ 
            transition: 'stroke 0.3s',
        }}
      ></circle>
    </svg>
  );
}

