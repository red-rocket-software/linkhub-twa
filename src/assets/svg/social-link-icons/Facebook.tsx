import { TSvgProps } from "../..";

export const FacebookIcon = ({ className, id }: TSvgProps) =>
    <svg id={`${id || 'facebook'}`} className={`${className || ''}`} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="facebook" fillRule="evenodd" clipRule="evenodd" d="M5 18.0726C5 24.5358 9.69408 29.9102 15.8333 31V21.6108H12.5833V18H15.8333V15.1108C15.8333 11.8608 17.9274 10.0559 20.8893 10.0559C21.8274 10.0559 22.8392 10.2 23.7774 10.3441V13.6667H22.1167C20.5274 13.6667 20.1667 14.4607 20.1667 15.4726V18H23.6333L23.0559 21.6108H20.1667V31C26.3059 29.9102 31 24.5368 31 18.0726C31 10.8825 25.15 5 18 5C10.85 5 5 10.8825 5 18.0726Z" fill="white" />
    </svg>

