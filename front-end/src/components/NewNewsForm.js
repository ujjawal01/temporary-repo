import React from "react";
import {Button, Form, FormGroup, Input, Label, Button} from "reactstrap";
import querystring, { stringify } from "querystring";

import axios from "axios";

import {API_URL_NEWS} from "../constants";

class NewNewsForm extends React.Component{
   
    state = {
        id: 0,
        news_title: "",
        news_content: "",
        visible: true,
        tags:"",
        audience: [],
        tagList:[],
    };

    componentDidMount(){
        if (this.props.news){
            const{id, news_title, news_content, visible, tags} = this.props.news;
            this.setState({id, news_title, news_content, visible, tags});
            const tagList=tags.split(",");
            this.setState({tagList:tagList});
           
        }
    }

    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

   
    onChangeAudience = e =>{
        
        let target = e.target;
        let name = e.name;

        let value = Array.from(target.selectedOptions, option => option.value);
        this.setState({audience: value});
    }

    onChangeVisible = e => {
        this.setState({
            visible: !this.state.visible,
        });
    }

    removeTag = (i) => {
        const newTags = [ ...this.state.tagList ];
        newTags.splice(i, 1);
        this.setState({ tagList: newTags }, () =>
        {
           
            var tags = newTags.join();
            this.setState({tags : tags});
        })

    }
    
    inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === ',' && val) {
          if (this.state.tagList.find(tag => tag.toLowerCase() === val.toLowerCase())) {
            return;
          }
          this.setState({ tagList: [...this.state.tagList, val]}, 
            () => {
               var tags = this.state.tagList.join()
               this.setState({tags : tags});
            }
        
          )
        } else if (e.key === 'Backspace' && !val) {
          this.removeTag(this.state.tagList.length - 1);
        }
    }

    inputKeyUp = (e) => {
        if (e.key === ',') {
            this.tagInput.value = null;
        }
        
    }

    createNews = event => {

        event.preventDefault();

        const data = this.state

        const filteredData = (({news_title, news_content, visible, tags}) => ({news_title, news_content, visible, tags}))(data);

        var obj = querystring.stringify(filteredData);
       
        obj = obj.concat("&audience=",this.state.audience);
    
        axios.post(API_URL_NEWS, obj , {headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(res => {
            this.props.resetState();
            this.props.toggle();
        }).catch(err => {
            if (err.response) {
                let errObj = err.response.data.error
                alert(errObj.message)
            }
        })
        
    }


    updateNews = event => {
       
        event.preventDefault();

        const data = this.state

        const filteredData = (({news_title, news_content, visible, tags}) => ({news_title, news_content, visible, tags}))(data);

        var obj = querystring.stringify(filteredData);
        obj = obj.concat("&audience=",this.state.audience);
       
        axios.patch(API_URL_NEWS+this.state.id+"/",obj,{headers:{'Content-Type':'application/x-www-form-urlencoded'}} ).then(res => {
            this.props.resetState();
            this.props.toggle();
            
        }).catch(err => {
            if (err.response) {
                let errObj = err.response.data.error
                alert(errObj.message)
            }
        })
    };


    render() {
        const { tagList } = this.state;
        return(
            <Form onSubmit = {this.props.news ? this.updateNews : this.createNews}>
               
                <FormGroup>
                    <Label for="news_title">News Title:</Label>
                    <Input type="text" name="news_title" id="news_title" required onChange={this.onChange} value={this.state.news_title} />
                </FormGroup>

                <FormGroup>
                    <Label for="news_content">News Content:</Label>
                    <Input type="textarea" name="news_content" id="news_content" required onChange={this.onChange} value={this.state.news_content}/>
                </FormGroup>

                <FormGroup>  
                    <Input addon type="checkbox" name="visible" required checked={this.state.visible} onChange={this.onChangeVisible} />Visible       
                </FormGroup>
    
                <FormGroup>
                    <Label for="tags">News Tags:</Label>
                    <small>Press Comma to enter Tag. Press backspace to delete the last tag</small>
                    <div className="input-tag">
                       
                        <ul className="input-tag__tags">
                            { tagList.map((tag, i) => (
                                <li key={tag}>
                                    {tag}
                                    <Button close onClick={() => { this.removeTag(i); }} />
                                 </li>
                            ))}
                            <li className="input-tag__tags__input"><input type="text" required={this.state.tagList===[]} onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
                        </ul>
                    </div>
                   
                </FormGroup>

                <FormGroup>
                    <Label for="audience">Audience</Label>
                    <Input type="select" name="audience" id="audience" multiple onChange={this.onChangeAudience}>
                        <option value="S" >Student</option>
                        <option value="T" >Teacher</option>
                        <option value="G">General</option>
                    </Input>
                </FormGroup>

                <Button>Send</Button>
               
            </Form>
            
        );
    }
}

export default NewNewsForm;