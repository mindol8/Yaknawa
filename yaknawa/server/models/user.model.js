const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // 1. ID
  username: {
    type: String,
    required: true,
    trim: true, // 문자열 앞뒤에 빈칸이 있는 경우 빈칸 제거
    unique: true,
  },
  // 2. password
  password: {
    type: String,
    required: true,
  },
  // 3. 생년월일
  birthDay: {
    type: Date,
  },
  // 4. 성별
  sex: {
    type: String,
  },
  // 5. 관심 의약품
  interestedM: {
    type: String,
  },
  // 6. 닉네임
  nickname: {
    type: String,
    required: true,
  },
  // 7. 이메일 주소
  email: {
    type: String,
    required: true,
    trim: true,
  },
  // 8. 사용자 권한
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);