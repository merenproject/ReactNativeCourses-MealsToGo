import React from "react";

import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Favourite } from "../../../components/favourites/favourite.component";

import { Spacer } from "../../../components/spacer/spacer.component";

import { Text } from "../../../components/typography/text.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant.-info-card-styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Test Restaurant",
    icon = "https://cdn.iconscout.com/icon/free/png-512/hotel-bed-rest-room-person-46269.png",
    photos = [
      "https://lh3.googleusercontent.com/proxy/2G_lLalTCmPj6F-_JbuyJrNcIZYdzaClzOyJigLecxa1mijLycDP1fa3SP1kqf7wIfnM1uBDfYQnuAsl3E0eUHkNua1TSEopKat62j0qpueLaqt8qpkyvifLjE7rb5osU7crakAiBJ36SZw",
    ],
    address = "100 sokak",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
