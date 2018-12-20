import React from 'react';
import { List, Avatar } from 'antd';


const Subjects = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href={`http://127.0.0.1:3000/${item.id}`}>{item.title}</a>}
            description={item.created_at}
          />
        </List.Item>
      )}
    />
  );
}

export default Subjects;