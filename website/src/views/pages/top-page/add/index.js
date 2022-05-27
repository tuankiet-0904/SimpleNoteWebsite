import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import messages from 'assets/lang/messages'
import { TwitterPicker  } from 'react-color';
import './add-category.scss'

function AddCategory() {
    const [color, setColor] = useState('#ff0000')
    const [gender, setgender] = useState()
    const [serviceList, setServiceList] = useState([{ service: "" }]);

    const handleServiceChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...serviceList];
      list[index][name] = value;
      setServiceList(list);
    };
  
    const handleServiceRemove = (index) => {
      const list = [...serviceList];
      list.splice(index, 1);
      setServiceList(list);
    };
  
    const handleServiceAdd = () => {
      setServiceList([...serviceList, { service: "" }]);
    };
    const [image, setImage] = useState(
        'https://upload.wikimedia.org/wikipedia/vi/9/90/Microsoft_Photos_Icon_on_Windows_10.png'
      );


    return (
        <div className="add-category-content">
            <div className="title">Create new category</div>
            <Form className="add-category-content__sub">
                <div className="add-category-content__sub__category">
                    
                    <div className="add-category-content__sub__category__info">
                        <div className="add-category-content__sub__category__info__item">
                            <span className="span">Name</span>
                            <Form.Item
                                name="license_plate"
                                rules={[
                                    {
                                        required: true,
                                        message: messages['text_required'],
                                    },
                                ]}
                            >
                                <Input type="string" className="text" />
                            </Form.Item>
                        </div>
                        <div className="add-category-content__sub__category__info__item__radio-button">
                            
                            <div className="add-category-content__sub__category__info__item__radio-button__data"> 
                                <h1 className="h1">Private</h1>
                                <input className="radio" 
                                type="radio" name="gender" value="Private" onChange={e => setgender(e.target.value)} />
                            </div>
                            <div className="add-category-content__sub__category__info__item__radio-button__data"> 
                                <h1 className="h1">Public</h1>
                                <input className="radio" 
                                type="radio" name="gender" value="Public" onChange={e => setgender(e.target.value)} />
                            </div>
                            <h1>You choose {gender}</h1>
                        </div>
                        <div className="add-category-content__sub__category__info__item">
                            <span className="span">Màu</span>
                            <TwitterPicker className="TwitterPicker"
                            color = {color}
                            onchangeComplete= {(color) => {setColor(color.hex)}}
                            />
                        </div>
                    </div>
                    <div className="add-category-content__sub__category__service">
                        <form className="App" autoComplete="off">
                            <div className="form-field">
                                <label htmlFor="service">Note</label>
                                {serviceList.map((singleService, index) => (
                                <div key={index} className="services">
                                    <div className="first-division">
                                    <input
                                        name="service"
                                        type="text"
                                        id="service"
                                        value={singleService.service}
                                        onChange={(e) => handleServiceChange(e, index)}
                                        required
                                    />
                                    {serviceList.length - 1 === index && serviceList.length < 6 && (
                                        <button
                                        type="button"
                                        onClick={handleServiceAdd}
                                        className="add-btn"
                                        >
                                        <span>Add a Note</span>
                                        </button>
                                    )}
                                    </div>
                                    <div className="second-division">
                                    {serviceList.length !== 1 && (
                                        <button
                                        type="button"
                                        onClick={() => handleServiceRemove(index)}
                                        className="remove-btn"
                                        >
                                        <span>Remove</span>
                                        </button>
                                    )}
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div className="output">
                                <h2>Note in category</h2>
                                {serviceList &&
                                serviceList.map((singleService, index) => (
                                    <ul key={index}>
                                    {singleService.service && <li>{singleService.service}</li>}
                                    </ul>
                                ))}
                            </div>
                        </form>  
                    </div>
                </div>
                <div className="add-category-content__sub__button">
                    <Button className="button-cancel">
                        <Link to="/top-page">Thoát</Link>
                    </Button>
                    <Button
                        className="button-save"
                        type="primary"
                        htmlType="submit"
                    >
                        Lưu
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default AddCategory
