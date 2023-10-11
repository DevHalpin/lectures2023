class Car
  attr_accessor :color
  attr_reader :year
  attr_writer :model
  def initialize (color, year, model)
    @color = color
    @year = year
    @model = model
  end

  # def color=(value)
  #   @color = value
  # end

  # def color
  #   @color
  # end
end
 
 my_car = Car.new("red", 2007, "matrix")
 puts my_car.year
 my_car.color = "green"
 puts my_car.inspect
 puts my_car.color
 my_car.model= "Rogue"
 puts my_car.model