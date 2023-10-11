dogs = ["Odie", "Lassie", "Dioji"]

dogs.each do |dog|
  # inside a block
  puts dog
end

dogs.each { |dog|
  # also inside a block
  puts dog
}

do_thing = lambda { |dog| puts dog } # lambda keyword
say_something = -> { puts "I'm giving up on you" } # lambda literal

say_something.call # .call to invoke the lambda

# use & to convert a lambda to a block
dogs.each &do_thing

# defining a method that takes a lambda
def my_method(&block)
  block.call # .call to invoke the block
end

# invoke the method and pass the stored lambda
my_method &say_something # w/o parens
my_method(&say_something) # w/ parens

def my_yield_method
  puts "Hello there"
  my_yield_method("Lassie")
  puts 1+1
end

my_yield_method { |num| puts num}
