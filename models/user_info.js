//테이블에 대한 정리
module.exports = (sequelize, Sequelize) => {//객체이름, 스키마 정의, 테이블 설정
    const user_info = sequelize.define("user_info", {
        mem_no: {
            type: Sequelize.STRING(100),
            primaryKey: true
        },
        gender: {
            type: Sequelize.STRING(100)
        },
        age: {
            type: Sequelize.INTEGER
        }
        },
        {
        timestamps: false,
        freezeTableName: true,
        tableName : "user_info"
        }
    );

    return user_info;
};