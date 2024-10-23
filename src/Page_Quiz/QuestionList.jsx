import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";

function QuestionList () {

    const [question, setQuestion] = useState([]);
    let currentDate = new Date().toJSON().slice(0, 10);

    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/MiniJeuApi.php?action=minijeu', {minijeudate : currentDate})
            .then(response => {
                    if(response.statusText === "OK" && response.data.quiz) {
                        setQuestion(response.data.quiz);
                        console.log(response.data.quiz);
                    }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const styleGolden = {color: '#CFBD97'}
    const styleWhite = {
        color : 'white'
    }

    return (
        <div className="container-fluid">
            <div className="container-fluid d-flex justify-content-center">
                <h1 className="d-inline-block my-5" style={styleWhite}>Quiz du <h1 style={styleGolden} className="d-inline-block">Jour</h1></h1>
            </div>
            <div className="container-fluid">
                {question.length > 0 ? (
                        question.map((questionCard, index) => (
                        <Question key={index} number={questionCard.questionnum} question={questionCard.quizquestion} answer={questionCard.answer}/>
                    ))
                    ) : (
                        <p>Il n'y a pas quiz aujourd'hui!</p>
                )}
            </div>
        </div>
    );
}

export default QuestionList