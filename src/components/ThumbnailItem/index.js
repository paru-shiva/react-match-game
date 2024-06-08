import './index.css'

const ThumbnailItem = props => {
  const {randomImageId, details, onThumbnailClick} = props
  const {thumbnailUrl, id} = details

  const onThumbnailSelect = () => onThumbnailClick(randomImageId === id)

  return (
    <li>
      <button className="thumbnailButton" type="button">
        <img
          onClick={onThumbnailSelect}
          alt="thumbnail"
          src={thumbnailUrl}
          className="thumbnail"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
