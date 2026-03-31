function Footer () {
    let FooterStyle = {
        backgroundColor : "#282c34",
        padding : "20px",
        border: "1px solid grey"
    }
    return (
        <div style={FooterStyle}>
            <p>
                Copyright &copy; mytodolist.com
            </p>
        </div>
    )   
}

export default Footer