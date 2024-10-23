import { useState } from "react";

function Question (props) {
    const [clicked, setClicked] = useState(false);
    const [resp, setResp] = useState('')

    const handleclick = (e) => {
        if (resp !== '') {
            setClicked(true);
        }
    }

    const handlechange = (e) => {
        setResp(e.target.value);
    }

    return (
        <div className="container-fluid mb-5 rounded" style={{border:'1px solid white'}}>
            <div className="row m-5">
                <div className="col-12 col-md-7">
                    <p className='fs-5' style={{color:'white'}}>{props.number}. What is {props.question}</p>
                </div>
                <div className="col-6 col-md-2"> 
                    {!clicked ? (
                        <input name="inpt" value={resp} type="text" className="form-control" onChange={handlechange} required/>
                    ):(
                        <input type="text" className="form-control" disabled/>
                    )}
                </div>
                <div className="col-6 col-md-3">
                    {!clicked ? (
                        <button className="btn btn-primary" style={{backgroundColor:'#CFBD97', color:'white', border:'none'}} onClick={handleclick}>Submit</button>
                    ):(
                        <p></p>
                    )}
                </div>
            </div>
                {clicked ? (
                    <div>
                        <p>The answer is {props.answer}</p>
                    </div>
                ):(
                    <p></p>
                )}
        </div>
    );
}

export default Question