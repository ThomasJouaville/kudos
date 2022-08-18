import { useState, useEffect } from 'react'

interface FormFieldProps {
  htmlFor: string
  label: string
  type?: string
  value: any
  error?: string
  onChange?: (...args: any) => any
}

const FormField: React.FC<FormFieldProps> = ({
  htmlFor,
  label,
  type = 'text',
  value,
  error,
  onChange = () => {},
}) => {
  const [errorText, setErrorText] = useState(error)

  useEffect(() => {
    setErrorText(error)
  }, [error])

  return (
    <>
      <label htmlFor={htmlFor} className='text-blue-600 font-semibold'>
        {label}
      </label>
      <input
        onChange={(e) => {
          onChange(e)
          setErrorText('')
        }}
        type={type}
        id={htmlFor}
        name={htmlFor}
        className='w-full p-2 rounded-xl my-2'
        value={value}
      />
      <div className='text-xs font-semibold text-center tracking-wide text-red-500 w-full'>
        {errorText}
      </div>
    </>
  )
}

export default FormField
