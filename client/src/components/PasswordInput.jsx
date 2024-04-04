import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ type, name }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <div className="password-input-div">
        <input
          type={visible ? "text" : type}
          id={name}
          name={name}
          className="password-form-input"
          required
        />
        <div onClick={() => setVisible(!visible)}>
          {visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </div>
      </div>
    </div>
  );
};
export default PasswordInput;
