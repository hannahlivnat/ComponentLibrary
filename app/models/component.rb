class Component < ApplicationRecord
  belongs_to :user
  DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'ComponentLibrary_development'})

  def self.all
    results = DB.exec("SELECT * FROM components;")
    results.each do |result|
      puts result
    end

  end
end
