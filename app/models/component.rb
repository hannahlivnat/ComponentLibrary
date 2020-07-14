require 'active_record'
ActiveRecord::Base.establish_connection(
adapter: "postgresql", 
host: "localhost", 
port: 5432, 
dbname: 'ComponentLibrary_development')

class Component < ActiveRecord::Base
  belongs_to :user
  #DB = PG.connect({:host => "localhost", :port => 5432, :dbname => 'ComponentLibrary_development'})
  #def self.all
  #  results = DB.exec("SELECT * FROM components;")
  #  return results.map do |result|
  #    {
  #      "id" => result["id"].to_i,
  #      "image" => result["image"],
  #      "title" => result["title"],
  #      "description" => result["description"],
  #      "code_block" => result["code_block"],
  #      "tags" => result["tags"].to_s,
  #      "public" => result["public"],
  #      "user_id" => result["user_id"].to_i,
  #    }
  #  end

  #  def self.find(id)
  #    results = DB.exec("SELECT * FROM components WHERE id=#{id};")
  #    return {
  #      "id" => results.first["id"].to_i,
  #      "image" => results.first["image"],
  #      "title" => results.first["title"],
  #      "description" => results.first["description"],
  #      "code_block" => results.first["code_block"],
  #      "tags" => results.first["tags"].to_s,
  #      "public" => results.first["public"],
  #      "user_id" => results.first["user_id"].to_i,
  #    }
  #  end
  #end
end
