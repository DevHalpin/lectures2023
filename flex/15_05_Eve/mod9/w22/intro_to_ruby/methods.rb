# writing our own methods
def say_hello name # starts with a definition
  puts "hello #{name}, nice to meet you"
end

# invoke with or without parens
say_hello "Bob"
say_hello("Bob")

# calling a method with too many/too few arguments will result in an error
say_hello("Bob", "Hoskins")

# methods in ruby have implicit return
def full_name(first_name, last_name)
  first_name + " " + last_name
end
puts full_name('Ada', 'Lovelace') # "Ada Lovelace"

# arguments are passed by value
def change_it(val)
  val = 5
end
num = 10
puts num # 10
change_it(num)
puts num # 10