const properties = require('./json/properties.json');
const users = require('./json/users.json');
const db = require('./db')

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return db.query(`
  SELECT * FROM users
  WHERE email = $1
  `, [email])
  .then((res) => {
    if (res) {
      return res.rows[0];
    } else {
      return null;
    }
   })
   .catch ((err) => console.log("query error", err.stack));
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return db.query(`
  SELECT * FROM users
  WHERE id = $1
  `, [id])
  .then((res) => {
    if (res) {
      return res.rows[0];
    } else {
      return null;
    }
   })
   .catch ((err) => console.log("query error", err.stack));
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  return db.query(`
  INSERT INTO users(name, email, password) VALUES 
  ($1, $2, $3)
  RETURNING *;
  `, [user.name, user.email, user.password])
  .then((res) => res.rows)
   .catch ((err) => console.log("query error", err.stack));
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return db.query(`SELECT reservations.*, properties.*, AVG(property_reviews.rating) as average_rating
  FROM reservations
  JOIN properties ON properties.id = reservations.property_id
  JOIN property_reviews ON reservations.id = property_reviews.reservation_id
  WHERE reservations.guest_id = $1
  AND reservations.end_date < now()::date
  GROUP BY properties.id, reservations.id
  ORDER BY reservations.start_date
  LIMIT $2;`, [guest_id,limit])
  .then((res) => res.rows)
  .catch ((err) => console.log("query error", err.stack));
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
    const queryParams = [];
    let queryString = `
    SELECT properties.*, avg(property_reviews.rating) as average_rating
    FROM properties
    JOIN property_reviews ON properties.id = property_id
    WHERE 1 = 1
    `;
  
    if (options.city) {
      queryParams.push(`%${options.city}%`);
      queryString += `AND city LIKE $${queryParams.length} `;
    }
    if (options.owner_id) {
      queryParams.push(`${options.owner_id}`);
      queryString += `AND owner_id = $${queryParams.length} `;
    }
    if (options.minimum_price_per_night && options.maximum_price_per_night) {
      const min = parseInt(options.minimum_price_per_night,10) * 100;
      const max = parseInt(options.maximum_price_per_night,10) * 100;
      queryParams.push(min);
      queryString += `AND cost_per_night >= $${queryParams.length} `;
      queryParams.push(max);
      queryString += `AND cost_per_night <= $${queryParams.length} `;
    }

    queryString += `GROUP BY properties.id `

    if (options.minimum_rating) {
      const rating = parseInt(options.minimum_rating);
      queryParams.push(rating);
      queryString += `HAVING AVG(property_reviews.rating) >= $${queryParams.length}`;
    }
    queryParams.push(limit);
    queryString += `
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};
    `;

    console.log(queryString, queryParams);
    return db.query(queryString, queryParams)
    .then(res => res.rows);
  }
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const values = [
    property.owner_id, 
    property.title, 
    property.description, 
    property.thumbnail_photo_url, 
    property. cover_photo_url, 
    property.cost_per_night, 
    property.street, 
    property.city, 
    property.province, 
    property.post_code, 
    property.country, 
    property.parking_spaces, 
    property.number_of_bathrooms, 
    property.number_of_bedrooms
  ]

  const queryString = `
  INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code)  VALUES 
  ($1, $2, $3, $4, $5, $6, $12, $13, $14, $11, $7, $8, $9, $10)
  RETURNING *;
  `

  return db.query(queryString, values)
  .then((res) => res.rows[0])
   .catch ((err) => console.log("query error", err.stack));
}
exports.addProperty = addProperty;
