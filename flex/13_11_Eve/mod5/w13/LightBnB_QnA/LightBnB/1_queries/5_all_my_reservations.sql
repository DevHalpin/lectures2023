SELECT reservations.*, properties.*, AVG(property_reviews.rating) as average_rating
FROM reservations
JOIN properties ON properties.id = reservations.property_id
JOIN property_reviews ON reservations.id = property_reviews.reservation_id
WHERE reservations.guest_id = 1
AND reservations.end_date < now()::date
GROUP BY properties.id, reservations.id
ORDER BY reservations.start_date
LIMIT 10;