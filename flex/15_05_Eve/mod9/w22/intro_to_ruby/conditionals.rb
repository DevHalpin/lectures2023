# if..else and comparison
# > < >= <= == !=

num = 4
if (num > 2)
  puts "larger than two"
else
  puts "must be smaller"
end

first_name = "David"
last_name = "Halpin"

# we also have else if, not spelt right though
if (first_name == "John" && last_name == "Stamos")
  puts "great name"
elsif (first_name == "Ada" || last_name == "Lovelace")
  puts "also good"
else
  puts "name could be improved"
end

# unless inverts the condition
unless (first_name == "John")
  puts "choose a better name"
else
  puts "you chose well"
end

# single line if statement
hour = 7
hour = 8
puts "good evening" if hour > 5 # outputs string

# also works with unless
sunny = false
puts "wear rain jacket" unless sunny # outputs string

# ternary
num = 7
puts num < 10 ? "single digits" : "multiple digits"