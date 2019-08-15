require 'em-websocket'

require './user'
require './rooms'

PORT = 8080
$users = Array.new

EM.run do
  puts "WebSocket server running on port: #{PORT}"
  EM::WebSocket.run(:host => "0.0.0.0", :port => PORT) do |ws|
    current_user = nil
    ws.onopen do |handshake|
      current_user = User.new(ws)
      $users.push(current_user)
      current_user.onopen(handshake)
    end

    ws.onmessage do |msg|
      current_user = 
        $users.find { |u|
          u.sock == ws
        }
      current_user.onmessage(msg)
    end
  
    ws.onclose do
      current_user = 
        $users.find { |u|
          u.sock == ws
        }
      current_user.onclose()
    end
  end
end