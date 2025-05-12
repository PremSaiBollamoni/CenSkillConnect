import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { PenTool, CheckCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const reasoningQuestions = [
  {
    id: 1,
    question: 'Which number should come next in the pattern? 2, 4, 8, 16, ...',
    options: ['20', '24', '32', '64'],
    correct: '32'
  },
  {
    id: 2,
    question: 'If ROAD is coded as URDG, how is SWAN coded?',
    options: ['VZDQ', 'VZCQ', 'VZCP', 'VZBP'],
    correct: 'VZDQ'
  },
  {
    id: 3,
    question: 'Complete the analogy: Book is to Reading as Fork is to...',
    options: ['Kitchen', 'Eating', 'Cooking', 'Food'],
    correct: 'Eating'
  }
];

export default function ReasoningTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < reasoningQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      if (reasoningQuestions[Number(questionIndex)].correct === answer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    toast.success(`Test completed! Score: ${score}/${reasoningQuestions.length}`);
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
              Score: {calculateScore()}/{reasoningQuestions.length}
            </h2>
            
            <div className="space-y-6">
              {reasoningQuestions.map((q, index) => (
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

  const question = reasoningQuestions[currentQuestion];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <PageHeader 
          title="Reasoning Test" 
          subtitle="Test your analytical and logical reasoning skills"
        />
        
        <div className="card">
          <div className="flex items-center mb-6">
            <PenTool className="w-6 h-6 text-red-500 mr-2" />
            <span className="text-sm text-gray-400">
              Question {currentQuestion + 1} of {reasoningQuestions.length}
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
            {currentQuestion === reasoningQuestions.length - 1 ? (
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