import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { useState } from 'react';
import './create-note.scss';

const CreateNote = () => {
  const categories = [
    { id: 1, name: 'Category1' },
    { id: 2, name: 'Category2' },
    { id: 3, name: 'Category3' },
    { id: 4, name: 'Category4' },
    { id: 5, name: 'Category5' },
  ];
  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/vi/9/90/Microsoft_Photos_Icon_on_Windows_10.png'
  );
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  return (
    <div className="container">
      <div className="Title">
        <h1 style={{ fontSize: '30px', fontWeight: '600', color: 'white' }}>
          Create a Note
        </h1>
      </div>
      <div className="wrapper">
        <Form
          className="create-note-form"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="image-container">
            <img src={image} alt="image" />
            <button>Upload Image</button>
          </div>
          <div className="info-container">
            <Form.Item
              label="Categories"
              name="categories"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: 'Please select categories!',
                },
              ]}
            >
              <Checkbox.Group
                style={{
                  width: '100%',
                  marginLeft: '0px',
                }}
                onChange={onChange}
              >
                <Row>
                  {categories.map((item) => (
                    <Col span={8} key={item.id}>
                      <Checkbox value={item.name} key={item.id}>
                        {item.name}
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              label="Keyword"
              name="keyword"
              rules={[
                {
                  required: true,
                  message: 'Please input your keyword!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Memo"
              name="memo"
              //   rules={[
              //     {
              //       required: true,
              //       message: 'Please input your password!',
              //     },
              //   ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Level of difficult"
              name="level"
              //   rules={[
              //     {
              //       required: true,
              //       message: 'Please input your password!',
              //     },
              //   ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Popularity"
              name="popularity"
              //   rules={[
              //     {
              //       required: true,
              //       message: 'Please input your password!',
              //     },
              //   ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateNote;
