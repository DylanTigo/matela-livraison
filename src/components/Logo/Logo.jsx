import logo from "../../assets/MLa_Logo.png"

// eslint-disable-next-line react/prop-types
export function Logo({height}){
    let currentheight = 60
    if(height){
        currentheight = height;
    }
    return <img src={logo} alt="Machine Learning Algorithm Logo" style={{height: currentheight}}/>;
}