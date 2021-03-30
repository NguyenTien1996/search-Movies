import React from 'react';
import {Row, Col, Card}  from 'antd';

const { Meta } = Card;
const ResultMovies = () => {
    return(
        <>
            <Row style={{padding:"10px"}}>
                <Col span={4} offset={0}>
                <Card
                        hoverable
                        style={{ width: 200 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat"  />
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default React.memo(ResultMovies)