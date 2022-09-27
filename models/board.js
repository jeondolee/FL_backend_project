//테이블에 대한 정리
module.exports = (sequelize, Sequelize) => {//객체이름, 스키마 정의, 테이블 설정
    const board = sequelize.define("board", {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        last_name: {
            type: Sequelize.STRING(50),
        },
        first_name: {
            type: Sequelize.STRING(50)
        },
        age: {
            type: Sequelize.INTEGER,
        }
        },
        {
        timestamps: false,
        freezeTableName: true,
        tableName : "board"
        }
    );

    return board;
};