//nodejs 에서 제공 하는 파일 관련 객체 
const fs = require("fs");

const name = process.argv[2] || "project"
const data = "" //data 안 넣으면 에러가 나는데 왜그런지 잘모르겠음 ;; 
try {
  fs.mkdirSync(name); 
  fs.writeFileSync(`${name}/index.html`,data );
  fs.writeFileSync(`${name}/script.js`,data);
  fs.writeFileSync(`${name}/style.css`,data);
} catch(err) {
  console.log(err);
}
