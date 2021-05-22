import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom';

interface Props {
  currentRefinement: any,
  refine: any,
  searchClick: any;
  indexName: string,
}
const SearchBox: React.FC<Props> = ({currentRefinement, refine, searchClick, indexName}) => {

  React.useEffect(() => {
    if(!searchClick){
      refine("");
    }
  }, [searchClick])
    return (
        <div className="search__form">
          <input
            className="search__input"
            name="search"
            type="search"
            placeholder={`Search ${indexName.toLowerCase()} ...`}
            autoFocus
            value={currentRefinement}
            onChange={(event) => refine(event.currentTarget.value)}
          />
          <span className="search__info">
            Type words to search or ESC to close
          </span>
        </div>
    )
}

export const CustomSearchBox = connectSearchBox(SearchBox);