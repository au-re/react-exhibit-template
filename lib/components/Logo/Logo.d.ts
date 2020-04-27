/// <reference types="react" />
import "./Logo.css";
/** The Exhibit logo with some animations. Demoing usage with css files */
interface ILogo {
    size: string;
}
declare const Logo: (props: ILogo) => JSX.Element;
export default Logo;
