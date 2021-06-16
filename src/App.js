import './App.css'
import List from './components/list/List'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Character from './components/character/Character'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/character/:id' component={Character} />
        <Route path='/'>
          <div className='App'>
            <h1>Personajes</h1>
            <div>
              <List />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
