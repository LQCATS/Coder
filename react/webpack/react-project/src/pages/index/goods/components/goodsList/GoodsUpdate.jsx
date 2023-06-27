import { Col, Form, Input, Row, Button, Space, Cascader, Modal, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useRef } from 'react'
import { findAllCategroyAPI, findGoodsByIdAPI, updateGoodsAPI } from '../../../../../apis/goodsAPI';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
const { TextArea } = Input;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });


const GoodsUpdate = () => {
    //获取传参的id,动态路由传递的参数
    const id = useParams();
    const { state } = useLocation();
    
    //图片上传
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);

    const updateGoodsObj = useRef({});//需要修改的对象，用于数据回显
    const [typeList, setTypeList] = useState([]);//所有类别，级联选择的数据
    // const typeId = useRef('');//保存级联选择器选择的结果
    const [form] = Form.useForm();
    const navigate = useNavigate();

    //生命周期，挂载完成后执行---------------------------------------------------------------------------
    useEffect(() => {
        getGoodsMsg();//获取修改商品的数据,回显表单数据
        getAllTypes();//获取类别的数据
        // eslint-disable-next-line
    }, [])

    //表单数据回显----------------------------------------------------------------------------------------

    //调接口获取修改商品的信息
    const getGoodsMsg = async () => {
        //*获取商品信息
        const res = await findGoodsByIdAPI(state || id);

        if (res.code && res.data) {
            //*将商品信息保存在全局变量中
            updateGoodsObj.current = res.data;
            //*回显图片
            if (updateGoodsObj.current.imgSrc) {
                setFileList([
                    {
                        status: 'done',
                        url: updateGoodsObj.current.imgSrc
                    }
                ])
            }
            //*回显表单数据
            form.setFieldsValue({
                ...updateGoodsObj.current,
                type: updateGoodsObj.current.type.name
            })

        } else {
            Modal.warning({
                title: '警告',
                content: '该商品不存在，请重新选择！',
                afterClose: () => {
                    navigate(-1);
                }
            })
        }
    }

    //图片上传----------------------------------------------------------------
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
        //保留图片数组最后一个图片
        setFileList([fileList.pop()]);
        //全局保存修改后的新图片路劲
        if (file.status === 'done') {
            updateGoodsObj.current.imgSrc = 'http://nocat.life:8002/images/goods/' + file.response.data;
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



    //获取所有分类数据，渲染级联选项----------------------------------------------------------------------
    //调接口获取分类数据
    const getAllTypes = async () => {
        let res = await findAllCategroyAPI({ parentId: 0 });
        if (res.code) {
            setTypeList(res.data);
        }
    };

    //级联change事件
    const onChange = (_, values) => {
        const typeId = values.pop()._id;
        //将修改的typeid保存在updateGoodsObj中
        updateGoodsObj.current.type = { _id: typeId };
        // console.log(updateGoodsObj.current);
    }

    //表单提交---------------------------------------------------------------------------------
    const onFinish = async (values) => {
        //组织修改接口需要的参数
        const newGoodsMsg = {
            ...updateGoodsObj.current,
            ...values,
            type: updateGoodsObj.current.type._id,
            id: updateGoodsObj.current._id
        }
        //调接口修改商品
        const res = await updateGoodsAPI(newGoodsMsg);
        console.log(res);
        if (res.code) {
            Modal.info({
                title: '提示',
                content: '修改数据成功！',
                afterClose: () => {
                    navigate(-1);
                }
            })
        }
    }

    return (
        <div>
            <Form form={form} onFinish={onFinish}>
                <Row gutter={100}>
                    <Col span={12}>
                        <Form.Item label='商品名称' name='name'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='商品价格' name='price'>
                            <Input type='number' />
                        </Form.Item>
                        <Form.Item label='商品简介' name='title'>
                            <TextArea />
                        </Form.Item>
                        <Form.Item label='商品详情' name='msg'>
                            <TextArea />
                        </Form.Item>
                        <Form.Item label='分类名称' name='type'>
                            <Cascader options={typeList} onChange={onChange} placeholder="请选择商品的类别" />
                        </Form.Item>

                    </Col>
                    <Col span={12}>
                        <Form.Item label='商品图片'>
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
                    <Space>
                        <Button type='primary' htmlType='sumbit'>确认修改</Button>
                        <Button type='primary'>重置</Button>
                    </Space>
                </Row>
            </Form>
        </div>
    )
}

export default GoodsUpdate