import React, { useState } from 'react';

const Toggle = () => {
  const [ isChecked, setIsChecked ] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className='themeSwitcherTwo w-fit mx-auto shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-[22px] bg-[#0F131D] p-1.5 border-[1px] border-white/10'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded-[16px] py-[18px] px-[20px] text-sm font-medium ${!isChecked ? 'text-black bg-[#f4f7ff]' : 'text-body-color'
          }`}
        >
                    Yearly
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded-[16px] py-[18px] px-[20px] text-sm font-medium ${isChecked ? 'text-black bg-[#f4f7ff]' : 'text-body-color'
          }`}
        >
                    One Time
        </span>
      </label>
    </>
  );
};

export default Toggle;
