import React from 'react';
import { Button, Modal, Typography, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { Wrapper, Item } from './StyledAddMovie';
import MovieForm from '../MovieForm';
import useAddMovie from './useAddMovie';

const { Title } = Typography;

type Props = {
  visible: boolean;
  handleCloseModal: () => void;
};

const AddMovie: React.FC<Props> = ({ visible, handleCloseModal }) => {
  const { handleAddMovie, beforeUpload } = useAddMovie(handleCloseModal);
  return (
    <Modal
      title="Add Movies"
      visible={visible}
      onCancel={handleCloseModal}
      footer={[]}
      width={700}
    >
      <Wrapper>
        <Item>
          <Title level={4}>Add new movie</Title>
          <MovieForm handleAddMovie={handleAddMovie} />
        </Item>
        <Item>
          <Title level={4}>Export movies from file</Title>
          <Upload name="file" listType="text" accept=".txt" beforeUpload={beforeUpload}>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Item>
      </Wrapper>
    </Modal>
  );
};

export default React.memo(AddMovie);
