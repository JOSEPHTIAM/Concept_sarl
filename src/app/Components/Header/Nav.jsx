// service_079q1rq
//  template_ckdjvmp
// C9vz_75KNcLexJAlN   et   lyMAr-UVz45pUDtLgaT-i

import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      <li>
        <Link href="/">Accueil</Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Conception
              </Link>
            </li>
            <li>
              <Link href="/impression" onClick={() => setMobileToggle(false)}>
                Impression
              </Link>
            </li>
            <li>
              <Link href="/faconnage" onClick={() => setMobileToggle(false)}>
                Façonnage
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> 

      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>Contact</Link>
      </li>
      
    </ul>
  );
}
