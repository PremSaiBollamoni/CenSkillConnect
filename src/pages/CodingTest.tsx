import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Code, CheckCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const codingQuestions = [
  {
    id: 1,
    question: 'What is the output of: console.log(typeof typeof 1)?',
    options: ['number', 'string', 'undefined', 'object'],
    correct: 'string'
  },
  {
    id: 2,
    question: 'Which method removes the last element from an array?',
    options: ['pop()', 'push()', 'shift()', 'unshift()'],
    correct: 'pop()'
  },
  {
    id: 3,
    question: 'What is the correct way to check if an object has a property?',
    options: [
      'object.hasProperty(prop)',
      'object.hasOwnProperty(prop)',
      'object.contains(prop)',
      'object.exists(prop)'
    ],
    correct: 'object.hasOwnProperty(prop)'
  }
];

export default function CodingTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < codingQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      if (codingQuestions[Number(questionIndex)].correct === answer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    toast.success(`Test completed! Score: ${score}/${codingQuestions.length}`);
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
              Score: {calculateScore()}/{codingQuestions.length}
            </h2>
            
            <div className="space-y-6">
              {codingQuestions.map((q, index) => (
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

  const question = codingQuestions[currentQuestion];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <PageHeader 
          title="Coding Assessment" 
          subtitle="Test your programming knowledge"
        />
        
        <div className="card">
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-red-500 mr-2" />
            <span className="text-sm text-gray-400">
              Question {currentQuestion + 1} of {codingQuestions.length}
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
            {currentQuestion === codingQuestions.length - 1 ? (
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