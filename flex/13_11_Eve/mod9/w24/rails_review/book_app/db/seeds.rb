# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# using Faker
puts "Seeding data..."

# create authors
puts "Creating authors..."
20.times do
  Author.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  )
end

# grab the newly created authors
authors = Author.all

# create books
puts "Creating books..."
200.times do
    Book.create(
        author: authors.sample,
        title: Faker::Book.title,
        publisher: Faker::Book.publisher,
        num_pages: rand(100..500)
    )
end

puts "Done seeding data!"