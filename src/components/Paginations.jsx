import React from 'react';
import { Pagination } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';

// Criado component Pagination com base no tutorial Simple Frontend Pagination | React pelo canal Traversy Media => https://www.youtube.com/watch?v=IYCa1F-OWmk
export default function Paginations(props) {
  const history = useHistory(); 

  const {
    pageLimit,
    loadCharacters,
    currentPage,
    setCurrentPage,
  } = props;
      
  const firstPage = 1;
  const maxLeft = 3;
  const lastPage = pageLimit;
  
  const pageNumbers = Array
    .from( { length: pageLimit } )
    .map(( _, index ) => index + 1 );

  function changePage(event){
    setCurrentPage(event.target.text)
  }

  function setChangePage(){
    return pageNumbers
      .filter((el) => el > parseInt(currentPage) - maxLeft &&
        el < parseInt(currentPage) + maxLeft );
  }

  return (
    <div
      className="p-1 bg-success border-none"
    >
      <Pagination
        className="d-flex justify-content-center m-0 p-2 rounded"
      >
        <Pagination.First
          className="text-decoration-none bg-light rounded mt-1 mb-1 text-center
          text-success w-25"
          onClick={ () => {
            loadCharacters(firstPage);
            setCurrentPage(firstPage);
            history.push(`/characters/${firstPage}`);
          } }
        />
        <Pagination.Prev 
          className="text-decoration-none bg-light rounded mt-1 mb-1 text-center
          text-success link-success w-25"
          disabled={ currentPage <= firstPage }
          onClick={ () => {
            loadCharacters(parseInt(currentPage)-1);
            setCurrentPage(parseInt(currentPage)-1);
            history.push(`/characters/${currentPage}`);
          } }
        />
        { setChangePage().map((pageNumber)=>
          <Pagination.Item 
            className="text-decoration-none bg-light rounded mt-1 mb-1
            text-center w-25"
            key={ pageNumber }
            value={ pageNumber }
            onClick={ (event) => {
              loadCharacters(pageNumber);
              changePage(event);
              history.push(`/characters/${pageNumber}`);
            } }
          >
            { pageNumber }
          </Pagination.Item>
        )}
        <Pagination.Next 
          className="text-decoration-none bg-light rounded mt-1 mb-1
          text-center w-25"
          disabled={ currentPage >= lastPage }
          onClick={ () => {
            loadCharacters(parseInt(currentPage)+1);
            setCurrentPage(parseInt(currentPage)+1);
            history.push(`/characters/${currentPage}`);
          } }
        />
        <Pagination.Last 
          className="text-decoration-none bg-light rounded mt-1 mb-1
          text-center w-25"
          onClick={ () => {
            loadCharacters(lastPage);
            setCurrentPage(lastPage);
            history.push(`/characters/${lastPage}`);
          } }
        />
      </Pagination>
    </div>
  )
}

Paginations.propTypes = {
  currentPage: PropTypes.string,
  pageLimit: PropTypes.string,
  loadCharacters: PropTypes.func,
}.isRequired;
