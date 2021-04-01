import React, { useState, useEffect } from 'react'

function SearchComponent() {


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
                                            <input type="text" id="search_term" name="search_term" placeholder="Enter Search" ></input>
                                        </div>
                                        <div className='col-2 pl-0 '>
                                            <button id='submit-btn' type="submit" name="search" value="SEARCH"><i className="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                    <div className="autocom-box">
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