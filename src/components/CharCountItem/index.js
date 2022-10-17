import './index.css'

const CharCountItem = props => {
  const {eachChar} = props
  const {charCount} = eachChar
  return (
    <>
      <li>
        <p className="count">{charCount}</p>
      </li>
    </>
  )
}
export default CharCountItem
