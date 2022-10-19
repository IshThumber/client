import React from 'react'
import "./ResultFront.css"

export default function ResultFront() {
    return (
        <>
            <main className='resultFrontMain'>
                {/* header */}
                <header className='resultFrontHeader'><h1>Progress Report</h1></header>

                {/* class details */}
                <section>
                    <div className='resultFrontClassDetail margin-top15'>
                        <div className='reportFrontStandardDetails'>
                            <div className='resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>Standard: </span> <p className='resutlFrontData flex-1'>&nbsp;</p></div>
                            <div className='resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>Division: </span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                        </div>
                        <div className='margin-top15 reportFrontAcademicYear '><span className='resultFrontSpanTitle'>Academic Year:</span> <p className='resutlFrontData'>20 &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp; 20 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></div>
                    </div>
                </section>

                {/* school details */}
                <section>
                    <div className='resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle margin-top15'>Name of School: </span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                    <div className='resultFrontSchoolAddr margin-top15'>
                        <div className='resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>Taluka: </span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                        <div className='resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>District</span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                    </div>
                </section>

                {/* student details */}
                <section>


                    <div className='margin-top15 resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>Name:</span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                    <div className='resultFrontNameInfo'>
                        <span >&nbsp;</span>
                        <span className='resultFrontSpanTitleNameInfo'>(Surname)</span>
                        <span className='resultFrontSpanTitleNameInfo'>(Student's Name)</span>
                        <span className='resultFrontSpanTitleNameInfo'>(Father's Name)</span>
                        <span>&nbsp;</span>
                    </div>
                    <div className='margin-top15 resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>Address:</span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                    <div className='resultFrontAddressLine2 margin-top10 resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'></span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                    <div className='margin-top15 resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>Father's Name:</span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                    <div className='margin-top15 resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>Mother's ame:</span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                    <div className='resultFrontId'>
                        <div className='margin-top15 resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>GR. Number:</span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                        <div className='margin-top15 resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>UID. Number:</span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                    </div>
                    <div className='resultFrontPersonalInfo'>

                        <div className='margin-top15 resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>Date of Birth:</span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                        <div className='margin-top15 resultFrontFlexContainer flex-1'><span className='resultFrontSpanTitle'>Contact Number</span><p className='resutlFrontData flex-1'>&nbsp;</p></div>
                    </div>
                </section>

            </main>

        </>
    )
}
