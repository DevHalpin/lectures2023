
# we don't have == to just check value regardless of type
puts 2 == '2' # false

# === works the same as == for the most part
puts 2 === '2' # false

# casting values
num = "4"
puts num.to_i.class # 4
other_num = 5
puts other_num.to_s.class # "5"

first_name = "David"
last_name = "Halpin"


# string concatenation
puts first_name + " " + last_name + " whatever"
# string interpolation
puts "#{first_name} #{last_name} whatever"
# interpolation only works with double quotes
puts '#{first_name} #{last_name}'