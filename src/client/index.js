import { handleSubmit } from "./js/formHandler.js";
import { updateUI } from "./js/updateUI.js";
import { toggleMenu } from "./js/formHandler.js";
import { doNotLoseData } from "./js/formHandler.js";
import './images/avatar1.png';
import './images/avatar2.png';
import './images/avatar3.png';
import './images/avatar4.png';
import './images/form.jpg';
import './images/logo.png';
import './images/travel.gif';
import './images/travel2.gif';
import './styles/about.scss';
import './styles/banner.scss';
import './styles/country-info.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/hero.scss';
import './styles/sign-up.scss';
import './styles/statistics.scss';
import './styles/testimonials.scss';
import './styles/trips.scss';
import './styles/all.css';

document.getElementById('submit').addEventListener('click', handleSubmit);

// Applying localStorage values when window is closed or reloaded
window.addEventListener('load', doNotLoseData);
window.addEventListener('close', doNotLoseData);

export { handleSubmit, toggleMenu, updateUI, doNotLoseData };