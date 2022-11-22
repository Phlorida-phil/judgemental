import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {reset, getCourts} from '../features/courtSlice'

import CourtCard from './courtCard'

function Courts() {

  const dispatch = useDispatch()

  const {courts, isError, isLoading, message} = useSelector((state) => state.courts)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    dispatch(getCourts())

    return () => {
      dispatch(reset)
    }
  }, [isError, dispatch, message])

  return (
      <div className='court-wrapper'>
        <div className='court-numbers'>

          <div className='court-stats totals'>
            <h3>Posts:</h3>
            <p className='stats-value'>100</p>
          </div>
          <div className='court-stats totals'>
            <h3>Active:</h3>
            <p className='stats-value'>10</p>
          </div>
          <div className='court-stats totals'>
            <h3>Pending:</h3>
            <p className='stats-value'>10</p>
          </div>
          <div className='court-stats totals'>
            <h3>Vacancies:</h3>
            <p className='stats-value'>1</p>
          </div>
        </div>
        <div className='court-numbers'>
          <div className='court-stats partisan'>
            <h3>Democratic Appointments:</h3>
            <p className='stats-value'>49</p>
          </div>
          <div className='court-stats partisan'>
            <h3>Republican Appointments:</h3>
            <p className='stats-value'>50</p>
          </div>
        </div>

        <>
        {courts.map((court) => (
          <CourtCard key={court._id} court={court} />
        ))}
        <div className='court-card'>
          <h3 className='court-title'>Federal District</h3>
          <div className='court-figures'>
            <div className='court-headings'>
              <h5 className='court-postings'>Posts</h5>
              <p>12</p>
            </div>
            <div className='court-headings'>
              <h5 className='court-vacancies'>Vacancies</h5>
              <p>0</p>
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
                <p className='judge-info'>Kimberly Moore</p>
                <p className='judge-info'>9/8/2006</p>
                <p className='judge-info'>George W. Bush</p>
              </div>
            </li>
            <li className='judge-details'>
              <div className='judge-listing'>
                <p className='judge-info'>Pauline Newman</p>
                <p className='judge-info'>2/27/1984</p>
                <p className='judge-info'>Ronald Reagan</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='court-card'>
          <h3 className='court-title'>Federal District</h3>
          <div className='court-figures'>
            <div className='court-headings'>
              <h5 className='court-postings'>Posts</h5>
              <p>12</p>
            </div>
            <div className='court-headings'>
              <h5 className='court-vacancies'>Vacancies</h5>
              <p>0</p>
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
                <p className='judge-info'>Kimberly Moore</p>
                <p className='judge-info'>9/8/2006</p>
                <p className='judge-info'>George W. Bush</p>
              </div>
            </li>
            <li className='judge-details'>
              <div className='judge-listing'>
                <p className='judge-info'>Pauline Newman</p>
                <p className='judge-info'>2/27/1984</p>
                <p className='judge-info'>Ronald Reagan</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='court-card'>
          <h3 className='court-title'>Federal District</h3>
          <div className='court-figures'>
            <div className='court-headings'>
              <h5 className='court-postings'>Posts</h5>
              <p>12</p>
            </div>
            <div className='court-headings'>
              <h5 className='court-vacancies'>Vacancies</h5>
              <p>0</p>
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
                <p className='judge-info'>Kimberly Moore</p>
                <p className='judge-info'>9/8/2006</p>
                <p className='judge-info'>George W. Bush</p>
              </div>
            </li>
            <li className='judge-details'>
              <div className='judge-listing'>
                <p className='judge-info'>Pauline Newman</p>
                <p className='judge-info'>2/27/1984</p>
                <p className='judge-info'>Ronald Reagan</p>
              </div>
            </li>
          </ul>
        </div>
        </>
      </div>
  )
}

export default Courts
