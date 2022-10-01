/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Input = forwardRef(({name, error, label, ...props}, ref) => (
  <div className="input-box">
    <label htmlFor={name}>{label}</label>
    <input type="text" name={name}ref={ref} {...props}/>
    {error && <p className="text-red-500 text-sm font-semibold">{error.message}</p>}
  </div>
))

export default Input;