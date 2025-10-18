"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  imageUrl?: string;
  isImageOptions?: boolean; // Đánh dấu nếu options là URL hình ảnh
  optionImages?: string[]; // Mảng URL hình ảnh cho các đáp án
  isVideo?: boolean; // Đánh dấu nếu câu hỏi có video liên quan
}

interface AnswerRecord {
  questionId: number;
  playerName: string;
  selectedAnswer: number;
  isCorrect: boolean;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Sinh nhật Phồn vào tháng mấy?",
    options: ["A. Tháng 6", "B. Tháng 7", "C. Tháng 8", "D. Tháng 9"],
    correctAnswer: 1,
    explanation: "Ai không biết nên vắt tay lên trán suy nghĩ lại "
  },
  {
    id: 2,
    question: "Anh trai Phồn nào hát hay nhất?",
    options: ["A. Anh Chũng", "B. Tuấn Chó", "C. BM", "D. Minh Ái"],
    correctAnswer: 2,
    explanation: "BM hát hay nhất trong hội Phồn"
  },
  {
    id: 3,
    question: "Ngày lập nhóm mess là ngày nào?",
    options: ["A. 29/06", "B. 30/06", "C. 01/07", "D. 02/07"],
    correctAnswer: 0,
    explanation: "Người nào trả lời đúng câu này thật là đỉnh"
  },
  {
    id: 4,
    question: "Anh trai nào nhiệt tình nhất?",
    options: ["A. Hoàng Tuấn", "B. Tuấn Ỉn", "C. Tuấn Chó", "D. BM"],
    correctAnswer: 2,
    explanation: "Vì có mặt trong mọi kèo"
  },
  {
    id: 5,
    question: "Anh trai nào đa cấp nhất?",
    options: ["A. Tuấn Ỉn", "B. Tuấn Chó", "C. A Chũng", "D. Minh Ái", "E. BM"],
    correctAnswer: 4,
    explanation: "BM dạo này đa cấp lắm"
  },
  {
    id: 6,
    question: '"They make you lose your shoes!" đang nói tới em xinh nào?',
    options: ["A. Tú Anh", "B. Lan", "C. Trúc", "D. Thảo", "E. Thư"],
    correctAnswer: 3,
    explanation: "Lose shoes cách đọc gần giống Loose shoes -----> Đôi giày rộng :(((("
  },
  {
    id: 7,
    question: "Chúng ta lần đầu gặp lại nhau ở đâu?",
    options: ["A. 1196 Đường Láng", "B. 263 Quan Hoa", "C. 39 Vũ Thạnh", "D. Hồ Đắc Di"],
    correctAnswer: 0,
    explanation: "Bữa nhậu lịch sử ngày hôm đó"
  },
  {
    id: 8,
    question: "Địa điểm du lịch đầu tiên mà Phồn đi",
    options: ["A. Hình 1", "B. Hình 2", "C. Hình 3", "D. Hình 4"],
    correctAnswer: 3,
    explanation: "làng văn hóa mà",
    isImageOptions: true,
    optionImages: [
      "/Ba vì.jpg",
      "/Huế.jpg",
      "/Hạ Long.jpg",
      "/Làng văn hóa.jpg"
    ]
  },
  {
    id: 9,
    question: "Người mà Phồn tin tưởng nhất là?",
    options: ["A. Anh Hoàng", "B. Anh Trai Say Hi", "C. Anh Lại Thị", "D. Anh Chũng"],
    correctAnswer: 3,
    explanation: "Vì anh là bạn của chúng ta"
  },
  {
    id: 10,
    question: "Lúc nghe tin Tú Anh đi Sóc Sơn HT đang làm gì?",
    options: ["A. Khóc", "B. Rình", "C. Ôn Thi", "D. Ngủ"],
    correctAnswer: 2,
    explanation: "Sau đấy là khóc và ngủ thiếp đi( Ai trả lời như này cho 10 phần quà)"
  },
  {
    id: 11,
    question: "Cũng trong vid này, ở nửa cuối Trúc đã nghi ngờ ai?",
    options: ["A. Tuấn Chó", "B. Hoàng Tuấn", "C. BM", "D. Minh Ái"],
    correctAnswer: 1,
    explanation: "Trúc nghi ngờ Hoàng Tuấn",
    imageUrl: "https://drive.google.com/file/d/11zyn_hiFVJK-zL6XYwU0tdTXMk7Q9R57/view",
    isVideo: true
  },
  {
    id: 12,
    question: "Kết thúc chuyến đi Huế-Đà Nẵng cta đã mua lưu niệm ở đâu?",
    options: ["A. Chợ Đà Nẵng", "B. Chợ Bắc Mỹ An", "C. Chợ Hàn", "D. Chợ Cồn"],
    correctAnswer: 1,
    explanation: "Chúng ta mua quà ở Chợ Bắc Mỹ An"
  },
  {
    id: 13,
    question: "Tổng số tiền mà cta đã mua quà là bao nhiêu?",
    options: ["A. 3000k", "B. 3500k", "C. 4080k", "D. 4500k"],
    correctAnswer: 2,
    explanation: "Tổng cộng 4080k"
  },
  {
    id: 14,
    question: "Bạn thích kỉ niệm nào với Phồn nhất, Tại Sao?",
    options: ["A. ", "B. ", "C. ", "D. "],
    correctAnswer: 3,
    explanation: "Mỗi kỉ niệm đều đẹp và ý nghĩa"
  },
  {
    id: 15,
    question: "Trong video này của Phồn, có bao nhiêu người mặc áo đen?",
    options: ["A. 2 người", "B. 3 người", "C. 4 người", "D. 5 người"],
    correctAnswer: 1,
    imageUrl:"https://drive.google.com/file/d/11zyn_hiFVJK-zL6XYwU0tdTXMk7Q9R57/view",
    isVideo: true,
    explanation: "Có 3 người mặc áo đen"
  },
  {
    id: 16,
    question: "Anh trai nào nhiều tế nhất?",
    options: ["A. Tuấn Ỉn", "B. Tuấn Chó", "C. A Chũng", "D. Minh Ái"],
    correctAnswer: 0,
    explanation: "Chỉ có 1 đáp án là con lợn"
  },
  {
    id: 17,
    question: "Hình ảnh này liên tưởng tới ai?",
    options: ["A. Tú Anh", "B. Lan", "C. Trúc", "D. Thảo"],
    correctAnswer: 0,
    explanation: "Đây là hình ảnh liên tưởng đến Tú Anh",
    imageUrl: "/Máy sấy tóc.webp"
  },
  {
    id: 18,
    question: "Con số 06 liên tưởng tới anh trai nào?",
    options: ["A. Tuấn Ỉn", "B. Tuấn Chó", "C. A Chũng", "D. Minh Ái", "E. BM"],
    correctAnswer: 2,
    explanation: "31/03/2025"
  }
];

export default function QuestionsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [currentPlayerName, setCurrentPlayerName] = useState("");
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [answerRecords, setAnswerRecords] = useState<AnswerRecord[]>([]);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Already answered

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    setShowNameInput(true);
  };

  const handleSubmitName = () => {
    if (!currentPlayerName.trim() || selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;

    // Record the answer with player name
    const newRecord: AnswerRecord = {
      questionId: currentQuestion,
      playerName: currentPlayerName.trim(),
      selectedAnswer: selectedAnswer,
      isCorrect: isCorrect
    };

    setAnswerRecords([...answerRecords, newRecord]);

    // Move to next question or complete quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowNameInput(false);
      setCurrentPlayerName("");
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowNameInput(false);
    setCurrentPlayerName("");
    setIsQuizComplete(false);
    setAnswerRecords([]);
  };

  const getTotalScore = () => {
    return answerRecords.filter(r => r.isCorrect).length;
  };

  const getPlayerStats = () => {
    const playerMap = new Map<string, { correct: number; total: number; questions: number[] }>();

    answerRecords.forEach(record => {
      if (!playerMap.has(record.playerName)) {
        playerMap.set(record.playerName, {correct: 0, total: 0, questions: []});
      }
      const stats = playerMap.get(record.playerName)!;
      stats.total += 1;
      stats.questions.push(record.questionId + 1);
      if (record.isCorrect) {
        stats.correct += 1;
      }
    });

    return Array.from(playerMap.entries()).map(([name, stats]) => ({
      name,
      correct: stats.correct,
      total: stats.total,
      percentage: (stats.correct / stats.total) * 100,
      questions: stats.questions
    }));
  };

  if (isQuizComplete) {
    const totalScore = getTotalScore();
    const percentage = (totalScore / questions.length) * 100;
    const playerStats = getPlayerStats();

    return (
      <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 bg-transparent">
        <main className="max-w-4xl mx-auto">
          <Link href="/event/20-10-2025" className="inline-block mb-8 text-purple-600 hover:underline">
            ← Quay lại Thiệp mời
          </Link>

          <motion.div
            className="relative bg-white border-2 border-pink-300 rounded-3xl p-8 md:p-12 shadow-2xl mb-8"
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
          >
            <div className="text-center">
              <motion.div
                className="text-8xl mb-6"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{delay: 0.3, type: "spring", stiffness: 200}}
              >
                🎉
              </motion.div>

              <h1
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Hoàn thành!
              </h1>

              <div className="text-6xl font-bold text-pink-600 mb-2">
                {totalScore}/{questions.length}
              </div>

              <div className="text-2xl text-gray-600 mb-6">
                {percentage.toFixed(0)}% chính xác
              </div>

              <p className="text-xl text-gray-700 mb-8">
                Cảm ơn mọi người đã tham gia! 🎊
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  🔄 Chơi lại
                </button>
                <Link
                  href="/event/20-10-2025"
                  className="px-8 py-4 bg-white border-2 border-pink-500 text-pink-600 font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
                >
                  📋 Về trang thiệp mời
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Player Statistics */}
          <motion.div
            className="bg-white border-2 border-purple-200 rounded-3xl p-8 md:p-12 shadow-2xl mb-8"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.3}}
          >
            <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
              👥 Thống kê người chơi
            </h2>

            <div className="space-y-4 mb-8">
              {playerStats.map((player, idx) => (
                <motion.div
                  key={player.name}
                  className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl border-2 border-pink-200"
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: idx * 0.1}}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">
                        {player.percentage === 100 ? '🏆' : player.percentage >= 80 ? '🌟' : player.percentage >= 60 ? '👍' : '💪'}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{player.name}</h3>
                        <p className="text-sm text-gray-600">Trả lời câu: {player.questions.join(', ')}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pink-600">
                        {player.correct}/{player.total}
                      </div>
                      <div className="text-sm text-gray-600">
                        {player.percentage.toFixed(0)}% đúng
                      </div>
                    </div>
                  </div>

                  {/* Progress bar for each player */}
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full"
                      initial={{width: 0}}
                      animate={{width: `${player.percentage}%`}}
                      transition={{duration: 1, delay: idx * 0.1 + 0.5}}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            className="bg-white border-2 border-purple-200 rounded-3xl p-8 md:p-12 shadow-2xl"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.5}}
          >
            <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
              📊 Chi tiết từng câu hỏi
            </h2>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-200 text-center">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-2xl font-bold text-green-700">{totalScore}</div>
                <div className="text-sm text-green-600">Đúng</div>
              </div>

              <div
                className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border-2 border-red-200 text-center">
                <div className="text-3xl mb-2">❌</div>
                <div className="text-2xl font-bold text-red-700">{questions.length - totalScore}</div>
                <div className="text-sm text-red-600">Sai</div>
              </div>

              <div
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200 text-center">
                <div className="text-3xl mb-2">📝</div>
                <div className="text-2xl font-bold text-blue-700">{questions.length}</div>
                <div className="text-sm text-blue-600">Tổng số câu</div>
              </div>

              <div
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-purple-700">{percentage.toFixed(0)}%</div>
                <div className="text-sm text-purple-600">Độ chính xác</div>
              </div>
            </div>

            {/* Detailed answers */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Chi tiết câu trả lời:</h3>

              {questions.map((q, idx) => {
                const record = answerRecords.find(r => r.questionId === idx);
                const userAnswer = record?.selectedAnswer ?? -1;
                const isCorrect = record?.isCorrect ?? false;
                const playerName = record?.playerName ?? "Chưa trả lời";

                return (
                  <motion.div
                    key={q.id}
                    className={`p-6 rounded-2xl border-2 ${
                      isCorrect
                        ? 'bg-green-50 border-green-300'
                        : 'bg-red-50 border-red-300'
                    }`}
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: idx * 0.1}}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 text-3xl">
                        {isCorrect ? '✅' : '❌'}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 mb-2">
                          Câu {idx + 1}: {q.question}
                        </h4>
                        <div className="space-y-2 text-sm mb-3">
                          <div className="flex items-center gap-2 text-purple-700">
                            <span className="font-semibold">👤 Người trả lời:</span>
                            <span className="font-bold">{playerName}</span>
                          </div>
                          <div className={`flex items-center gap-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            <span className="font-semibold">Đã chọn:</span>
                            <span>{q.options[userAnswer]}</span>
                          </div>
                          {!isCorrect && (
                            <div className="flex items-center gap-2 text-green-700">
                              <span className="font-semibold">Đáp án đúng:</span>
                              <span>{q.options[q.correctAnswer]}</span>
                            </div>
                          )}
                        </div>
                        {q.explanation && (
                          <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <p className="text-xs text-gray-700">
                              <span className="font-semibold">💡 Giải thích:</span> {q.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <main className="max-w-4xl mx-auto">
        <Link href="/event/20-10-2025" className="inline-block mb-8 text-purple-600 hover:underline">
          ← Quay lại Thiệp mời
        </Link>

        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
        >
          <h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🎯 Câu hỏi vui về 20/10
          </h1>
          <div className="flex justify-center items-center gap-4 text-lg text-gray-600">
            <span>Câu hỏi {currentQuestion + 1}/{questions.length}</span>
            <span>•</span>
            <span>Điểm: {getTotalScore()}</span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-full bg-gray-200 rounded-full h-3 mb-8 overflow-hidden"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
        >
          <motion.div
            className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full"
            initial={{width: 0}}
            animate={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
            transition={{duration: 0.5}}
          />
        </motion.div>

        {/* Question Card */}
        <motion.div
          className="relative bg-white border-2 border-pink-200 rounded-3xl p-8 md:p-12 shadow-2xl mb-8"
          key={currentQuestion}
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.5}}
        >
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-6xl opacity-10">🌸</div>
          <div className="absolute bottom-4 left-4 text-5xl opacity-10">💐</div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            {question.question}
          </h2>

          {question.imageUrl && !question.isVideo && (
            <div className="mb-6">
              <Image
                src={question.imageUrl}
                alt="Question Image"
                width={220}
                height={220}
                className="flex item-center rounded-2xl border-2 border-pink-200"
              />
            </div>
          )}

          {question.isVideo && question.imageUrl && (
            <div className="mb-6">
              <motion.div
                className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl border-2 border-pink-300"
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.6}}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="text-6xl">🎬</div>
                  <p className="text-lg font-semibold text-gray-800 text-center">
                    Xem video để trả lời câu hỏi này
                  </p>
                  <a
                    href={question.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <span>▶️</span>
                    <span>Mở video</span>
                    <span>🔗</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}

          <div className={`space-y-4 ${question.isImageOptions ? 'grid grid-cols-2 gap-4' : ''}`}>
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctAnswer;
              const showResult = selectedAnswer !== null;

              let bgColor = "bg-white hover:bg-pink-50";
              let borderColor = "border-gray-300";
              let textColor = "text-gray-800";

              if (showResult) {
                if (isCorrect) {
                  bgColor = "bg-green-100";
                  borderColor = "border-green-500";
                  textColor = "text-green-800";
                } else if (isSelected && !isCorrect) {
                  bgColor = "bg-red-100";
                  borderColor = "border-red-500";
                  textColor = "text-red-800";
                }
              }

              // Nếu có optionImages, hiển thị ảnh
              if (question.isImageOptions && question.optionImages && question.optionImages[index]) {
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={`relative p-4 border-2 ${borderColor} ${bgColor} rounded-2xl transition-all duration-300 transform hover:scale-102 disabled:cursor-not-allowed ${textColor} overflow-hidden`}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: index * 0.1}}
                    whileHover={selectedAnswer === null ? {scale: 1.02} : {}}
                  >
                    <div className="relative">
                      <Image
                        src={question.optionImages[index]}
                        width={2000}
                        height={2500}
                        alt={option}
                        className="w-full h-auto object-cover rounded-lg mb-2"
                      />
                      <div className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center bg-pink-200 text-pink-700 rounded-full font-bold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      {showResult && isCorrect && (
                        <div className="absolute top-2 right-2 text-3xl">✅</div>
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <div className="absolute top-2 right-2 text-3xl">❌</div>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-center mt-2">{option}</p>
                  </motion.button>
                );
              }

              // Hiển thị text như cũ
              return (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 md:p-6 border-2 ${borderColor} ${bgColor} rounded-2xl text-left font-semibold text-lg transition-all duration-300 transform hover:scale-102 disabled:cursor-not-allowed ${textColor}`}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: index * 0.1}}
                  whileHover={selectedAnswer === null ? {scale: 1.02} : {}}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-pink-200 text-pink-700 rounded-full font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && isCorrect && <span className="text-2xl">✅</span>}
                    {showResult && isSelected && !isCorrect && <span className="text-2xl">❌</span>}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && question.explanation && (
            <motion.div
              className="mt-8 p-6 bg-purple-50 border-2 border-purple-200 rounded-2xl"
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: "auto"}}
              transition={{duration: 0.5}}
            >
              <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span>💡</span> Giải thích:
              </h3>
              <p className="text-gray-700">{question.explanation}</p>
            </motion.div>
          )}

          {/* Name Input after answering */}
          {showNameInput && (
            <motion.div
              className="mt-8"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
            >
              <div className="bg-pink-50 border-2 border-pink-200 rounded-2xl p-6">
                <h3 className="font-bold text-pink-800 mb-4 flex items-center gap-2">
                  <span>✍️</span> Bạn là ai?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    value={currentPlayerName}
                    onChange={(e) => setCurrentPlayerName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmitName()}
                    placeholder="Nhập tên của bạn..."
                    className="flex-1 px-6 py-3 text-lg border-2 border-pink-300 rounded-full focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
                    autoFocus
                  />
                  <button
                    onClick={handleSubmitName}
                    disabled={!currentPlayerName.trim()}
                    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                  >
                    {currentQuestion < questions.length - 1 ? "Tiếp theo →" : "Hoàn thành 🎉"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
