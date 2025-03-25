import { useContext } from "react";
import { AgeContext } from "../../context/AgeContext";

function Results(){

    const { ageResult } = useContext(AgeContext);

    return (
        <>
        <div><span>{ageResult ? ageResult.years : '--'}</span>years</div>
        <div><span>{ageResult ? ageResult.month : '--'}</span>month</div>
        <div><span>{ageResult ? ageResult.days : '--' }</span>years</div>
        </>
    )

}

export default Results;