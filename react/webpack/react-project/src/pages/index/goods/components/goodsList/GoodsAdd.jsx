import { Col, Form, Input, Modal, Row, Upload, Cascader, Button, Space, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useRef } from 'react'
import { addGoodsAPI, findAllCategroyAPI } from '../../../../../apis/goodsAPI';
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const GoodsAdd = () => {

    //上传图片----------------------------------------------------------------------
    const imgRef = useRef('');
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ file, fileList }) => {
        setFileList(fileList);
        if (file.status === "done") {
            imgRef.current = 'http://nocat.life:8002/images/goods/' + file.response.data;
        }
    };
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );


    //级联选择器，商品类别-------------------------------------------------------------
    const [typeList, setTypeList] = useState([]);
    const cascaderRef = useRef('');

    //挂载时获取所有的类别数据
    useEffect(() => {
        getAllType();
    }, []);

    //调取接口，获取所有的类别数据
    const getAllType = async () => {
        let res = await findAllCategroyAPI({ parentId: 0 });
        // console.log(res);
        if (res.code) {
            setTypeList(res.data);
        }
    }

    //将接连选择器的数据全局保存
    const onChange = (_, value) => {
        cascaderRef.current = value.pop()._id
    };

    //表单提交事件-------------------------------------------------------------------------
    const navigate = useNavigate();
    const onFinish = async (values) => {
        // console.log(addGoods);
        //调接口新增数据
        const res = await addGoodsAPI({
            ...values,
            type: cascaderRef.current,
            imgSrc: imgRef.current
        });
        // console.log(res);
        //跳转页面到商品列表
        if (res.code) {
            message.success('商品新增成功');
            navigate('/goodsList');
        }
        // console.log({
        //     ...values,
        //     type: cascaderRef.current,
        //     imgSrc: imgRef.current
        // });
    }


    return (
        <div>
            <Form onFinish={onFinish}>
                <Row gutter={100}>
                    <Col span={10}>
                        <Form.Item label='商品名称' name='name'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='商品类别' name='type'>
                            <Cascader options={typeList} onChange={onChange} placeholder="请选择类别" />
                        </Form.Item>
                        <Form.Item label='商品价格' name='price'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='商品描述' name='title'>
                            <TextArea placeholder="请输入商品描述信息" />
                        </Form.Item>
                        <Form.Item label='商品详情' name='msg'>
                            <TextArea placeholder="请输入商品详情" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label='上传图片'>
                            <Upload
                                action="http://nocat.life:8002/goods/fileUpload"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                                name='imgSrc'
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                />
                            </Modal>
                        </Form.Item>
                    </Col>
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">确认新增</Button>
                            <Button type="primary">取消</Button>
                        </Space>
                    </Form.Item>
                </Row>


            </Form>
        </div>
    )
}

export default GoodsAdd