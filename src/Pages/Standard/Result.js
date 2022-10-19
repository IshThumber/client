import React from 'react'
import "./Result.css"
export default function Result() {
    return (
        <>
            <main className='resultMain'>
                {/* header starts */}
                <header className='resultHeader'>
                    <h1>
                        Result
                    </h1>



                </header>
                {/* header ends */}

                {/* standard details starts */}
                <section >
                    <div className='resultDetailSection'>
                        <div className='flex-1 flexContainer'>
                            <span className='spanTitle '>
                                Standard:
                            </span>
                            <p className='data flex-1'>&nbsp;</p>
                        </div>

                        <div className=' flex-1 flexContainer'>
                            <span className='spanTitle'>
                                Result Number:
                            </span>
                            <p className='data flex-1'>
                                &nbsp;
                            </p>
                        </div>

                        <div className='flexContainer flex-1'>
                            <span className='spanTitle'>
                                Total attendence:
                            </span><p className='flex-1 data'>
                                &nbsp;
                            </p>
                        </div>
                    </div>
                </section>
                {/* standard details ends */}

                {/* marks details starts  */}
                <section>
                    <div className='resultTable'>
                        <table>

                            <thead>
                                <tr>
                                    <th>Sr.</th>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>Gujarati</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Maths</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Environment</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Hindi</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>English</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5.</td>
                                    <td>Personal Development</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr rowspan="2">
                                    <td></td>
                                    <td style={{ textAlign: 'center' }}>Obtain Grades</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                {/* marks details end  */}


                <footer>
                    <div>
                        <div>
                            <div className='gaurdianDetail'>
                                <div className='flexContainer flex-1'><span className='spanTitle'>Place:</span><p className='data flex-1'>&nbsp;</p></div>
                                <div className=" flex-1 flexContainer"><span className="spanTitle ">Gaurdian's signature:</span><p className='flex-1 dataGuardian'>&nbsp;</p></div>
                            </div>
                            <div className='flexContainer resultDate'><span className='spanTitle'>Date:</span><p className='data flex-1' >&nbsp;</p></div>

                            <div className='teachersDetail'>
                                <div><span className='spanTitle signature'>Teacher's Signature</span></div>
                                <div><span className='spanTitle signature'>Principal's Signature</span></div>
                            </div>
                        </div>
                    </div>
                </footer>

            </main>
        </>
    )
}
