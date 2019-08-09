require 'em-websocket'

PORT = 8080
Users = Hash.new

EM.run do
  puts "WebSocket server running on port: #{PORT}"
  EM::WebSocket.run(:host => "0.0.0.0", :port => PORT) do |ws|
    User.new(ws)
  end
end