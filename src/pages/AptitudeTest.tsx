import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Brain, CheckCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const aptitudeQuestions = [
  {
    id: 1,
    question: 'If 3x + 7 = 22, what is the value of x?',
    options: ['3', '5', '7', '9'],
    correct: '5'
  },
  {
    id: 2,
    question: 'A train running at 60 kmph crosses a pole in 9 seconds. What is the length of the train?',
    options: ['120 meters', '150 meters', '180 meters', '200 meters'],
    correct: '150 meters'
  },
  {
    id: 3,
    question: 'What comes next in the sequence: 2, 6, 12, 20, ?',
    options: ['28', '30', '32', '34'],
    correct: '30'
  }
];

export default function AptitudeTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < aptitudeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      if (aptitudeQuestions[Number(questionIndex)].correct === answer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    toast.success(`Test completed! Score: ${score}/${aptitudeQuestions.length}`);
  };

  if (showResults) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-3xl mx-auto">
          <PageHeader 
            title="Test Results" 
            subtitle="Here's how you performed"
          />
          
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">
              Score: {calculateScore()}/{aptitudeQuestions.length}
            </h2>
            
            <div className="space-y-6">
              {aptitudeQuestions.map((q, index) => (
                <div key={q.id} className="border-b border-gray-700 pb-4 last:border-0">
                  <p className="font-medium mb-2">{q.question}</p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-400 mr-2">Your answer:</span>
                    <span className="flex items-center">
                      {answers[index] === q.correct ? (
                        <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500 mr-1" />
                      )}
                      {answers[index]}
                    </span>
                  </div>
                  {answers[index] !== q.correct && (
                    <div className="text-sm text-gray-400 mt-1">
                      Correct answer: {q.correct}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = aptitudeQuestions[currentQuestion];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <PageHeader 
          title="Aptitude Test" 
          subtitle="Test your mathematical and logical thinking"
        />
        
        <div className="card">
          <div className="flex items-center mb-6">
            <Brain className="w-6 h-6 text-red-500 mr-2" />
            <span className="text-sm text-gray-400">
              Question {currentQuestion + 1} of {aptitudeQuestions.length}
            </span>
          </div>

          <h2 className="text-xl font-semibold mb-6">{question.question}</h2>

          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 text-left rounded-lg transition-all ${
                  answers[currentQuestion] === option
                    ? 'bg-red-500/20 border-red-500'
                    : 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50'
                } border`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            {currentQuestion === aptitudeQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!answers[currentQuestion]}
                className="btn-primary"
              >
                Submit Test
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className="btn-primary"
              >
                Next Question
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}