
function CourtCard({court}) {

  return (
    <div className='court-card'>
      <a><h3 className='court-title'>{court.courtName}</h3></a>
      <div className='court-figures'>
        <div className='court-headings'>
          <h5 className='court-positions'>Posts</h5>
          <p>{court.seats}</p>
        </div>
        <div className='court-headings'>
          <h5 className='court-positions'>Vacancies</h5>
          <p>{court.seats - court.seats}</p>
        </div>
      </div>
      <h5 className='current-judges'>Current Judges</h5>
      <ul className='judges-list'>
        <li className='judge-details judge-headers'>
          <div className='judge-listing'>
            <p className='judge-info'>Name</p>
            <p className='judge-info'>Confirmation</p>
            <p className='judge-info'>Appointed By</p>
          </div>
        </li>
        <li className='judge-details'>
          <div className='judge-listing'>
            <p className='judge-info'>Brett Kavanaugh</p>
            <p className='judge-info'>1/1/2017</p>
            <p className='judge-info'>Donald Trump</p>
          </div>
        </li>
        <li className='judge-details'>
          <div className='judge-listing'>
            <a><p className='judge-info'>Elena Kagan</p></a>
            <p className='judge-info'>1/1/2014</p>
            <p className='judge-info'>Barrack Obama</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CourtCard
