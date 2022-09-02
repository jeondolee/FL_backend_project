//테이블에 대한 정리
module.exports = (sequelize, Sequelize) => {//객체이름, 스키마 정의, 테이블 설정
    const visual_data = sequelize.define("visual_data", {

        date_t: {
            type: Sequelize.DATE,
            primaryKey: true
        },
        comp_id: {
            type: Sequelize.STRING(100),
            primaryKey: true
        },
        total_cnt: {
            type: Sequelize.STRING(100)
        }
        },
        {
        timestamps: false,
        freezeTableName: true,
        tableName : "visual_data"
        }
    );

    return visual_data;
};