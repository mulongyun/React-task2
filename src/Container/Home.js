import React, { Component } from 'react'
import {Link,Route,Switch,Redirect} from "react-router-dom";
import All from '../Home/All';
import Good from '../Home/Good';
import Share from '../Home/Share';
import Ask from '../Home/Ask';
import Job from '../Home/Job';

export default class Home extends Component {
    render() {
        let url = this.props.match.url
        return (
            <div>
                <div className='title'>
                    <Link to={`${url}/all`}>全部</Link>
                    <Link to={`${url}/good`}>精华</Link>
                    <Link to={`${url}/share`}>分享</Link>
                    <Link to={`${url}/ask`}>问答</Link>
                    <Link to={`${url}/job`}>招聘</Link>
                </div>
                <div>
                    <Switch>
                        <Route path={url +'/all/:id'} component={All}/>
                        <Route path={url +'/good/:id'}  component={Good}/>
                        <Route path={url +'/share/:id'}  component={Share}/>
                        <Route path={url +'/ask/:id'}  component={Ask}/>
                        <Route path={url +'/job/:id'}  component={Job}/>
                        <Route exact path='/home' render={() => <Redirect from='/home' to='/home/all/1'/>}/>            
                        <Route exact path='/home/all' render={() => <Redirect from='/home/all' to='/home/all/1'/>}/>
                        <Route exact path='/home/good' render={() => <Redirect from='/home/good' to='/home/good/1'/>}/>
                        <Route exact path='/home/share' render={() => <Redirect from='/home/share' to='/home/share/1'/>}/>
                        <Route exact path='/home/ask' render={() => <Redirect from='/home/ask' to='/home/ask/1'/>}/>
                        <Route exact path='/home/job' render={() => <Redirect from='/home/job' to='/home/job/1'/>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}