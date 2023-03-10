export default function Card({
    degree = "",
    firstName="",
    year="",
    department="",
    name="",
    job="",
    colour = "purple",
    font = 0,
    image = "icon/personTwo.png"
}) {
    return (
        <div style={{ backgroundColor: colour, fontSize: font }}>
            {
                colour === "floralwhite" ? <img src={'icon/person.png'} width="50" /> :
                    colour === "white" ? <img src={'icon/personThree.png'} width="50" /> :
                        <img src={image} width="50" />
            } <br/>
            {degree}<br />
            {firstName}<br />
            {year}<br />
            {job}<br/>
            {department}
        </div>
    )
}

