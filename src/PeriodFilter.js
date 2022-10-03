const PeriodFilter = (props) => {
  const dates = [...new Set(props.dates.map(date => date.substring(0,7)))];
  const handleFilter = props.handleFilter;

  return (
    <div className="PeriodFilter">
      {dates.map(date => (
        <div key={date.substring(0,4)+date.substring(5)} className='MonthFilter' onClick={() => {handleFilter(date)}}>
          <h4>{date}</h4>
        </div>  
      ))}
    </div>
  )
}

export default PeriodFilter;