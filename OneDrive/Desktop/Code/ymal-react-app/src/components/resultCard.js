import './resultCard.css'

const ResultCard = ({ Name, wTeaser, wUrl, yUrl }) => {
  return (
    <div className="card">
      <h4>{Name}</h4>
      {wUrl && (
        <a 
          href={wUrl} 
          target="_blank" 
          rel="noreferrer noopener"
          className="button"
        >
          LEARN MORE
        </a>
      )}
    </div>
  )
}

export default ResultCard