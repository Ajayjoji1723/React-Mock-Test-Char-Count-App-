import {Component} from 'react'
import {v4} from 'uuid'

import CharCountItem from './components/CharCountItem'
import './App.css'

class App extends Component {
  state = {searchInput: '', charList: [], isClicked: false}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderNoUserInput = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
        className="no-user"
        alt="no user inputs"
      />
    </>
  )

  onClickAdd = event => {
    event.preventDefault()
    const {searchInput} = this.state

    const newList = {
      id: v4(),
      charCount: `${searchInput} : ${searchInput.length}`,
    }

    this.setState(prevState => ({
      charList: [...prevState.charList, newList],
      searchInput: '',
      isClicked: true,
    }))
  }

  render() {
    const {searchInput, charList, isClicked} = this.state
    return (
      <>
        <div className="app-container">
          <div className="res-container">
            <div className="count-container">
              <h1 className="count-heading">
                Count the characters like a Boss...
              </h1>
              {isClicked ? (
                <ul className="list-container">
                  {charList.map(eachChar => (
                    <CharCountItem key={eachChar.id} eachChar={eachChar} />
                  ))}
                </ul>
              ) : (
                this.renderNoUserInput()
              )}
            </div>
            <form className="count-input-container">
              <h1 className="input-heading">Character Counter</h1>
              <div className="input-container">
                <input
                  type="text"
                  value={searchInput}
                  placeholder="Enter the Characters here"
                  onChange={this.onChangeSearchInput}
                  className="search"
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickAdd}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default App
