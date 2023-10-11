# hash creation
user = {
  "username" => "johns",
  "password" => "1234",
  "logged_in" => false
}
puts user
# access properties with square brackets
puts user["logged_in"] # false

# symbols are often used as keys for hashes
user = {
  :username => "adal",
  :password => "5678",
  :logged_in => true
}
puts user[:logged_in] # true

# and even better short-hand
user = {
  username: "",
  password: "password",
  logged_in: true
}
puts user[:username] # "bobh"

# what about dynamic keys?
my_key = 'username'
puts user[my_key] # nil
# convert the string to a symbol
puts user[my_key.to_sym] # 'bobh'