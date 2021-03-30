import React, {useState, useEffect} from 'react';
import { useDispatch} from 'react-redux';
import {Row, Col, Input} from 'antd';
import { searchMovies} from '../actions/index';

const { Search } = Input;

const SearchMovies = () => {
    const dispatch = useDispatch();

    const [ keyword, setKeyWord] = useState('');
    const changeInput = (event) => {
        const val = event.target.value;
        setKeyWord(val);
    }
    const searchMovieNyKeyword = (name) => {
        dispatch(searchMovies(name));
    }

    return(
        <Row style={{margin:"20px 10px"}}>
            <Col span={12} offset={6}>
                <Search 
                    placeholder="Enter name movies" 
                    onSearch= {val => searchMovieNyKeyword(val)}
                    enterButton 
                    onChange={changeInput}
                    value={keyword}
                />
            </Col>
        </Row>
    )
}
export default React.memo(SearchMovies);