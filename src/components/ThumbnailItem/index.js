import './index.css'

const thumbnails = props => {
  const {thumb, onChange} = props
  const {id, thumbnailUrl, imageAltText} = thumb
  const changed = () => {
    onChange(id)
  }

  return (
    <li>
      <button className="butt" onClick={changed} type="button">
        <img src={thumbnailUrl} alt={imageAltText} className="thumb-image" />
      </button>
    </li>
  )
}

export default thumbnails
