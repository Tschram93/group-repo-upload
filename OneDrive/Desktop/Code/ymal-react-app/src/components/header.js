import './header.css'

const Header = props => {
    return (
        <header className="app-header">
      <div className="container">
        <h1>You Might Also Like...</h1>
        <p>Search an artist to find similar music!</p>
        {props.children}
      </div>
    </header>
    )
}

export default Header