import { ReactComponent as Location } from 'components/icons/Location.svg';
import { useJsApiLoader } from '@react-google-maps/api';
import { Map } from './Map';
const API_KEY = 'AIzaSyAcXzkVBqgwyygUH1d8u0_NsyN8qSGr2ew';
export const ContactInfo = ({ name, address, phone, email, location }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });
  const center = {
    lat: location.lat,
    lng: location.long,
  };
  return (
    <div className="xl:mt-[56px]">
      <h2 className="section-title mb-[21px] xl:hidden">Contacts</h2>
      <div className="pl-[62px] py-[31px] bg-[#2A3047] rounded-t-md ">
        <p className="text-[#E7EAF0] text-[16px] font-bold tracking-[0.23px] leading-5 mb-[17px]">
          {name}
        </p>
        <ul>
          <li className="mb-[6px]">
            <a href="*" className="flex contacts-item text-[#E7EAF0]">
              <Location /> <span className="ml-[8px]">{address}</span>
            </a>
          </li>
          <li className="mb-[6px]">
            <a href={`tel:${phone}`} className=" contacts-item">
              {phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${email}`} className=" contacts-item">
              {email}
            </a>
          </li>
        </ul>
      </div>
      {isLoaded ? <Map center={center} /> : <p>Loading...</p>}
    </div>
  );
};
