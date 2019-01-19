import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Books extends Component {
  state = {
    shelf: 'none'
  }

  componentDidMount() {
    if(this.props.book.shelf) {
      this.setState({ shelf: this.props.book.shelf })
    }
  }

  changeShelf(book, shelf) {
    this.props.book.shelf = shelf
    this.props.onUpdateBook(book, shelf)
  }

  render() {
    const { book } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            height: 193,
            width: 128,
            backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: ''})`
          }}>
          </div>
          <div className="book-shelf-changer">
            <select value={this.props.book.shelf} onChange={(event) => this.changeShelf(book, event.target.value)}>
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}
        </div>
      </div>

    )
  }
  static propTypes = {
    Books: PropTypes.object.isRequired
  }
}

export default Books
