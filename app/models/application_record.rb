ActiveRecord::Base.establish_connection(
  adapter: "postgresql", 
  host: "localhost", 
  port: 5432, 
  dbname: 'ComponentLibrary_development'
)

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
