import { Avatar, List, Row } from 'antd';
import React from 'react';
import { useQueryClient } from 'react-query';
import { DataType } from '../../interfaces/dataInterface';

interface PropsType {
    list: DataType[]
    onSelect: (value: number) => void
    selected: number
}
const Listcommon: React.FC<PropsType> = ({ list, onSelect, selected }) => {

    const queryClient = useQueryClient()
    return (
        <List
            itemLayout="horizontal"
            dataSource={list}
            style={{ minWidth: 300 }}
            renderItem={(item, index) => {
                const cache = queryClient.getQueryData(['location-by-id', item.id]) || ''
                return (<List.Item onClick={() => onSelect(item.id)}>
                    <List.Item.Meta
                        avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
                        title={<Row style={{
                            color: selected === item.id ? 'blue' : 'black',
                        }} >
                            {item.title}
                            <div className={cache && 'dot'} />
                        </Row>}
                    />
                </List.Item>)
            }}

        />
    )
};

export default Listcommon;
