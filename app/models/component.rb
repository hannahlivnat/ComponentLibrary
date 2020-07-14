require 'active_record'
ActiveRecord::Base.establish_connection(
adapter: "postgresql", 
host: "localhost", 
port: 5432, 
dbname: 'ComponentLibrary_development')

class Component < ActiveRecord::Base
  belongs_to :user
end
