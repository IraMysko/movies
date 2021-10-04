import { Form, Input, Button, Select } from 'antd';
import React from 'react';
import { Values } from '../../types';

const { Option } = Select;

type Props = {
  handleAddMovie: (values: Values) => void;
};

const formats = ['DVD', 'VHS', 'Blu-Ray'];

const MovieForm: React.FC<Props> = ({ handleAddMovie }) => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14, offset: 1 }}
      onFinish={handleAddMovie}
      autoComplete="off"
      initialValues={{
        format: formats[0],
      }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please add title' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Year"
        name="year"
        rules={[{ required: true, message: `Please add movie's year` }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Format" name="format" rules={[{ required: true }]}>
        <Select>
          {formats.map((format) => (
            <Option key={format} value={format}>
              {format}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Actors"
        name="actors"
        rules={[{ required: true, message: `Don't forget about stars` }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MovieForm;
