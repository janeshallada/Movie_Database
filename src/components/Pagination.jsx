import './index.css'

const Pagination = ({page, setPage}) => {
  const onClickNext = () => {
    setPage(prevPage => prevPage + 1)
  }

  const onClickPrev = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
    }
  }

  return (
    <div className="pagination-container">
      <button
        type="button"
        className="pagination-btn"
        onClick={onClickPrev}
        disabled={page === 1}
      >
        Prev
      </button>

      <p className="page-number">{page}</p>

      <button type="button" className="pagination-btn" onClick={onClickNext}>
        Next
      </button>
    </div>
  )
}

export default Pagination
