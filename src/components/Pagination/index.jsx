import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination = ({ barangPerPage, totalBarang, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBarang / barangPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      <ul className='pagination__list'>
      {pageNumbers.map((number) => (
        <li className='pagination__list__item' key={number} onClick={() => paginate(number)}><a>{number}</a></li> 
      ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  barangPerPage: PropTypes.number.isRequired,
  totalBarang: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  
}

export default Pagination;
