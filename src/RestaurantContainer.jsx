import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

import {
  loadRestaurant,
  changeReviewField,
} from './actions';

import { get } from './utils';

import ReviewForm from './ReviewForm';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm onChange={handleChange} />
    </>
  );
}
