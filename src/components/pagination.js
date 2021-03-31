import React from 'react';
import {Row, Col, Pagination} from 'antd';

const PaginationPage = () => {
    return(
        <>
        <Row style={{margin:"20px 0",textAlign:"center"}}>
            <Col span={24}>
                <Pagination
                 current={1}
                 total={10}
                 />
            </Col>
        </Row>
        </>
    )
}
export default React.memo(Pagination);