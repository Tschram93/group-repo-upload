import './header.css'

const Header = props => {
    return (
        <header className='app-header'>
            <div className="container">
            {props.children}
        <h1>You MIght Also Like....</h1>
        <p>Search an artist to find similar music!</p>

        </header>
    )
}



export default Header