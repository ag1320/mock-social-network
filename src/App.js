import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom'
import Profiles from './components/Profiles'
import About from './components/About'
import Home from './components/Home'
import Image from './components/Image.js'
import {Box, Toolbar, AppBar, Grid } from '@mui/material'

let content = {
  contactProfiles: [
      {
          id: 0,
          firstName: "Buzz",
          lastName: "Aldrin",
          birthday: "01/01/1978 00:00:00",
          profileImage: "https://www.sciencealert.com/images/2020-08/processed/buzzaldrin_topic_1024.png"
      },

      {
          id: 1,
          firstName: "Buzz",
          lastName: "Lightyear",
          birthday: "06/12/1940 00:00:00",
          profileImage: "https://cdn.shopify.com/s/files/1/0216/7762/products/MAIN-BUZZ_2000x.png?v=1623097075"
      },

      {
          id: 2,
          firstName: "Niel",
          lastName: "Armstrong",
          birthday: "10/04/1937 00:00:00",
          profileImage: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDg3MjM3MTEzNTY3/neil-armstrong-hero.jpg"
      },

      {
          id: 3,
          firstName: "Lance",
          lastName: "Armstrong",
          birthday: "03/21/1982 00:00:00",
          profileImage: "https://static01.nyt.com/images/2018/04/20/sports/20armstrong-promo/merlin_11277122_a72a3be1-0163-44fa-8895-e549bea3b953-superJumbo.jpg"
      },
  ]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className = 'toolbar'>
              <Grid container spacing = {4}>
                <Grid item xs = {4} sm = {4} md = {4} lg = {4}>
                  <NavLink to='/'>Home</NavLink>
                </Grid>
                <Grid item xs = {4} sm = {4} md = {4} lg = {4}>
                  <NavLink to='/profiles'>Profiles</NavLink>
                </Grid>
                <Grid item xs = {4} sm = {4} md = {4} lg = {4}>
                  <NavLink to='/about'>About Us</NavLink>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
        <div className = 'content'>
          <Switch>
            <Route path = '/profiles'>
              <Profiles content = {content}/>
            </Route>
            <Route path = '/about'>
              <About />
            </Route>
            <Route path = '/img/:imgId'>
              <Image people = {content.contactProfiles}/>
            </Route>
            <Route path = '/' exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </header>
    </div>
  );
}

export default App;
