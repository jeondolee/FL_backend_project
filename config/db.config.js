/*
postgre SQL DB를 연결하기 위한 정보 입력
*/

module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "1234",
    DB : "postgres",
    dialect: "postgres",
    pool : {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000
    }
};