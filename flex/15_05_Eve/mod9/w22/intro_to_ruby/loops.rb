i = 0
loop do
  i += 1
  puts i

  # exit the loop
  break if i > 5 # prints 1 through 6
end

# while
i = 0
while i < 5 do # prints 1 through 5
  i += 1
  puts i
end

# until
i = 0
until i > 5 do # prints 1 through 6
  i += 1
  puts i
end

# for..in === for..of ¯\_(ツ)_/¯
names = ['Alice', 'Bob', 'Carol', 'Dean']
for name in names do
  puts "Hello #{name}!"
end

# each === forEach
names.each do |name|
  puts "Goodbye #{name}!"
end

# select === filter
list = [1, 2, 3, 4, 5]
filtered_list = list.select do |num|
  num >= 3
end
puts filtered_list

# ranges
(5..10).each do |num|
  puts num # prints 5 through 10
end

# times
10.times { puts "hello world" }