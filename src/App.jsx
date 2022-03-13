import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import SingIn from './components/register/Sign-in';
import SignUp from './components/register/Sign-up'
import Card from './components/Card';
import useFetch from './useFetch';
import CommentCard from './components/CommentCard';


//<div>{post.country}</div>
//const url = 'https://jsonplaceholder.typicode.com/posts'
//const urlFood = 'https://ig-food-menus.herokuapp.com/our-foods' 

  function App() {

    const {data: posts, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");
   
    const cards = posts.map(post => {
      return (
        <Card 
            key = {post.id}
            id = {post.id}
            //img = {post.img}
            title = {post.title}
           // dsc = {post.dsc}
           // price = {post.price}
           // rate = {post.rate}
            body = {post.body}
        />
      )
    })

    return (

      <Router>
      <div className="App">
        <Header />
        
    

        <div className='content'>
            <Switch>
              
              <Route exact path = "/">
                <section className='card--container'>
                    {error ? <p className='error'>Wahala dey</p> : ""}
                    {isLoading ? <p className='isLoading'>Hold on!</p> : ""}
                    {cards}
                </section>
              </Route>

              <Route path = "/signin">
                <SingIn />
              </Route>

              <Route path = "/signup">
                <SignUp />
              </Route>

              <Route path = "/post/:id">
                <CommentCard />
              </Route>
            
            </Switch>
        </div>
        
        <Footer />
        
      </div>
    </Router> 
    
  );
}



export default App;
