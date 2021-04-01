import React, { useState, useEffect } from 'react'

function SearchComponent() {

    // Store current search term
    const [searchValue, setSearchValue] = useState("");

    //Store temperory search result to display in search corpus area
    const [tempResult, setTempResult] = useState([]);


    // Handle input changes
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue)
    }

    // Fetch search result from search api using GET Request
    const callSearchAPI = () => {
        if (searchValue) {
            fetch("http://localhost:9000/search?search=" + searchValue)
                .then(res => res.json())
                .then((res) => {
                    setTempResult(res.matchList)
                    console.log(tempResult);
                });
        }
    }

    useEffect(() => {
        console.log("Search message inside useEffect: " + searchValue);
        if (searchValue) {
            callSearchAPI();
        }
        else
            setTempResult([])
    }, [searchValue])



    return (
        <section id='search-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <div className='row'>
                            <div className='col-12'>

                                {/* Result display section */}
                                <div className='search-result-div my-5'>
                                    <div className='row'>


                                    </div>
                                </div>

                            </div>
                            <div className='col-12'>
                                <h2>WHAT ARE YOU LOOKING FOR?</h2>
                            </div>
                            {/* Error display section */}
                            <div className='col-12 error-div'>
                            </div>
                            {/* Search Bar Input section */}
                            <div className='col-12 col-sm-12 col-md-8 col-lg-6 mx-auto ' style={{ minHeight: '50vh' }}>
                                <div id="search_bo" className="search-input">
                                    <form method="post" className='row'>
                                        <div className='col-10 pr-0'>
                                            <input type="text" id="search_term" value={searchValue} onKeyDown={handleSearchInputChanges} onChange={handleSearchInputChanges} name="search_term" placeholder="Enter Search" ></input>
                                        </div>
                                        <div className='col-2 pl-0 '>
                                            <button id='submit-btn' type="submit" name="search" value="SEARCH"><i className="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                    {/* Display 3 most matched words section */}
                                    <div className="autocom-box">
                                        {
                                            tempResult.slice(0, 3).map((res, i) => {
                                                return (
                                                    <div key={i} className='search-suggestion-div'>
                                                        <li style={{ color: 'black' }}>{res}</li>
                                                        <i className="fa fa-times"></i>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default SearchComponent
