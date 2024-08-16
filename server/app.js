const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 모든 서버의 요청 수락
app.use(cors());

const todoRouter = require("./routes/todo");
app.use("/api", todoRouter); // 기본 주소: localhost:PORT/api

app.get("/", (req, res) => {
  res.send("hello");
});

// app.get(*, res)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/**
 * CORS 사용법
 * #1. 모든 출처에서의 요청 허용
 *  app.use(cors());
 *
 * #2. 특정 출처에서의 요청만 허용
 *  app.use(cors({
 *    origin: 'https://ex.com
 *  }))
 *
 * #3. 특정 옵션을 설정
 *  app.use(cors({
 *    origin: ['https://ex.com', 'https://ex2.com],
 *    method: ['GET', 'POST'],
 *    allowedHeaders: ['Content-Type', 'Authorization', ]
 *  }))
 */
