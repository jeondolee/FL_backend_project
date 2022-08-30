//테이블에 대한 정리

module.exports = (sequelize, Sequelize) => {//객체이름, 스키마 정의, 테이블 설정
    const order = sequelize.define("order", {
        order_no: {
            type: Sequelize.STRING(100),
            primaryKey: true
        },        
        mem_no: {
            type: Sequelize.STRING(100),
        },
        order_date: {
            type: Sequelize.DATE
        },
        shop_code: {
            type: Sequelize.INTEGER
        },
        product_code: {
            type: Sequelize.INTEGER
        },
        sales_itm: {
            type: Sequelize.INTEGER
        },
        },
        {
        timestamps: false,
        freezeTableName: true,
        tableName : "order"
        }
    );

    return order;
};