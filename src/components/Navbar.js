const Navbar = () => {
    return(
        <>
            <div>
                <Link className="link" to="/Home">Home</Link>
                <Link className="link" to="/About">About</Link>
                <Link className="link" to="/Contact">Contact</Link>
            </div>
        </>
    );
};

export default Navbar;