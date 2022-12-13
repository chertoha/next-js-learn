import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Heading from "./Heading";
import { contactType } from "../types";
import { FC } from 'react';

type contactInfoProps = {
  contact: contactType,
}

const ContactInfo: FC<contactInfoProps> = ({ contact }) => {
  const { name, username, email, address } = contact || {};
  const { street, suite, city, zipcode, geo } = address || {};

  if (!contact) {
    return <h3>Empty contact</h3>;
  }

  return (
    <>
      <Heading tag="h3" text={`${username} info: `}></Heading>
      <div>
        <div>
          <strong>Name: </strong> {name}
        </div>
        <div>
          <strong>Email: </strong> {email}
        </div>

        <address>
          <strong>Address: </strong>
          <div>
            <strong>Street: </strong>
            {street}
          </div>
          <div>
            <strong>Suite: </strong>
            {suite}
          </div>
          <div>
            <strong>City: </strong>
            {city}
          </div>
          <div>
            <strong>Zipcode: </strong>
            {zipcode}
          </div>
          <div>
            <strong>Geo: </strong>
            {`lat: ${geo.lat}, lng: ${geo.lng}`}
          </div>
        </address>
      </div>
    </>
  );
};

export default ContactInfo;
