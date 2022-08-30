//테이블에 대한 정리

module.exports = (sequelize, Sequelize) => {//객체이름, 스키마 정의, 테이블 설정
    const member = sequelize.define("member", {
        mem_no: {
            type: Sequelize.STRING(100),
            primaryKey: true
        },
        gender: {
            type: Sequelize.STRING(100)
        },
        age_band: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATE
        },
        address: {
            type: Sequelize.STRING(100)
        }
        },
        {
        timestamps: false,
        freezeTableName: true,
        tableName : "member"
        }
    );

    return member;
};