import { Select, initTE } from 'tw-elements'
import { useEffect } from 'react'

const LanguageSelect = () => {
  useEffect(() => {
    initTE({ Select })
  }, [])
  return (
    <div>
      <select data-te-select-init>
        <option value="1">Англійська</option>
        <option value="2">Українська</option>
      </select>
      <label data-te-select-label-ref className=" text-xs">
        Мова
      </label>
    </div>
  )
}

export default LanguageSelect
